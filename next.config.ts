import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r.kelkoo.com",
      },
      {
        protocol: "http",
        hostname: "r6.kelkoo.com",
      },
      {
        protocol: "https",
        hostname: "r6.kelkoo.com",
      },
    ],
  },
};

export default nextConfig;
