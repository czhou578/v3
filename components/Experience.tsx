import Image from "next/image";
import type { StaticImageData } from "next/image";

export default function Experience({
  companyLogo,
  companyName,
  position,
  date,
  location,
  description,
}: {
  companyLogo: StaticImageData;
  companyName: string;
  position: string;
  date: string;
  location: string;
  description: string[];
}) {
  return (
    <article className="mb-6 overflow-hidden rounded-lg bg-gray-800 shadow-lg ring-1 ring-white/5 sm:flex">
      {/* Wide screens: logo panel beside the text. */}
      <div className="hidden shrink-0 items-center justify-center bg-gray-700 p-4 sm:flex sm:w-44">
        <Image
          src={companyLogo}
          width={120}
          height={120}
          alt=""
          className="object-contain"
        />
      </div>

      <div className="flex-1 p-4 sm:p-6">
        <div className="flex items-center gap-3">
          {/* Small screens: compact logo inline with the title. */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-gray-700 p-1 sm:hidden">
            <Image
              src={companyLogo}
              width={48}
              height={48}
              alt=""
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-cyan-400 sm:text-2xl">
              {position}
            </h3>
            <p className="text-base text-gray-200 sm:text-lg">{companyName}</p>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-300 sm:text-base">
          {date} • {location}
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-cyan-100 sm:text-base">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
