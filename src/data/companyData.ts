/**
 * FSM Consulting Limited — Company Core Data
 * Single Source of Truth for Institutional Identity, Vision, Mission,
 * Core Values, QA Protocols, and Capabilities.
 * Grounded strictly in "FSM Consulting - Corporate Profile - r1-1.docx".
 */

export const vision =
  "To become Africa's leading Development Effectiveness and Project Assurance firm, recognized for advancing accountability, innovation, and sustainable development outcomes.";

export const mission =
  "To support governments, development partners, and organizations in achieving measurable development results through evidence-based advisory services, project assurance, institutional strengthening, and strategic technical support.";

export interface CoreValue {
  id: string;
  num: string;
  title: string;
  desc: string;
}

export const coreValues: CoreValue[] = [
  {
    id: "integrity",
    num: "01",
    title: "Integrity",
    desc: "We uphold the highest standards of ethics, transparency, and professionalism.",
  },
  {
    id: "excellence",
    num: "02",
    title: "Excellence",
    desc: "We deliver quality services that consistently exceed expectations.",
  },
  {
    id: "innovation",
    num: "03",
    title: "Innovation",
    desc: "We apply creative thinking and technology-driven solutions to complex development challenges.",
  },
  {
    id: "accountability",
    num: "04",
    title: "Accountability",
    desc: "We promote responsible stewardship of public and development resources.",
  },
  {
    id: "collaboration",
    num: "05",
    title: "Collaboration",
    desc: "We leverage multidisciplinary expertise and strategic partnerships.",
  },
  {
    id: "impact",
    num: "06",
    title: "Impact",
    desc: "We focus on generating measurable and sustainable results.",
  },
];

export interface QaCommitment {
  id: string;
  title: string;
  desc: string;
}

export const qaCommitments: QaCommitment[] = [
  {
    id: "qms",
    title: "Quality Management Systems",
    desc: "Systematic protocols and quality standards across all project outputs.",
  },
  {
    id: "ethics",
    title: "Ethical Conduct Policies",
    desc: "Uncompromising professional ethics, transparency, and integrity guidelines.",
  },
  {
    id: "anti-corruption",
    title: "Anti-Corruption Frameworks",
    desc: "Zero-tolerance anti-bribery, fraud mitigation, and fiduciary oversight mechanisms.",
  },
  {
    id: "data-protection",
    title: "Data Protection Policies",
    desc: "Responsible management of research and administrative data under the NDPA.",
  },
  {
    id: "safeguarding",
    title: "Safeguarding Policies",
    desc: "Protection of vulnerable populations, communities, and project stakeholders.",
  },
  {
    id: "gender-equality",
    title: "Gender Equality Policies",
    desc: "Inclusive engagement and mainstreamed gender equity across interventions.",
  },
  {
    id: "risk-management",
    title: "Risk Management Frameworks",
    desc: "Proactive identification, escalation, and mitigation of operational risks.",
  },
  {
    id: "cpd",
    title: "Continuous Professional Development",
    desc: "Ongoing skills enhancement and methodological learning for our teams.",
  },
];

export const positioningList: string[] = [
  "Strategic Advisory",
  "Technical Assistance",
  "Independent Verification",
  "Monitoring and Evaluation",
  "Institutional Strengthening",
  "Project Assurance",
  "Capacity Development",
];

export const whatWeHelpOrganisationsDo: string[] = [
  "Design better programs",
  "Deliver projects effectively",
  "Measure results accurately",
  "Strengthen institutions",
  "Manage risks proactively",
  "Improve governance systems",
  "Enhance service delivery",
  "Demonstrate development impact",
];

export const fiveResultsQuestions: string[] = [
  "Did the intervention improve lives?",
  "Did beneficiaries receive the intended benefits?",
  "Did institutions become stronger and more effective?",
  "Were resources utilized efficiently and transparently?",
  "Are the results sustainable beyond project completion?",
];
