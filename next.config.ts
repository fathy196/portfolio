import type { NextConfig } from "next";

// Deployed to GitHub Pages at https://fathy196.github.io/portfolio/.
// In local dev the site is served from the root so http://localhost:3000 works.
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "development" ? "" : "/portfolio");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
