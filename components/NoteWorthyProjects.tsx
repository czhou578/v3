import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

export default function NoteWorthyProjects({
  header,
  githubLink,
  liveLink,
  techUsed,
  description,
}: {
  header: string;
  githubLink?: string;
  /** Hosted demo or store listing, shown as a "Live" button when present. */
  liveLink?: string;
  description: string;
  techUsed: string[];
}) {
  return (
    <article className="card relative flex h-full flex-col p-4 sm:p-6">
      <h3 className="mb-2 pr-10 text-lg font-semibold text-white sm:text-xl">
        {header}
      </h3>
      <p className="mb-4 text-sm text-gray-300 sm:text-base">{description}</p>
      <ul className="mt-auto flex flex-wrap gap-2">
        {techUsed.map((element) => (
          <li key={element} className="chip">
            {element}
          </li>
        ))}
      </ul>
      {liveLink ? (
        <div className="mt-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-indigo-500/15 px-3 text-sm font-medium text-indigo-200 ring-1 ring-indigo-400/30 transition-colors hover:bg-indigo-500/25 hover:text-white"
          >
            View live
            <FaArrowUpRightFromSquare
              className="h-3.5 w-3.5"
              aria-hidden="true"
            />
          </a>
        </div>
      ) : null}
      {githubLink ? (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${header} on GitHub`}
          className="absolute right-1 top-1 inline-flex h-11 w-11 items-center justify-center rounded-lg text-indigo-400 transition-colors hover:bg-white/5 hover:text-indigo-200"
        >
          <FaGithub className="h-5 w-5" aria-hidden="true" />
        </a>
      ) : null}
    </article>
  );
}
