import React, { useState, useEffect } from "react";
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
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const prefix = "/v3";

  useEffect(() => {
    if (enlargedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [enlargedImage]);

  return (
    <div className="mt-8 mx-auto w-full px-4 sm:px-6 md:px-8 max-w-4xl z-0 relative">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden relative z-10">
        <div className="p-6 z-20 relative">
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

          <div className="mb-6">
            <div className="relative group overflow-hidden rounded-lg h-100">
              {img && img.length > 0 ? (
                <Image
                  alt={`Project image`}
                  width={800}
                  height={800}
                  // src={img[0]}
                  src={prefix + img[0]}
                  className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : null}
            </div>
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

      {/* Modal */}
      {enlargedImage && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative w-full h-[80vh] max-w-[90vw] bg-black">
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              aria-label="Close modal"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="w-full h-full">
              <Image
                src={enlargedImage}
                alt="Enlarged project image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
