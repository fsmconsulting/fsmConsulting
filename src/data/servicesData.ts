export type ServiceGroup = "advisory" | "delivery" | "evidence" | "enabling";

export const serviceGroupLabels: Record<ServiceGroup, string> = {
  advisory: "Advisory",
  delivery: "Delivery",
  evidence: "Evidence",
  enabling: "Enabling",
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  group: ServiceGroup;
  body: string;
};

export const services: Service[] = [
  {
    slug: "technical-expert-mobilization",
    title: "Technical Expert Mobilization & Professional Contracting",
    shortTitle: "Technical Expert Mobilization",
    group: "delivery",
    body: "International and regional expert sourcing, national consultant deployment, multidisciplinary team formation, embedded advisory, PMO staffing, surge capacity, field and enumerator mobilization, onboarding, in-country coordination, and knowledge transfer.",
  },
  {
    slug: "development-effectiveness",
    title: "Development Effectiveness Services",
    shortTitle: "Development Effectiveness",
    group: "advisory",
    body: "Development effectiveness reviews, results-based management systems, results framework design, performance measurement frameworks, theory of change development, program design, impact assessments, outcome and impact evaluation, and learning and knowledge management.",
  },
  {
    slug: "project-assurance",
    title: "Project Assurance Services",
    shortTitle: "Project Assurance",
    group: "delivery",
    body: "Independent Verification Agent (IVA) services, third-party monitoring, project performance reviews, social and technical audits, compliance and fiduciary reviews, risk-based assurance reviews, portfolio performance assessments, and project health checks.",
  },
  {
    slug: "implementation-acceleration",
    title: "Implementation Acceleration & Delivery Support",
    shortTitle: "Implementation Acceleration",
    group: "delivery",
    body: "Project readiness assessments, implementation readiness reviews, Development-Ready (D-Ready) advisory, PMO support services, results delivery units, project recovery and turnaround support, bottleneck analysis, and benefits realization tracking.",
  },
  {
    slug: "meal",
    title: "Monitoring, Evaluation, Accountability and Learning (MEAL)",
    shortTitle: "MEAL",
    group: "evidence",
    body: "Baseline studies, mid-term reviews, end-line evaluations, impact assessments, outcome harvesting, performance monitoring systems, beneficiary feedback mechanisms, citizen engagement assessments, learning reviews, and knowledge management systems.",
  },
  {
    slug: "governance-public-sector-reform",
    title: "Governance and Public Sector Reform",
    shortTitle: "Governance & Public Sector Reform",
    group: "enabling",
    body: "Public sector reform advisory, business enabling environment reforms, regulatory reform, institutional diagnostics, organizational development, public financial management, service delivery assessments, and reform implementation support.",
  },
  {
    slug: "environmental-social-safeguards",
    title: "Environmental and Social Safeguards",
    shortTitle: "Environmental & Social Safeguards",
    group: "enabling",
    body: "Environmental and social assessments, ESMPs, stakeholder engagement plans, labour management procedures, resettlement planning, social risk assessments, grievance redress mechanisms, gender and inclusion assessments, and ESG advisory.",
  },
  {
    slug: "land-governance-investment-advisory",
    title: "Land Governance and Investment Advisory",
    shortTitle: "Land Governance",
    group: "enabling",
    body: "FRILIA assessments, land governance reviews, land administration reforms, responsible land investment assessments, land acquisition and resettlement audits, land tenure studies, and community engagement processes.",
  },
  {
    slug: "digital-transformation-data-solutions",
    title: "Digital Transformation and Data Solutions",
    shortTitle: "Digital Transformation",
    group: "enabling",
    body: "Management information systems, digital monitoring platforms, data analytics, business intelligence dashboards, GIS mapping, digital governance solutions, project performance dashboards, AI for development programmes, and real-time project monitoring.",
  },
  {
    slug: "implementation-support",
    title: "Implementation Support",
    shortTitle: "Implementation Support",
    group: "delivery",
    body: "Executive leadership programs, technical training, coaching and mentoring, organizational capacity assessments, knowledge transfer programs, change management support, and institutional strengthening programs.",
  },
  {
    slug: "crisis-resilience-adaptive-development",
    title: "Crisis Resilience and Adaptive Development Services",
    shortTitle: "Crisis Resilience",
    group: "enabling",
    body: "Crisis preparedness assessments, business continuity planning, resilience building strategies, recovery programme design, emergency response monitoring, fragility and conflict assessments, and institutional resilience reviews.",
  },
  {
    slug: "jobs-economic-transformation",
    title: "Jobs and Economic Transformation Advisory",
    shortTitle: "Jobs & Economic Transformation",
    group: "advisory",
    body: "Employment diagnostics, SME development strategies, youth employment programmes, local content and value chain development, investment climate assessments, labour market analysis, and entrepreneurship ecosystem development.",
  },
  {
    slug: "procurement-fiduciary",
    title: "Procurement Excellence and Fiduciary Services",
    shortTitle: "Procurement & Fiduciary",
    group: "enabling",
    body: "Procurement assessments and audits, bid evaluation support, donor procurement compliance, procurement capacity building, value-for-money assessments, and contract management reviews.",
  },
  {
    slug: "ppp-investment-facilitation",
    title: "PPP and Investment Facilitation Services",
    shortTitle: "PPP & Investment Facilitation",
    group: "advisory",
    body: "PPP project preparation, feasibility studies, transaction advisory, investor readiness assessment, infrastructure finance advisory, stakeholder engagement, and investment promotion strategies.",
  },
];

export const servicesByGroup: Record<ServiceGroup, Service[]> = {
  advisory: services.filter((s) => s.group === "advisory"),
  delivery: services.filter((s) => s.group === "delivery"),
  evidence: services.filter((s) => s.group === "evidence"),
  enabling: services.filter((s) => s.group === "enabling"),
};
