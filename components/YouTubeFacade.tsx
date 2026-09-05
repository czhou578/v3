import { useState } from "react";
import { FaPlay } from "react-icons/fa6";

// Shows a static thumbnail and only loads the YouTube player, and its
// several hundred kilobytes of script, when the viewer presses play.
export default function YouTubeFacade({
  id,
  title,
}: {
  id: string;
  title: string;
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt=""
            width={1280}
            height={720}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="relative flex h-14 w-20 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg transition-transform group-hover:scale-105 motion-reduce:transition-none">
            <FaPlay className="h-6 w-6" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
}
