// Site-wide constants. The values live in data/site.json so the Node build
// scripts (sitemap, agent files) can read them without a TypeScript step.
import site from "@/data/site.json";

// Canonical public origin, used for absolute URLs in link previews, the
// canonical tag, structured data, and the sitemap.
export const SITE_URL = site.url;

export const SITE_NAME = site.name;

export const DEFAULT_TITLE = site.title;

export const DEFAULT_DESCRIPTION = site.description;

// 1200x630 image shown when a link to the site is shared. Regenerate with
// `npm run icons` if the photo or headline changes.
export const OG_IMAGE_PATH = site.ogImagePath;
