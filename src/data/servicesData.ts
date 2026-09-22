/**
 * FSM Consulting Services Dataset (14 Practice Areas Across 3 Pillars)
 * Grounded strictly in "FSM Consulting - Corporate Profile - r1-1.docx".
 * 
 * 3 Core Pillars:
 * 1. Verify: Independent evidence that projects are delivering what they promise.
 * 2. Mobilise: Qualified experts, deployed and supported wherever the assignment is.
 * 3. Deliver: Hands-on support that moves projects from approval to measurable results.
 */

export type PillarKey = "verify" | "mobilise" | "deliver";

export interface Pillar {
  key: PillarKey;
  title: string;
  tagline: string;
  description: string;
}

export const pillars: Record<PillarKey, Pillar> = {
  verify: {
    key: "verify",
    title: "Verify",
    tagline: "Independent Assurance",
    description: "Independent evidence that projects are delivering what they promise.",
  },
  mobilise: {
    key: "mobilise",
    title: "Mobilise",
    tagline: "Expert Deployment & Logistics",
    description: "Qualified experts, deployed and supported wherever the assignment is.",
  },
  deliver: {
    key: "deliver",
    title: "Deliver",
    tagline: "Implementation Acceleration & Evidence",
    description: "Hands-on support that moves projects from approval to measurable results.",
  },
};

export interface DeliverableGroup {
  title: string;
  items: string[];
}

export interface Service {
  slug: string;
  pillar: PillarKey;
  pillarLabel: string;
  title: string;
  summary: string;
  purpose: string;
  deliverables: string[];
  deliverableGroups?: DeliverableGroup[];
  clientTypes: string[];
  relatedSectors: string[];
  relatedServices: string[];
}

