import type { IconType } from "react-icons";
import {
  FaCube,
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaQuora,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

const links: { href: string; Icon: IconType; name: string }[] = [
  { href: "https://github.com/czhou578", Icon: FaGithub, name: "GitHub" },
  {
    href: "https://www.linkedin.com/in/colin-z-84a1a0137/",
    Icon: FaLinkedin,
    name: "LinkedIn",
  },
  { href: "https://medium.com/@colizu2020", Icon: FaMedium, name: "Medium" },
  {
    href: "https://www.quora.com/profile/Colin-Zhou-6",
    Icon: FaQuora,
    name: "Quora",
  },
  { href: "https://x.com/ColinZhouUSA", Icon: FaXTwitter, name: "Twitter" },
  {
    href: "https://www.instagram.com/colin.pianist/",
    Icon: FaInstagram,
    name: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@colin.pianist",
    Icon: FaTiktok,
    name: "TikTok",
  },
  { href: "https://dribbble.com/colinzhou", Icon: FaDribbble, name: "Dribbble" },
  {
    href: "https://www.worldcubeassociation.org/persons/2014ZHOU16",
    Icon: FaCube,
    name: "WCA",
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-gray-950">
      <div className="section-container flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between">
        <span className="text-sm text-gray-400">
          © {new Date().getFullYear()} Colin Zhou. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {links.map(({ href, Icon, name }) => (
            <li key={name} className="group relative">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-gray-300 ring-1 ring-white/10 transition-colors hover:bg-indigo-500 hover:text-white sm:h-12 sm:w-12"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
              <span
                role="tooltip"
                className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-700 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
              >
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
