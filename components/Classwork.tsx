import { FaGithub } from "react-icons/fa6";

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
    <article className="card p-4 transition-colors hover:bg-gray-700/60 sm:flex sm:items-center sm:gap-4 sm:px-5 sm:py-3.5">
      {/* On phones the title and the link share the first row; at sm this
          wrapper dissolves and its children become direct flex items. */}
      <div className="flex items-center justify-between gap-3 sm:contents">
        <h3 className="text-lg font-semibold text-white sm:text-[17px]">
          {header}
        </h3>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${header} on GitHub`}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-900/60 text-indigo-400 transition-colors hover:bg-gray-900 hover:text-indigo-200 sm:order-last"
        >
          <FaGithub className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mt-0 sm:flex-1 sm:justify-end">
        <span className="text-sm font-medium text-gray-400">
          {date} &middot; {location}
        </span>
        <ul className="flex flex-wrap gap-2">
          {techUsed.map((element) => (
            <li key={element} className="chip">
              {element}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
