import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/experts",
        destination: "/network",
        permanent: false,
      },
      {
        source: "/partner-with-us",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/procurement",
        destination: "/contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
