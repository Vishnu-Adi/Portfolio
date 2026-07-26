import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  // output: "export",  // <=== enables static exports
  // reactStrictMode: true,
  // basePath: "/2048-in-react",
};

export default nextConfig;
