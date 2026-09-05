// The production site is served under /v3 (see assetPrefix in next.config.js).
// Use this for any hand-written URL to a file in public/ or to another page.
export const PREFIX = process.env.NODE_ENV === "production" ? "/v3" : "";

export const withPrefix = (p: string) => `${PREFIX}${p}`;