export const services: Service[] = [
  // ==========================================
  // PILLAR 1: VERIFY (Independent Assurance)
  // ==========================================
  {
    slug: "project-assurance",
    pillar: "verify",
    pillarLabel: "Verify",
    title: "Project Assurance Services",
    summary:
      "Independent oversight and quality assurance throughout project lifecycles to validate performance and strengthen accountability.",
    purpose:
      "Providing independent oversight and quality assurance throughout project lifecycles.",
    deliverables: [
      "Independent Verification Agent (IVA) Services",
      "Third-Party Monitoring",
      "Project Performance Reviews",
      "Social Audits",
      "Technical Audits",
      "Compliance Verification",
      "Fiduciary Reviews",
      "Risk-Based Assurance Reviews",
      "Portfolio Performance Assessments",
      "Project Health Checks",
    ],
    clientTypes: [
      "IFIs & Development Partners",
      "Governments",
      "Private Sector & Investors",
    ],
    relatedSectors: [
      "governance-public-administration",
      "infrastructure-development",
      "health-systems-strengthening",
    ],
    relatedServices: ["procurement-fiduciary", "safeguards", "meal"],
  },
  {
    slug: "procurement-fiduciary",
    pillar: "verify",
    pillarLabel: "Verify",
    title: "Procurement Excellence and Fiduciary Services",
    summary:
      "Procurement assessments, fiduciary audits, bid evaluation support, and donor compliance advisory across project lifecycles.",
    purpose:
      "Procurement assessments, procurement audits, bid evaluation support, and contract management reviews aligned with donor compliance.",
    deliverables: [
      "Procurement Assessments",
      "Procurement Audits",
      "Bid Evaluation Support",
      "Donor Procurement Compliance",
      "Procurement Capacity Building",
      "Value-for-Money Assessments",
      "Contract Management Reviews",
    ],
    clientTypes: [
      "IFIs & Development Partners",
      "Governments",
      "Private Sector & Investors",
    ],
    relatedSectors: [
      "governance-public-administration",
      "infrastructure-development",
      "agriculture-rural-development",
    ],
    relatedServices: [
      "project-assurance",
      "safeguards",
      "implementation-acceleration",
    ],
  },
  {
    slug: "safeguards",
    pillar: "verify",
    pillarLabel: "Verify",
    title: "Environmental and Social Safeguards",
    summary:
      "Environmental and social risk management, compliance plans, stakeholder engagement, and ESG advisory for development investments.",
    purpose: "Promoting sustainable and inclusive development.",
    deliverables: [
      "Environmental and Social Assessments",
      "Environmental and Social Management Plans (ESMP)",
      "Stakeholder Engagement Plans (SEP)",
      "Labour Management Procedures (LMP)",
      "Resettlement Planning",
      "Social Risk Assessments",
      "Grievance Redress Mechanisms",
      "Gender and Inclusion Assessments",
      "Community Consultations",
      "ESG Advisory Services",
    ],
    clientTypes: [
      "IFIs & Development Partners",
      "Governments",
      "Private Sector & Investors",
      "Civil Society",
    ],
    relatedSectors: [
      "infrastructure-development",
      "climate-change-sustainability",
      "agriculture-rural-development",
    ],
    relatedServices: ["land-governance", "project-assurance", "meal"],
  },
  {
    slug: "land-governance",
    pillar: "verify",
    pillarLabel: "Verify",
    title: "Land Governance and Investment Advisory",
    summary:
      "Advisory services and audits supporting responsible land governance, tenure security, and inclusive land-based investments.",
    purpose: "Supporting responsible and inclusive land-based investments.",
    deliverables: [
      "FRILIA Assessments",
      "Land Governance Reviews",
      "Land Administration Reforms",
      "Responsible Land Investment Assessments",
      "Land Acquisition Audits",
      "Resettlement Audits",
      "Land Tenure Studies",
      "Community Engagement Processes",
    ],
    clientTypes: [
      "IFIs & Development Partners",
      "Governments",
      "Private Sector & Investors",
      "Civil Society",
    ],
    relatedSectors: [
      "agriculture-rural-development",
      "infrastructure-development",
      "land-administration-governance",
    ],
    relatedServices: ["safeguards", "project-assurance", "resilience-and-ppp"],
  },

  // ==========================================
  // PILLAR 2: MOBILISE (Expert Deployment & Logistics)
  // ==========================================
  {
    slug: "expert-mobilisation",
    pillar: "mobilise",
    pillarLabel: "Mobilise",
    title: "Technical Expert Mobilization and Professional Contracting",
    summary:
      "Sourcing, contracting, and managing international, regional, and national technical experts for short- and long-term development assignments.",
    purpose:
      "FSM provides clients with more than individual consultants. We mobilize and manage integrated technical capability tailored to the requirements of each assignment.",
    deliverables: [
      "International and regional expert sourcing",
      "National consultant deployment",
      "Multidisciplinary team formation",
      "Short-term and long-term technical expert contracting",
      "Embedded advisory services",
      "Technical assistance team management",
      "Workforce and specialist deployment",
      "Project Management Office and Delivery Unit staffing",
      "Surge capacity for urgent assignments",
      "Field team and enumerator mobilization",
      "Consultant onboarding and assignment orientation",
      "In-country consultant coordination",
      "Technical team performance management",
      "Mission and field deployment support",
      "Knowledge transfer and counterpart capacity strengthening",
    ],
    clientTypes: [
      "IFIs & Development Partners",
      "Governments",
      "Private Sector & Investors",
    ],
    relatedSectors: [
      "governance-public-administration",
      "health-systems-strengthening",
      "education-skills-development",
    ],
    relatedServices: [
      "assignment-support",
      "capacity-development",
      "implementation-acceleration",
    ],
  },
  {
    slug: "assignment-support",
    pillar: "mobilise",
    pillarLabel: "Mobilise",
    title: "Cross-Border Consultant Mobilization and Operations Support",
    summary:
      "Integrated operational and logistics support for consultants and evaluation missions, including visas, ground transport, and field security.",
    purpose:
      "FSM Consulting Limited provides integrated assignment mobilization and operational support for national, regional and international consultants engaged on assignments across Nigeria and other countries within its delivery network.",
    deliverables: [
      "Pre-deployment planning and assignment mobilization",
      "Visa and immigration documentation support",
      "Invitation letters and assignment documentation",
      "Airport arrival and departure coordination",
      "Accommodation arrangements",
      "Local transportation and movement coordination",
      "Security and safety arrangements",
      "In-country orientation and assignment briefings",
      "Coordination with local counterparts and implementing institutions",
      "Field mission and site visit logistics",
      "Stakeholder meeting coordination",
      "Translation and interpretation support where required",
      "Local consultant, enumerator and field team mobilization",
      "Administrative and operational support throughout assignments",
      "Emergency and contingency coordination",
    ],
    clientTypes: [
      "IFIs & Development Partners",
      "Governments",
      "Private Sector & Investors",
    ],
    relatedSectors: [
      "governance-public-administration",
      "infrastructure-development",
      "climate-change-sustainability",
    ],
    relatedServices: [
      "expert-mobilisation",
      "capacity-development",
      "project-assurance",
    ],
  },
  {
    slug: "capacity-development",
    pillar: "mobilise",
    pillarLabel: "Mobilise",
    title: "Implementation Support",
    summary:
      "Executive leadership programs, technical training, mentoring, and change management to strengthen institutional capabilities.",
    purpose:
      "Executive leadership programs, technical training, coaching, and organizational capacity assessments to strengthen institutional performance.",
    deliverables: [
      "Executive Leadership Programs",
      "Technical Training",
      "Coaching and Mentoring",
      "Organizational Capacity Assessments",
      "Knowledge Transfer Programs",
      "Change Management Support",
      "Learning Workshops",
      "Institutional Strengthening Programs",
    ],
    clientTypes: [
      "Governments",
      "IFIs & Development Partners",
      "Civil Society",
    ],
    relatedSectors: [
      "governance-public-administration",
      "education-skills-development",
      "health-systems-strengthening",
    ],
    relatedServices: [
      "expert-mobilisation",
      "governance-reform",
      "implementation-acceleration",
    ],
  },

  // ==========================================
  // PILLAR 3: DELIVER (Execution & Evidence)
  // ==========================================
  {
    slug: "implementation-acceleration",
    pillar: "deliver",
    pillarLabel: "Deliver",
    title: "Implementation Acceleration & Delivery Support",
    summary:
      "Hands-on delivery support, project readiness reviews, PMO structuring, and bottleneck resolution to accelerate project execution.",
    purpose:
      "Project readiness assessments, PMO support, delivery units, and implementation bottleneck analysis to support project execution.",
    deliverables: [
      "Project Readiness Assessments",
      "Implementation Readiness Reviews",
      "Development-Ready (D-Ready) Advisory",
      "PMO Support Services",
      "Results Delivery Units",
      "Project Recovery and Turnaround Support",
      "Implementation Bottleneck Analysis",
      "Benefits Realization Tracking",
    ],
    clientTypes: [
      "Governments",
      "IFIs & Development Partners",
      "Private Sector & Investors",
    ],
    relatedSectors: [
      "governance-public-administration",
      "infrastructure-development",
      "agriculture-rural-development",
    ],
    relatedServices: [
      "project-assurance",
      "expert-mobilisation",
      "meal",
    ],
  },
  {
    slug: "meal",
    pillar: "deliver",
    pillarLabel: "Deliver",
    title: "Monitoring, Evaluation, Accountability and Learning (MEAL)",
    summary:
      "Comprehensive baseline studies, evaluations, outcome harvesting, and feedback mechanisms to measure development results.",
    purpose: "Helping organizations measure results and improve performance.",
    deliverables: [
      "Baseline Studies",
      "Mid-Term Reviews",
      "End-Line Evaluations",
      "Impact Assessments",
      "Outcome Harvesting",
      "Performance Monitoring Systems",
      "Beneficiary Feedback Mechanisms",
      "Citizen Engagement Assessments",
      "Learning Reviews",
      "Knowledge Management Systems",
    ],
    clientTypes: [
      "IFIs & Development Partners",
      "Governments",
      "Civil Society",
    ],
    relatedSectors: [
      "health-systems-strengthening",
      "education-skills-development",
      "agriculture-rural-development",
    ],
    relatedServices: [
      "development-effectiveness",
      "project-assurance",
      "digital-data",
    ],
  },
  {
    slug: "development-effectiveness",
    pillar: "deliver",
    pillarLabel: "Deliver",
    title: "Development Effectiveness Services",
    summary:
      "Results-based management frameworks, theory of change design, and impact reviews to maximize development effectiveness.",
    purpose: "Supporting organizations to maximize development impact.",
    deliverables: [
      "Development Effectiveness Reviews",
      "Results-Based Management Systems",
      "Results Framework Design",
      "Performance Measurement Frameworks",
      "Theory of Change Development",
      "Program Design and Structuring",
      "Development Impact Assessments",
      "Outcome and Impact Evaluation",
      "Learning and Knowledge Management",
    ],
    clientTypes: [
      "IFIs & Development Partners",
      "Governments",
      "Civil Society",
    ],
    relatedSectors: [
      "governance-public-administration",
      "health-systems-strengthening",
      "climate-change-sustainability",
    ],
    relatedServices: ["meal", "project-assurance", "governance-reform"],
  },
  {
    slug: "digital-data",
    pillar: "deliver",
    pillarLabel: "Deliver",
    title: "Digital Transformation and Data Solutions",
    summary:
      "Management information systems, GIS mapping, real-time monitoring dashboards, and data analytics for development interventions.",
    purpose: "Leveraging technology to improve development outcomes.",
    deliverables: [
      "Management Information Systems",
      "Digital Monitoring Platforms",
      "Data Analytics",
      "Business Intelligence Dashboards",
      "GIS Mapping",
      "Data Quality Assessments",
      "Digital Governance Solutions",
      "Project Performance Dashboards",
      "AI for Development Programmes",
      "Predictive Analytics",
      "Real-Time Project Monitoring",
      "Digital Delivery Tracking",
      "Geospatial Intelligence",
      "Development Data Labs",
    ],
    clientTypes: [
      "Governments",
      "IFIs & Development Partners",
      "Private Sector & Investors",
    ],
    relatedSectors: [
      "governance-public-administration",
      "health-systems-strengthening",
      "digital-economy",
    ],
    relatedServices: [
      "meal",
      "implementation-acceleration",
      "governance-reform",
    ],
  },
  {
    slug: "governance-reform",
    pillar: "deliver",
    pillarLabel: "Deliver",
    title: "Governance and Public Sector Reform",
    summary:
      "Institutional diagnostics, public financial management advisory, and regulatory reform to strengthen public administration.",
    purpose: "Strengthening institutions and improving service delivery.",
    deliverables: [
      "Public Sector Reform Advisory",
      "Business Enabling Environment Reforms",
      "Regulatory Reform",
      "Institutional Diagnostics",
      "Organizational Development",
      "Public Financial Management",
      "Service Delivery Assessments",
      "Government Process Improvement",
      "Policy Development and Review",
      "Reform Implementation Support",
    ],
    clientTypes: ["Governments", "IFIs & Development Partners"],
    relatedSectors: [
      "governance-public-administration",
      "economic-policy-public-finance",
    ],
    relatedServices: [
      "capacity-development",
      "development-effectiveness",
      "procurement-fiduciary",
    ],
  },
  {
    slug: "jobs-economy",
    pillar: "deliver",
    pillarLabel: "Deliver",
    title: "Jobs and Economic Transformation Advisory",
    summary:
      "Employment diagnostics, SME development strategies, value chain analysis, and youth employment programming.",
    purpose:
      "Employment diagnostics, SME strategies, youth employment programmes, and value chain development to support economic inclusion.",
    deliverables: [
      "Employment Diagnostics",
      "SME Development Strategies",
      "Youth Employment Programmes",
      "Local Content and Value Chain Development",
      "Investment Climate Assessments",
      "Labour Market Analysis",
      "Economic Inclusion Programmes",
      "Entrepreneurship Ecosystem Development",
    ],
    clientTypes: [
      "Governments",
      "IFIs & Development Partners",
      "Private Sector & Investors",
    ],
    relatedSectors: [
      "agriculture-rural-development",
      "private-sector-development",
      "education-skills-development",
    ],
    relatedServices: [
      "governance-reform",
      "resilience-and-ppp",
      "capacity-development",
    ],
  },
  {
    slug: "resilience-and-ppp",
    pillar: "deliver",
    pillarLabel: "Deliver",
    title: "Crisis Resilience & PPP Facilitation",
    summary:
      "Crisis preparedness, continuity planning, and PPP transaction advisory to support resilient infrastructure and public investments.",
    purpose:
      "Crisis preparedness assessments, business continuity planning, PPP project preparation, and transaction advisory for resilient infrastructure and service delivery.",
    deliverables: [
      "Crisis Preparedness Assessments",
      "Business Continuity Planning",
      "Resilience Building Strategies",
      "Recovery Programme Design",
      "Emergency Response Monitoring",
      "Fragility and Conflict Assessments",
      "Institutional Resilience Reviews",
      "Disaster Risk Management Support",
      "PPP Project Preparation",
      "Feasibility Studies",
      "Transaction Advisory",
      "Investor Readiness Assessment",
      "Infrastructure Finance Advisory",
      "Stakeholder Engagement",
      "Investment Promotion Strategies",
    ],
    deliverableGroups: [
      {
        title: "Crisis Resilience and Adaptive Development Services",
        items: [
          "Crisis Preparedness Assessments",
          "Business Continuity Planning",
          "Resilience Building Strategies",
          "Recovery Programme Design",
          "Emergency Response Monitoring",
          "Fragility and Conflict Assessments",
          "Institutional Resilience Reviews",
          "Disaster Risk Management Support",
        ],
      },
      {
        title: "PPP and Investment Facilitation Services",
        items: [
          "PPP Project Preparation",
          "Feasibility Studies",
          "Transaction Advisory",
          "Investor Readiness Assessment",
          "Infrastructure Finance Advisory",
          "Stakeholder Engagement",
          "Investment Promotion Strategies",
        ],
      },
    ],
    clientTypes: [
      "Governments",
      "IFIs & Development Partners",
      "Private Sector & Investors",
    ],
    relatedSectors: [
      "climate-change-sustainability",
      "infrastructure-development",
      "governance-public-administration",
    ],
    relatedServices: [
      "implementation-acceleration",
      "safeguards",
      "land-governance",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByPillar(pillar: PillarKey): Service[] {
  return services.filter((s) => s.pillar === pillar);
}
