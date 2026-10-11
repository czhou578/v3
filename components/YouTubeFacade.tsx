import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useState } from "react";
import { FaPlay } from "react-icons/fa6";

// Shows a static thumbnail and only loads the YouTube player, and its
// several hundred kilobytes of script, when the viewer presses play. The
// thumbnail is self-hosted, so nothing is requested from Google until then.
export default function YouTubeFacade({
  id,
  title,
  poster,
  sizes,
}: {
  id: string;
  title: string;
  poster: StaticImageData;
  sizes: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-lg">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 flex h-full w-full items-center justify-center"
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes={sizes}
            className="object-cover"
          />
          <span className="relative flex h-14 w-20 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg transition-transform group-hover:scale-105 motion-reduce:transition-none">
            <FaPlay className="h-6 w-6" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
}
