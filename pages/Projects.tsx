const Projects: React.FC<{
  header: string;
  img: string[];
  list: string[];
  description: string;
  chromeBlocker?: boolean;
  projectElpis?: boolean;
  reactBenchmarks?: boolean;
  githubLink: string;
  hostingLink?: string;
}> = ({
  header,
  img,
  list,
  description,
  chromeBlocker,
  projectElpis,
  reactBenchmarks,
  githubLink,
  hostingLink,
}) => {
  const prefix = "/v3";

  return (
    <div className="mt-3">
      <div className="flex items-baseline">
        <h1 className="mb-5 text-2xl text-indigo-300/100">{header}</h1>
        <a
          href={githubLink}
          className="text-blue-600 hover:underline"
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
      <div className="flex flex-col justify-center gap-6 mb-5">
        {img
          ? img.map((element, idx) => {
              return (
                <div key={idx} className="max-w-full">
                  <img
                    className="h-auto max-w-full rounded-lg transition-all duration-500 cursor-pointer"
                    src={prefix + element}
                  />
                </div>
              );
            })
          : null}
      </div>
      <div className="mb-5 text-lg">
        <p className="text-cyan-100">{description}</p>
      </div>
      <div>
        Skills:
        {list
          ? list.map((element, idx) => {
              return (
                <span key={idx} className="ml-5">
                  {element}
                </span>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Projects;
