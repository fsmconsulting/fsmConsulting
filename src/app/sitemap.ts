import type { MetadataRoute } from "next";
import { sectorsData } from "@/data/sectorsData";
import { practicesData } from "@/data/practicesData";
import { capabilities } from "@/data/capabilitiesData";
import { caseStudiesData } from "@/data/caseStudiesData";
import { insights } from "@/data/insightsData";

const BASE_URL = "https://fsmconsulting.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date("2026-09-20T00:00:00.000Z");

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sectors`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/network`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/delivery-ecosystem`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // 15 Sector Verticals
  const sectorRoutes: MetadataRoute.Sitemap = sectorsData.map((sector) => ({
    url: `${BASE_URL}/sectors/${sector.id}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 14 Practice Lines
  const practiceRoutes: MetadataRoute.Sitemap = practicesData.map((practice) => ({
    url: `${BASE_URL}/services/${practice.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 4 Capability Pillars
  const capabilityRoutes: MetadataRoute.Sitemap = capabilities.map((cap) => ({
    url: `${BASE_URL}/capabilities/${cap.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 3 Case Studies
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudiesData.map((cs) => ({
    url: `${BASE_URL}/case-studies/${cs.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Insights
  const insightRoutes: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: `${BASE_URL}/insights/${insight.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...practiceRoutes,
    ...sectorRoutes,
    ...capabilityRoutes,
    ...caseStudyRoutes,
    ...insightRoutes,
  ];
}
