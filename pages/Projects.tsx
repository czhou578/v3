import React from "react";
import Image from "next/image";

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
}> = ({ header, img, list, description, githubLink }) => {
  const prefix = "/v3";

  return (
    <div className="mt-8 mx-auto w-full px-4 sm:px-6 md:px-8 max-w-4xl">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-baseline flex-wrap mb-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-indigo-300 mr-2">
              {header}
            </h1>
            <a
              href={githubLink}
              className="text-blue-600 hover:underline inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {img?.map((element, idx) => (
              <div
                key={idx}
                className="hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <Image
                  alt={`Project image ${idx + 1}`}
                  width={500}
                  height={500}
                  src={prefix + element}
                  className="h-auto w-full rounded-lg object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mb-6">
            <p className="text-cyan-100 text-base sm:text-lg">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {list?.map((element, idx) => (
              <span
                key={idx}
                className="inline-block bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-xs sm:text-sm font-semibold"
              >
                {element}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
