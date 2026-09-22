/**
 * Delivery Cards Data
 * Typical assignment types across Nigeria and regional delivery corridors.
 */

export interface DeliveryCard {
  id: string;
  category: "nigeria" | "regional";
  tag: string;
  serviceTitle: string;
  challenge: string;
  howWeDeliver: string;
  href: string;
}

export const deliveryCards: DeliveryCard[] = [
  {
    id: "independent-verification",
    category: "nigeria",
    tag: "INDEPENDENT VERIFICATION",
    serviceTitle: "Project Assurance",
    challenge:
      "Funders need confidence that results reported by implementing agencies reflect reality on the ground, including in remote and hard-to-reach locations.",
    howWeDeliver:
      "Independent field verification across all 36 states and the FCT, social and technical audits, and evidence-based findings that support disbursement and programme decisions.",
    href: "/services/project-assurance",
  },
  {
    id: "d-ready",
    category: "nigeria",
    tag: "D-READY",
    serviceTitle: "Implementation Acceleration",
    challenge:
      "Approved projects stall before effectiveness because of readiness gaps in procurement, safeguards, staffing and implementation arrangements.",
    howWeDeliver:
      "Project readiness assessments, bottleneck analysis, PMO support and delivery units that move projects from approval to implementation.",
    href: "/services/implementation-acceleration",
  },
  {
    id: "safeguards",
    category: "nigeria",
    tag: "SAFEGUARDS",
    serviceTitle: "E&S and Land",
    challenge:
      "Infrastructure and land-based investments carry environmental, social and resettlement risks that can delay or derail financing.",
    howWeDeliver:
      "ESMPs, stakeholder engagement plans, grievance mechanisms, FRILIA assessments and resettlement audits aligned with development-partner standards.",
    href: "/services/safeguards",
  },
  {
    id: "expert-mobilisation",
    category: "regional",
    tag: "EXPERT MOBILISATION",
    serviceTitle: "Cross-border delivery",
    challenge:
      "International assignments lose weeks to visas, logistics, security and finding qualified local professionals.",
    howWeDeliver:
      "Expert sourcing and contracting, visa and invitation support, security and movement coordination, and local field-team mobilisation.",
    href: "/services/expert-mobilisation",
  },
  {
    id: "meal",
    category: "regional",
    tag: "MEAL",
    serviceTitle: "Evidence and Learning",
    challenge:
      "Multi-country programmes struggle to measure outcomes consistently across different contexts.",
    howWeDeliver:
      "Baselines, mid-term and end-line evaluations, performance monitoring systems and beneficiary feedback mechanisms.",
    href: "/services/meal",
  },
];
