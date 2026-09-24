import type { StaticImageData } from "next/image";
import nanoGPT from "../public/images/nanoGPT.png";
import Sapp from "../public/images/Sapp.png";
import PE1 from "../public/images/PE1.png";
import benchmark2 from "../public/images/benchmark2.png";
import llmPoster from "../public/images/llm-poster.jpg";
import imgclassifyPoster from "../public/images/imgclassify-poster.jpg";

// Static imports give next/image the real width and height of each file.
// data/projects.json refers to these by key; adding a project image means
// adding one import and one entry here.
const MEDIA: Record<string, StaticImageData> = {
  nanoGPT,
  Sapp,
  PE1,
  benchmark2,
  "llm-poster": llmPoster,
  "imgclassify-poster": imgclassifyPoster,
};

/** Throws during the static build if data/projects.json names an unknown image. */
export default function projectMedia(key: string): StaticImageData {
  const image = MEDIA[key];
  if (!image) {
    throw new Error(
      `Unknown project image "${key}". Add it to lib/projectMedia.ts.`
    );
  }
  return image;
}
