import Image from "next/image";
import igProfile from "../public/images/ig-profile.jpg";
import tiktokProfile from "../public/images/tiktok-profile.jpg";
import YouTubeFacade from "./YouTubeFacade";

// Two columns inside a max-w-5xl container from md up, one column below.
const PROFILE_SIZES =
  "(min-width: 1024px) 464px, (min-width: 768px) calc(50vw - 36px), calc(100vw - 32px)";

export default function Hobbies() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <a
          href="https://www.instagram.com/colin.pianist/"
          target="_blank"
          rel="noopener noreferrer"
          className="card block overflow-hidden transition-opacity hover:opacity-80"
        >
          <Image
            src={igProfile}
            alt="Colin's Instagram profile, colin.pianist"
            sizes={PROFILE_SIZES}
            className="h-auto w-full"
          />
        </a>
        <a
          href="https://www.tiktok.com/@colin.pianist"
          target="_blank"
          rel="noopener noreferrer"
          className="card block overflow-hidden transition-opacity hover:opacity-80"
        >
          <Image
            src={tiktokProfile}
            alt="Colin's TikTok profile, colin.pianist"
            sizes={PROFILE_SIZES}
            className="h-auto w-full"
          />
        </a>
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed sm:text-lg">
        I started learning piano when I was 8 and took lessons for almost 10
        years. I passed the Certificate of Merit Level 10 exam and also went to
        multiple piano competitions on top of yearly recitals. After quitting
        private lessons in high school due to work, I began to play more as a
        hobby, and started uploading footage of myself trying out challenging
        pieces on my Instagram and TikTok. I play mostly classical composers
        like Chopin, but also a large variety of other genres too!
      </p>

      <div className="mx-auto mt-10 max-w-3xl">
        <YouTubeFacade
          id="XOTlieuv-Sc"
          title="Rubik's Cube solved in 13.31 seconds"
        />
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed sm:text-lg">
        I am a fan of Rubik&apos;s Cube speedsolving and have participated in
        multiple official competitions since 2014. My best time in a
        competition was 12.92 seconds. Here is a video of myself solving a 3x3
        cube in under 14 seconds at a Bay Area event in 2015.
      </p>
    </div>
  );
}
