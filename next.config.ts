import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // This disables ESLint during the build
  },
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript type checking during build
  },
};

export default nextConfig;
