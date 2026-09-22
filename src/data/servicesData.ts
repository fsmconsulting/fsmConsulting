/**
 * FSM Consulting Services Dataset (14 Integrated Practice Areas under 3 Pillars)
 * Grounded in FSM Corporate Profile (r1-1.docx).
 * 
 * 3 Core Pillars:
 * 1. Verify: Independent evidence that projects are delivering what they promise.
 * 2. Mobilise: Qualified experts, deployed and supported wherever the assignment is.
 * 3. Deliver: Hands-on support that moves projects from approval to measurable results.
 */

export type PillarKey = "verify" | "mobilise" | "deliver";
export type ServiceGroup = "advisory" | "delivery" | "evidence" | "enabling";

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

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  group?: ServiceGroup;
  pillar: PillarKey;
  pillarLabel: string;
  tagline: string;
  summary: string;
  body: string;
  bulletPoints: string[];
  deliverables: string[];
  whoItsFor: string;
  relatedSectors: string[];
}

export const services: Service[] = [
  // ==========================================
  // PILLAR 1: VERIFY (Independent Assurance)
  // ==========================================
  {
    slug: "project-assurance",
    title: "Project Assurance Services",
    shortTitle: "Project Assurance",
    pillar: "verify",
    pillarLabel: "Verify",
    group: "delivery",
    tagline: "Independent verification, third-party monitoring, and project health checks",
    summary:
      "Independent verification and oversight across sovereign, multi-state, and donor-financed investments to restore confidence, enforce compliance, and validate results.",
    body:
      "Independent Verification Agent (IVA) services, third-party monitoring, project performance reviews, social and technical audits, compliance and fiduciary reviews, risk-based assurance reviews, portfolio performance assessments, and project health checks.",
    bulletPoints: [
      "Independent Verification Agent (IVA) services for milestone- and results-based disbursements (PforR / DLI validation)",
      "Third-Party Monitoring (TPM) in complex, fragile, or remote operational environments",
      "Project performance reviews and milestone validation against ToRs and financing covenants",
      "Social and technical audits validating infrastructure and public service delivery quality",
      "Compliance and fiduciary assurance reviews across procurement, funds flow, and expenditure",
      "Risk-based assurance reviews providing early detection of execution bottlenecks",
      "Portfolio performance assessments and project health checks for sovereign line ministries",
    ],
    deliverables: [
      "IVA Milestone Verification Reports",
      "Third-Party Monitoring Dashboards & Field Audits",
      "Technical & Quality Inspection Protocols",
      "Fiduciary Compliance & Integrity Assessments",
    ],
    whoItsFor:
      "International Financial Institutions (World Bank, AfDB, IsDB), bilateral donors, and sovereign line ministries requiring objective, third-party validation.",
    relatedSectors: [
      "Governance & Public Administration",
      "Infrastructure Development",
      "Health Systems Strengthening",
      "Agriculture & Rural Development",
    ],
  },
  {
    slug: "procurement-fiduciary",
    title: "Procurement Excellence and Fiduciary Services",
    shortTitle: "Procurement & Fiduciary",
    pillar: "verify",
    pillarLabel: "Verify",
    group: "enabling",
    tagline: "Procurement compliance, value-for-money audits, and fiduciary governance",
    summary:
      "Rigorous procurement diagnostics, tender compliance reviews, and fiduciary controls designed to safeguard public resources and meet international partner standards.",
    body:
      "Procurement assessments and audits, bid evaluation support, donor procurement compliance, procurement capacity building, value-for-money assessments, and contract management reviews.",
    bulletPoints: [
      "Comprehensive procurement system diagnostics and anti-corruption integrity checks",
      "Independent bid evaluation support and tender evaluation committee secretariats",
      "Compliance monitoring against World Bank, AfDB, and national procurement regulations",
      "Value-for-Money (VfM) assessments across major capital works and technical assistance contracts",
      "Contract administration reviews, dispute mitigation, and variations audits",
      "Procurement capacity building and professionalization for Project Implementation Units (PIUs)",
      "Fiduciary risk mitigation frameworks and pre-disbursement screening",
    ],
    deliverables: [
      "Independent Bid Evaluation Reports",
      "Value-for-Money (VfM) Audit Dossiers",
      "Procurement Compliance & Fiduciary Risk Registers",
      "PIU Procurement Manuals & Standard Operating Procedures",
    ],
    whoItsFor:
      "Public procurement regulatory authorities, donor task team leaders, and executing agencies executing high-value tenders.",
    relatedSectors: [
      "Governance & Public Administration",
      "Infrastructure Development",
      "Financial Inclusion",
    ],
  },
  {
    slug: "environmental-social-safeguards",
    title: "Environmental and Social Safeguards",
    shortTitle: "ESG & Safeguards",
    pillar: "verify",
    pillarLabel: "Verify",
    group: "enabling",
    tagline: "Environmental & social risk management, ESIA, ESMP, and grievance mechanisms",
    summary:
      "Comprehensive safeguarding architectures that protect communities, preserve environmental ecosystems, and guarantee project compliance with World Bank ESS and IFC standards.",
    body:
      "Environmental and social assessments, ESMPs, stakeholder engagement plans, labour management procedures, resettlement planning, social risk assessments, grievance redress mechanisms, gender and inclusion assessments, and ESG advisory.",
    bulletPoints: [
      "Environmental and Social Impact Assessments (ESIA) and Environmental and Social Management Frameworks (ESMF)",
      "Preparation, monitoring, and audit of site-specific Environmental and Social Management Plans (ESMP)",
      "Robust Grievance Redress Mechanisms (GRM) design, operationalization, and field logging",
      "Labour Management Procedures (LMP) and occupational health and safety (OHS) audits",
      "Stakeholder Engagement Plans (SEP) and structured community consultation protocols",
      "Gender-Based Violence (GBV), SEA/SH prevention, mitigation, and response protocols",
      "Biodiversity and natural resource management compliance reviews",
    ],
    deliverables: [
      "ESIA & ESMP Compliance Documentation",
      "Functional Grievance Redress System & Logbooks",
      "Labour & OHS Field Monitoring Reports",
      "Stakeholder Engagement & Consultation Charters",
    ],
    whoItsFor:
      "Infrastructure developers, sovereign executing agencies, and institutional funders committed to responsible environmental stewardship.",
    relatedSectors: [
      "Climate Change & Sustainability",
      "Infrastructure Development",
      "Energy & Renewable Energy",
      "Agriculture & Rural Development",
    ],
  },
  {
    slug: "land-governance-investment-advisory",
    title: "Land Governance and Investment Advisory",
    shortTitle: "Land Governance & RAP",
    pillar: "verify",
    pillarLabel: "Verify",
    group: "enabling",
    tagline: "Resettlement action plans, FRILIA compliance, and customary tenure security",
    summary:
      "Socially equitable land acquisition, valuation, and resettlement frameworks that mitigate conflict and unlock complex development investments.",
    body:
      "FRILIA assessments, land governance reviews, land administration reforms, responsible land investment assessments, land acquisition and resettlement audits, land tenure studies, and community engagement processes.",
    bulletPoints: [
      "Resettlement Policy Frameworks (RPF) and site-specific Resettlement Action Plans (RAP)",
      "Framework for Responsible Inclusive Land-Intensive Agricultural Investment (FRILIA) alignment",
      "Asset valuation, socio-economic census surveys, and entitlement matrix formulation",
      "Customary tenure mapping, boundary demarcation, and community land dispute mediation",
      "Post-resettlement livelihood restoration programs and longitudinal welfare tracking",
      "Land governance institutional reviews and land registry digitization advisory",
      "Compensation disbursement oversight and escrow verification",
    ],
    deliverables: [
      "Verified Resettlement Action Plans (RAP / ARAP)",
      "Project-Affected Persons (PAP) Census & Asset Registers",
      "Livelihood Restoration Strategies",
      "FRILIA Compliance & Certification Reports",
    ],
    whoItsFor:
      "Agricultural investors, state land registries, donor agricultural programs, and local communities.",
    relatedSectors: [
      "Agriculture & Rural Development",
      "Climate Change & Sustainability",
      "Land Administration & Governance",
    ],
  },

  // ==========================================
  // PILLAR 2: MOBILISE (Expert Deployment & Logistics)
  // ==========================================
  {
    slug: "technical-expert-mobilization",
    title: "Technical Expert Mobilization & Professional Contracting",
    shortTitle: "Technical Expert Mobilization",
    pillar: "mobilise",
    pillarLabel: "Mobilise",
    group: "delivery",
    tagline: "Vetted international, regional, and national specialist deployment",
    summary:
      "Rapid assembly and contracting of high-caliber multidisciplinary teams, international advisors, and field personnel structured to mobilise quickly across Africa.",
    body:
      "International and regional expert sourcing, national consultant deployment, multidisciplinary team formation, embedded advisory, PMO staffing, surge capacity, field and enumerator mobilization, onboarding, in-country coordination, and knowledge transfer.",
    bulletPoints: [
      "International, regional, and national consultant sourcing across 14 development disciplines",
      "Vetted technical talent deployment structured to mobilise quickly across West and Central Africa",
      "Multidisciplinary team formation and consortium staffing for major bids",
      "Embedded technical advisory within government ministries, departments, and agencies (MDAs)",
      "Project Management Office (PMO) staffing and delivery unit resourcing",
      "Surge capacity deployment for emergency or accelerated project phases",
      "Field enumerator network mobilization across all 36 Nigerian states and the FCT",
      "Comprehensive onboarding, in-country contracting, and duty of care",
    ],
    deliverables: [
      "Vetted Expert Shortlists & Team Deployments",
      "Multidisciplinary Consortium Configurations",
      "Standardized Subcontracting & Duty of Care Packs",
      "Field Enumerator Rosters by State & Language",
    ],
    whoItsFor:
      "International consulting firms, consortium leads, development banks, and government project units requiring immediate, specialized bench strength.",
    relatedSectors: [
      "Governance & Public Administration",
      "Digital Economy",
      "Health Systems Strengthening",
      "Education & Skills",
    ],
  },
  {
    slug: "implementation-support",
    title: "Implementation Support & Field Logistics",
    shortTitle: "Implementation Support",
    pillar: "mobilise",
    pillarLabel: "Mobilise",
    group: "delivery",
    tagline: "Visas, security protocols, field transport, and operational duty of care",
    summary:
      "End-to-end in-country logistics and field support ensuring international teams and visiting missions can operate safely, lawfully, and effectively in Nigeria and partner countries.",
    body:
      "Business visas and invitation letters, airport protocol and in-country transportation, field security assessments, accommodation vetting, translation and interpretation, local operational management, and duty of care compliance.",
    bulletPoints: [
      "Business visa support, letters of invitation (LOI), and immigration clearance",
      "In-country flight, ground transport, and secure logistical coordination",
      "Field security risk assessments, journey management, and tracking protocols",
      "Accommodation vetting and regional logistical management",
      "Language translation, interpretation, and local cultural mediation",
      "Field team management, per diem disbursement, and field expense accounting",
      "Rapid emergency response and medical evacuation coordination",
    ],
    deliverables: [
      "Comprehensive Mission Logistics Plans",
      "In-Country Security & Journey Management Protocols",
      "Visa & Immigration Documentation Sets",
      "Audited Field Expense & Per Diem Reports",
    ],
    whoItsFor:
      "International consulting firms, visiting donor missions, independent research teams, and external evaluators.",
    relatedSectors: [
      "Private Sector Development",
      "Infrastructure Development",
      "Health Systems Strengthening",
    ],
  },
  {
    slug: "crisis-resilience-adaptive-development",
    title: "Crisis Resilience & Adaptive Development",
    shortTitle: "Crisis Resilience",
    pillar: "mobilise",
    pillarLabel: "Mobilise",
    group: "enabling",
    tagline: "Fragility assessments, business continuity, and rapid response deployment",
    summary:
      "Specialized mobilization and operational strategies that keep critical development programs functioning across fragile, conflict-affected, and volatile settings.",
    body:
      "Crisis preparedness assessments, business continuity planning, resilience building strategies, recovery programme design, emergency response monitoring, fragility and conflict assessments, and institutional resilience reviews.",
    bulletPoints: [
      "Fragility, conflict, and violence (FCV) sensitive programming assessments",
      "Institutional business continuity planning (BCP) for volatile states",
      "Emergency response monitoring and rapid crisis diagnostics",
      "Adaptive management frameworks for changing operational circumstances",
      "Third-party remote sensing and localized community monitoring",
      "Post-crisis recovery program design and institutional resilience reviews",
    ],
    deliverables: [
      "Business Continuity Plans for Implementation Units",
      "Fragility & Conflict Risk Appraisals",
      "Adaptive Management Protocols",
      "Emergency Deployment Guidelines",
    ],
    whoItsFor:
      "Emergency response agencies, humanitarian-development nexus programs, and international donors operating in fragile environments.",
    relatedSectors: [
      "Governance & Public Administration",
      "Climate Change & Sustainability",
      "Social Protection",
    ],
  },

  // ==========================================
  // PILLAR 3: DELIVER (Implementation Acceleration & Evidence)
  // ==========================================
  {
    slug: "implementation-acceleration",
    title: "Implementation Acceleration & Delivery Support",
    shortTitle: "Implementation Acceleration",
    pillar: "deliver",
    pillarLabel: "Deliver",
    group: "delivery",
    tagline: "D-Ready reviews, PMO support, bottleneck unblocking, and turnaround",
    summary:
      "Hands-on execution advisory bridging the critical gap between project approval and field delivery to unblock disbursements and turn around troubled initiatives.",
    body:
      "Project readiness assessments, implementation readiness reviews, Development-Ready (D-Ready) advisory, PMO support services, results delivery units, project recovery and turnaround support, bottleneck analysis, and benefits realization tracking.",
    bulletPoints: [
      "Development-Ready (D-Ready) project assessments and readiness filters",
      "Implementation readiness reviews prior to board approval and effectiveness",
      "Project Management Office (PMO) design, operationalization, and execution",
      "Results Delivery Units (RDUs) establishing rapid execution cadences",
      "Project recovery, problem project restructuring, and turnaround support",
      "Implementation bottleneck analysis, critical path management, and escalation",
      "Benefits realization tracking and disbursement acceleration strategies",
    ],
    deliverables: [
      "D-Ready Gap Assessments & Action Roadmaps",
      "Turnaround & Disbursement Acceleration Strategies",
      "PMO Governance Structures & Playbooks",
      "Weekly Critical-Path Delivery Dashboards",
    ],
    whoItsFor:
      "Project coordinators, donor portfolio managers, government task forces, and ministerial delivery units.",
    relatedSectors: [
      "Infrastructure Development",
      "Agriculture & Rural Development",
      "Energy & Renewable Energy",
    ],
  },
  {
    slug: "meal",
    title: "Monitoring, Evaluation, Accountability and Learning (MEAL)",
    shortTitle: "MEAL",
    pillar: "deliver",
    pillarLabel: "Deliver",
    group: "evidence",
    tagline: "Rigorous baselines, impact evaluations, and feedback accountability loops",
    summary:
      "Evidence-led monitoring and evaluation architectures combining statistical rigor, nationwide data collection, and practical learning to measure real socioeconomic changes.",
    body:
      "Baseline studies, mid-term reviews, end-line evaluations, impact assessments, outcome harvesting, performance monitoring systems, beneficiary feedback mechanisms, citizen engagement assessments, learning reviews, and knowledge management systems.",
    bulletPoints: [
      "Comprehensive baseline surveys, mid-term reviews (MTR), and end-line evaluations",
      "Quasi-experimental and mixed-method impact evaluation studies",
      "Outcome harvesting and contribution analysis in complex policy environments",
      "Real-time performance monitoring systems and mobile data collection",
      "Beneficiary feedback mechanisms, citizen report cards, and social accountability",
      "Learning reviews, after-action reviews (AAR), and adaptive management guidance",
      "Knowledge management repositories and evidence synthesis papers",
    ],
    deliverables: [
      "Baseline, Mid-Term & End-Line Evaluation Reports",
      "Digital M&E Frameworks & Indicator Reference Sheets",
      "Beneficiary Feedback & Citizen Accountability Reports",
      "Policy Synthesis & Lessons-Learned Publications",
    ],
    whoItsFor:
      "Development agencies, program managers, non-governmental organizations, and policy think tanks.",
    relatedSectors: [
      "Health Systems Strengthening",
      "Education & Skills",
      "Social Protection",
      "Agriculture & Rural Development",
    ],
  },
  {
    slug: "development-effectiveness",
    title: "Development Effectiveness Services",
    shortTitle: "Development Effectiveness",
    pillar: "deliver",
    pillarLabel: "Deliver",
    group: "advisory",
    tagline: "Results-based management, theory of change, and results frameworks",
    summary:
      "Program design, strategic alignment, and results-based management frameworks that ensure development investments align with national priorities and institutional objectives.",
    body:
      "Development effectiveness reviews, results-based management systems, results framework design, performance measurement frameworks, theory of change development, program design, impact assessments, outcome and impact evaluation, and learning and knowledge management.",
    bulletPoints: [
      "Development effectiveness reviews and strategic program alignment",
      "Results-Based Management (RBM) systems design and institutionalization",
      "Theory of Change (ToC) formulation and stakeholder validation workshops",
      "Results Framework and Indicator Reference Sheet (PIRS) development",
      "Value for money (VfM) economy, efficiency, effectiveness, and equity reviews",
      "Strategic program design, project appraisal documents, and concept notes",
      "Evaluation policy and institutional evaluation framework design",
    ],
    deliverables: [
      "Validated Theory of Change & Results Matrices",
      "Results-Based Management (RBM) Manuals",
      "Value for Money (VfM) Evaluation Studies",
      "Strategic Country / Sector Alignment Briefs",
    ],
    whoItsFor:
      "Multilateral agencies, bilateral donor missions, planning commissions, and international foundations.",
    relatedSectors: [
      "Governance & Public Administration",
      "Climate Change & Sustainability",
      "Jobs & Economic Transformation",
    ],
  },
  {
    slug: "digital-transformation-data-solutions",
    title: "Digital Transformation and Data Solutions",
    shortTitle: "Digital Transformation",
    pillar: "deliver",
    pillarLabel: "Deliver",
    group: "enabling",
    tagline: "MIS, project performance dashboards, GIS spatial mapping, and data labs",
    summary:
      "Technological architectures, GIS geospatial analytics, and custom management information systems that convert field data into real-time decision intelligence.",
    body:
      "Management information systems, digital monitoring platforms, data analytics, business intelligence dashboards, GIS mapping, digital governance solutions, project performance dashboards, AI for development programmes, and real-time project monitoring.",
    bulletPoints: [
      "Custom Management Information Systems (MIS) for multi-tier program tracking",
      "Interactive executive dashboards and real-time business intelligence",
      "Geographic Information Systems (GIS) spatial mapping and geo-tagging of assets",
      "Digital governance solutions, civil registration, and public service portals",
      "Secure mobile data collection pipelines (ODK, Kobo, CommCare integration)",
      "Data quality audits, database administration, and cloud infrastructure",
      "Data ethics, digital safeguarding, and privacy compliance frameworks",
    ],
    deliverables: [
      "Production-Ready Management Information Systems (MIS)",
      "Live Cloud Dashboards & Performance Visualizations",
      "GIS Web Maps & Geo-Referenced Asset Databases",
      "Data Governance & Cybersecurity Guidelines",
    ],
    whoItsFor:
      "Government line ministries, statistics bureaus, donor programs, and large-scale delivery initiatives.",
    relatedSectors: [
      "Digital Economy",
      "Financial Inclusion",
      "Governance & Public Administration",
    ],
  },
  {
    slug: "governance-public-sector-reform",
    title: "Governance and Public Sector Reform",
    shortTitle: "Governance & Reform",
    pillar: "deliver",
    pillarLabel: "Deliver",
    group: "enabling",
    tagline: "Institutional diagnostics, PFM, regulatory streamlining, and civil service reform",
    summary:
      "Structural public sector advisory supporting institutional restructuring, public financial management discipline, and regulatory environments that stimulate private investment.",
    body:
      "Public sector reform advisory, business enabling environment reforms, regulatory reform, institutional diagnostics, organizational development, public financial management, service delivery assessments, and reform implementation support.",
    bulletPoints: [
      "Public sector institutional diagnostics and functional reviews",
      "Public Financial Management (PFM) reforms, PEFA assessments, and budget tracking",
      "Business Enabling Environment (BEE) and ease-of-doing-business reforms",
      "Regulatory impact assessments (RIA) and policy simplification",
      "Sub-national governance strengthening across states and municipal authorities",
      "Civil service performance management and payroll/personnel audits",
      "Anti-corruption and institutional integrity enhancement mechanisms",
    ],
    deliverables: [
      "Institutional Diagnostics & Restructuring Blueprints",
      "PFM Reform Roadmaps & PEFA Support Reports",
      "Business Enabling Policy Briefs & Draft Regulations",
      "Public Service Delivery Performance Metrics",
    ],
    whoItsFor:
      "Federal and state ministries of finance/budget, civil service commissions, and donor governance programs.",
    relatedSectors: [
      "Governance & Public Administration",
      "Financial Inclusion",
      "Private Sector Development",
    ],
  },
  {
    slug: "jobs-economic-transformation",
    title: "Jobs and Economic Transformation Advisory",
    shortTitle: "Jobs & Economic Transformation",
    pillar: "deliver",
    pillarLabel: "Deliver",
    group: "advisory",
    tagline: "SME competitiveness, youth employment, and value chain development",
    summary:
      "Private sector development strategies, value chain modernization, and job creation initiatives designed to foster inclusive, resilient African economies.",
    body:
      "Employment diagnostics, SME development strategies, youth employment programmes, local content and value chain development, investment climate assessments, labour market analysis, and entrepreneurship ecosystem development.",
    bulletPoints: [
      "Employment diagnostics and job creation strategy formulation",
      "SME competitiveness programs, incubation design, and business development services",
      "Youth and women's economic empowerment initiatives",
      "Agricultural and industrial value chain analysis and market linkages",
      "Local content policy design and industrial park development support",
      "Investment climate diagnostics and trade facilitation reviews",
      "Informal economy transition strategies and financial inclusion links",
    ],
    deliverables: [
      "Sector Employment Diagnostics & Growth Strategies",
      "Value Chain Competitiveness & Linkage Roadmaps",
      "SME Support Program Frameworks",
      "Local Content & Industrialization Studies",
    ],
    whoItsFor:
      "Ministries of trade & investment, enterprise development agencies, and private sector development initiatives.",
    relatedSectors: [
      "Private Sector Development",
      "Agriculture & Rural Development",
      "Digital Economy",
    ],
  },
  {
    slug: "ppp-investment-facilitation",
    title: "PPP and Investment Facilitation Services",
    shortTitle: "PPP & Investment Facilitation",
    pillar: "deliver",
    pillarLabel: "Deliver",
    group: "advisory",
    tagline: "Transaction advisory, feasibility studies, and public-private partnerships",
    summary:
      "Unlocking private capital for critical public infrastructure and industrial assets through structured PPP preparation and transaction advisory.",
    body:
      "PPP project preparation, feasibility studies, transaction advisory, investor readiness assessment, infrastructure finance advisory, stakeholder engagement, and investment promotion strategies.",
    bulletPoints: [
      "Public-Private Partnership (PPP) project screening and readiness assessment",
      "Comprehensive bankability, financial modeling, and value-for-money studies",
      "Transaction advisory support and concession contract drafting",
      "Risk allocation matrices, contingent liability management, and fiscal risk reviews",
      "Investor sounding, roadshows, and competitive bidding management",
      "Blended finance structuring and donor grant de-risking mechanisms",
      "Concessionaire contract management and performance monitoring protocols",
    ],
    deliverables: [
      "PPP Feasibility Studies & Bankability Assessments",
      "Risk Allocation Matrices & Concession Term Sheets",
      "Transaction Information Memoranda",
      "Post-Award Contract Monitoring Frameworks",
    ],
    whoItsFor:
      "Infrastructure concession regulatory commissions, ministries of finance, and private infrastructure sponsors.",
    relatedSectors: [
      "Infrastructure Development",
      "Energy & Renewable Energy",
      "Private Sector Development",
    ],
  },
];

export function getServicesByPillar(pillarKey: PillarKey): Service[] {
  return services.filter((s) => s.pillar === pillarKey);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
