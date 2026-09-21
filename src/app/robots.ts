import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Explicitly allow AI search and retrieval agents for answer engines
        userAgent: [
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Claude-SearchBot",
          "Claude-User",
          "Bingbot",
          "Googlebot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://fsmconsulting.org/sitemap.xml",
  };
}
