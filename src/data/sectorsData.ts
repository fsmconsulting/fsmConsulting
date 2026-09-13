export interface SectorStat {
  label: string;
  value: string;
  detail: string;
}

export interface SectorItem {
  id: string; // unique slug
  num: string; // e.g. "01"
  category: "governance-digital" | "economic-finance" | "human-capital" | "infrastructure-environment";
  categoryLabel: string;
  title: string;
  shortTitle?: string;
  tagline: string;
  overview: string;
  strategicContext: string;
  stats: SectorStat[];
  focusAreas: {
    title: string;
    description: string;
    highlights: string[];
  }[];
  interventions: string[];
  serviceCapabilities: string[];
  expertRoles: string[];
  targetClients: string[];
  relatedSectors: string[]; // ids of related sectors
  heroImage?: string;
}

export const sectorsData: SectorItem[] = [
  {
    id: "governance-public-administration",
    heroImage: "/GovernanceAndPublicAdministration.webp",
    num: "01",
    category: "governance-digital",
    categoryLabel: "Governance & Digital",
    title: "Governance & Public Administration",
    shortTitle: "Governance & Public Admin",
    tagline: "Strengthening state institutions, regulatory environments, and evidence-driven public financial management.",
    overview:
      "FSM Consulting partners with federal ministries, subnational governments, and international financial institutions to architect sustainable public sector reforms, optimize domestic resource mobilization (DRM), streamline regulatory frameworks, and modernize civil service machinery across Africa.",
    strategicContext:
      "Public sector institutions across Africa face mounting pressure to deliver more transparent, accountable, and high-velocity results amidst fiscal tightening. Bridging policy intent and operational execution requires rigorous institutional diagnostics, modernized public procurement systems, and robust performance-based management frameworks that eliminate bureaucratic bottlenecks.",
    stats: [
      { label: "Execution Acceleration", value: "3.2x", detail: "Faster policy-to-implementation cycle for reform initiatives" },
      { label: "Fiduciary Compliance", value: "99.4%", detail: "Adherence to multilateral procurement and PFM benchmarks" },
      { label: "Institutional Reach", value: "36+ States", detail: "Subnational advisory capacity across federal and state tiers" },
    ],
    focusAreas: [
      {
        title: "Public Financial Management (PFM) Modernization",
        description: "Designing and deploying Medium-Term Expenditure Frameworks (MTEF), Treasury Single Account (TSA) monitoring, and transparent subnational budget execution frameworks.",
        highlights: ["Treasury Single Account (TSA) compliance", "Performance-based budgeting", "Subnational Internally Generated Revenue (IGR) diagnostics"],
      },
      {
        title: "Business Enabling Environment & Regulatory Reform",
        description: "Re-engineering regulatory pathways, municipal licensing, and commercial dispute mechanisms to improve subnational ease-of-doing-business indices.",
        highlights: ["Regulatory impact assessments", "Subnational investment climate benchmarking", "Administrative burden reduction"],
      },
      {
        title: "Civil Service Transformation & Process Optimization",
        description: "Conducting organizational diagnostics, role profile re-alignments, and workflow automations to revitalize institutional productivity and service delivery standards.",
        highlights: ["Institutional capability assessments", "Service delivery charters & SLAs", "Change management & leadership coaching"],
      },
      {
        title: "Public Procurement & Fiduciary Integrity",
        description: "Upgrading public procurement agencies to digital e-procurement architectures while establishing robust value-for-money oversight mechanisms.",
        highlights: ["e-Procurement migration roadmaps", "Procurement audit & post-review support", "Procurement capacity certification"],
      },
    ],
    interventions: [
      "Subnational Internally Generated Revenue (IGR) diagnostics & modernization roadmaps",
      "Establishment of ministerial Results Delivery Units (RDUs) and executive dashboards",
      "Public Expenditure and Financial Accountability (PEFA) self-assessments",
      "E-Procurement transition advisory and value-for-money contract audits",
      "Leadership training, mentoring, and change management for senior civil servants",
      "Subnational Ease of Doing Business reform action plans and implementation tracking",
    ],
    serviceCapabilities: [
      "Governance and Public Sector Reform",
      "Procurement Excellence and Fiduciary Services",
      "Development Effectiveness Services",
      "Digital Transformation and Data Solutions",
      "Capacity Development and Technical Assistance",
    ],
    expertRoles: [
      "Public Policy Specialists",
      "Governance Specialists",
      "Procurement Specialists",
      "Financial Management Experts",
      "Legal Experts",
    ],
    targetClients: [
      "Federal Government Ministries, Departments & Agencies (MDAs)",
      "State Governments & Subnational Revenue Authorities",
      "World Bank, AfDB, and Islamic Development Bank (IsDB)",
      "FCDO, European Union, and USAID Governance Programs",
    ],
    relatedSectors: ["digital-economy", "investment-promotion", "private-sector-development"],
  },
  {
    id: "agriculture-rural-development",
    heroImage: "/agricultureAndRuralDevelopment.webp",
    num: "02",
    category: "economic-finance",
    categoryLabel: "Economic Growth & Finance",
    title: "Agriculture & Rural Development",
    shortTitle: "Agriculture & Rural Dev",
    tagline: "Unlocking agricultural productivity, responsible land investment, and resilient rural food systems.",
    overview:
      "FSM Consulting accelerates agricultural transformation by advising public agencies, development partners, and commercial agribusinesses on establishing responsible land frameworks (FRILIA), structuring sustainable outgrower schemes, and verifying large-scale agro-industrial programs.",
    strategicContext:
      "Agriculture remains the backbone of employment and rural livelihoods across Africa, yet yields and farmer incomes are constrained by fragmented supply chains, post-harvest losses, and contentious land acquisition. FSM brings specialized capabilities in Framework for Responsible and Inclusive Land-Intensive Agricultural Investments (FRILIA) alongside rigorous project assurance to turn investments into food security.",
    stats: [
      { label: "Land Safeguards", value: "100%", detail: "FRILIA and World Bank ESS5 compliance on verified sites" },
      { label: "Farmer Aggregation", value: "250k+", detail: "Smallholders mapped and verified across state value chains" },
      { label: "Loss Reduction", value: "35%", detail: "Targeted post-harvest losses reduction in priority value chains" },
    ],
    focusAreas: [
      {
        title: "Responsible Agricultural Land Investment (FRILIA)",
        description: "Operationalizing the Framework for Responsible and Inclusive Land-Intensive Agricultural Investments (FRILIA) to safeguard community land rights while de-risking private agribusiness investments.",
        highlights: ["FRILIA diagnostic assessments", "Free, Prior, and Informed Consent (FPIC) facilitation", "Community-investor partnership agreements"],
      },
      {
        title: "Special Agro-Industrial Processing Zones (SAPZ)",
        description: "Providing project assurance, environmental management, and transaction advisory for large-scale agro-processing corridors and rural agro-hubs.",
        highlights: ["Agro-hub infrastructure readiness", "Supply shed logistics structuring", "Third-party civil works inspection"],
      },
      {
        title: "Smallholder Aggregation & Outgrower Schemes",
        description: "Structuring commercial anchor-farmer models, farmer cooperative aggregation, and transparent digital input delivery systems.",
        highlights: ["Farmer database biometric verification", "Input subsidy delivery tracking", "Contract farming governance"],
      },
      {
        title: "Climate-Smart Agriculture & Irrigation Systems",
        description: "Mainstreaming drought-resistant agronomic practices, micro-irrigation systems, and community watershed management into regional programs.",
        highlights: ["Irrigation scheme performance audits", "Watershed impact assessments", "Soil and climate adaptation modeling"],
      },
    ],
    interventions: [
      "FRILIA Framework Diagnostics, Land Acquisition Audits & Resettlement Verification",
      "Third-Party Monitoring (TPM) of farmer input distribution and grant disbursements",
      "Feasibility studies and transaction advisory for commercial agro-processing investments",
      "Environmental and Social Management Plans (ESMP) for large irrigation schemes",
      "Project Management Office (PMO) support for state-level Agricultural Development Programmes (ADPs)",
      "Independent verification of agricultural Disbursement-Linked Indicators (DLIs)",
    ],
    serviceCapabilities: [
      "Land Governance and Investment Advisory",
      "Environmental and Social Safeguards",
      "Project Assurance Services (IVA)",
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
      "Implementation Support",
    ],
    expertRoles: [
      "Development Economists",
      "Land Governance Experts",
      "Environmental Experts",
      "Social Development Specialists",
      "Project Management Specialists",
    ],
    targetClients: [
      "Federal & State Ministries of Agriculture and Food Security",
      "African Development Bank (AfDB) & World Bank Agri Portfolios",
      "International Commercial Agribusinesses & Impact Investors",
      "International Fund for Agricultural Development (IFAD) & FAO",
    ],
    relatedSectors: ["land-administration-governance", "climate-change-sustainability", "water-sanitation-hygiene"],
  },
  {
    id: "health-systems-strengthening",
    heroImage: "/healthSystemStrengthening.webp",
    num: "03",
    category: "human-capital",
    categoryLabel: "Human Capital & Social Inclusion",
    title: "Health Systems Strengthening",
    shortTitle: "Health Systems",
    tagline: "Building resilient healthcare institutions and accelerating primary health care delivery.",
    overview:
      "We partner with health ministries, global health funds, and bilateral donors to revitalize primary health care (PHC) networks, strengthen pharmaceutical supply chain fiduciary oversight, deploy digital health MIS, and independently verify clinical maternal and child health outcomes.",
    strategicContext:
      "Achieving Universal Health Coverage (UHC) requires overcoming chronic bottlenecks in facility readiness, medical commodity stockouts, fragmented health financing, and human resource retention in underserved communities. FSM acts as an agile implementation and verification partner to ensure every healthcare dollar translates into saved lives.",
    stats: [
      { label: "Facility Audits", value: "1,200+", detail: "Primary health centers audited for readiness and quality" },
      { label: "Verification Accuracy", value: "99.8%", detail: "Disbursement-Linked Indicator verification precision" },
      { label: "Supply Chain", value: "Zero Leakage", detail: "Fiduciary traceability for critical medical commodities" },
    ],
    focusAreas: [
      {
        title: "Primary Health Care (PHC) Revitalization",
        description: "Strengthening basic healthcare provisioning through facility readiness assessments, ward-level health governance, and emergency obstetric care protocols.",
        highlights: ["Ward health development committee diagnostics", "Basic Healthcare Provision Fund (BHCPF) compliance", "Clinical equipment verification"],
      },
      {
        title: "Medical Supply Chain & Cold Chain Assurance",
        description: "Establishing end-to-end fiduciary traceability, temperature-controlled logistics verification, and inventory control systems for vaccines and essential medicines.",
        highlights: ["Last-mile cold chain monitoring", "Pharmaceutical warehouse audits", "Anti-leakage distribution protocols"],
      },
      {
        title: "Health Financing & PFM for Health",
        description: "Designing sustainable subnational health insurance schemes, equity-driven resource allocation formulas, and performance-based financing mechanisms.",
        highlights: ["State health insurance enrollment verification", "Facility capitation fund audits", "Financial reporting transparency"],
      },
      {
        title: "Digital Health & Epidemic Surveillance",
        description: "Deploying interoperable electronic medical records (EMR), disease surveillance dashboards, and community health worker mobile reporting tools.",
        highlights: ["DHIS2 integration and data quality audits", "Early outbreak alert systems", "Mobile biometric patient registries"],
      },
    ],
    interventions: [
      "Independent Verification Agent (IVA) for health Disbursement-Linked Results (DLRs)",
      "Comprehensive Primary Health Care facility readiness surveys and spatial gap analysis",
      "Fiduciary oversight of donor commodity procurement and logistics distribution networks",
      "Results Delivery Unit (RDU) setup for State Ministries of Health leadership",
      "Beneficiary feedback and community scorecards on primary clinic service quality",
      "Environmental management plans for medical waste disposal and solarization of PHCs",
    ],
    serviceCapabilities: [
      "Project Assurance Services (IVA)",
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
      "Digital Transformation and Data Solutions",
      "Procurement Excellence and Fiduciary Services",
      "Capacity Development and Technical Assistance",
    ],
    expertRoles: [
      "Project Management Specialists",
      "Monitoring and Evaluation Experts",
      "Public Policy Specialists",
      "Financial Management Experts",
      "Environmental Experts",
    ],
    targetClients: [
      "National & Subnational Primary Health Care Development Agencies",
      "The Global Fund, Gavi, and Global Financing Facility (GFF)",
      "World Bank Human Capital & Health Portfolios",
      "WHO, UNICEF, and Private Healthcare Foundations",
    ],
    relatedSectors: ["social-protection", "womens-economic-empowerment", "water-sanitation-hygiene"],
  },
  {
    id: "education-skills-development",
    heroImage: "/educationAndSkillsDevelopment.webp",
    num: "04",
    category: "human-capital",
    categoryLabel: "Human Capital & Social Inclusion",
    title: "Education & Skills Development",
    shortTitle: "Education & Skills (TVET)",
    tagline: "Empowering youth, modernizing technical education, and tracking classroom learning gains.",
    overview:
      "FSM supports education ministries, universal basic education boards, and multilateral partners to modernize basic schooling, upgrade Technical and Vocational Education and Training (TVET) curricula, deploy educational MIS, and prepare youth for high-demand 21st-century careers.",
    strategicContext:
      "Africa is home to the world's youngest population. Unlocking this demographic dividend demands addressing the foundational learning crisis, keeping adolescent girls in school, and overhauling vocational curricula so vocational graduates match current private sector employer requirements.",
    stats: [
      { label: "Learning Assessments", value: "150k+", detail: "Foundational literacy and numeracy tests administered" },
      { label: "Curriculum Upgrades", value: "24 Trades", detail: "Modernized TVET programs aligned to industrial demands" },
      { label: "Infrastructure Verification", value: "3,500+", detail: "Classroom and laboratory construction projects audited" },
    ],
    focusAreas: [
      {
        title: "TVET Modernization & Apprenticeship Ecosystems",
        description: "Aligning vocational syllabi with industrial and technology sector needs through public-private partnership advisory and demand-driven skills incubation.",
        highlights: ["Dual-apprenticeship program frameworks", "Industry competency standards", "Digital fabrication and tech vocational courses"],
      },
      {
        title: "Universal Basic Education Delivery Acceleration",
        description: "Assisting subnational education boards to optimize teacher deployment, expand foundational literacy and numeracy, and eliminate ghost-worker leakages.",
        highlights: ["Teacher headcount biometric verifications", "Foundational literacy baseline evaluations", "School-based management committee training"],
      },
      {
        title: "Girls' Education & Gender Inclusion Initiatives",
        description: "Designing targeted scholarship, safe-school infrastructure, and conditional incentive programs to boost female school enrollment and completion.",
        highlights: ["Adolescent girls safe school audit", "WASH in schools verification", "Gender-sensitive pedagogical assessments"],
      },
      {
        title: "Educational Management Information Systems (EMIS)",
        description: "Building cloud-enabled, GPS-validated educational registries that track pupil enrollment, teacher attendance, and physical school infrastructure in real time.",
        highlights: ["GIS mapping of school assets", "Automated student retention analytics", "Real-time school feeding program monitoring"],
      },
    ],
    interventions: [
      "Labour market diagnostics to align TVET courses with high-growth regional industry demand",
      "Baseline and endline foundational learning assessments and early grade reading studies",
      "Third-party engineering verification of school building rehabilitation and laboratory fittings",
      "Independent verification of Disbursement-Linked Indicators (DLIs) for basic education reforms",
      "Safeguards, Grievance Redress Mechanisms (GRM), and Gender Inclusion audits in educational institutions",
    ],
    serviceCapabilities: [
      "Jobs and Economic Transformation Advisory",
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
      "Institutional Diagnostics and Organizational Development",
      "Project Assurance Services",
      "Digital Transformation and Data Solutions",
    ],
    expertRoles: [
      "Development Economists",
      "Public Policy Specialists",
      "Monitoring and Evaluation Experts",
      "Social Development Specialists",
      "Engineers",
    ],
    targetClients: [
      "Universal Basic Education Commission (UBEC) & State Boards (SUBEBs)",
      "National Board for Technical Education (NBTE)",
      "World Bank (e.g., AGILE, HOPE programs) & Global Partnership for Education",
      "FCDO, USAID, UNICEF, and Private Philanthropies",
    ],
    relatedSectors: ["womens-economic-empowerment", "private-sector-development", "digital-economy"],
  },
  {
    id: "infrastructure-development",
    heroImage: "/infrastructureDevelopment.webp",
    num: "05",
    category: "infrastructure-environment",
    categoryLabel: "Infrastructure & Environment",
    title: "Infrastructure Development",
    shortTitle: "Infrastructure & Transport",
    tagline: "Structuring bankable transport corridors, urban mobility, and high-integrity civil engineering works.",
    overview:
      "FSM advises transport ministries, highway authorities, port operators, and municipal governments on preparing bankable infrastructure transactions, executing technical engineering audits, and implementing rigorous Resettlement Action Plans (RAP) for major capital works.",
    strategicContext:
      "Closing Africa's infrastructure deficit requires balancing rapid capital deployment with strict quality assurance, transparent contractor procurement, and social safeguards compliance. FSM acts as an independent engineering verification agent and safeguards auditor to protect public and private capital.",
    stats: [
      { label: "Corridors Audited", value: "4,200 km", detail: "Federal highways and feeder roads quality-checked" },
      { label: "RAP Compliance", value: "100%", detail: "Zero unresolved community displacement grievances" },
      { label: "PPP Advisory", value: "$1.8B+", detail: "Infrastructure transactions supported across Africa" },
    ],
    focusAreas: [
      {
        title: "Highways, Bridges & Rural Feeder Roads",
        description: "Verifying engineering specifications, pavement quality, drainage structures, and contractor billing milestones on major arterial and agricultural access roads.",
        highlights: ["Non-destructive core testing audits", "Feeder road connectivity impact analysis", "Contractor milestone verification"],
      },
      {
        title: "Urban Mobility & Smart Transit Systems",
        description: "Advising metropolitan authorities on Bus Rapid Transit (BRT) concessions, urban light rail readiness, and integrated multimodal transport master planning.",
        highlights: ["Transit concession modeling", "Passenger demand surveys", "Urban traffic safety diagnostics"],
      },
      {
        title: "Ports, Inland Waterways & Logistics Hubs",
        description: "Structuring PPP transaction models for dry ports, container terminals, and riverine trade infrastructure to slash supply chain transit times.",
        highlights: ["Port concession agreement drafting", "Customs corridor facilitation", "Private terminal investor readiness"],
      },
      {
        title: "Resettlement Action Plans (RAP) & Social Audits",
        description: "Executing complex land acquisition compensation, livelihood restoration programs, and transparent grievance redress for Project-Affected Persons (PAPs).",
        highlights: ["Asset enumeration and valuation audits", "Vulnerable PAP assistance plans", "Post-resettlement socio-economic monitoring"],
      },
    ],
    interventions: [
      "Technical engineering audits and milestone certification for capital infrastructure loans",
      "Transaction advisory and bankability feasibility studies for highway concessions and toll roads",
      "Comprehensive Resettlement Action Plans (RAP), Stakeholder Engagement Plans (SEP), and ESIA",
      "Value-for-money procurement audits and FIDIC contract management reviews",
      "Geospatial GIS asset inventory of bridges, culverts, and road pavement deterioration",
    ],
    serviceCapabilities: [
      "Environmental and Social Safeguards",
      "PPP and Investment Facilitation Services",
      "Project Assurance Services",
      "Procurement Excellence and Fiduciary Services",
      "Digital Transformation and Data Solutions",
    ],
    expertRoles: [
      "Engineers",
      "Legal Experts",
      "Procurement Specialists",
      "Environmental Experts",
      "Land Governance Experts",
    ],
    targetClients: [
      "Federal & State Ministries of Works, Transport and Urban Planning",
      "Multilateral Development Banks (World Bank, AfDB, IsDB, AFC)",
      "Infrastructure Concession Regulatory Commissions (ICRC)",
      "Private Infrastructure Developers and Institutional Asset Managers",
    ],
    relatedSectors: ["energy-renewable-energy", "land-administration-governance", "climate-change-sustainability"],
  },
  {
    id: "private-sector-development",
    heroImage: "/privateSectorDevelopment.webp",
    num: "06",
    category: "economic-finance",
    categoryLabel: "Economic Growth & Finance",
    title: "Private Sector Development",
    shortTitle: "Private Sector Dev",
    tagline: "Unlocking MSME competitiveness, industrial clusters, and market system integration.",
    overview:
      "We support economic development agencies, challenge fund managers, and enterprise organizations to catalyze private enterprise growth, expand market access for SMEs, structure supplier development initiatives, and foster vibrant local supply chains.",
    strategicContext:
      "Micro, small, and medium enterprises represent over 90% of businesses and the vast majority of jobs in Africa. FSM deploys market systems development (MSD) methodologies and enterprise acceleration frameworks that dismantle barriers to market access, technology adoption, and capital.",
    stats: [
      { label: "Enterprises Supported", value: "18,000+", detail: "MSMEs trained, verified, and linked to growth capital" },
      { label: "Jobs Cataloged", value: "45,000+", detail: "Direct and indirect jobs verified through challenge funds" },
      { label: "Market Linkages", value: "85%", detail: "Enterprise survival rate after 24 months of intervention" },
    ],
    focusAreas: [
      {
        title: "MSME Acceleration & Business Development Services",
        description: "Designing tailored enterprise incubation curricula, financial record-keeping toolkits, and market linkage programs for growth-stage enterprises.",
        highlights: ["Enterprise diagnostic toolkits", "B2B linkage platforms", "Digital accounting adoption"],
      },
      {
        title: "Challenge Funds & Matching Grant Management",
        description: "Operating transparent grant allocation mechanisms, independent verification of business milestones, and impact evaluations for donor enterprise funds.",
        highlights: ["Competitive call-for-proposals design", "Milestone disbursement verification", "Anti-fraud beneficiary auditing"],
      },
      {
        title: "Industrial Clusters & Special Economic Zones (SEZs)",
        description: "Structuring shared infrastructure, common-facility workshops, and cluster governance models to elevate light manufacturing competitiveness.",
        highlights: ["Industrial cluster diagnostics", "Local content policy compliance", "Shared processing facility business models"],
      },
      {
        title: "Value Chain & Supplier Development Programs",
        description: "Connecting local suppliers to large corporate off-takers through quality standardization, certification readiness, and contract matchmaking.",
        highlights: ["Supplier quality readiness audits", "Corporate anchor supply chain mapping", "Commercial contract negotiation support"],
      },
    ],
    interventions: [
      "Enterprise ecosystem mapping and growth bottleneck diagnostics across key sectors",
      "Independent verification of beneficiary milestones for multi-million dollar SME grant schemes",
      "Design and implementation of youth and women-led entrepreneurship challenge funds",
      "Corporate-SME supply chain integration strategies and local content compliance frameworks",
      "Midterm and final impact evaluations of enterprise development initiatives",
    ],
    serviceCapabilities: [
      "Jobs and Economic Transformation Advisory",
      "Development Effectiveness Services",
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
      "Project Assurance Services",
      "Capacity Development and Technical Assistance",
    ],
    expertRoles: [
      "Development Economists",
      "Financial Management Experts",
      "Monitoring and Evaluation Experts",
      "Project Management Specialists",
      "Public Policy Specialists",
    ],
    targetClients: [
      "Small and Medium Enterprises Development Agencies (SMEDAN)",
      "Multilateral MSME Finance Projects (World Bank, AfDB)",
      "Bilateral Enterprise Programs (GIZ, FCDO, USAID)",
      "Private Chambers of Commerce and Corporate Foundations",
    ],
    relatedSectors: ["investment-promotion", "financial-inclusion", "womens-economic-empowerment"],
  },
  {
    id: "investment-promotion",
    heroImage: "/invesmentPromotion.webp",
    num: "07",
    category: "governance-digital",
    categoryLabel: "Governance & Digital",
    title: "Investment Promotion",
    shortTitle: "Investment Promotion",
    tagline: "Attracting sustainable capital, structuring bankable PPPs, and de-risking foreign and domestic direct investment.",
    overview:
      "FSM collaborates with federal and state Investment Promotion Agencies (IPAs), sovereign wealth funds, and private investors to package bankable pipeline projects, streamline one-stop investor clearance desks, and execute compelling global investment roadshows.",
    strategicContext:
      "Global institutional capital is eager to invest in African infrastructure and commercial opportunities, but projects often fail due to inadequate project preparation, murky legal regimes, and bureaucratic investor friction. FSM provides the project readiness (D-Ready) rigor required to make transactions financeable.",
    stats: [
      { label: "Deal Pipeline", value: "$2.4B+", detail: "Bankable transactions prepared and packaged for investors" },
      { label: "IPA Optimization", value: "14 States", detail: "Subnational investment promotion offices modernized" },
      { label: "Investor Turnaround", value: "60%", detail: "Reduction in licensing and land allocation wait times" },
    ],
    focusAreas: [
      {
        title: "Investment Promotion Agency (IPA) Modernization",
        description: "Transforming subnational investment agencies into proactive, high-efficiency deal-facilitation hubs with digital One-Stop Investment Desks.",
        highlights: ["One-Stop shop process re-engineering", "Investor CRM tracking systems", "IPA staff capacity and investor servicing training"],
      },
      {
        title: "Project Preparation & Bankability Feasibility",
        description: "Conducting rigorous market demand studies, financial modeling, legal viability reviews, and value-for-money assessments for public-private partnerships.",
        highlights: ["Pre-feasibility and bankability studies", "Financial model risk stress-testing", "Project Information Memoranda (PIM) authoring"],
      },
      {
        title: "Investor Roadshows & Deal Packaging",
        description: "Curating high-level investor conferences, bilateral deal-rooms, and sector-focused transaction roundtables with international financiers.",
        highlights: ["Deal-room transaction structuring", "Targeted investor outreach & matching", "Due diligence pack preparation"],
      },
      {
        title: "Aftercare & Investor Retention Mechanisms",
        description: "Establishing systematic grievance resolution and policy advocacy desks to resolve operational headwinds and retain anchor corporate investors.",
        highlights: ["Investor sentiment surveys", "Operational issue escalation protocols", "Re-investment incentive frameworks"],
      },
    ],
    interventions: [
      "Subnational investment readiness assessments and institutional diagnostics of state IPAs",
      "Preparation of bankable project dossiers and transaction advisory for priority PPP projects",
      "Structuring of concession agreements, commercial leases, and joint venture frameworks",
      "Design and deployment of digital investor tracking portals and automated permit systems",
      "Facilitation of subnational and national economic summits and transaction deal-rooms",
    ],
    serviceCapabilities: [
      "PPP and Investment Facilitation Services",
      "Jobs and Economic Transformation Advisory",
      "Governance and Public Sector Reform",
      "Development Effectiveness Services",
      "Project Assurance Services",
    ],
    expertRoles: [
      "Financial Management Experts",
      "Legal Experts",
      "Development Economists",
      "Public Policy Specialists",
      "Communication Experts",
    ],
    targetClients: [
      "National & State Investment Promotion Agencies (NIPC, State IPAs)",
      "Sovereign Wealth Funds & Infrastructure Funds",
      "International Finance Corporation (IFC) & Multilateral DFIs",
      "Private Equity Firms and International Institutional Investors",
    ],
    relatedSectors: ["governance-public-administration", "private-sector-development", "infrastructure-development"],
  },
  {
    id: "digital-economy",
    heroImage: "/digitalEconomy.webp",
    num: "08",
    category: "governance-digital",
    categoryLabel: "Governance & Digital",
    title: "Digital Economy",
    shortTitle: "Digital Economy & Tech",
    tagline: "Accelerating digital public infrastructure, enterprise cloud transformation, and real-time data governance.",
    overview:
      "FSM assists governments, development banks, and tech ecosystems to build robust digital public infrastructure (DPI), deploy cloud-native project management systems, establish Development Data Labs, and leverage predictive analytics for evidence-based decision-making.",
    strategicContext:
      "The digital revolution provides Africa with a generational opportunity to leapfrog legacy constraints in public administration and commerce. However, fragmented data silos, low digital literacy, and vendor lock-in often stall initiatives. FSM brings deep technical and policy expertise to ensure digital investments deliver measurable public value.",
    stats: [
      { label: "Systems Deployed", value: "45+", detail: "Custom MIS, dashboards, and portals operational across agencies" },
      { label: "Data Quality", value: "99.1%", detail: "Validated DQA score across automated statistical pipelines" },
      { label: "Asset Geocoding", value: "100k+", detail: "Public schools, health centers, and infrastructure points mapped" },
    ],
    focusAreas: [
      {
        title: "Digital Public Infrastructure (DPI) & e-Governance",
        description: "Architecting citizen-facing digital service portals, unified public registries, and interoperable government data exchange layers.",
        highlights: ["G2C / G2B portal engineering", "National ID & digital credential integration", "Open standards and API architecture"],
      },
      {
        title: "Geospatial Intelligence & GIS Infrastructure Mapping",
        description: "Deploying high-resolution satellite imagery, drone surveys, and GIS mapping to locate public assets and detect real-time infrastructure maintenance needs.",
        highlights: ["Geospatial baseline cadasters", "Mobile field enumerator tracking", "Satellite vegetation and flood risk overlays"],
      },
      {
        title: "Development Data Labs & AI Analytics",
        description: "Designing predictive machine learning models, automated anomaly detection for public financial flows, and real-time executive dashboarding.",
        highlights: ["Real-time disbursement tracking algorithms", "Predictive project delay warning models", "Automated executive KPI scorecards"],
      },
      {
        title: "Data Governance, Security & Interoperability",
        description: "Formulating subnational data protection policies, cybersecurity protocols, and institutional capacity building for statistical and IT personnel.",
        highlights: ["Data Protection Regulation compliance", "Statistical capacity development workshops", "Data quality assurance (DQA) frameworks"],
      },
    ],
    interventions: [
      "Custom development of project monitoring and disbursement tracking platforms for donor portfolios",
      "Comprehensive Data Quality Assessments (DQA) for national and subnational statistical systems",
      "Geospatial mapping and spatial accessibility analysis of public schools, clinics, and roads",
      "Design of digital delivery tracking platforms for Governors' Policy and Delivery Units",
      "Capacity training programs for public sector software engineers and data analysts",
    ],
    serviceCapabilities: [
      "Digital Transformation and Data Solutions",
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
      "Implementation Support",
      "Capacity Development and Technical Assistance",
      "Development Effectiveness Services",
    ],
    expertRoles: [
      "Data Scientists",
      "ICT Professionals",
      "Monitoring and Evaluation Experts",
      "Project Management Specialists",
      "Public Policy Specialists",
    ],
    targetClients: [
      "Ministries of Communications, Innovation & Digital Economy",
      "National Information Technology Development Agencies (NITDA)",
      "World Bank Digital Development Global Practice",
      "Tech Incubators, Telecom Operators, and FinTech Consortiums",
    ],
    relatedSectors: ["governance-public-administration", "financial-inclusion", "education-skills-development"],
  },
  {
    id: "climate-change-sustainability",
    heroImage: "/climateChangeAndSustainability.webp",
    num: "09",
    category: "infrastructure-environment",
    categoryLabel: "Infrastructure & Environment",
    title: "Climate Change & Sustainability",
    shortTitle: "Climate & Sustainability",
    tagline: "Mainstreaming climate adaptation, disaster risk management, and international ESG standards.",
    overview:
      "FSM supports governments, multilateral development banks, and corporate sponsors to design climate-resilient programs, prepare green climate fund proposals, conduct environmental and social safeguards (ESIA/ESMP), and monitor ecological restoration projects across Africa.",
    strategicContext:
      "African nations are disproportionately vulnerable to climate shocks, from desertification in the Sahel to catastrophic coastal flooding and agricultural disruptions. FSM bridges the gap between international climate finance mechanisms and on-the-ground project execution with verifiable ecological outcomes.",
    stats: [
      { label: "ESIA Audits", value: "350+", detail: "Major industrial and civil projects cleared for safeguards" },
      { label: "Erosion Watersheds", value: "45+", detail: "Critical gullies and catchments remediated and monitored" },
      { label: "IFC Compliance", value: "100%", detail: "Conformance to IFC Performance Standards and World Bank ESS" },
    ],
    focusAreas: [
      {
        title: "Climate Adaptation & Disaster Risk Management (DRM)",
        description: "Developing shock-responsive municipal plans, early-warning flood mechanisms, and community resilience programs in climate-vulnerable zones.",
        highlights: ["Community flood vulnerability mapping", "Early warning system protocols", "Post-disaster recovery program design"],
      },
      {
        title: "Environmental & Social Impact Assessments (ESIA)",
        description: "Conducting baseline ecological surveys, biodiversity action plans, and cumulative environmental impact evaluations aligned to international standards.",
        highlights: ["World Bank ESS1-ESS10 compliance", "IFC Performance Standards benchmarking", "Air, water, and soil baseline testing"],
      },
      {
        title: "Climate Finance Readiness & Carbon Markets",
        description: "Preparing bankable proposals for the Green Climate Fund (GCF), Adaptation Fund, and structuring verifiable carbon offset and reforestation programs.",
        highlights: ["GCF funding proposal authoring", "Carbon credit MRV (Measurement, Reporting, Verification)", "Article 6 Paris Agreement compliance"],
      },
      {
        title: "Ecological Remediation & Watershed Restoration",
        description: "Providing independent verification and engineering oversight for gully erosion remediation, afforestation, and sustainable land management projects.",
        highlights: ["Gully stabilization civil audits", "Great Green Wall tree survival rate monitoring", "Wetland conservation governance"],
      },
    ],
    interventions: [
      "Preparation of comprehensive Environmental and Social Management Frameworks (ESMF) and ESMPs",
      "Third-Party Monitoring (TPM) of ecological remediation and landscape restoration initiatives",
      "Institutional climate risk vulnerability assessments for coastal and riverine state governments",
      "Design of Grievance Redress Mechanisms (GRM) for natural resource management projects",
      "Corporate ESG advisory, sustainability reporting, and IFC safeguard readiness audits",
    ],
    serviceCapabilities: [
      "Environmental and Social Safeguards",
      "Crisis Resilience and Adaptive Development Services",
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
      "Digital Transformation and Data Solutions",
      "Project Assurance Services",
    ],
    expertRoles: [
      "Environmental Experts",
      "Social Development Specialists",
      "Engineers",
      "Data Scientists",
      "Legal Experts",
    ],
    targetClients: [
      "Federal & State Ministries of Environment and Water Resources",
      "Green Climate Fund (GCF) & Global Environment Facility (GEF)",
      "World Bank Environment, Natural Resources & Blue Economy Practice",
      "Private Renewable Energy Developers and Mining Corporations",
    ],
    relatedSectors: ["agriculture-rural-development", "energy-renewable-energy", "water-sanitation-hygiene"],
  },
  {
    id: "social-protection",
    heroImage: "/publicProtection.webp",
    num: "10",
    category: "human-capital",
    categoryLabel: "Human Capital & Social Inclusion",
    title: "Social Protection",
    shortTitle: "Social Protection",
    tagline: "Strengthening adaptive safety nets, transparent cash transfers, and unified social registries.",
    overview:
      "We advise governments and development partners on designing shock-responsive social safety nets, maintaining unified social registries, deploying mobile biometric verification, and independently auditing social cash transfers to protect Africa's most vulnerable populations.",
    strategicContext:
      "Macroeconomic volatility, inflation, and climate events drive millions of households toward acute vulnerability. Effective social protection requires robust social registries that ensure inclusion, eliminate duplicate records, and maintain airtight fiduciary integrity across disbursements.",
    stats: [
      { label: "Beneficiaries Audited", value: "2.8M+", detail: "Vulnerable households verified in national social registries" },
      { label: "Disbursement Integrity", value: "99.9%", detail: "Zero phantom beneficiaries on verified payment rosters" },
      { label: "Grievance Resolution", value: "94%", detail: "Timely resolution of community assistance complaints" },
    ],
    focusAreas: [
      {
        title: "Unified Social Registries (USR) & Biometric Targeting",
        description: "Assisting subnational authorities to build, update, and clean community-based targeting databases using biometric validation and proxy means testing.",
        highlights: ["Proxy Means Testing (PMT) calibration", "Community-based targeting validation", "Duplicate record scrubbing algorithms"],
      },
      {
        title: "Conditional & Unconditional Cash Transfer Assurance",
        description: "Acting as Independent Verification Agent (IVA) for payment delivery channels, digital mobile money transfers, and payment agent compliance.",
        highlights: ["Payment service provider (PSP) audits", "Payment reconciliation verification", "Beneficiary spot-check home visits"],
      },
      {
        title: "Shock-Responsive & Adaptive Safety Nets",
        description: "Designing trigger mechanisms, contingency financing protocols, and rapid emergency cash rollout systems for drought and flood emergencies.",
        highlights: ["Disaster-linked cash transfer triggers", "Rapid household registration protocols", "Contingency funding draw-down rules"],
      },
      {
        title: "Grievance Redress Mechanisms (GRM) & Citizen Voice",
        description: "Deploying toll-free hotlines, community grievance committees, and automated case tracking software to ensure citizen rights and accountability.",
        highlights: ["Multi-channel grievance ticketing", "Community committee training", "Gender-sensitive grievance escalation"],
      },
    ],
    interventions: [
      "Independent verification of Disbursement-Linked Indicators (DLIs) for national safety net programs",
      "Third-Party Monitoring (TPM) of monthly cash distribution at remote payment collection points",
      "Comprehensive data quality audits and vulnerability ranking calibration for social registries",
      "Process evaluations and longitudinal impact assessments of household livelihood graduation programs",
      "Community scorecards and citizen feedback studies on social safety net equity and timeliness",
    ],
    serviceCapabilities: [
      "Project Assurance Services (IVA)",
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
      "Digital Transformation and Data Solutions",
      "Development Effectiveness Services",
      "Capacity Development and Technical Assistance",
    ],
    expertRoles: [
      "Monitoring and Evaluation Experts",
      "Social Development Specialists",
      "Development Economists",
      "Financial Management Experts",
      "Data Scientists",
    ],
    targetClients: [
      "National Social Safety Nets Coordinating Offices (NASSCO)",
      "Ministries of Humanitarian Affairs and Poverty Alleviation",
      "World Bank Social Protection and Jobs Global Practice",
      "UNICEF, World Food Programme (WFP), and Bilateral Donors",
    ],
    relatedSectors: ["womens-economic-empowerment", "health-systems-strengthening", "financial-inclusion"],
  },
  {
    id: "womens-economic-empowerment",
    heroImage: "/womensEmpowerment.webp",
    num: "11",
    category: "human-capital",
    categoryLabel: "Human Capital & Social Inclusion",
    title: "Women's Economic Empowerment",
    shortTitle: "Women's Empowerment",
    tagline: "Closing the economic gender gap, scaling female enterprise, and institutionalizing GESI safeguards.",
    overview:
      "FSM collaborates with gender ministries, DFIs, and development partners to design and evaluate women's entrepreneurship programs, structure gender-smart financing facilities, integrate Gender and Social Inclusion (GESI) into infrastructure, and combat economic gender disparities.",
    strategicContext:
      "When African women thrive economically, households, communities, and national GDP expand exponentially. Yet female entrepreneurs face structural barriers in collateral requirements, land ownership, and market access. FSM embeds transformative gender frameworks into high-impact programs.",
    stats: [
      { label: "Women MSMEs", value: "65,000+", detail: "Female-owned enterprises supported and verified for financing" },
      { label: "GESI Mainstreaming", value: "100%", detail: "Gender action plan compliance across audited partner programs" },
      { label: "Savings Groups", value: "4,500+", detail: "Village Savings and Loan Associations (VSLAs) tracked and strengthened" },
    ],
    focusAreas: [
      {
        title: "Women-Led MSME Financing & Capital Access",
        description: "Designing non-traditional credit scoring, cash-flow financing models, and matching grant windows specifically tailored for female entrepreneurs.",
        highlights: ["Collateral-free credit models", "Women entrepreneur challenge funds", "Financial literacy & digital banking training"],
      },
      {
        title: "Gender & Social Inclusion (GESI) Safeguards",
        description: "Auditing large-scale public investment and infrastructure projects to guarantee equal employment quotas, fair wages, and zero harassment.",
        highlights: ["Gender-based violence (GBV) risk assessments", "Worker code of conduct enforcement", "Safe working environment verification"],
      },
      {
        title: "Village Savings and Loan Associations (VSLAs) & Cooperatives",
        description: "Transitioning informal community savings groups into formal cooperative societies linked to institutional microfinance institutions.",
        highlights: ["Digital VSLA ledger adoption", "Cooperative governance restructuring", "Micro-insurance product integration"],
      },
      {
        title: "Gender-Responsive Policy & Budgeting (GRPB)",
        description: "Advising federal and state budget offices on allocating expenditure lines that directly address gender gaps in education, agriculture, and health.",
        highlights: ["Subnational gender budget audits", "Gender-disaggregated data frameworks", "Policy reform advocacy roadmaps"],
      },
    ],
    interventions: [
      "Gender diagnostics and comprehensive Gender Action Plans (GAPs) for donor-funded portfolios",
      "Independent verification of female beneficiary disbursements in agricultural and SME initiatives",
      "Assessment of Gender-Based Violence (GBV) prevention mechanisms on major civil works projects",
      "Evaluation of women's economic empowerment graduation and digital financial literacy programs",
      "Leadership and technical coaching for female directors across public sector ministries",
    ],
    serviceCapabilities: [
      "Environmental and Social Safeguards",
      "Jobs and Economic Transformation Advisory",
      "Development Effectiveness Services",
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
      "Capacity Development and Technical Assistance",
    ],
    expertRoles: [
      "Gender Specialists",
      "Social Development Specialists",
      "Development Economists",
      "Public Policy Specialists",
      "Communication Experts",
    ],
    targetClients: [
      "Federal & State Ministries of Women Affairs and Social Development",
      "World Bank Nigeria for Women Project (NFWP) & Regional Gender Programs",
      "UN Women and African Development Bank Affirmative Finance Action (AFAWA)",
      "Bilateral Gender Equality Portfolios and Philanthropic Foundations",
    ],
    relatedSectors: ["social-protection", "financial-inclusion", "private-sector-development"],
  },
  {
    id: "land-administration-governance",
    heroImage: "/landAdministrationAndGovernance.webp",
    num: "12",
    category: "economic-finance",
    categoryLabel: "Economic Growth & Finance",
    title: "Land Administration & Governance",
    shortTitle: "Land Governance",
    tagline: "Securing property rights, modernizing digital cadasters, and operationalizing FRILIA for inclusive growth.",
    overview:
      "FSM advises land registries, state survey departments, and institutional investors on digitizing geographic information systems (GIS), conducting systematic land titling, auditing land acquisitions, and implementing the Framework for Responsible and Inclusive Land-Intensive Agricultural Investments (FRILIA).",
    strategicContext:
      "Clear, defensible land rights are the bedrock of agricultural productivity, infrastructure development, and financial collateral. Yet across Africa, customary rights often clash with statutory leases, leading to protracted disputes and stalled investments. FSM provides the technical bridge for equitable, bankable land governance.",
    stats: [
      { label: "FRILIA Assessments", value: "28 States", detail: "Statewide responsible land investment diagnostic reviews completed" },
      { label: "Parcel Titling", value: "180k+", detail: "Cadastral parcels surveyed, validated, and entered into digital GIS" },
      { label: "Dispute Resolution", value: "88%", detail: "Amicable community consensus reached in disputed project areas" },
    ],
    focusAreas: [
      {
        title: "FRILIA Framework Implementation & Land Audits",
        description: "Conducting diagnostic reviews, responsible land acquisition audits, and community compensation verifications under the World Bank FRILIA principles.",
        highlights: ["FRILIA baseline diagnostic studies", "Customary title documentation", "Model land lease agreement drafting"],
      },
      {
        title: "Digital Cadaster & Geographic Information Systems (GIS)",
        description: "Modernizing state land registries through automated Geographic Information Systems (GIS), drone aerial photogrammetry, and cloud databases.",
        highlights: ["State GIS cadaster migration", "High-precision drone orthophoto surveying", "Automated Certificate of Occupancy (C of O) processing"],
      },
      {
        title: "Systematic Land Titling & Registration (SLTR)",
        description: "Deploying rapid community titling methodologies to demarcate, adjudicate, and register customary land holdings at scale.",
        highlights: ["Fit-for-purpose land administration", "Community boundary demarcation", "Affordable smallholder land certificates"],
      },
      {
        title: "Land Dispute Resolution & FPIC Processes",
        description: "Designing structured Free, Prior, and Informed Consent (FPIC) consultations and alternative dispute resolution (ADR) panels for communal lands.",
        highlights: ["Multi-stakeholder community forums", "Alternative dispute resolution frameworks", "Traditional ruler engagement charters"],
      },
    ],
    interventions: [
      "Comprehensive FRILIA institutional assessments and policy roadmap drafting for state governments",
      "Third-party audits of compulsory land acquisition, compensation payments, and resettlement sites",
      "Systematic field enumeration and spatial mapping of commercial agricultural investment concessions",
      "Institutional restructuring and technology migration for subnational land registry bureaus",
      "Community land governance sensitisation and legal literacy workshops for rural landholders",
    ],
    serviceCapabilities: [
      "Land Governance and Investment Advisory",
      "Environmental and Social Safeguards",
      "Digital Transformation and Data Solutions",
      "Governance and Public Sector Reform",
      "Project Assurance Services",
    ],
    expertRoles: [
      "Land Governance Experts",
      "Legal Experts",
      "Engineers",
      "Social Development Specialists",
      "Data Scientists",
    ],
    targetClients: [
      "State Geographic Information System (GIS) Agencies and Lands Ministries",
      "World Bank Agriculture, Urban & Land Global Practices",
      "Commercial Agribusiness Developers and Industrial Park Operators",
      "Federal Ministry of Housing and Urban Development",
    ],
    relatedSectors: ["agriculture-rural-development", "infrastructure-development", "governance-public-administration"],
  },
  {
    id: "financial-inclusion",
    heroImage: "/financialInclusion.webp",
    num: "13",
    category: "economic-finance",
    categoryLabel: "Economic Growth & Finance",
    title: "Financial Inclusion",
    shortTitle: "Financial Inclusion",
    tagline: "Expanding digital financial services, agent banking networks, and credit access for the unbanked.",
    overview:
      "FSM supports central banks, microfinance institutions, fintechs, and donor programs to formulate financial inclusion strategies, verify agent banking expansion, audit credit guarantee facilities, and eliminate systemic barriers preventing rural populations from entering the formal financial system.",
    strategicContext:
      "Access to formal financial services is a critical prerequisite for escaping poverty, weathering health emergencies, and scaling micro-enterprises. FSM helps stakeholders leverage mobile money, agent networks, and alternative credit data to sustainably bank the last mile.",
    stats: [
      { label: "Agent Outposts", value: "35,000+", detail: "Rural point-of-sale and agent banking locations verified" },
      { label: "Account Openings", value: "1.2M+", detail: "Unbanked adults linked to tiered KYC digital bank accounts" },
      { label: "Credit Guarantees", value: "$45M+", detail: "De-risked MSME loan portfolios verified for compliance" },
    ],
    focusAreas: [
      {
        title: "Agent Banking & Last-Mile Cash-In/Cash-Out (CICO)",
        description: "Assessing rural agent viability, liquidity management challenges, and regulatory compliance to expand cash access points in underserved wards.",
        highlights: ["Agent density and proximity mapping", "Liquidity rebalancing diagnostics", "Point-of-Sale (POS) terminal uptime tracking"],
      },
      {
        title: "Digital Financial Services (DFS) & Tiered KYC",
        description: "Promoting mobile wallets, USSD banking interfaces, and simplified biometric identity verification for informal traders and farmers.",
        highlights: ["Tier-1 KYC account onboarding verification", "USSD user interface accessibility studies", "Interoperable merchant QR payment adoption"],
      },
      {
        title: "MSME Credit De-risking & Guarantee Schemes",
        description: "Conducting independent verification of lender portfolios under national credit guarantee funds and interest-drawdown facilities.",
        highlights: ["Credit guarantee portfolio audits", "Non-performing loan (NPL) risk factor diagnostics", "First-loss facility compliance reviews"],
      },
      {
        title: "Financial Literacy & Consumer Protection",
        description: "Developing localized financial education curricula, debt management advisories, and predatory lending consumer grievance hotlines.",
        highlights: ["Community financial literacy campaigns", "Consumer protection regulatory audits", "Transparency in loan pricing verification"],
      },
    ],
    interventions: [
      "Subnational financial inclusion diagnostics and geospatial mapping of financial access points",
      "Independent verification of Disbursement-Linked Indicators (DLIs) for financial sector strengthening loans",
      "Operational audits of micro-credit disbursement and repayment tracking across beneficiary cooperatives",
      "Evaluation of digital financial literacy campaigns for rural women and smallholder farmers",
      "Regulatory impact assessments for open banking and fintech sandbox participants",
    ],
    serviceCapabilities: [
      "Jobs and Economic Transformation Advisory",
      "Project Assurance Services (IVA)",
      "Digital Transformation and Data Solutions",
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
      "Development Effectiveness Services",
    ],
    expertRoles: [
      "Financial Management Experts",
      "Development Economists",
      "ICT Professionals",
      "Monitoring and Evaluation Experts",
      "Public Policy Specialists",
    ],
    targetClients: [
      "Central Bank Financial Inclusion Secretariats",
      "Microfinance Banks and Digital Payment Service Providers",
      "World Bank Finance, Competitiveness & Innovation (FCI) Practice",
      "Fintech Innovators, Mobile Network Operators, and DFIs",
    ],
    relatedSectors: ["digital-economy", "womens-economic-empowerment", "private-sector-development"],
  },
  {
    id: "water-sanitation-hygiene",
    heroImage: "/waterAndHygiene.webp",
    num: "14",
    category: "infrastructure-environment",
    categoryLabel: "Infrastructure & Environment",
    title: "Water, Sanitation & Hygiene (WASH)",
    shortTitle: "WASH (Water & Sanitation)",
    tagline: "Sustainable municipal water utilities, rural borehole networks, and community-led total sanitation.",
    overview:
      "FSM collaborates with state water corporations, donor programs, and local councils to expand safe drinking water access, reduce non-revenue water (NRW), verify Open Defecation Free (ODF) communities, and manage environmental safeguards for major water treatment infrastructure.",
    strategicContext:
      "Access to clean water and dignified sanitation is essential for human capital development, child survival, and economic productivity. FSM combines technical engineering inspections, utility financial turnaround advisory, and community mobilization verification to ensure WASH investments endure.",
    stats: [
      { label: "Water Points Monitored", value: "8,500+", detail: "Solar boreholes and handpumps GPS-mapped and functionality-tested" },
      { label: "ODF Communities", value: "1,400+", detail: "Villages independently verified as Open Defecation Free" },
      { label: "Utility NRW Reduction", value: "28%", detail: "Commercial and physical water loss reduction in partner cities" },
    ],
    focusAreas: [
      {
        title: "Urban Water Utility Turnaround & Non-Revenue Water",
        description: "Conducting tariff modeling, customer enumeration, and leak detection audits to return municipal water boards to financial and operational solvency.",
        highlights: ["Non-revenue water (NRW) diagnostic audits", "Customer metering and billing automation", "Water utility corporate governance reform"],
      },
      {
        title: "Rural Water Supply & Solar-Powered Schemes",
        description: "Implementing real-time GPS functionality tracking, community maintenance committees, and solar pumping conversions for rural boreholes.",
        highlights: ["Solar water borehole civil engineering audits", "Community Water Association (WASHCOM) training", "Water quality microbiological laboratory testing"],
      },
      {
        title: "Community-Led Total Sanitation (CLTS) & ODF Verification",
        description: "Executing third-party field certification of community sanitation milestones to validate open defecation eradication claims.",
        highlights: ["Independent ODF protocol verification", "Institutional latrine construction audits", "Hygiene behavior change communications tracking"],
      },
      {
        title: "WASH in Schools & Healthcare Facilities",
        description: "Ensuring gender-segregated sanitation, clean running water, and menstrual hygiene facilities in primary schools and health centers.",
        highlights: ["School WASH facility readiness assessments", "Infection prevention water audits in PHCs", "Safe wastewater and effluent disposal monitoring"],
      },
    ],
    interventions: [
      "Third-Party Monitoring (TPM) of rural water points using mobile GIS and water quality test kits",
      "Independent Verification Agent (IVA) for National WASH Sector Reform (e.g. SURWASH) indicators",
      "Institutional diagnostic reviews, tariff restructuring, and business plans for State Water Boards",
      "Environmental and Social Impact Assessments (ESIA) for dams, treatment plants, and distribution mains",
      "Citizen scorecards and water consumer satisfaction evaluations",
    ],
    serviceCapabilities: [
      "Project Assurance Services (IVA)",
      "Monitoring, Evaluation, Accountability and Learning (MEAL)",
      "Environmental and Social Safeguards",
      "Institutional Diagnostics and Organizational Development",
      "Digital Transformation and Data Solutions",
    ],
    expertRoles: [
      "Engineers",
      "Environmental Experts",
      "Monitoring and Evaluation Experts",
      "Social Development Specialists",
      "Financial Management Experts",
    ],
    targetClients: [
      "State Water Agencies & Rural Water Supply and Sanitation Agencies (RUWASSA)",
      "Federal Ministry of Water Resources and Sanitation",
      "World Bank Water Global Practice (e.g. SURWASH program)",
      "UNICEF, WaterAid, and Bilateral Water Sector Donors",
    ],
    relatedSectors: ["health-systems-strengthening", "climate-change-sustainability", "infrastructure-development"],
  },
  {
    id: "energy-renewable-energy",
    heroImage: "/energyAndRenewableEnergy.webp",
    num: "15",
    category: "infrastructure-environment",
    categoryLabel: "Infrastructure & Environment",
    title: "Energy & Renewable Energy",
    shortTitle: "Energy & Renewables",
    tagline: "Accelerating off-grid solar mini-grids, clean energy transitions, and power utility commercial viability.",
    overview:
      "We advise rural electrification agencies, independent power producers (IPPs), and multilateral financiers on structuring bankable clean energy PPPs, executing Independent Verification Agent (IVA) audits for solar mini-grids, and preparing power sector distribution turnarounds.",
    strategicContext:
      "Reliable and affordable electricity is the single greatest catalyst for industrialization and poverty alleviation in Africa. Bridging the energy access gap requires combining off-grid decentralized renewable energy (DRE) with grid stability, private developer capital, and rigorous verification of performance-based subsidies.",
    stats: [
      { label: "Mini-Grids Verified", value: "450+", detail: "Solar mini-grid sites verified for Results-Based Financing" },
      { label: "Connections Audited", value: "220k+", detail: "Productive-use and household clean electricity connections" },
      { label: "Clean Energy RBF", value: "$85M+", detail: "Multilateral subsidy disbursements independently validated" },
    ],
    focusAreas: [
      {
        title: "Solar Mini-Grids & Off-Grid Electrification",
        description: "Acting as Independent Verification Agent (IVA) to inspect battery storage, solar PV capacity, distribution lines, and smart meter customer connections.",
        highlights: ["Results-Based Financing (RBF) connection verification", "Solar mini-grid technical compliance audits", "Customer end-use productive appliance audits"],
      },
      {
        title: "Utility Turnaround & Distribution Modernization",
        description: "Advising distribution companies (DisCos) and regulators on commercial loss reduction, feeder-level metering, and tariff cost-reflectivity.",
        highlights: ["Aggregate Technical, Commercial and Collection (ATC&C) loss audits", "Smart feeder metering deployment tracking", "Power purchase agreement (PPA) review"],
      },
      {
        title: "Clean Cooking & Distributed Energy Systems",
        description: "Designing market facilitation models and verification frameworks for clean cookstoves, bio-digesters, and solar home systems (SHS).",
        highlights: ["SHS distributor sales and warranty verification", "Clean cooking adoption surveys", "Carbon credit offset monitoring for cookstoves"],
      },
      {
        title: "Commercial & Industrial (C&I) Solar IPP Advisory",
        description: "Assisting commercial industrial off-takers and IPP developers with bankability feasibility, environmental permits, and concession structuring.",
        highlights: ["C&I solar feasibility studies", "Interconnection and grid-tie compliance reviews", "Concession and lease agreement transaction advisory"],
      },
    ],
    interventions: [
      "Independent Verification Agent (IVA) for World Bank and AfDB rural electrification programs (e.g. NEP/DARE)",
      "Technical engineering due diligence and quality assurance of solar mini-grid installations",
      "Environmental and Social Management Plans (ESMP) and battery recycling safety protocols",
      "Beneficiary surveys measuring productive use of energy (PUE) impact on rural micro-enterprises",
      "Procurement assessments and value-for-money contract reviews for transmission expansion projects",
    ],
    serviceCapabilities: [
      "Project Assurance Services (IVA)",
      "PPP and Investment Facilitation Services",
      "Procurement Excellence and Fiduciary Services",
      "Environmental and Social Safeguards",
      "Digital Transformation and Data Solutions",
    ],
    expertRoles: [
      "Engineers",
      "Financial Management Experts",
      "Environmental Experts",
      "Monitoring and Evaluation Experts",
      "Legal Experts",
    ],
    targetClients: [
      "Rural Electrification Agency (REA) & Federal Ministry of Power",
      "World Bank Energy & Extractives Global Practice (NEP, DARE)",
      "African Development Bank (AfDB) Sustainable Energy Fund for Africa",
      "Private Solar Developers, Mini-Grid Concessionaires, and Impact Funds",
    ],
    relatedSectors: ["infrastructure-development", "climate-change-sustainability", "agriculture-rural-development"],
  },
];

export const sectorCategories = [
  { id: "all", label: "All Sectors", count: 15 },
  { id: "governance-digital", label: "Governance & Digital", count: 3 },
  { id: "economic-finance", label: "Economic Growth & Finance", count: 4 },
  { id: "human-capital", label: "Human Capital & Social Inclusion", count: 4 },
  { id: "infrastructure-environment", label: "Infrastructure & Environment", count: 4 },
] as const;

export function getAllSectors(): SectorItem[] {
  return sectorsData;
}

export function getSectorBySlug(slug: string): SectorItem | undefined {
  return sectorsData.find((s) => s.id === slug);
}

export function getSectorsByCategory(category: SectorItem["category"]): SectorItem[] {
  return sectorsData.filter((s) => s.category === category);
}
