import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/webstore",
  assetPrefix: "/webstore/",
  images: { unoptimized: true },
};

export default nextConfig;