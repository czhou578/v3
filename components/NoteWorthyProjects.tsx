import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function NoteWorthyProjects({
  header,
  githubLink,
  techUsed,
  description,
}: {
  header: string;
  githubLink: string;
  description: string;
  techUsed: string[];
}) {
  return (
    <article className="relative flex h-full flex-col rounded-lg border border-indigo-500 bg-gray-800 p-4 shadow-md sm:p-6">
      <h3 className="mb-2 pr-10 text-lg font-bold text-cyan-400 sm:text-xl">
        {header}
      </h3>
      <p className="mb-4 text-sm text-gray-300 sm:text-base">{description}</p>
      <ul className="mt-auto flex flex-wrap gap-2">
        {techUsed.map((element) => (
          <li
            key={element}
            className="rounded-full bg-gray-700 px-2 py-1 text-xs font-semibold text-gray-300 sm:text-sm"
          >
            {element}
          </li>
        ))}
      </ul>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${header} on GitHub`}
        className="absolute right-1 top-1 inline-flex h-11 w-11 items-center justify-center rounded text-blue-400 transition-colors hover:text-blue-200"
      >
        <FaArrowUpRightFromSquare className="h-5 w-5" aria-hidden="true" />
      </a>
    </article>
  );
}
