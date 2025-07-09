import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use static export for production builds
  ...(process.env.NODE_ENV === "production"
    ? {
        output: "export",
        trailingSlash: true,
        skipTrailingSlashRedirect: true,
        distDir: "out",
        assetPrefix: "/KawachiWeb",
        basePath: "/KawachiWeb",
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
