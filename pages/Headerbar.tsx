import React from "react";

function HeaderBar() {
  const prefix = "/v3";
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Colin Zhou&apos;s Portfolio
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#intro"
            className="block mt-4 lg:inline-block lg:mt-0 text-indigo-300 hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="#education"
            className="block mt-4 lg:inline-block lg:mt-0 text-indigo-300 hover:text-white mr-4"
          >
            Education
          </a>
          <a
            href="#experience"
            className="block mt-4 lg:inline-block lg:mt-0 text-indigo-300 hover:text-white mr-4"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-indigo-300 hover:text-white mr-4"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block mt-4 lg:inline-block lg:mt-0 text-indigo-300 hover:text-white mr-4"
          >
            Skills
          </a>
          <a
            href="#designs"
            className="block mt-4 lg:inline-block lg:mt-0 text-indigo-300 hover:text-white mr-4"
          >
            Designs
          </a>
          <a
            href={prefix + "/resume/resume.pdf"}
            className="block mt-4 lg:inline-block lg:mt-0 text-indigo-300 hover:text-white"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default HeaderBar;
