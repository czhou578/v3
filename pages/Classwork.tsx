const Classwork: React.FC<{
  header: string;
  githubLink: string;
  description: string;
  techUsed: string[];
}> = ({ header, githubLink, techUsed, description }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto p-4 sm:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-violet-400/100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <h3 className="font-bold text-lg sm:text-xl mb-2 pr-8 dark:text-cyan-400">
          {header}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {techUsed?.map((element, idx) => (
          <span
            key={idx}
            className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            {element}
          </span>
        ))}
      </div>
      <a
        href={githubLink}
        className="absolute top-3 right-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View project on GitHub"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
        </svg>
      </a>
    </div>
  );
};

export default Classwork;
