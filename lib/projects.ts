// Typed access to data/projects.json, the single source of truth for every
// project on the site. The same file is turned into public/projects.json
// (read by the MCP server and CLI) by scripts/generate-agent-files.mjs.
import data from "@/data/projects.json";

export type ProjectMedia =
  | { type: "image"; image: string }
  | { type: "video"; src: string; poster: string };

export type Project = {
  name: string;
  /** In-page anchor id, for projects that are linked to directly. */
  anchor?: string;
  /** Featured projects appear on the home page; the rest in the archive. */
  featured?: boolean;
  date: string;
  /** Short one-line version for AI agents; falls back to description. */
  summary?: string;
  description: string;
  technologies: string[];
  github: string | null;
  /** A URL, or a plain-text note such as "Chrome Web Store". */
  live: string | null;
  media?: ProjectMedia;
};

const projects = data.projects as Project[];

export const featuredProjects = projects.filter((p) => p.featured);
export const archiveProjects = projects.filter((p) => !p.featured);

/** Only real URLs get a "View live" button; plain-text notes do not. */
export const liveUrl = (p: Project) =>
  p.live && /^https?:\/\//.test(p.live) ? p.live : undefined;
