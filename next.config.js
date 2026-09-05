/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: isProd ? "/v3" : "",
  images: {
    // Static export cannot use the on-demand optimizer, so images are
    // pre-resized by scripts/optimize-images.mjs and resolved by this loader.
    loader: "custom",
    loaderFile: "./lib/imageLoader.ts",
    // Must match WIDTHS in scripts/optimize-images.mjs and lib/imageLoader.ts.
    deviceSizes: [640, 960, 1280, 1600],
    imageSizes: [128, 256, 400],
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);

import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
