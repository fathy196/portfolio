import type { NextConfig } from "next";

// Deployed to GitHub Pages at https://fathy196.github.io/portfolio/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/portfolio";

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
