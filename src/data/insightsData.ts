export interface Insight {
  slug: string;
  title: string;
  dek: string;
  category: string;
  author: string;
  date: string;
  image: string;
  featured: boolean;
  body?: string[];
}

export const insights: Insight[] = [
  {
    slug: "why-donor-funded-projects-stall",
    title: "Why donor-funded projects stall between approval and delivery",
    dek: "Critical gaps in early procurement, readiness filters, and inter-agency coordination continue to derail implementation timelines across sovereign programs.",
    category: "Project Delivery",
    author: "FSM Advisory Practice",
    date: "September 2026",
    image: "/images/insights/project-delivery.jpg",
    featured: true,
  },
  {
    slug: "rethinking-project-readiness-fragile-environments",
    title: "Rethinking project readiness in fragile institutional environments",
    dek: "Standard readiness criteria assume fully resourced line ministries. Custom institutional frameworks and phased delivery consistently yield higher completion rates.",
    category: "Governance",
    author: "Governance & Strategy Unit",
    date: "August 2026",
    image: "/images/insights/governance.jpg",
    featured: false,
  },
  {
    slug: "what-independent-verification-catches",
    title: "What independent verification actually catches that self-reporting misses",
    dek: "Field-level data triangulation reveals systemic reporting blind spots in infrastructure and social programs, transforming accountability into execution velocity.",
    category: "MEAL",
    author: "Monitoring & Evaluation Practice",
    date: "July 2026",
    image: "/images/insights/meal.jpg",
    featured: false,
  },
  {
    slug: "land-governance-risk-infrastructure",
    title: "Land governance risk in cross-border infrastructure investment",
    dek: "Navigating customary tenure and statutory compensation before ground-breaking preserves community trust and prevents costly legal impasses.",
    category: "Land Governance",
    author: "Land & Resettlement Advisory",
    date: "June 2026",
    image: "/images/insights/land-governance.jpg",
    featured: false,
  },
];
