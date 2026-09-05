import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Classwork({
  header,
  githubLink,
  date,
  location,
  techUsed,
}: {
  header: string;
  githubLink: string;
  date: string;
  location: string;
  techUsed: string[];
}) {
  return (
    <article className="rounded-xl border border-white/5 bg-zinc-800/80 p-4 shadow-sm transition-colors hover:bg-zinc-800 sm:flex sm:items-center sm:gap-4 sm:px-5 sm:py-3.5">
      {/* On phones the title and the link share the first row; at sm this
          wrapper dissolves and its children become direct flex items. */}
      <div className="flex items-center justify-between gap-3 sm:contents">
        <h3 className="text-lg font-semibold text-blue-400 sm:text-[17px]">
          {header}
        </h3>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${header} on GitHub`}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-zinc-900/80 text-gray-400 transition-colors hover:bg-zinc-700 hover:text-gray-200 sm:order-last"
        >
          <FaArrowUpRightFromSquare className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mt-0 sm:flex-1 sm:justify-end">
        <span className="text-sm font-medium text-gray-400">
          {date} &middot; {location}
        </span>
        <ul className="flex flex-wrap gap-2">
          {techUsed.map((element) => (
            <li
              key={element}
              className="rounded-full border border-white/5 bg-zinc-900 px-3 py-0.5 text-xs font-medium text-gray-300"
            >
              {element}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
