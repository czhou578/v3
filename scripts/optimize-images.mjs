// Generates responsive WebP variants for every image in public/images.
// Output: public/images/opt/<name>-<width>.webp for each width in WIDTHS.
// Sources smaller than a target width are copied at their native size under
// that width's filename, so every (name, width) pair the image loader can
// request always exists. Re-runs skip outputs that are newer than the source.
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

// Keep in sync with lib/imageLoader.ts and next.config.js image sizes.
const WIDTHS = [128, 256, 400, 640, 960, 1280, 1600];
const SRC_DIR = path.resolve("public/images");
const OUT_DIR = path.join(SRC_DIR, "opt");
const QUALITY = 80;

const isSource = (f) => /\.(png|jpe?g)$/i.test(f);
const baseName = (f) => f.replace(/\.(png|jpe?g)$/i, "");

async function newerThan(target, source) {
  try {
    const [t, s] = await Promise.all([fs.stat(target), fs.stat(source)]);
    return t.mtimeMs >= s.mtimeMs;
  } catch {
    return false;
  }
}

// Removes variants whose source image no longer exists, so deleting a file
// from public/images does not leave its WebP copies in the deploy.
async function pruneStale(sources) {
  const names = new Set(sources.map(baseName));
  let removed = 0;
  for (const f of await fs.readdir(OUT_DIR)) {
    const m = f.match(/^(.+)-\d+\.webp$/);
    if (m && !names.has(m[1])) {
      await fs.unlink(path.join(OUT_DIR, f));
      removed++;
    }
  }
  return removed;
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const files = (await fs.readdir(SRC_DIR)).filter(isSource);
  const pruned = await pruneStale(files);
  let written = 0;
  let skipped = 0;
  const start = Date.now();

  for (const file of files) {
    const src = path.join(SRC_DIR, file);
    const name = baseName(file);
    const pending = [];
    for (const w of WIDTHS) {
      const out = path.join(OUT_DIR, `${name}-${w}.webp`);
      if (await newerThan(out, src)) {
        skipped++;
        continue;
      }
      pending.push({ w, out });
    }
    if (pending.length === 0) continue;

    // rotate() with no argument bakes in the EXIF orientation, so phone
    // photos come out the way up the camera intended.
    const image = sharp(src, { failOn: "none" }).rotate();
    await Promise.all(
      pending.map(({ w, out }) =>
        image
          .clone()
          .resize({ width: w, withoutEnlargement: true })
          .webp({ quality: QUALITY, effort: 4 })
          .toFile(out)
      )
    );
    written += pending.length;
  }

  const secs = ((Date.now() - start) / 1000).toFixed(1);
  console.log(
    `optimize-images: ${files.length} sources, ${written} variants written, ${skipped} up to date, ${pruned} stale removed (${secs}s)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
