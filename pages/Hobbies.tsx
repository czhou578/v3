import React from "react";
import Image from "next/image";

const prefix = "/v3";
// const prefix = "";

const Hobbies = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Instagram Profile */}
        <div className="flex justify-center items-start w-full">
          <a
            href="https://www.instagram.com/colin.pianist/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity w-full aspect-square"
          >
            <Image
              src={prefix + "/images/ig-profile.png"}
              width={500}
              height={500}
              alt="Instagram Profile"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </a>
        </div>

        {/* TikTok Profile */}
        <div className="flex justify-center items-start w-full">
          <a
            href="https://www.tiktok.com/@colin.pianist"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity w-full aspect-square"
          >
            <Image
              src={prefix + "/images/tiktok-profile.png"}
              width={500}
              height={500}
              alt="TikTok Profile"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </a>
        </div>
      </div>

      {/* Caption for Piano content */}
      <div className="mx-auto max-w-4xl mt-6 mb-10 px-4">
        <p className="text-base sm:text-lg text-center leading-relaxed">
          I started learning piano when I was 8 and took lessons for almost 10
          years. I passed the Certificate of Merit Level 10 exam and also went
          to multiple piano competitions on top of yearly recitals. After
          quitting private lessons in high school due to work, I began to play
          more as a hobby, and started uploading footage of myself trying out
          challenging pieces on my Instagram and TikTok. I play mostly classical
          composers like Chopin, but also a large variety of other genres too!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* YouTube Video */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-3xl aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XOTlieuv-Sc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Caption for Rubik's Cube content */}
      <div className="mx-auto max-w-4xl mt-6 px-4">
        <p className="text-base sm:text-lg text-center leading-relaxed">
          I am a fan of Rubik&apos;s Cube speedsolving and have participated in
          multiple official competitions since 2014. My best time in a
          competition was 12.92 seconds. Here is a video of myself solving a 3x3
          cube in under 14 seconds at a Bay Area event in 2015.
        </p>
      </div>
    </div>
  );
};

export default Hobbies;
