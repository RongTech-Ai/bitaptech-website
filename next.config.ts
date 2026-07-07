import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Type errors are real bugs — let them fail the build.
  typescript: {
    ignoreBuildErrors: false,
  },
  // ESLint here is configured with prettier/formatting rules that are noisy at
  // build time; linting still runs via `bun run lint`. Keep it out of the build
  // gate so formatting nits don't block a deploy, but never TypeScript errors.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
