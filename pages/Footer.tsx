import Script from "next/script";

export default function Footer() {
  return (
    <footer>
      <Script
        src="https://kit.fontawesome.com/8be8acb73b.js"
        crossOrigin="anonymous"
      />
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="px-4 py-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <a href="https://flowbite.com/">Colin Zhou</a>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a
              href="https://github.com/czhou578"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fa-brands fa-github "></i>
            </a>
            <a
              href="https://www.quora.com/profile/Colin-Zhou-6"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fa-brands fa-quora"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/colin-z-84a1a0137/"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/ZhouColin01"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/colin.uiuc.pianist/"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            {/* <a
              href="https://www.worldcubeassociation.org/persons/2014ZHOU16"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fa-solid fa-cube"></i>
            </a> */}
            <a
              href="https://dribbble.com/colinzhou"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fa-solid fa-cube"></i>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
