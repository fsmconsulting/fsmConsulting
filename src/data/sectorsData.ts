/**
 * FSM Consulting Sectors Dataset (15 Priority Development Verticals)
 * Strictly factual and grounded in "FSM Consulting - Corporate Profile - r1-1.docx".
 * 
 * Free of fabricated metrics, project counts, or unverified claims.
 */

export interface SectorItem {
  name: string;
  slug: string;
  image: string;
  overview: string;
  relevantServices: string[];
  relevantExpertise: string[];

  // Compatibility aliases
  id: string;
  title: string;
  heroImage: string;
}

export const sectorsData: SectorItem[] = [
  {
    slug: "governance-public-administration",
    name: "Governance & Public Administration",
    image: "/GovernanceAndPublicAdministration.webp",
    overview:
      "Effective public administration and transparent governance provide the essential framework for sustainable economic and social development. Development investments depend on capable state institutions, accountable public financial management, and predictable regulatory environments to deliver lasting public value.",
    relevantServices: [
      "governance-reform",
      "project-assurance",
      "procurement-fiduciary",
      "digital-data",
    ],
    relevantExpertise: [
      "Governance and Public Sector Reform",
      "Development Planning and Policy",
      "Financial Management and Procurement",
    ],
    id: "governance-public-administration",
    title: "Governance & Public Administration",
    heroImage: "/GovernanceAndPublicAdministration.webp",
  },
  {
    slug: "agriculture-rural-development",
    name: "Agriculture & Rural Development",
    image: "/AgricultureAndRuralDevelopment.webp",
    overview:
      "Agriculture and rural transformation are central to food security, poverty alleviation, and livelihood creation across Africa. Strengthening agrarian systems requires responsive land administration, resilient value chains, and verified program execution that reaches farming households directly.",
    relevantServices: [
      "land-governance",
      "safeguards",
      "meal",
      "jobs-economy",
    ],
    relevantExpertise: [
      "Agriculture and Rural Development",
      "Land Administration and Governance",
      "Environmental and Social Safeguards",
    ],
    id: "agriculture-rural-development",
    title: "Agriculture & Rural Development",
    heroImage: "/AgricultureAndRuralDevelopment.webp",
  },
  {
    slug: "health-systems-strengthening",
    name: "Health Systems Strengthening",
    image: "/HealthSystemsStrengthening.webp",
    overview:
      "Resilient health systems are fundamental to human capital development and economic productivity. Accelerating health service delivery requires robust fiduciary oversight, continuous monitoring, and frontline healthcare workforce deployment across underserved regions.",
    relevantServices: [
      "project-assurance",
      "meal",
      "expert-mobilisation",
      "digital-data",
    ],
    relevantExpertise: [
      "Health Systems Strengthening",
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
      "Project Management and Implementation Support",
    ],
    id: "health-systems-strengthening",
    title: "Health Systems Strengthening",
    heroImage: "/HealthSystemsStrengthening.webp",
  },
  {
    slug: "education-skills-development",
    name: "Education & Skills Development",
    image: "/EducationAndSkillsDevelopment.webp",
    overview:
      "Accessible quality education and market-relevant skills development prepare young populations for sustainable employment and economic participation. Effective education programs require rigorous institutional diagnostics, teacher capacity strengthening, and verified learning assessments.",
    relevantServices: [
      "capacity-development",
      "jobs-economy",
      "meal",
      "development-effectiveness",
    ],
    relevantExpertise: [
      "Education and Skills Development",
      "Project Management and Implementation Support",
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
    ],
    id: "education-skills-development",
    title: "Education & Skills Development",
    heroImage: "/EducationAndSkillsDevelopment.webp",
  },
  {
    slug: "infrastructure-development",
    name: "Infrastructure Development",
    image: "/InfrastructureDevelopment.webp",
    overview:
      "Modern infrastructure connects communities to markets, energy, and essential services, driving regional integration and economic growth. Major capital projects demand rigorous project assurance, environmental safeguards compliance, and adaptive implementation support to avoid delays.",
    relevantServices: [
      "project-assurance",
      "safeguards",
      "resilience-and-ppp",
      "procurement-fiduciary",
    ],
    relevantExpertise: [
      "Infrastructure and Urban Development",
      "Environmental and Social Safeguards",
      "Financial Management and Procurement",
    ],
    id: "infrastructure-development",
    title: "Infrastructure Development",
    heroImage: "/InfrastructureDevelopment.webp",
  },
  {
    slug: "private-sector-development",
    name: "Private Sector Development",
    image: "/PrivateSectorDevelopment.webp",
    overview:
      "A dynamic private sector fuels domestic enterprise growth, trade competitiveness, and sustainable job creation. Fostering private enterprise requires modernizing regulatory procedures, lowering administrative burdens, and supporting inclusive value chain development.",
    relevantServices: [
      "jobs-economy",
      "governance-reform",
      "development-effectiveness",
    ],
    relevantExpertise: [
      "Development Planning and Policy",
      "Governance and Public Sector Reform",
    ],
    id: "private-sector-development",
    title: "Private Sector Development",
    heroImage: "/PrivateSectorDevelopment.webp",
  },
  {
    slug: "investment-promotion",
    name: "Investment Promotion",
    image: "/InvestmentPromotion.webp",
    overview:
      "Attracting sustainable capital into high-impact developmental sectors accelerates economic diversification and industrial growth. Successful investment promotion relies on transparent regulatory mechanisms, investor readiness reviews, and structured public-private collaboration.",
    relevantServices: [
      "resilience-and-ppp",
      "governance-reform",
      "jobs-economy",
    ],
    relevantExpertise: [
      "Development Planning and Policy",
      "Financial Management and Procurement",
    ],
    id: "investment-promotion",
    title: "Investment Promotion",
    heroImage: "/InvestmentPromotion.webp",
  },
  {
    slug: "digital-economy",
    name: "Digital Economy",
    image: "/DigitalEconomy.webp",
    overview:
      "Digital technology and data infrastructure expand financial access, streamline public service delivery, and unlock new entrepreneurial avenues. Transitioning to a digital economy requires verified digital delivery tracking, data quality reviews, and resilient information architectures.",
    relevantServices: [
      "digital-data",
      "governance-reform",
      "implementation-acceleration",
    ],
    relevantExpertise: [
      "Digital Transformation and Data Analytics",
      "Project Management and Implementation Support",
    ],
    id: "digital-economy",
    title: "Digital Economy",
    heroImage: "/DigitalEconomy.webp",
  },
  {
    slug: "climate-change-sustainability",
    name: "Climate Change & Sustainability",
    image: "/ClimateChangeAndSustainability.webp",
    overview:
      "Climate adaptation and ecological sustainability protect vulnerable populations and ecosystems from accelerating environmental risks. Development programs must incorporate rigorous environmental assessments, disaster risk reduction, and proactive community engagement.",
    relevantServices: [
      "safeguards",
      "resilience-and-ppp",
      "meal",
    ],
    relevantExpertise: [
      "Climate Change and Sustainability",
      "Environmental and Social Safeguards",
      "Development Planning and Policy",
    ],
    id: "climate-change-sustainability",
    title: "Climate Change & Sustainability",
    heroImage: "/ClimateChangeAndSustainability.webp",
  },
  {
    slug: "social-protection",
    name: "Social Protection",
    image: "/SocialProtection.webp",
    overview:
      "Targeted social safety nets and welfare mechanisms safeguard impoverished households against economic shocks and structural vulnerability. Ensuring social protection reaches intended beneficiaries requires independent verification, robust targeting assessments, and transparent delivery systems.",
    relevantServices: [
      "project-assurance",
      "meal",
      "development-effectiveness",
      "safeguards",
    ],
    relevantExpertise: [
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
      "Gender Equality and Social Inclusion",
      "Development Planning and Policy",
    ],
    id: "social-protection",
    title: "Social Protection",
    heroImage: "/SocialProtection.webp",
  },
  {
    slug: "womens-economic-empowerment",
    name: "Women's Economic Empowerment",
    image: "/WomensEconomicEmpowerment.webp",
    overview:
      "Mainstreaming gender equality and expanding economic opportunities for women strengthens household welfare, community resilience, and broader economic development. Effective programs require gender-informed program design, inclusive enterprise support, and targeted safeguard procedures.",
    relevantServices: [
      "jobs-economy",
      "safeguards",
      "capacity-development",
      "meal",
    ],
    relevantExpertise: [
      "Gender Equality and Social Inclusion",
      "Development Planning and Policy",
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
    ],
    id: "womens-economic-empowerment",
    title: "Women's Economic Empowerment",
    heroImage: "/WomensEconomicEmpowerment.webp",
  },
  {
    slug: "land-administration-governance",
    name: "Land Administration & Governance",
    image: "/LandAdministrationAndGovernance.webp",
    overview:
      "Secure land tenure and equitable land governance underpin agricultural productivity, urban planning, and peaceful community co-existence. Development investments requiring land access rely on responsible land assessments, transparent acquisition audits, and inclusive stakeholder consultations.",
    relevantServices: [
      "land-governance",
      "safeguards",
      "project-assurance",
    ],
    relevantExpertise: [
      "Land Administration and Governance",
      "Environmental and Social Safeguards",
      "Governance and Public Sector Reform",
    ],
    id: "land-administration-governance",
    title: "Land Administration & Governance",
    heroImage: "/LandAdministrationAndGovernance.webp",
  },
  {
    slug: "financial-inclusion",
    name: "Financial Inclusion",
    image: "/FinancialInclusion.webp",
    overview:
      "Expanding formal financial services to underserved populations and micro-enterprises fosters resilient household livelihoods and local commerce. Advancing financial inclusion requires modern payment infrastructure, consumer protection frameworks, and independent outcome evaluation.",
    relevantServices: [
      "jobs-economy",
      "digital-data",
      "development-effectiveness",
    ],
    relevantExpertise: [
      "Financial Management and Procurement",
      "Digital Transformation and Data Analytics",
    ],
    id: "financial-inclusion",
    title: "Financial Inclusion",
    heroImage: "/FinancialInclusion.webp",
  },
  {
    slug: "water-sanitation-hygiene",
    name: "Water, Sanitation & Hygiene",
    image: "/WaterSanitationAndHygiene.webp",
    overview:
      "Access to safe drinking water and dignified sanitation facilities is essential for public health, gender dignity, and community welfare. Delivering sustainable water schemes requires rigorous technical audits, community-level monitoring, and robust environmental management plans.",
    relevantServices: [
      "project-assurance",
      "safeguards",
      "meal",
      "capacity-development",
    ],
    relevantExpertise: [
      "Infrastructure and Urban Development",
      "Environmental and Social Safeguards",
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
    ],
    id: "water-sanitation-hygiene",
    title: "Water, Sanitation & Hygiene",
    heroImage: "/WaterSanitationAndHygiene.webp",
  },
  {
    slug: "energy-renewable-energy",
    name: "Energy & Renewable Energy",
    image: "/EnergyAndRenewableEnergy.webp",
    overview:
      "Reliable, clean energy access powers businesses, health facilities, schools, and homes across rural and urban landscapes. Renewable energy investments require comprehensive safeguards management, transaction advisory, and independent technical verification to ensure lasting grid and off-grid performance.",
    relevantServices: [
      "resilience-and-ppp",
      "safeguards",
      "project-assurance",
    ],
    relevantExpertise: [
      "Infrastructure and Urban Development",
      "Climate Change and Sustainability",
      "Environmental and Social Safeguards",
    ],
    id: "energy-renewable-energy",
    title: "Energy & Renewable Energy",
    heroImage: "/EnergyAndRenewableEnergy.webp",
  },
];

export function getSectorBySlug(slug: string): SectorItem | undefined {
  return sectorsData.find((s) => s.slug === slug || s.id === slug);
}
