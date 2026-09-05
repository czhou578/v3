import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

// One entry in the education timeline. Render inside an <ol>.
export default function Education({
  logo,
  school,
  degreeLevel,
  date,
  activities,
  relevantClasses,
}: {
  logo: StaticImageData;
  school: string;
  degreeLevel: string;
  date: string;
  activities?: string[];
  relevantClasses?: string[];
}) {
  const ref = useRef<HTMLLIElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className="reveal relative pb-10 pl-16 last:pb-0 sm:pl-20"
    >
      {/* Gray rail, plus an indigo line that grows once the entry is in view. */}
      <div
        className="absolute bottom-0 left-[23px] top-0 w-0.5 bg-gray-700 sm:left-[27px]"
        aria-hidden="true"
      />
      <div
        className={`absolute bottom-0 left-[23px] top-0 w-0.5 origin-top bg-indigo-400 transition-transform duration-[2000ms] ease-out motion-reduce:transition-none sm:left-[27px] ${
          inView ? "scale-y-100" : "scale-y-0"
        }`}
        aria-hidden="true"
      />
      <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gray-800 ring-8 ring-gray-900 sm:h-14 sm:w-14">
        <Image
          src={logo}
          alt=""
          width={56}
          height={56}
          className="h-full w-full rounded-full object-cover"
        />
      </span>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="text-lg font-semibold text-white sm:text-xl">
          {school}
        </h3>
        <span className="self-start whitespace-nowrap rounded-full bg-indigo-500/15 px-2.5 py-0.5 text-xs font-medium text-indigo-200 ring-1 ring-indigo-400/30 sm:text-sm">
          {degreeLevel}
        </span>
      </div>
      <time className="mt-1 block text-sm text-gray-400 sm:text-base">
        {date}
      </time>
      <p className="mt-3 text-sm text-gray-300 sm:text-base">
        Activities: {activities?.length ? activities.join(", ") : "None"}
      </p>
      <p className="mt-2 text-sm text-gray-300 sm:text-base">
        Relevant classes:{" "}
        {relevantClasses?.length ? relevantClasses.join(", ") : "None"}
      </p>
    </li>
  );
}
