"use client";

import { useState } from "react";

interface PracticeItem {
  num: string;
  id: string;
  title: string;
  cluster: "delivery" | "governance" | "innovation";
  clusterLabel: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  clientValue: string;
}

const practices: PracticeItem[] = [
  // Cluster 1: Delivery, Assurance & MEAL
  {
    num: "01",
    id: "expert-mobilization",
    title: "Technical Expert Mobilization & Professional Contracting",
    cluster: "delivery",
    clusterLabel: "Delivery, Assurance & MEAL",
    tagline: "Deploying integrated technical capability across Nigeria and Africa.",
    summary:
      "FSM Consulting Limited provides clients with more than individual consultants. We source, vet, mobilize, and manage integrated multidisciplinary capability tailored to the precise requirements of each assignment.",
    deliverables: [
      "International and regional technical expert sourcing",
      "National consultant deployment across all 36 Nigerian states + FCT",
      "Multidisciplinary team formation and short/long-term contracting",
      "Embedded advisory services and Delivery Unit staffing",
      "Project Management Office (PMO) surge capacity for urgent assignments",
      "Field team and enumerator mobilization with in-country orientation",
      "Technical team performance management and assignment coordination",
      "Counterpart capacity strengthening and peer knowledge transfer",
    ],
    clientValue:
      "Rapidly assemble vetted, high-caliber specialists with complete operational logistics support, eliminating procurement delays and administrative friction.",
  },
  {
    num: "02",
    id: "development-effectiveness",
    title: "Development Effectiveness Services",
    cluster: "delivery",
    clusterLabel: "Delivery, Assurance & MEAL",
    tagline: "Maximizing tangible public value from development investments.",
    summary:
      "Supporting governments and development institutions to shift from compliance-driven reporting to demonstrable outcome realization through structured results-based management.",
    deliverables: [
      "Development Effectiveness Reviews & Diagnostic Appraisals",
      "Results-Based Management (RBM) System Architecture",
      "Theory of Change (ToC) Formulation & Results Framework Design",
      "Performance Measurement Frameworks & Metric Cascades",
      "Program Structuring & Alignment with National Development Plans",
      "Development Impact Assessments & Multi-Stakeholder Evaluations",
      "Institutional Learning & Knowledge Management Platforms",
    ],
    clientValue:
      "Ensures development funding translates into measurable socio-economic progress, aligned with global best practices and local policy goals.",
  },
  {
    num: "03",
    id: "project-assurance",
    title: "Project Assurance & Independent Verification",
    cluster: "delivery",
    clusterLabel: "Delivery, Assurance & MEAL",
    tagline: "Independent oversight, fiduciary verification, and quality assurance.",
    summary:
      "Serving as an objective Independent Verification Agent (IVA) and Third-Party Monitor to validate project milestones, disbursements, technical standards, and fiduciary compliance.",
    deliverables: [
      "Independent Verification Agent (IVA) Services for DLI/DLR verification",
      "Third-Party Monitoring (TPM) across hard-to-reach locations",
      "Project Performance Reviews & Portfolio Health Checks",
      "Technical, Engineering & Infrastructure Audits",
      "Social & Environmental Safeguard Compliance Verification",
      "Fiduciary & Risk-Based Assurance Reviews",
      "Real-time field verification and photographic/GPS ground-truthing",
    ],
    clientValue:
      "Provides international financial institutions and sovereign funders with uncompromising impartiality and empirical ground-level truth.",
  },
  {
    num: "04",
    id: "implementation-acceleration",
    title: "Implementation Acceleration & Delivery Support",
    cluster: "delivery",
    clusterLabel: "Delivery, Assurance & MEAL",
    tagline: "Bridging the execution gap from project approval to verified delivery.",
    summary:
      "Assisting ministries, agencies, and project implementation units (PIUs) to eliminate implementation bottlenecks, achieve project readiness, and accelerate project execution.",
    deliverables: [
      "Development-Ready (D-Ready) Advisory & Diagnostic Readiness Reviews",
      "Implementation Readiness Assessments prior to project launch",
      "Project Management Office (PMO) Setup & Operational Support",
      "Establishment of High-Impact Results Delivery Units (RDUs)",
      "Project Recovery, Turnaround & Distress Resolution Support",
      "Implementation Bottleneck & Delivery Obstacle Analysis",
      "Benefits Realization Tracking & Milestone Acceleration",
    ],
    clientValue:
      "Shortens project lead times, reduces disbursement lags, and prevents cost and schedule overruns on major public and donor-funded programs.",
  },
  {
    num: "05",
    id: "meal",
    title: "Monitoring, Evaluation, Accountability & Learning (MEAL)",
    cluster: "delivery",
    clusterLabel: "Delivery, Assurance & MEAL",
    tagline: "Evidence-based metrics, citizen feedback, and institutional learning.",
    summary:
      "Deploying rigorous quantitative and qualitative methodologies to track project indicators, capture beneficiary voices, and provide actionable real-time insights.",
    deliverables: [
      "Comprehensive Baseline Studies & Household Surveys",
      "Mid-Term Reviews (MTR) & End-Line Evaluations",
      "Rigorous Impact Assessments & Outcome Harvesting",
      "Digital Real-Time Performance Monitoring Systems",
      "Beneficiary Feedback & Citizen Engagement Mechanisms",
      "Social Accountability & Citizen Report Card Assessments",
      "Institutional Learning Reviews & Knowledge Capture Frameworks",
    ],
    clientValue:
      "Transforms routine M&E from a backward-looking reporting chore into an adaptive, data-driven decision-making engine.",
  },

  // Cluster 2: Governance, Reform & Safeguards
  {
    num: "06",
    id: "governance-reform",
    title: "Governance and Public Sector Reform",
    cluster: "governance",
    clusterLabel: "Governance, Reform & Safeguards",
    tagline: "Modernizing state institutions and enhancing public service delivery.",
    summary:
      "Partnering with federal, state, and local governments to optimize organizational workflows, implement regulatory reforms, and enhance institutional accountability.",
    deliverables: [
      "Public Sector Reform Advisory & Modernization Strategies",
      "Business Enabling Environment & Subnational Doing Business Reforms",
      "Regulatory Impact Assessments & Administrative Streamlining",
      "Institutional Diagnostics & Organizational Restructuring",
      "Public Financial Management (PFM) Advisory & Revenue Optimization",
      "Frontline Service Delivery Assessments & Process Automation",
      "Evidence-Based Policy Development, Review & Implementation Support",
    ],
    clientValue:
      "Builds resilient, high-performing public sector institutions capable of sustaining reforms and delivering superior citizen services.",
  },
  {
    num: "07",
    id: "safeguards",
    title: "Environmental and Social Safeguards",
    cluster: "governance",
    clusterLabel: "Governance, Reform & Safeguards",
    tagline: "Ensuring sustainable, inclusive, and socially responsible development.",
    summary:
      "Integrating world-class ESG standards, environmental protection, stakeholder engagement, and social risk mitigation into major development programs.",
    deliverables: [
      "Environmental & Social Impact Assessments (ESIA)",
      "Environmental & Social Management Plans (ESMP)",
      "Stakeholder Engagement Plans (SEP) & Community Consultations",
      "Labour Management Procedures (LMP) & Worker Safety Protocols",
      "Resettlement Action Plans (RAP) & Livelihood Restoration Planning",
      "Social Risk Assessments & Vulnerability Mapping",
      "Grievance Redress Mechanisms (GRM) Architecture & Tracking",
      "Gender Equality & Social Inclusion (GESI) Mainstreaming",
      "Comprehensive Corporate ESG Advisory Services",
    ],
    clientValue:
      "Guarantees compliance with World Bank ESF, AfDB Integrated Safeguards, and national statutory environmental regulations.",
  },
  {
    num: "08",
    id: "land-governance",
    title: "Land Governance and Investment Advisory",
    cluster: "governance",
    clusterLabel: "Governance, Reform & Safeguards",
    tagline: "Responsible, transparent, and inclusive land-based investments.",
    summary:
      "Supporting governments and investors to balance commercial land investments with customary rights, community benefit sharing, and inclusive governance.",
    deliverables: [
      "FRILIA Framework Assessments (Framework for Responsible & Inclusive Land-Intensive Agricultural Investments)",
      "Land Administration Reforms & Geospatial Land Registry Modernization",
      "Responsible Land Investment Diagnostics & Risk Assessments",
      "Land Acquisition, Compensation & Resettlement Audits",
      "Customary Land Tenure Studies & Boundary Demarcation",
      "Community Consultations & FPIC (Free, Prior, and Informed Consent) Protocols",
    ],
    clientValue:
      "Mitigates land disputes, secures investor tenure rights, and protects local community livelihoods in large-scale agricultural and infrastructure ventures.",
  },
  {
    num: "09",
    id: "institutional-strengthening",
    title: "Institutional Strengthening & Capacity Development",
    cluster: "governance",
    clusterLabel: "Governance, Reform & Safeguards",
    tagline: "Empowering leadership and technical teams for sustainable impact.",
    summary:
      "Designing and executing targeted executive leadership programs, technical masterclasses, and systemic knowledge transfer for civil servants and counterparts.",
    deliverables: [
      "Executive Leadership Programs for Senior Public Officials",
      "Technical Training, Coaching & One-on-One Mentoring",
      "Organizational Capacity Assessments (OCA) & Skills Audits",
      "Institutional Knowledge Transfer & Succession Planning",
      "Change Management & Culture Transformation Support",
      "Interactive Learning Workshops & South-South Peer Exchanges",
      "Long-Term Institutional Development Blueprints",
    ],
    clientValue:
      "Instills enduring internal capabilities within beneficiary institutions so gains persist long after external advisory concludes.",
  },

  // Cluster 3: Technology, Economy & Transactions
  {
    num: "10",
    id: "digital-solutions",
    title: "Digital Transformation and Data Solutions",
    cluster: "innovation",
    clusterLabel: "Technology, Economy & Transactions",
    tagline: "Leveraging technology, GIS, and AI to improve development outcomes.",
    summary:
      "Building cutting-edge digital architectures, geospatial dashboards, and automated management information systems to bring transparency and efficiency to development programs.",
    deliverables: [
      "Custom Management Information Systems (MIS) for Public Programs",
      "Digital Monitoring Platforms & Mobile Data Collection Tools",
      "Business Intelligence (BI) Dashboards & Automated KPI Trackers",
      "GIS Geospatial Mapping, Remote Sensing & Drone Verification",
      "AI for Development Programmes & Predictive Data Analytics",
      "Real-Time Project Delivery Tracking Systems",
      "Data Quality Assessments (DQA) & Governance Architectures",
      "Development Data Labs & Open Data Portals",
    ],
    clientValue:
      "Replaces opaque paper trails with real-time digital visibility, geospatial precision, and actionable predictive intelligence.",
  },
  {
    num: "11",
    id: "crisis-resilience",
    title: "Crisis Resilience & Adaptive Development Services",
    cluster: "innovation",
    clusterLabel: "Technology, Economy & Transactions",
    tagline: "Building adaptive capacity in fragile and conflict-affected environments.",
    summary:
      "Helping public institutions, donors, and businesses maintain continuity, withstand economic shocks, and deliver aid effectively in complex, fragile settings.",
    deliverables: [
      "Crisis Preparedness Assessments & Early Warning Diagnostics",
      "Business Continuity Planning (BCP) for Public Agencies",
      "Institutional Resilience Building & Shock-Responsive Strategies",
      "Emergency Recovery Programme Design & Rapid Assessment",
      "Third-Party Monitoring in Fragile, Conflict & Insecure Environments",
      "Fragility, Conflict, and Violence (FCV) Assessments",
      "Disaster Risk Management (DRM) & Climate Adaptation Frameworks",
    ],
    clientValue:
      "Ensures uninterrupted program delivery, safeguards capital, and protects critical development investments during crises and systemic shocks.",
  },
  {
    num: "12",
    id: "jobs-transformation",
    title: "Jobs and Economic Transformation Advisory",
    cluster: "innovation",
    clusterLabel: "Technology, Economy & Transactions",
    tagline: "Unlocking private sector growth, value chains, and youth employment.",
    summary:
      "Advising governments and DFIs on evidence-based economic inclusion policies, enterprise acceleration, SME cluster development, and market systems development (MSD).",
    deliverables: [
      "Subnational Employment Diagnostics & Labour Market Analytics",
      "SME Growth, Industrial Cluster & Competitiveness Strategies",
      "Youth & Women Targeted Employment Programmes",
      "Local Content Policies & Agricultural Value Chain Upgrading",
      "Investment Climate Assessments & Commercial Law Modernization",
      "Economic Inclusion & Graduation Model Program Design",
      "Entrepreneurship Ecosystem Mapping & Hub Incubation Advisory",
    ],
    clientValue:
      "Catalyzes private enterprise, accelerates wage-earning and self-employment opportunities, and drives structural economic transformation.",
  },
  {
    num: "13",
    id: "procurement-fiduciary",
    title: "Procurement Excellence and Fiduciary Services",
    cluster: "innovation",
    clusterLabel: "Technology, Economy & Transactions",
    tagline: "Value-for-money, donor procurement compliance, and contract integrity.",
    summary:
      "Providing specialized procurement oversight, bid evaluation advisory, and fiduciary capacity building in strict accordance with multilateral bank regulations.",
    deliverables: [
      "Comprehensive Public Procurement & Fiduciary Diagnostics",
      "Independent Procurement Audits & Post-Review Assessments",
      "Bid Evaluation Support & Transaction Review Committee Advisory",
      "Donor Procurement Compliance (World Bank, AfDB, EU, USAID, IsDB)",
      "Procurement Capacity Building & E-Procurement Implementation",
      "Value-for-Money (VfM) Studies & Life-Cycle Costing Reviews",
      "Contract Management Reviews & Claims Mitigation",
    ],
    clientValue:
      "Ensures transparent, clean, and compliant procurement processes that eliminate audit exceptions and maximize public funds value.",
  },
  {
    num: "14",
    id: "ppp-transactions",
    title: "PPP and Investment Facilitation Services",
    cluster: "innovation",
    clusterLabel: "Technology, Economy & Transactions",
    tagline: "Structuring bankable public-private partnerships and mobilizing private capital.",
    summary:
      "Advising sovereign authorities and private concessionaires through the complete project lifecycle of public-private partnerships and infrastructure transactions.",
    deliverables: [
      "PPP Project Identification, Screening & Pipeline Development",
      "Comprehensive Feasibility Studies (Technical, Financial & Legal)",
      "Transaction Advisory & Concession Agreement Structuring",
      "Investor Readiness Assessments & Market Sounding Exercises",
      "Infrastructure Finance, Project Finance & Blended Finance Structuring",
      "Multi-Stakeholder Engagement & Concessionaire Procurement",
      "Subnational Investment Promotion Strategies & Deal Rooms",
    ],
    clientValue:
      "Bridges the infrastructure financing gap by designing de-risked, commercially viable PPP projects attractive to international and local private capital.",
  },
];

