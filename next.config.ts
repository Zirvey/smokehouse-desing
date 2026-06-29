import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/smokehouse-desing" : "",
  assetPrefix: isGithubPages ? "/smokehouse-desing/" : "",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  devIndicators: {
    position: "bottom-right",
  },
};

export default nextConfig;
