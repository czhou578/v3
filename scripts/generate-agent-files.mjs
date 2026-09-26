// Builds public/projects.json and public/sitemap.xml from data/.
//
// public/projects.json must stay committed: the MCP server fetches it from
// the main branch on GitHub and bin/cli.js reads it locally. Its field names
// (name, date, description, technologies, github, live) are what those two
// consumers read, so keep them stable.
//
//   node scripts/generate-agent-files.mjs          write both files
//   node scripts/generate-agent-files.mjs --check  exit 1 if either is stale
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  ".."
);
const read = async (p) =>
  JSON.parse(await fs.readFile(path.join(ROOT, p), "utf8"));

const site = await read("data/site.json");
const { projects } = await read("data/projects.json");

const agentProjects = {
  _note:
    "Generated from data/projects.json by scripts/generate-agent-files.mjs. Edit the source, not this file.",
  projects: projects.map((p) => ({
    name: p.name,
    description: p.summary ?? p.description,
    technologies: p.technologies,
    github: p.github,
    live: p.live,
    date: p.date,
    featured: Boolean(p.featured),
  })),
};

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...site.pages.map(
    (p) => `  <url><loc>${site.url}${p === "/" ? "/" : p}</loc></url>`
  ),
  "</urlset>",
  "",
].join("\n");

const outputs = {
  "public/projects.json": JSON.stringify(agentProjects, null, 2) + "\n",
  "public/sitemap.xml": sitemap,
};

const check = process.argv.includes("--check");
let stale = [];
for (const [file, content] of Object.entries(outputs)) {
  const target = path.join(ROOT, file);
  const current = await fs.readFile(target, "utf8").catch(() => null);
  if (current === content) continue;
  if (check) stale.push(file);
  else await fs.writeFile(target, content);
}

if (check && stale.length) {
  console.error(
    `Out of date: ${stale.join(", ")}.\nRun "node scripts/generate-agent-files.mjs" and commit the result.`
  );
  process.exit(1);
}
console.log(
  check
    ? "generate-agent-files: up to date"
    : `generate-agent-files: ${projects.length} projects, ${site.pages.length} sitemap URLs`
);
