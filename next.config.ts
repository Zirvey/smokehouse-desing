import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubBasePath = "/smokehouse-desing";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? githubBasePath : "",
  assetPrefix: isGithubPages ? githubBasePath : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? githubBasePath : "",
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  devIndicators: {
    position: "bottom-right",
  },
};

export default nextConfig;
