// Crops raw browser screenshots in media-src/images down to the content that
// should actually appear on the site, and writes the result to public/images.
// Run once after replacing a source screenshot, then commit the output.
import path from "node:path";
import sharp from "sharp";

const SRC_DIR = path.resolve("media-src/images");
const OUT_DIR = path.resolve("public/images");

// Boxes are in source pixels (the originals are 3840x2160 screenshots).
// Each keeps the profile header and the complete rows of thumbnails, and
// drops browser chrome, sidebars, and any row cut off by the screenshot edge.
const CROPS = [
  {
    src: "ig-profile.png",
    out: "ig-profile.jpg",
    box: { left: 1037, top: 230, width: 2376, height: 1584 },
  },
  {
    src: "tiktok-profile.png",
    out: "tiktok-profile.jpg",
    box: { left: 937, top: 230, width: 2448, height: 1632 },
  },
];

for (const { src, out, box } of CROPS) {
  const target = path.join(OUT_DIR, out);
  const info = await sharp(path.join(SRC_DIR, src))
    .extract(box)
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(target);
  console.log(`${src} -> ${out} ${info.width}x${info.height} (${Math.round(info.size / 1024)} KB)`);
}
