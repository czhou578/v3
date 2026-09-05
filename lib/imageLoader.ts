import type { ImageLoaderProps } from "next/image";
import { PREFIX } from "./prefix";

// Widths produced by scripts/optimize-images.mjs. Keep the three lists in
// sync: this one, WIDTHS in the script, and deviceSizes/imageSizes in
// next.config.js.
const WIDTHS = [128, 256, 400, 640, 960, 1280, 1600];

// Maps any local image (a static import under /_next/static/media/ or a
// plain /images/... path) to its pre-generated WebP variant.
export default function imageLoader({ src, width }: ImageLoaderProps): string {
  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;

  const file = src.split("/").pop() ?? "";
  // "IMG-0197.f4bbf0f2.jpg" (static import) or "nanoGPT.png" (public path)
  const match = file.match(/^(.+?)(?:\.[a-f0-9]{8})?\.(png|jpe?g)$/i);
  if (!match) return src;

  const name = match[1];
  const w = WIDTHS.find((x) => x >= width) ?? WIDTHS[WIDTHS.length - 1];
  return `${PREFIX}/images/opt/${name}-${w}.webp`;
}
