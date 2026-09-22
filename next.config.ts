import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Old capability slug migrations to new service slugs
      {
        source: "/capabilities/environmental-social-safeguards",
        destination: "/services/safeguards",
        permanent: true,
      },
      {
        source: "/capabilities/land-governance-investment-advisory",
        destination: "/services/land-governance",
        permanent: true,
      },
      {
        source: "/capabilities/technical-expert-mobilization",
        destination: "/services/expert-mobilisation",
        permanent: true,
      },
      {
        source: "/capabilities/implementation-support",
        destination: "/services/capacity-development",
        permanent: true,
      },
      {
        source: "/capabilities/digital-transformation-data-solutions",
        destination: "/services/digital-data",
        permanent: true,
      },
      {
        source: "/capabilities/governance-public-sector-reform",
        destination: "/services/governance-reform",
        permanent: true,
      },
      {
        source: "/capabilities/jobs-economic-transformation",
        destination: "/services/jobs-economy",
        permanent: true,
      },
      {
        source: "/capabilities/crisis-resilience-adaptive-development",
        destination: "/services/resilience-and-ppp",
        permanent: true,
      },
      {
        source: "/capabilities/ppp-investment-facilitation",
        destination: "/services/resilience-and-ppp",
        permanent: true,
      },
      {
        source: "/capabilities/national-capability",
        destination: "/services/project-assurance",
        permanent: true,
      },
      {
        source: "/capabilities/global-expertise",
        destination: "/services/expert-mobilisation",
        permanent: true,
      },
      {
        source: "/capabilities/:slug",
        destination: "/services/:slug",
        permanent: true,
      },
      // Old service slug migrations
      {
        source: "/services/environmental-social-safeguards",
        destination: "/services/safeguards",
        permanent: true,
      },
      {
        source: "/services/land-governance-investment-advisory",
        destination: "/services/land-governance",
        permanent: true,
      },
      {
        source: "/services/technical-expert-mobilization",
        destination: "/services/expert-mobilisation",
        permanent: true,
      },
      {
        source: "/services/implementation-support",
        destination: "/services/capacity-development",
        permanent: true,
      },
      {
        source: "/services/digital-transformation-data-solutions",
        destination: "/services/digital-data",
        permanent: true,
      },
      {
        source: "/services/governance-public-sector-reform",
        destination: "/services/governance-reform",
        permanent: true,
      },
      {
        source: "/services/jobs-economic-transformation",
        destination: "/services/jobs-economy",
        permanent: true,
      },
      {
        source: "/services/crisis-resilience-adaptive-development",
        destination: "/services/resilience-and-ppp",
        permanent: true,
      },
      {
        source: "/services/ppp-investment-facilitation",
        destination: "/services/resilience-and-ppp",
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
