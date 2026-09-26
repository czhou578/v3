// ESLint 9 flat config. eslint-config-next 15 still ships the legacy
// "extends" format, so FlatCompat translates it. Run with `npm run lint`.
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
});

const config = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      ".open-next/**",
      ".wrangler/**",
      "my-portfolio-mcp/.wrangler/**",
      "public/**",
      "media-src/**",
      "next-env.d.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals"),
];

export default config;
