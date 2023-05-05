//each card has to be clickable and have an animation

const Classwork: React.FC<{
  header: string;
  githubLink: string;
  description: string;
  techUsed: string[];
}> = ({ header, githubLink, techUsed, description }) => {
  return (
    <div className="relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:dark:border-indigo-500/100">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 dark:text-cyan-400">
          {header}
        </div>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-wrap">
        {techUsed
          ? techUsed.map((element, idx) => {
              return (
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  key={idx}
                >
                  {element}
                </span>
              );
            })
          : null}
      </div>
      <a
        href={githubLink}
        className="text-blue-600 hover:underline mt-1 absolute top-2 left-0"
        target="_blank"
      >
        <svg
          className="w-5 h-5 ml-2"
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