export default function PracticeClusters() {
  const [activeCluster, setActiveCluster] = useState<"all" | "delivery" | "governance" | "innovation">("all");
  const [expandedPractice, setExpandedPractice] = useState<string | null>("expert-mobilization");

  const filtered = activeCluster === "all" ? practices : practices.filter((p) => p.cluster === activeCluster);

  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
              Core Practice Catalog &middot; 14 Capabilities
            </span>
            <h2 className="mt-2 font-serif text-[32px] font-medium text-navy md:text-[42px]">
              Fourteen Specialized Practice Areas
            </h2>
            <p className="mt-3 text-[16px] text-ink/75">
              Explore our full service directory, including specialized deliverables, methodological frameworks, and institutional value propositions.
            </p>
          </div>

          {/* Cluster Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCluster("all")}
              className={`rounded px-4 py-2 text-[13px] font-medium transition-all ${
                activeCluster === "all"
                  ? "bg-navy text-white shadow-sm"
                  : "bg-white text-navy border border-navy/10 hover:bg-navy/5"
              }`}
            >
              All 14 Practices
            </button>
            <button
              onClick={() => setActiveCluster("delivery")}
              className={`rounded px-4 py-2 text-[13px] font-medium transition-all ${
                activeCluster === "delivery"
                  ? "bg-navy text-white shadow-sm"
                  : "bg-white text-navy border border-navy/10 hover:bg-navy/5"
              }`}
            >
              Delivery &amp; MEAL (01–05)
            </button>
            <button
              onClick={() => setActiveCluster("governance")}
              className={`rounded px-4 py-2 text-[13px] font-medium transition-all ${
                activeCluster === "governance"
                  ? "bg-navy text-white shadow-sm"
                  : "bg-white text-navy border border-navy/10 hover:bg-navy/5"
              }`}
            >
              Governance &amp; Safeguards (06–09)
            </button>
            <button
              onClick={() => setActiveCluster("innovation")}
              className={`rounded px-4 py-2 text-[13px] font-medium transition-all ${
                activeCluster === "innovation"
                  ? "bg-navy text-white shadow-sm"
                  : "bg-white text-navy border border-navy/10 hover:bg-navy/5"
              }`}
            >
              Data, Economy &amp; PPP (10–14)
            </button>
          </div>
        </div>

        {/* Practice Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filtered.map((practice) => {
            const isExpanded = expandedPractice === practice.id;
            return (
              <div
                key={practice.id}
                id={practice.id}
                className={`flex flex-col justify-between rounded-xl border bg-white p-7 transition-all duration-300 ${
                  isExpanded
                    ? "border-gold shadow-md ring-1 ring-gold/30"
                    : "border-navy/10 shadow-sm hover:border-navy/30"
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-navy/10 pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded bg-navy text-xs font-mono font-bold text-gold-light">
                        {practice.num}
                      </span>
                      <span className="text-[12px] font-mono font-medium text-navy/60">
                        {practice.clusterLabel}
                      </span>
                    </div>
                    <button
                      onClick={() => setExpandedPractice(isExpanded ? null : practice.id)}
                      className="text-xs font-semibold text-blue-accent hover:underline"
                    >
                      {isExpanded ? "Collapse Scope" : "Expand Scope &rarr;"}
                    </button>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="mt-4 font-serif text-[22px] font-medium text-navy">
                    {practice.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] font-medium text-gold">
                    {practice.tagline}
                  </p>
                  
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink/80">
                    {practice.summary}
                  </p>

                  {/* Deliverables List (Always or Expanded) */}
                  <div className="mt-5 rounded-lg border border-navy/5 bg-sand p-5">
                    <span className="block text-[11.5px] font-mono font-semibold uppercase tracking-wider text-navy">
                      Core Deliverables &amp; Specialized Services:
                    </span>
                    <ul className="mt-3 space-y-2">
                      {(isExpanded ? practice.deliverables : practice.deliverables.slice(0, 4)).map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-ink/75">
                          <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                      {!isExpanded && practice.deliverables.length > 4 && (
                        <li className="pt-1 text-[12px] font-medium text-navy/60">
                          + {practice.deliverables.length - 4} additional specialized deliverables (click expand)
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Client Value Proposition Box */}
                <div className="mt-5 border-t border-navy/10 pt-4">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-navy uppercase tracking-wider">
                      Client Value:
                    </span>
                    <p className="text-[13px] italic text-ink/70">
                      {practice.clientValue}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
