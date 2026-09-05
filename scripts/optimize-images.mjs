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

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const files = (await fs.readdir(SRC_DIR)).filter(isSource);
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
    `optimize-images: ${files.length} sources, ${written} variants written, ${skipped} up to date (${secs}s)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
