export interface Practice {
  num: string;
  id: string;
  slug: string;
  title: string;
  cluster: "delivery" | "governance" | "innovation";
  clusterLabel: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  clientValue: string;
  relatedSectors: string[];
  article: {
    context: string[];
    scopeTitle: string;
    scopeDetails: string[];
    methodologyTitle: string;
    methodologyDetails: string[];
    impactTitle: string;
    impactSummary: string;
    impactDetails: string[];
  };
}

export const practicesData: Practice[] = [
  {
    num: "01",
    id: "expert-mobilization",
    slug: "expert-mobilization",
    title: "Technical Expert Mobilization & Professional Contracting",
    cluster: "delivery",
    clusterLabel: "Delivery, Assurance & MEAL",
    tagline: "Deploying integrated technical capability across Nigeria and Africa.",
    summary:
      "FSM Consulting Limited provides clients with more than individual consultants. We source, vet, mobilize, and manage integrated multidisciplinary capability tailored to the precise requirements of each assignment.",
    deliverables: [
      "International and regional technical expert sourcing",
      "National consultant deployment across all 36 Nigerian states and the FCT",
      "Multidisciplinary team formation and short/long-term contracting",
      "Embedded advisory services and Delivery Unit staffing",
      "Project Management Office surge capacity for urgent assignments",
      "Field team and enumerator mobilization with in-country orientation",
      "Technical team performance management and assignment coordination",
      "Counterpart capacity strengthening and peer knowledge transfer",
    ],
    clientValue:
      "Rapidly assemble vetted, high-caliber specialists with complete operational logistics support, eliminating procurement delays and administrative friction.",
    relatedSectors: [
      "Governance & Public Sector Institutional Reform",
      "Infrastructure & Public Works",
      "Health & Social Protection",
    ],
    article: {
      context: [
        "Development interventions and sovereign reform initiatives require high-caliber technical expertise configured precisely to local operational contexts. When implementation stalls, the primary constraint is rarely an absence of global knowledge, but rather the administrative friction and procurement bottlenecks involved in sourcing, vetting, and fielding multi-tier advisory teams.",
        "FSM provides governments, international financial institutions, and development partners with a structured mobilization platform. Rather than providing disconnected individual contractors, we assemble coherent, interdisciplinary benches equipped with clear operational mandates and field coordination.",
      ],
      scopeTitle: "Core Mobilization Capabilities & Engagement Scope",
      scopeDetails: [
        "Sourcing and vetting of recognized international, regional, and national technical specialists across economic governance, engineering, environmental safeguards, and digital infrastructure.",
        "Rapid nationwide deployment across all 36 Nigerian states and the Federal Capital Territory, leveraging established regional country partnerships.",
        "Staffing of embedded Delivery Units (RDUs) and Project Management Offices (PMOs) integrated directly within host sovereign ministries, departments, and agencies.",
        "End-to-end field logistics, statutory security protocols, enumerator recruitment, and in-country technical orientation.",
      ],
      methodologyTitle: "Operational Quality Assurance & Governance",
      methodologyDetails: [
        "Rigorous credential verification, past performance referencing, and multilateral conflict-of-interest screening for all deployed practitioners.",
        "Standardized terms of engagement tying consultant milestone disbursements directly to verifiable technical outputs and client sign-offs.",
        "Continuous performance monitoring backed by senior FSM practice leaders to ensure cross-cutting delivery standards and safeguards compliance.",
      ],
      impactTitle: "Institutional Value & Ground Outcomes",
      impactSummary:
        "Accelerates project mobilization cycles, eliminates procurement lead times, and guarantees immediate institutional traction for priority sovereign programs.",
      impactDetails: [
        "Zero mobilization delays on critical path milestones across multilateral portfolios.",
        "Full statutory and fiduciary compliance with international financing covenants.",
        "Durable capacity transfer to civil service counterparts through structured on-the-job peer mentoring.",
      ],
    },
  },
  {
    num: "02",
    id: "development-effectiveness",
    slug: "development-effectiveness",
    title: "Development Effectiveness Services",
    cluster: "delivery",
    clusterLabel: "Delivery, Assurance & MEAL",
    tagline: "Maximizing tangible public value from development investments.",
    summary:
      "Supporting governments and development institutions to shift from compliance-driven reporting to demonstrable outcome realization through structured results-based management.",
    deliverables: [
      "Development Effectiveness Reviews and Diagnostic Appraisals",
      "Results-Based Management System Architecture",
      "Theory of Change Formulation and Results Framework Design",
      "Performance Measurement Frameworks and Metric Cascades",
      "Program Structuring and Alignment with National Development Plans",
      "Development Impact Assessments and Multi-Stakeholder Evaluations",
      "Institutional Learning and Knowledge Management Platforms",
    ],
    clientValue:
      "Ensures development funding translates into measurable socio-economic progress, aligned with global best practices and local policy goals.",
    relatedSectors: [
      "Economic Policy & Public Finance",
      "Agriculture & Rural Transformation",
      "Human Capital Development",
    ],
    article: {
      context: [
        "International development investments too often measure success through inputs and financial disbursements rather than durable public value. Without rigorous alignment between policy objectives and ground reality, substantial capital deployments risk delivering minimal tangible improvement in citizen welfare.",
        "FSM partners with sovereign authorities and multilateral financiers to embed Results-Based Management (RBM) disciplines across the entire program lifecycle, ensuring accountability to both financiers and the citizens they serve.",
      ],
      scopeTitle: "Diagnostic Frameworks & Results Architecture",
      scopeDetails: [
        "Comprehensive Development Effectiveness Reviews assessing strategic alignment, fiduciary efficiency, and institutional readiness.",
        "Formulation of robust Theories of Change establishing clear causal pathways from budgetary inputs to long-term systemic impact.",
        "Design of cascading performance measurement frameworks with verifiable baselines, mid-term targets, and empirical outcome benchmarks.",
        "Portfolio health evaluations that enable proactive strategic reallocations and corrective interventions.",
      ],
      methodologyTitle: "Evidence-Based Delivery Methodology",
      methodologyDetails: [
        "Integration of mixed-method evaluation standards adhering to OECD-DAC criteria: relevance, coherence, effectiveness, efficiency, impact, and sustainability.",
        "Stakeholder co-creation workshops ensuring sovereign ownership of key performance indicators rather than externally imposed metrics.",
        "Establishment of adaptive management feedback loops that convert monitoring data into real-time operational course corrections.",
      ],
      impactTitle: "Strategic Impact & Public Value Realization",
      impactSummary:
        "Transforms developmental expenditures into demonstrable public value, institutional resilience, and verifiable outcomes.",
      impactDetails: [
        "Direct alignment of multi-billion naira sovereign programs with national economic recovery blueprints.",
        "Substantial enhancement in project disbursement velocity tied to verified milestone achievement.",
        "Institutionalization of transparent results frameworks within host ministries and public parastatals.",
      ],
    },
  },
  {
    num: "03",
    id: "project-assurance",
    slug: "project-assurance",
    title: "Project Assurance & Independent Verification",
    cluster: "delivery",
    clusterLabel: "Delivery, Assurance & MEAL",
    tagline: "Independent oversight, fiduciary verification, and quality assurance.",
    summary:
      "Serving as an objective Independent Verification Agent (IVA) and Third-Party Monitor to validate project milestones, disbursements, technical standards, and fiduciary compliance.",
    deliverables: [
      "Independent Verification Agent Services for DLI/DLR verification",
      "Third-Party Monitoring across challenging and hard-to-reach locations",
      "Project Performance Reviews and Portfolio Health Checks",
      "Technical, Engineering and Infrastructure Quality Audits",
      "Social and Environmental Safeguard Compliance Verification",
      "Fiduciary and Risk-Based Assurance Reviews",
      "Real-time field verification with photographic and GPS ground-truthing",
    ],
    clientValue:
      "Provides international financial institutions and sovereign funders with uncompromising impartiality and empirical ground-level truth.",
    relatedSectors: [
      "Infrastructure & Public Works",
      "Urban & Regional Development",
      "Energy & Utilities",
    ],
    article: {
      context: [
        "In modern development finance, disbursement-linked indicators (DLIs) and performance-based financing represent the gold standard for sovereign lending. These instruments require total impartiality and empirical verification before funding tranches can be released.",
        "FSM functions as a trusted, independent verification partner, bridging international financial covenants with physical, verified ground reality across complex implementation geographies.",
      ],
      scopeTitle: "Verification & Assurance Mandates",
      scopeDetails: [
        "Execution of Independent Verification Agent (IVA) mandates for multilateral financing facilities, validating Disbursement-Linked Results (DLRs).",
        "Third-Party Monitoring (TPM) across high-risk, volatile, and geographically remote operational corridors.",
        "Engineering, physical infrastructure, and civil works audits ensuring specifications adhere to contracted standards.",
        "Fiduciary, financial reconciliation, and procurement post-review audits to mitigate risk of non-compliance.",
      ],
      methodologyTitle: "Rigorous Ground-Truthing Protocols",
      methodologyDetails: [
        "Deployment of encrypted digital mobile data collection platforms with geofencing, biometric verification, and automated timestamping.",
        "Double-blind field sampling methodologies that ensure statistical validity and eliminate reporting biases.",
        "Triangulation of institutional administrative records against direct community consultations and physical site inspections.",
      ],
      impactTitle: "Assurance Outcomes & Fiduciary Safeguards",
      impactSummary:
        "Protects capital investments, eliminates fraud and misreporting risks, and unlocks timely multilateral disbursements on verified merit.",
      impactDetails: [
        "Validation of major sovereign infrastructure and social delivery disbursements totaling billions of dollars.",
        "Identification and mitigation of critical implementation discrepancies prior to formal donor audit cycles.",
        "Unassailable evidence base supporting mutual trust between sovereign borrowers and development partners.",
      ],
    },
  },
  {
    num: "04",
    id: "implementation-acceleration",
    slug: "implementation-acceleration",
    title: "Implementation Acceleration & Delivery Support",
    cluster: "delivery",
    clusterLabel: "Delivery, Assurance & MEAL",
    tagline: "Bridging the execution gap from project approval to verified delivery.",
    summary:
      "Assisting ministries, agencies, and project implementation units to eliminate implementation bottlenecks, achieve project readiness, and accelerate project execution.",
    deliverables: [
      "Development-Ready (D-Ready) Advisory and Diagnostic Readiness Reviews",
      "Implementation Readiness Assessments prior to project launch",
      "Project Management Office Setup and Operational Support",
      "Establishment of High-Impact Results Delivery Units",
      "Project Recovery, Turnaround and Distress Resolution Support",
      "Implementation Bottleneck and Delivery Obstacle Analysis",
      "Benefits Realization Tracking and Milestone Acceleration",
    ],
    clientValue:
      "Shortens project lead times, reduces disbursement lags, and prevents cost and schedule overruns on major public and donor-funded programs.",
    relatedSectors: [
      "Governance & Institutional Development",
      "Water, Sanitation & Environment",
      "Transportation & Logistics",
    ],
    article: {
      context: [
        "A recurring dilemma in sovereign development is the execution gap: projects that receive full legislative approval and financier commitment often stall during the first 24 months of execution. The causes are structural—delayed procurement approvals, multi-agency coordination friction, and unaddressed counterpart funding bottlenecks.",
        "FSM provides embedded execution acceleration services that cut through administrative stagnation and establish clear, high-velocity delivery rhythms.",
      ],
      scopeTitle: "Acceleration Disciplines & Embedded Units",
      scopeDetails: [
        "Deployment of our proprietary D-Ready (Development-Ready) readiness protocols to resolve procurement and institutional prerequisites before disbursements begin.",
        "Establishment and operationalization of specialized Results Delivery Units (RDUs) modeled on international delivery best practices.",
        "Rapid turnaround diagnostics for distressed, lagging, or troubled investment portfolios.",
        "Cross-agency bottleneck resolution rooms that de-risk bureaucratic stalemates between finance, planning, and line ministries.",
      ],
      methodologyTitle: "High-Cadence Delivery Governance",
      methodologyDetails: [
        "Weekly and monthly delivery stocktakes chaired by leadership to review milestone progress against clear visual dashboards.",
        "Problem-driven iterative adaptation (PDIA) techniques to address stubborn systemic impediments in real time.",
        "Clear critical-path sequencing tying operational milestones directly to designated accountable owners.",
      ],
      impactTitle: "Measurable Acceleration Outcomes",
      impactSummary:
        "Compresses delivery schedules by months, reduces capital idle time, and turns stalled initiatives into high-visibility development successes.",
      impactDetails: [
        "Accelerated project preparation timelines by up to nine months for sovereign infrastructure and economic portfolios.",
        "Recovery of multi-million dollar portfolios from flagged 'at-risk' status to full disbursement compliance.",
        "Creation of permanent implementation coordination capability within host civil service delivery units.",
      ],
    },
  },
  {
    num: "05",
    id: "meal",
    slug: "meal",
    title: "Monitoring, Evaluation, Accountability & Learning (MEAL)",
    cluster: "delivery",
    clusterLabel: "Delivery, Assurance & MEAL",
    tagline: "Evidence-based metrics, citizen feedback, and institutional learning.",
    summary:
      "Deploying rigorous quantitative and qualitative methodologies to track project indicators, capture beneficiary voices, and provide actionable real-time insights.",
    deliverables: [
      "Comprehensive Baseline Studies and Household Surveys",
      "Mid-Term Reviews and End-Line Evaluations",
      "Rigorous Impact Assessments and Outcome Harvesting",
      "Digital Real-Time Performance Monitoring Systems",
      "Beneficiary Feedback and Citizen Engagement Mechanisms",
      "Social Accountability and Citizen Report Card Assessments",
      "Institutional Learning Reviews and Knowledge Capture Frameworks",
    ],
    clientValue:
      "Transforms routine M&E from a backward-looking reporting chore into an adaptive, data-driven decision-making engine.",
    relatedSectors: [
      "Social Protection & Safety Nets",
      "Education & Human Capital",
      "Health Systems & Nutrition",
    ],
    article: {
      context: [
        "Effective Monitoring, Evaluation, Accountability, and Learning (MEAL) is the lifeblood of sound development programming. Without empirical ground feedback, interventions operate in an informational vacuum, unable to adapt to evolving field realities or demonstrate return on investment.",
        "FSM designs and executes enterprise-grade MEAL architectures that combine rigorous statistical science with participatory accountability, ensuring evidence actively informs operational steering.",
      ],
      scopeTitle: "Core MEAL Disciplines & Technical Scope",
      scopeDetails: [
        "Statistically representative baseline surveys, mid-term reviews (MTR), and comprehensive end-line impact evaluations.",
        "Implementation of social accountability tools, citizen report cards, and multi-channel beneficiary feedback loops.",
        "Development of digital, cloud-hosted real-time monitoring dashboards displaying georeferenced field data.",
        "Outcome harvesting and qualitative participatory assessments capturing systemic institutional change.",
      ],
      methodologyTitle: "Empirical Rigour & Ethical Protocols",
      methodologyDetails: [
        "Adherence to rigorous ethical review standards, institutional safeguarding protocols, and data privacy protections.",
        "Use of quasi-experimental designs (Difference-in-Differences, Propensity Score Matching) where rigorous counterfactual analysis is required.",
        "Iterative learning loops where evaluation findings are presented in interactive management retrospectives rather than static reports.",
      ],
      impactTitle: "Institutional Learning & Evidence Generation",
      impactSummary:
        "Generates actionable intelligence, elevates program credibility, and ensures beneficiary voices directly influence program governance.",
      impactDetails: [
        "Design and deployment of surveys covering hundreds of thousands of beneficiaries nationwide.",
        "Direct incorporation of citizen feedback into frontline public service delivery improvements.",
        "Production of peer-reviewed, audit-grade evaluation reports accepted by global development finance boards.",
      ],
    },
  },
  {
    num: "06",
    id: "governance-reform",
    slug: "governance-reform",
    title: "Governance and Public Sector Reform",
    cluster: "governance",
    clusterLabel: "Governance, Reform & Safeguards",
    tagline: "Modernizing state institutions and enhancing public service delivery.",
    summary:
      "Partnering with federal, state, and local governments to optimize organizational workflows, implement regulatory reforms, and enhance institutional accountability.",
    deliverables: [
      "Public Sector Reform Advisory and Modernization Strategies",
      "Business Enabling Environment and Subnational Doing Business Reforms",
      "Regulatory Impact Assessments and Administrative Streamlining",
      "Institutional Diagnostics and Organizational Restructuring",
      "Public Financial Management Advisory and Revenue Optimization",
      "Frontline Service Delivery Assessments and Process Automation",
      "Evidence-Based Policy Development, Review and Implementation Support",
    ],
    clientValue:
      "Builds resilient, high-performing public sector institutions capable of sustaining reforms and delivering superior citizen services.",
    relatedSectors: [
      "Public Administration & Civil Service",
      "Fiscal Policy & Taxation",
      "Judiciary & Regulatory Agencies",
    ],
    article: {
      context: [
        "Sustainable economic transformation requires capable, credible, and efficient public institutions. Across Africa, governments face urgent pressures to streamline bureaucracy, reduce fiscal waste, and foster a competitive climate for private investment.",
        "FSM advises sovereign and subnational leadership on institutional restructuring, regulatory simplification, and public financial management, converting high-level political will into enduring administrative capability.",
      ],
      scopeTitle: "Institutional Modernization & Reform Streams",
      scopeDetails: [
        "Comprehensive organizational diagnostics evaluating mandate overlaps, civil service workflows, and human capital capacity gaps.",
        "Design and execution of subnational Ease of Doing Business reform packages that eliminate red tape and stimulate private capital inflow.",
        "Public Financial Management (PFM) advisory covering medium-term expenditure frameworks, treasury single accounts, and internally generated revenue (IGR) optimization.",
        "Modernization and digitization of frontline citizen-facing administrative workflows.",
      ],
      methodologyTitle: "Context-Aware Reform Sequencing",
      methodologyDetails: [
        "Navigating political economy realities to build reform coalitions within civil service leadership and legislative bodies.",
        "Step-by-step business process re-engineering focused on practical administrative gains rather than theoretical blueprints.",
        "Continuous change management and peer coaching ensuring civil service staff actively champion reform milestones.",
      ],
      impactTitle: "Enduring Administrative Strength",
      impactSummary:
        "Improves subnational competitiveness rankings, expands fiscal space, and restores public trust in governmental administrative execution.",
      impactDetails: [
        "Supported multiple subnational states to achieve top-tier Ease of Doing Business rankings.",
        "Documented improvements in subnational Internally Generated Revenue through transparent, automated collection processes.",
        "Restructured ministries and parastatals with clear job descriptions, key performance indicators, and modernized operational manuals.",
      ],
    },
  },
  {
    num: "07",
    id: "safeguards",
    slug: "safeguards",
    title: "Environmental and Social Safeguards",
    cluster: "governance",
    clusterLabel: "Governance, Reform & Safeguards",
    tagline: "Ensuring sustainable, inclusive, and socially responsible development.",
    summary:
      "Integrating world-class ESG standards, environmental protection, stakeholder engagement, and social risk mitigation into major development programs.",
    deliverables: [
      "Environmental and Social Impact Assessments",
      "Environmental and Social Management Plans",
      "Stakeholder Engagement Plans and Community Consultations",
      "Labour Management Procedures and Worker Safety Protocols",
      "Resettlement Action Plans and Livelihood Restoration Planning",
      "Social Risk Assessments and Vulnerability Mapping",
      "Grievance Redress Mechanisms Architecture and Tracking",
      "Gender Equality and Social Inclusion Mainstreaming",
      "Comprehensive Corporate ESG Advisory Services",
    ],
    clientValue:
      "Guarantees compliance with World Bank ESF, AfDB Integrated Safeguards, and national statutory environmental regulations.",
    relatedSectors: [
      "Natural Resource Management",
      "Energy Transition & Renewables",
      "Large-Scale Infrastructure",
    ],
    article: {
      context: [
        "In contemporary development finance, environmental and social safeguards represent a critical covenant of project legitimacy and financier viability. Failure to anticipate ecological impacts, community displacement, or labour grievances can halt major infrastructure and trigger severe statutory sanctions.",
        "FSM deploys environmental scientists, social anthropologists, and safeguards legal specialists to embed world-class safeguards into sovereign and commercial operations from conception to decommissioning.",
      ],
      scopeTitle: "Comprehensive Safeguards Portfolio",
      scopeDetails: [
        "Preparation of statutory Environmental and Social Impact Assessments (ESIA) and actionable Environmental and Social Management Plans (ESMP).",
        "Formulation of Resettlement Action Plans (RAP) and livelihood restoration frameworks that respect customary land rights and community heritage.",
        "Operationalization of robust Labour Management Procedures (LMP) covering occupational health and safety (OHS) and fair worker conditions.",
        "Architecture and field deployment of multi-tier Grievance Redress Mechanisms (GRM) for communities and workers.",
      ],
      methodologyTitle: "World Bank ESF & International Alignment",
      methodologyDetails: [
        "Rigorous benchmarking against World Bank Environmental and Social Standards (ESS 1–10) and AfDB Integrated Safeguards System (ISS).",
        "Free, Prior, and Informed Consent (FPIC) protocols ensuring vulnerable, indigenous, and host communities participate meaningfully.",
        "Continuous field audits and unannounced site inspections ensuring contractor adherence to contracted safety and environmental specifications.",
      ],
      impactTitle: "Verified Environmental & Social Integrity",
      impactSummary:
        "Protects project continuity, prevents costly litigation and community conflicts, and secures multilateral safeguards clearances.",
      impactDetails: [
        "Clean safeguards clearances across major multilateral-assisted sovereign infrastructure portfolios.",
        "Documented resolution of hundreds of community grievances through structured, accessible GRM desks.",
        "Fair, transparent compensation and livelihood restoration for project-affected persons without social disruption.",
      ],
    },
  },
  {
    num: "08",
    id: "land-governance",
    slug: "land-governance",
    title: "Land Governance and Investment Advisory",
    cluster: "governance",
    clusterLabel: "Governance, Reform & Safeguards",
    tagline: "Responsible, transparent, and inclusive land-based investments.",
    summary:
      "Supporting governments and investors to balance commercial land investments with customary rights, community benefit sharing, and inclusive governance.",
    deliverables: [
      "FRILIA Framework Assessments for Agricultural Investments",
      "Land Administration Reforms and Geospatial Land Registry Modernization",
      "Responsible Land Investment Diagnostics and Risk Assessments",
      "Land Acquisition, Compensation and Resettlement Audits",
      "Customary Land Tenure Studies and Boundary Demarcation",
      "Community Consultations and Free, Prior, Informed Consent Protocols",
    ],
    clientValue:
      "Mitigates land disputes, secures investor tenure rights, and protects local community livelihoods in large-scale agricultural and infrastructure ventures.",
    relatedSectors: [
      "Agribusiness & Commercial Agriculture",
      "Mining & Extractive Industries",
      "Urban Land Administration",
    ],
    article: {
      context: [
        "Land is Africa's most fundamental economic and social asset. Yet large-scale land acquisitions and commercial agricultural ventures frequently spark contentious disputes over customary tenure, compensation adequacy, and community exclusion.",
        "FSM assists sovereign land registries, development partners, and commercial investors to structure responsible, transparent, and equitable land transactions that protect community rights while unlocking productive capital investments.",
      ],
      scopeTitle: "Land Advisory & Governance Capabilities",
      scopeDetails: [
        "Implementation of the Framework for Responsible and Inclusive Land-Intensive Agricultural Investments (FRILIA).",
        "Modernization of subnational land administration bureaus through geospatial boundary mapping and digital registry systems.",
        "Tenure security diagnostics protecting smallholder farmers, pastoralist corridors, and communal land holdings.",
        "Independent land acquisition audits ensuring statutory compensation and resettlement adhere to international fairness standards.",
      ],
      methodologyTitle: "Inclusive Stakeholder Architecture",
      methodologyDetails: [
        "Participatory land boundary delineation involving traditional leaders, youth, women, and administrative surveyors.",
        "Establishment of binding community development agreements (CDAs) guaranteeing shared commercial benefits.",
        "Legal tenure regularization and title documentation that provides tenure security for investors and local families alike.",
      ],
      impactTitle: "Tenure Security & Conflict Mitigation",
      impactSummary:
        "De-risks commercial land transactions, prevents generational land conflicts, and unlocks sustainable agricultural investments.",
      impactDetails: [
        "Adoption of FRILIA guidelines by sovereign state governments across thousands of hectares of commercial agricultural land.",
        "Zero land tenure litigation on verified FSM-facilitated investment corridors.",
        "Formalization of secure community title rights alongside commercial agribusiness concessions.",
      ],
    },
  },
  {
    num: "09",
    id: "institutional-strengthening",
    slug: "institutional-strengthening",
    title: "Institutional Strengthening & Capacity Development",
    cluster: "governance",
    clusterLabel: "Governance, Reform & Safeguards",
    tagline: "Empowering leadership and technical teams for sustainable impact.",
    summary:
      "Designing and executing targeted executive leadership programs, technical masterclasses, and systemic knowledge transfer for civil servants and counterparts.",
    deliverables: [
      "Executive Leadership Programs for Senior Public Officials",
      "Technical Training, Coaching and One-on-One Mentoring",
      "Organizational Capacity Assessments and Skills Audits",
      "Institutional Knowledge Transfer and Succession Planning",
      "Change Management and Culture Transformation Support",
      "Interactive Learning Workshops and South-South Peer Exchanges",
      "Long-Term Institutional Development Blueprints",
    ],
    clientValue:
      "Instills enduring internal capabilities within beneficiary institutions so gains persist long after external advisory concludes.",
    relatedSectors: [
      "Civil Service Institutes",
      "State & Federal Ministries",
      "Development Agencies & Parastatals",
    ],
    article: {
      context: [
        "External advisory that fails to build permanent domestic capability leaves client institutions dependent on subsequent rounds of technical assistance. The true measure of consulting excellence is whether the client can execute independently once external advisors withdraw.",
        "FSM places institutional strengthening at the center of every mandate. We combine adult learning science, technical coaching, and systems design to elevate public sector operational competence.",
      ],
      scopeTitle: "Capacity Architecture & Interventions",
      scopeDetails: [
        "Comprehensive Organizational Capacity Assessments (OCA) identifying institutional bottlenecks, technical gaps, and workflow deficits.",
        "Tailored executive masterclasses for director-level public officials in project delivery, fiduciary oversight, and public financial management.",
        "Structured peer mentoring embedding our senior specialists directly alongside civil service desk officers.",
        "Design of institutional knowledge management repositories preventing loss of operational institutional memory.",
      ],
      methodologyTitle: "Adult Learning & Competency Development",
      methodologyDetails: [
        "Hands-on, project-based learning anchored in live institutional challenges rather than generic classroom theory.",
        "Pre- and post-capacity evaluations verifying demonstrable skills acquisition across participating cohorts.",
        "Creation of institutional standard operating procedures (SOPs) that institutionalize skills across departmental workflows.",
      ],
      impactTitle: "Durable Public Sector Capacity",
      impactSummary:
        "Transforms civil service operational culture, builds sovereign confidence, and ensures enduring institutional capability.",
      impactDetails: [
        "Training and mentoring of over 5,000 public sector practitioners across Nigeria and the African region.",
        "Host agencies independently managing complex multilateral reporting and implementation without external intervention.",
        "Creation of certified departmental training curricula adopted by civil service staff colleges.",
      ],
    },
  },
  {
    num: "10",
    id: "digital-solutions",
    slug: "digital-solutions",
    title: "Digital Transformation and Data Solutions",
    cluster: "innovation",
    clusterLabel: "Technology, Economy & Transactions",
    tagline: "Leveraging technology, GIS, and AI to improve development outcomes.",
    summary:
      "Building cutting-edge digital architectures, geospatial dashboards, and automated management information systems to bring transparency and efficiency to development programs.",
    deliverables: [
      "Custom Management Information Systems for Public Programs",
      "Digital Monitoring Platforms and Mobile Data Collection Tools",
      "Business Intelligence Dashboards and Automated KPI Trackers",
      "GIS Geospatial Mapping, Remote Sensing and Drone Verification",
      "AI for Development Programmes and Predictive Data Analytics",
      "Real-Time Project Delivery Tracking Systems",
      "Data Quality Assessments and Governance Architectures",
      "Development Data Labs and Open Data Portals",
    ],
    clientValue:
      "Replaces opaque paper trails with real-time digital visibility, geospatial precision, and actionable predictive intelligence.",
    relatedSectors: [
      "Digital Economy & GovTech",
      "Telecommunications & Connectivity",
      "Public Health Surveillance",
    ],
    article: {
      context: [
        "Modern development delivery cannot succeed on paper registers and lagging quarterly reports. In complex operating environments, sovereign executives and international partners require real-time, georeferenced data to steer resources, track physical milestones, and prevent leakage.",
        "FSM bridges software engineering, geospatial analytics, and development expertise to deploy customized GovTech solutions that bring radical visibility to public programs.",
      ],
      scopeTitle: "Digital Solutions & GovTech Systems",
      scopeDetails: [
        "Enterprise Management Information Systems (MIS) managing citizen beneficiary registries, social payments, and public assets.",
        "Mobile-first offline-capable data collection tools enabling field enumerators to gather verified data in remote rural areas.",
        "Interactive executive Business Intelligence (BI) command dashboards synthesizing millions of data points into intuitive metrics.",
        "GIS mapping, remote sensing satellite analysis, and drone imagery confirming physical infrastructure execution.",
      ],
      methodologyTitle: "Human-Centered Design & Data Security",
      methodologyDetails: [
        "Agile software development cycles prioritizing intuitive user experience for frontline civil servants with diverse digital literacy.",
        "Rigorous cybersecurity, role-based access controls, and compliance with national and international data privacy regulations.",
        "Open-source and modular architectures that eliminate vendor lock-in and enable sovereign client IT teams to maintain systems.",
      ],
      impactTitle: "Digital Efficiency & Real-Time Oversight",
      impactSummary:
        "Replaces guesswork with real-time ground truth, dramatically cuts operational reporting costs, and eliminates ghost beneficiaries.",
      impactDetails: [
        "Deployment of national beneficiary databases securely handling millions of citizen records.",
        "Automated reporting reducing data transmission lag from three months to under twenty-four hours.",
        "Elimination of significant ghost beneficiary payments through biometric and georeferenced digital verification.",
      ],
    },
  },
  {
    num: "11",
    id: "crisis-resilience",
    slug: "crisis-resilience",
    title: "Crisis Resilience & Adaptive Development Services",
    cluster: "innovation",
    clusterLabel: "Technology, Economy & Transactions",
    tagline: "Building adaptive capacity in fragile and conflict-affected environments.",
    summary:
      "Helping public institutions, donors, and businesses maintain continuity, withstand economic shocks, and deliver aid effectively in complex, fragile settings.",
    deliverables: [
      "Crisis Preparedness Assessments and Early Warning Diagnostics",
      "Business Continuity Planning for Public Agencies",
      "Institutional Resilience Building and Shock-Responsive Strategies",
      "Emergency Recovery Programme Design and Rapid Assessment",
      "Third-Party Monitoring in Fragile, Conflict and Insecure Environments",
      "Fragility, Conflict, and Violence Assessments",
      "Disaster Risk Management and Climate Adaptation Frameworks",
    ],
    clientValue:
      "Ensures uninterrupted program delivery, safeguards capital, and protects critical development investments during crises and systemic shocks.",
    relatedSectors: [
      "Humanitarian-Development Nexus",
      "Climate Adaptation & Emergency Response",
      "Fragile & Conflict-Affected States",
    ],
    article: {
      context: [
        "Many of Africa's most urgent development needs are concentrated in fragile, conflict-affected, and climate-vulnerable regions. In these challenging contexts, conventional development programming frequently breaks down due to security escalations, population displacements, and institutional paralysis.",
        "FSM specializes in adaptive programming architectures that allow sovereign agencies and humanitarian partners to maintain continuous delivery, protect personnel, and respond flexibly to volatile conditions.",
      ],
      scopeTitle: "Resilience & Fragility Offerings",
      scopeDetails: [
        "Fragility, Conflict, and Violence (FCV) contextual diagnostics analyzing underlying drivers of insecurity and community tensions.",
        "Business Continuity Planning (BCP) and emergency operational protocols for frontline public agencies and ministries.",
        "Remote third-party monitoring and independent verification using local community networks and satellite verification in non-permissive zones.",
        "Shock-responsive social safety net designs that scale up rapidly during environmental or macroeconomic crises.",
      ],
      methodologyTitle: "Do-No-Harm & Conflict Sensitivity",
      methodologyDetails: [
        "Strict adherence to Conflict Sensitivity and Do-No-Harm principles ensuring project resources do not inadvertently inflame local tensions.",
        "Dynamic security risk management integrating local early warning networks and localized access negotiations.",
        "Scenario-based contingency planning with pre-authorized operational pivots when local conditions shift.",
      ],
      impactTitle: "Uninterrupted Delivery in Insecure Zones",
      impactSummary:
        "Preserves development momentum where it is needed most, safeguarding human capital and ensuring aid reaches vulnerable populations.",
      impactDetails: [
        "Continuous project verification maintained in areas inaccessible to international donor missions.",
        "Rapid restructuring of sovereign recovery programs following climate-induced floods and economic disruptions.",
        "Protection of vulnerable project assets and local field teams through proactive conflict-sensitive community engagement.",
      ],
    },
  },
  {
    num: "12",
    id: "jobs-transformation",
    slug: "jobs-transformation",
    title: "Jobs and Economic Transformation Advisory",
    cluster: "innovation",
    clusterLabel: "Technology, Economy & Transactions",
    tagline: "Unlocking private sector growth, value chains, and youth employment.",
    summary:
      "Advising governments and DFIs on evidence-based economic inclusion policies, enterprise acceleration, SME cluster development, and market systems development.",
    deliverables: [
      "Subnational Employment Diagnostics and Labour Market Analytics",
      "SME Growth, Industrial Cluster and Competitiveness Strategies",
      "Youth and Women Targeted Employment Programmes",
      "Local Content Policies and Agricultural Value Chain Upgrading",
      "Investment Climate Assessments and Commercial Law Modernization",
      "Economic Inclusion and Graduation Model Program Design",
      "Entrepreneurship Ecosystem Mapping and Hub Incubation Advisory",
    ],
    clientValue:
      "Catalyzes private enterprise, accelerates wage-earning and self-employment opportunities, and drives structural economic transformation.",
    relatedSectors: [
      "Trade, Industry & Investment",
      "MSME Development & Microfinance",
      "Youth Employment & Vocational Skills",
    ],
    article: {
      context: [
        "Africa's youth demographic surge represents either its greatest economic asset or its most formidable social risk. With millions of young people entering the workforce annually, sovereign economic strategy must transition from commodity dependency to structural industrial transformation and job creation.",
        "FSM assists governments, development finance institutions (DFIs), and private investors to design market-driven enterprise acceleration policies, catalytic value chain interventions, and scalable employment programs.",
      ],
      scopeTitle: "Economic Advisory & Market Systems Scope",
      scopeDetails: [
        "Subnational labour market diagnostics identifying high-growth employment multipliers across agriculture, manufacturing, and tech.",
        "Design of SME competitiveness programs, cluster incubators, and catalytic matching grant facilities.",
        "Local content policies that mandate and facilitate the integration of domestic suppliers into global supply chains.",
        "Economic graduation programs providing extremely poor households with asset transfers, financial literacy, and livelihood coaching.",
      ],
      methodologyTitle: "Market Systems Development Approach",
      methodologyDetails: [
        "Adoption of Market Systems Development (MSD/M4P) methodologies that tackle systemic market failures rather than offering temporary subsidies.",
        "Private sector co-design ensuring training curricula and enterprise grants align with verified industry hiring demands.",
        "Rigorous cost-per-job analytics ensuring sovereign investments maximize employment yield per disbursed capital unit.",
      ],
      impactTitle: "Livelihoods & Enterprise Growth",
      impactSummary:
        "Drives private enterprise competitiveness, unlocks private capital matching, and creates sustainable, productive livelihoods.",
      impactDetails: [
        "Direct facilitation of thousands of certified wage jobs and sustainable enterprise startups across targeted value chains.",
        "Mobilization of commercial bank and private equity co-investment alongside concessional sovereign funding.",
        "Empowerment of women- and youth-owned businesses through specialized access-to-finance instruments.",
      ],
    },
  },
  {
    num: "13",
    id: "procurement-fiduciary",
    slug: "procurement-fiduciary",
    title: "Procurement Excellence and Fiduciary Services",
    cluster: "innovation",
    clusterLabel: "Technology, Economy & Transactions",
    tagline: "Value-for-money, donor procurement compliance, and contract integrity.",
    summary:
      "Providing specialized procurement oversight, bid evaluation advisory, and fiduciary capacity building in strict accordance with multilateral bank regulations.",
    deliverables: [
      "Comprehensive Public Procurement and Fiduciary Diagnostics",
      "Independent Procurement Audits and Post-Review Assessments",
      "Bid Evaluation Support and Transaction Review Committee Advisory",
      "Donor Procurement Compliance under World Bank, AfDB, EU, and USAID rules",
      "Procurement Capacity Building and E-Procurement Implementation",
      "Value-for-Money Studies and Life-Cycle Costing Reviews",
      "Contract Management Reviews and Claims Mitigation",
    ],
    clientValue:
      "Ensures transparent, clean, and compliant procurement processes that eliminate audit exceptions and maximize public funds value.",
    relatedSectors: [
      "Public Procurement Bureaus",
      "Infrastructure Procurement",
      "Healthcare & Pharmaceutical Supply",
    ],
    article: {
      context: [
        "Procurement represents the engine room of development execution—and its most vulnerable fiduciary bottleneck. Irregularities, procedural delays, and non-compliance with multilateral procurement regulations account for the vast majority of project suspensions, cost overruns, and donor audit sanctions.",
        "FSM delivers specialized procurement advisory, independent post-reviews, and transaction structuring that safeguard fiduciary integrity while maintaining commercial velocity.",
      ],
      scopeTitle: "Fiduciary Architecture & Transaction Oversight",
      scopeDetails: [
        "Design of project procurement strategies for development (PPSD) aligned with World Bank and AfDB procurement frameworks.",
        "Independent evaluation support for high-value tenders, international competitive bidding (ICB), and specialized consultancy selections.",
        "Comprehensive post-procurement reviews (PPR) auditing compliance with statutory thresholds and anti-corruption guidelines.",
        "Contract management advisory mitigating contractor claims, scope creep, and payment disputes.",
      ],
      methodologyTitle: "Integrity, Transparency & Value-for-Money",
      methodologyDetails: [
        "Application of life-cycle costing (LCC) models that evaluate total long-term ownership costs rather than merely lowest initial tender.",
        "Implementation of e-procurement platforms and automated vendor management systems to ensure transparent bidding.",
        "Continuous fiduciary coaching for sovereign tender boards and Project Implementation Unit procurement officers.",
      ],
      impactTitle: "Clean Audits & Value Maximization",
      impactSummary:
        "Prevents misprocurement sanctions, eliminates costly audit queries, and delivers verified value-for-money across public tenders.",
      impactDetails: [
        "Oversight of multi-million dollar complex infrastructure and goods procurements with zero formal bidder disputes.",
        "Elimination of major procurement bottlenecks, cutting tender cycle times from initial notice to contract award.",
        "Establishment of audit-ready documentation trails approved without exception by multilateral oversight missions.",
      ],
    },
  },
  {
    num: "14",
    id: "ppp-transactions",
    slug: "ppp-transactions",
    title: "PPP and Investment Facilitation Services",
    cluster: "innovation",
    clusterLabel: "Technology, Economy & Transactions",
    tagline: "Structuring bankable public-private partnerships and mobilizing private capital.",
    summary:
      "Advising sovereign authorities and private concessionaires through the complete project lifecycle of public-private partnerships and infrastructure transactions.",
    deliverables: [
      "PPP Project Identification, Screening and Pipeline Development",
      "Comprehensive Feasibility Studies covering Technical, Financial and Legal aspects",
      "Transaction Advisory and Concession Agreement Structuring",
      "Investor Readiness Assessments and Market Sounding Exercises",
      "Infrastructure Finance, Project Finance and Blended Finance Structuring",
      "Multi-Stakeholder Engagement and Concessionaire Procurement",
      "Subnational Investment Promotion Strategies and Deal Rooms",
    ],
    clientValue:
      "Bridges the infrastructure financing gap by designing de-risked, commercially viable PPP projects attractive to international and local private capital.",
    relatedSectors: [
      "Transportation, Toll Roads & Ports",
      "Renewable Energy & Power IPPs",
      "Healthcare & Educational Infrastructure",
    ],
    article: {
      context: [
        "Closing Africa's multi-billion dollar annual infrastructure deficit is impossible through public balance sheets alone. Mobilizing private capital through Public-Private Partnerships (PPPs) is imperative, yet many proposed projects stall due to inadequate project preparation, unmitigated political risk, and unbankable concession structures.",
        "FSM serves as a premier transaction and project preparation advisor, guiding sovereign governments and private investors to structure de-risked, bankable, and equitable infrastructure partnerships.",
      ],
      scopeTitle: "Full-Lifecycle PPP Advisory Scope",
      scopeDetails: [
        "Project identification and preliminary screening assessing commercial viability, fiscal risk, and value-for-money against traditional public procurement.",
        "Comprehensive Outline Business Cases (OBC) and Full Business Cases (FBC) encompassing financial modeling, risk allocation matrices, and legal due diligence.",
        "Concession agreement structuring, tariff modeling, and sovereign guarantee negotiations.",
        "Organization of international market sounding exercises and investor deal rooms attracting global infrastructure funds.",
      ],
      methodologyTitle: "Bankability, De-risking & Blended Finance",
      methodologyDetails: [
        "Integration of blended finance instruments, credit enhancements, and political risk insurance (MIGA, PRG) to lower private capital hurdles.",
        "Balanced risk allocation ensuring private concessionaires bear operational risks while sovereign authorities manage regulatory and statutory safeguards.",
        "Transparent, competitive Swiss Challenge and international competitive bidding procedures adhering to statutory PPP laws.",
      ],
      impactTitle: "Commercial Close & Infrastructure Delivery",
      impactSummary:
        "Bridges the sovereign infrastructure gap, minimizes sovereign fiscal liabilities, and accelerates private capital commercial close.",
      impactDetails: [
        "Structuring of high-priority transportation, power, and healthcare PPP transactions across African subregions.",
        "Mobilization of hundreds of millions of dollars in private concession equity and long-term debt.",
        "Creation of durable public infrastructure assets delivered without increasing sovereign debt burdens.",
      ],
    },
  },
];

export function getPracticeBySlug(slug: string): Practice | undefined {
  return practicesData.find((p) => p.id === slug || p.slug === slug);
}
