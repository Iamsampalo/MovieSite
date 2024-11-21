import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['image.tmdb.org'], // Add the external hostname here
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
