import React, { useState } from "react";

function HeaderBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prefix = "/v3";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "#intro", text: "About" },
    { href: "#education", text: "Education" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "Projects" },
    { href: "#skills", text: "Skills" },
    { href: "#designs", text: "Designs" },
    {
      href: `${prefix}/resume/colin_zhou_resume.pdf`,
      text: "Resume",
      target: "_blank",
    },
  ];

  return (
    <nav className="bg-gray-800 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-lg sm:text-xl tracking-tight">
            Colin Zhou&apos;s Portfolio
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white transition duration-150 ease-in-out"
          >
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
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block mt-4 lg:inline-block lg:mt-0 text-indigo-300 hover:text-white mr-4 transition duration-150 ease-in-out"
                target={item.target}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderBar;
