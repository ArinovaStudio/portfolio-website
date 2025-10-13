import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { // for testing only
        hostname: "picsum.photos",
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;
