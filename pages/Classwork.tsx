import React from "react";

const Classwork: React.FC<{
  header: string;
  githubLink: string;
  date: string;
  location: string;
  techUsed: string[];
}> = ({ header, githubLink, date, location, techUsed }) => {
  return (
    <div className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between w-full p-4 sm:py-3.5 sm:px-5 bg-white dark:bg-zinc-800/80 border border-gray-200 dark:border-white/5 rounded-xl shadow-sm hover:shadow-md dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all duration-300 gap-4">
      {/* Left side: Header */}
      <h3 className="font-semibold text-lg sm:text-[17px] text-blue-600 dark:text-[#60a5fa] whitespace-nowrap">
        {header}
      </h3>

      {/* Right side: Date, Tags, Icon */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
        <span className="text-sm font-medium text-gray-500 dark:text-[#9ca3af] whitespace-nowrap">
          {date} &middot; {location}
        </span>

        <div className="flex flex-wrap gap-2">
          {techUsed?.map((element, idx) => (
            <span
              key={idx}
              className="inline-block bg-gray-100 dark:bg-zinc-900 border border-transparent dark:border-white/5 rounded-full px-3 py-0.5 text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
            >
              {element}
            </span>
          ))}
        </div>

        <a
          href={githubLink}
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-zinc-900/80 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-700 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300 ml-auto flex-shrink-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View project on GitHub"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Classwork;

