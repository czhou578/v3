// Fails if package-lock.json would install anything from somewhere other than
// the public npm registry over HTTPS, or without an integrity hash. A
// tampered lockfile in a pull request is otherwise easy to miss in review:
// the diff is thousands of lines and the source URL is one of them.
//
//   node scripts/check-lockfile.mjs
import { readFileSync } from "node:fs";

const REGISTRY = "https://registry.npmjs.org/";
const lock = JSON.parse(readFileSync("package-lock.json", "utf8"));

const problems = [];
for (const [name, pkg] of Object.entries(lock.packages ?? {})) {
  // The root project and workspace links have no resolved URL.
  if (name === "" || pkg.link) continue;
  if (!pkg.resolved?.startsWith(REGISTRY)) {
    problems.push(`${name}: resolved from ${pkg.resolved ?? "(nowhere)"}`);
  } else if (!pkg.integrity?.startsWith("sha512-")) {
    problems.push(`${name}: missing sha512 integrity hash`);
  }
}

if (problems.length) {
  console.error(
    `package-lock.json has ${problems.length} entries not pinned to ${REGISTRY}:\n  ` +
      problems.join("\n  ")
  );
  process.exit(1);
}
console.log(
  `check-lockfile: ${Object.keys(lock.packages).length - 1} packages, all from ${REGISTRY}`
);
