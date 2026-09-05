import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import imageLoader from "@/lib/imageLoader";

// At lg the grid is two columns inside a max-w-5xl container; below that it
// is a single column. Card padding is 16px below sm and 24px above.
const IMAGE_SIZES =
  "(min-width: 1024px) 416px, (min-width: 640px) calc(100vw - 96px), calc(100vw - 64px)";

// Muted looping demo clip that only downloads and plays while it is on
// screen. The poster keeps the card's height stable before that.
function ProjectVideo({
  src,
  poster,
  title,
}: {
  src: string;
  poster: StaticImageData;
  title: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* autoplay blocked; the poster stays visible */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      width={1280}
      height={720}
      poster={imageLoader({ src: poster.src, width: 960 })}
      aria-label={`Demo of ${title}`}
      className="h-auto w-full rounded-lg bg-gray-900"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default function Projects({
  id,
  header,
  description,
  list,
  githubLink,
  image,
  video,
}: {
  id?: string;
  header: string;
  description: string;
  list: string[];
  githubLink: string;
  image?: StaticImageData;
  video?: { src: string; poster: StaticImageData };
}) {
  return (
    <article
      id={id}
      className="card flex h-full flex-col overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl motion-reduce:transition-none"
    >
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-2">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            {header}
          </h3>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${header} on GitHub`}
            className="-mr-2 -mt-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-indigo-400 transition-colors hover:bg-white/5 hover:text-indigo-200"
          >
            <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          </a>
        </div>

        {image ? (
          <Image
            src={image}
            alt={`Screenshot of ${header}`}
            sizes={IMAGE_SIZES}
            className="mb-6 h-auto w-full rounded-lg ring-1 ring-white/10"
          />
        ) : video ? (
          <div className="mb-6 overflow-hidden rounded-lg ring-1 ring-white/10">
            <ProjectVideo src={video.src} poster={video.poster} title={header} />
          </div>
        ) : null}

        <p className="mb-6 flex-1 text-base text-gray-300 sm:text-lg">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {list.map((element) => (
            <li key={element} className="chip">
              {element}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
