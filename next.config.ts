import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/capabilities/:slug",
        destination: "/services/:slug",
        permanent: true,
      },
      {
        source: "/delivery-ecosystem",
        destination: "/approach",
        permanent: true,
      },
      {
        source: "/network",
        destination: "/about/network",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
