import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { withPrefix } from "@/lib/prefix";

const navItems = [
  { href: withPrefix("/#intro"), text: "About" },
  { href: withPrefix("/#education"), text: "Education" },
  { href: withPrefix("/#experience"), text: "Experience" },
  { href: withPrefix("/#projects"), text: "Projects" },
  { href: withPrefix("/#skills"), text: "Skills" },
  {
    href: withPrefix("/resume/colin_zhou_resume.pdf"),
    text: "Resume",
    external: true,
  },
];

export default function HeaderBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-white/5 bg-gray-800" aria-label="Main">
      <div className="section-container flex flex-wrap items-center justify-between py-3 sm:py-4">
        <a
          href={withPrefix("/")}
          className="text-lg font-semibold tracking-tight text-white sm:text-xl"
        >
          Colin Zhou&apos;s Portfolio
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-gray-400 text-gray-200 transition hover:border-white hover:text-white lg:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
          {isMenuOpen ? (
            <FaXmark className="h-4 w-4" aria-hidden="true" />
          ) : (
            <FaBars className="h-4 w-4" aria-hidden="true" />
          )}
        </button>

        <div
          id="site-menu"
          className={`w-full lg:flex lg:w-auto lg:items-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col pt-2 lg:flex-row lg:gap-1 lg:pt-0">
            {navItems.map((item) => (
              <li key={item.text}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex min-h-[44px] items-center rounded px-3 text-sm text-indigo-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
