import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { // for testing only
        hostname: "picsum.photos",
        protocol: "https"
      },
            { // for testing only
        hostname: "cdn.sanity.io",
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;
