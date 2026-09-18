export type Capability = {
  /** URL-safe slug — matches the [slug] dynamic segment */
  slug: string;
  /** Short card title shown on the homepage strip */
  title: string;
  /** One-sentence description (~15 words) shown on the homepage card */
  tagline: string;
  /** Lucide icon name (string) resolved at render time */
  icon: "Globe" | "Map" | "Building2" | "Users";
  /** Long-form detail-page content */
  summary: string;
  fullDescription: string;
  /** Linked service areas (display names only — extend with hrefs as needed) */
  relatedServices: string[];
  /** Sectors most relevant to this capability */
  relatedSectors: string[];
};

export const capabilities: Capability[] = [
  {
    slug: "global-expertise",
    title: "Global Expertise",
    tagline: "Access to international technical specialists and comparative experience",
    icon: "Globe",
    summary:
      "FSM Consulting Limited draws on a curated network of internationally recognised specialists " +
      "to bring world-class technical depth to every engagement.",
    fullDescription:
      "Development challenges rarely have local-only solutions. FSM Consulting Limited " +
      "maintains active relationships with technical specialists across Europe, North America, " +
      "Asia, and the wider African continent — economists, engineers, safeguards experts, " +
      "monitoring & evaluation practitioners, and sector specialists who have worked on " +
      "programmes financed by the World Bank, AfDB, USAID, GIZ, and the European Union.\n\n" +
      "We deploy this global expertise selectively and purposefully — not as a substitute for " +
      "local knowledge, but as a complement to it. International practitioners bring comparative " +
      "experience, methodological rigour, and credibility with international financiers, while " +
      "our country-based teams ensure that recommendations are grounded in local realities.\n\n" +
      "TODO: Add case studies, specific expert profiles, and sector-specific depth here.",
    relatedServices: [
      "Technical Expert Mobilization",
      "Development Effectiveness Advisory",
      "Project Assurance & Quality",
    ],
    relatedSectors: ["Infrastructure", "Governance & Public Sector Reform", "Health & Social Policy"],
  },
  {
    slug: "regional-access",
    title: "Regional Access",
    tagline: "Strategic partnerships and delivery relationships across Africa",
    icon: "Map",
    summary:
      "Deep institutional relationships and active delivery partnerships spanning West, " +
      "East, and Southern Africa enable us to mobilise quickly at regional scale.",
    fullDescription:
      "Effective development delivery in Africa requires more than presence — it requires " +
      "trust, established relationships, and an understanding of how institutions actually " +
      "operate on the ground. FSM Consulting Limited has built those relationships systematically " +
      "across the continent.\n\n" +
      "Our regional network encompasses government ministries and agencies, civil society " +
      "organisations, private sector partners, and implementation specialists in over six " +
      "countries. These relationships allow us to move with speed on project mobilisation, " +
      "identify the right local sub-contractors, and navigate regulatory and procurement " +
      "environments that international firms often find opaque.\n\n" +
      "TODO: List specific country partnerships, regional offices, and active programme " +
      "footprint here.",
    relatedServices: [
      "Local Partner Identification & Vetting",
      "Stakeholder Engagement",
      "Procurement & Contracting Support",
    ],
    relatedSectors: [
      "Agriculture & Food Systems",
      "Climate & Environment",
      "Private Sector Development",
    ],
  },
  {
    slug: "national-capability",
    title: "National Capability",
    tagline: "Strong implementation capacity and institutional access within Nigeria",
    icon: "Building2",
    summary:
      "FSM Consulting Limited is headquartered in Nigeria and maintains active working " +
      "relationships with federal and state government institutions across all 36 states.",
    fullDescription:
      "Nigeria is Africa's largest economy and one of its most complex implementation " +
      "environments — a federal system with 36 states and the FCT, diverse regulatory " +
      "frameworks, and significant variation in institutional capacity between states and " +
      "between sectors.\n\n" +
      "FSM Consulting Limited has built its national capability deliberately over many years. " +
      "We maintain trusted relationships with federal ministries, departments, and agencies " +
      "(MDAs), state government counterparts, and the key parastatals and commissions that " +
      "govern project implementation across critical sectors.\n\n" +
      "Our national footprint — spanning all 36 states — means we can mobilise field teams, " +
      "engage community stakeholders, and support implementation at sub-national level, not " +
      "just at the federal centre.\n\n" +
      "TODO: Provide specific ministry relationships, state-level project examples, and " +
      "sector certifications here.",
    relatedServices: [
      "D-Ready Implementation Acceleration",
      "MEAL (Monitoring, Evaluation, Accountability & Learning)",
      "Safeguards & Social Risk Management",
    ],
    relatedSectors: [
      "Governance & Public Sector Reform",
      "Education & Capacity Development",
      "Health & Social Policy",
    ],
  },
  {
    slug: "local-knowledge",
    title: "Local Knowledge",
    tagline: "Country-based professionals and field-level implementation partners",
    icon: "Users",
    summary:
      "Our teams live and work in the communities where projects are implemented — " +
      "bringing contextual insight that external consultants simply cannot replicate.",
    fullDescription:
      "The final mile of development delivery is where most programmes succeed or fail. " +
      "Policies designed in capital cities often encounter realities that were never anticipated — " +
      "cultural dynamics, local power structures, infrastructure gaps, and community trust " +
      "deficits that only become visible to people who are actually present.\n\n" +
      "FSM Consulting Limited places local knowledge at the centre of our delivery model. " +
      "Our core professional staff are Nigerian nationals with deep sectoral and geographic " +
      "expertise. We supplement this with a vetted network of community-based implementation " +
      "partners — CBOs, local NGOs, and specialist service providers — who have the trust, " +
      "presence, and cultural competency to ensure programme activities reach intended " +
      "beneficiaries.\n\n" +
      "This isn't a token localisation strategy. It is the foundation of everything we do.\n\n" +
      "TODO: Add staff bios, community partner profiles, and field implementation examples here.",
    relatedServices: [
      "Community Engagement & Social Mobilisation",
      "Beneficiary Registration & Targeting",
      "Field Data Collection & Verification",
    ],
    relatedSectors: [
      "Agriculture & Food Systems",
      "Gender, Inclusion & Social Development",
      "Humanitarian Response",
    ],
  },
];

/** Lookup by slug — returns undefined for unknown slugs */
export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
