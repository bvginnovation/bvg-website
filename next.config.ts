import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    const fileLoaderRule = config.module?.rules?.find(
      (rule): rule is RuleSetRule =>
        typeof rule === "object" &&
        rule !== null &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg")
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }
    config.module?.rules?.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { svgo: false, icon: true } }],
    });
    return config;
  },
  experimental: { optimizePackageImports: ["@chakra-ui/react"] },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "swiperjs.com",
        port: "",
        pathname: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/account123/**",
        search: "",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // This disables ESLint during the build
  },
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript type checking during build
  },
  images: {
    domains: ["swiperjs.com", "images.unsplash.com"],
  },
};

export default nextConfig;
