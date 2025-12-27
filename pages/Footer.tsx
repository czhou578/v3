import Script from "next/script";
import { SiLeetcode } from "react-icons/si";
import { useState } from "react";

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const links = [
    {
      href: "https://github.com/czhou578",
      icon: "fa-brands fa-github",
      name: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/colin-z-84a1a0137/",
      icon: "fa-brands fa-linkedin",
      name: "LinkedIn",
    },
    {
      href: "https://medium.com/@colizu2020",
      icon: "fa-brands fa-medium",
      name: "Medium",
    },
    {
      href: "https://www.quora.com/profile/Colin-Zhou-6",
      icon: "fa-brands fa-quora",
      name: "Quora",
    },
    {
      href: "https://x.com/ColinZhouUSA",
      icon: "fa-brands fa-twitter",
      name: "Twitter",
    },
    {
      href: "https://www.instagram.com/colin.pianist/",
      icon: "fa-brands fa-instagram",
      name: "Instagram",
    },
    {
      href: "https://www.tiktok.com/@colin.pianist",
      icon: "fa-brands fa-tiktok",
      name: "Tiktok",
    },
    {
      href: "https://dribbble.com/colinzhou",
      icon: "fa-brands fa-dribbble",
      name: "Dribbble",
    },
    {
      href: "https://www.worldcubeassociation.org/persons/2014ZHOU16",
      icon: "fa-solid fa-cube",
      name: "WCA",
    },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <Script
        src="https://kit.fontawesome.com/8be8acb73b.js"
        crossOrigin="anonymous"
      />
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6">
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
          <span className="text-sm text-gray-500 dark:text-gray-300 text-center sm:text-left">
            © {new Date().getFullYear()} Colin Zhou. All Rights Reserved.
          </span>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {links.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-black transition-colors duration-300"
                  aria-label={link.name}
                >
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-full flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                    <i className={`${link.icon} text-xl sm:text-2xl`}></i>
                  </div>
                </a>
                {hoveredIndex === index && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                    {link.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
