/**
 * FSM Consulting Editorial Perspectives & Insights
 * Grounded strictly in "FSM Consulting - Corporate Profile - r1-1.docx".
 * 
 * Free of fabricated articles, authors, publication dates, or statistics.
 */

export interface RelatedService {
  name: string;
  slug: string;
}

export interface Insight {
  slug: string;
  title: string;
  dek: string;
  category: string;
  author: string;
  /** Optional — omitted where the source material carries no publication date. */
  date?: string;
  image: string;
  featured: boolean;
  /** Full article body, as standalone paragraphs. Drawn directly from FSM's corporate profile. */
  body: string[];
  /** Exactly 2 related service offerings linking to /services/[slug] */
  relatedServices: RelatedService[];
}

export const insights: Insight[] = [
  {
    slug: "results-not-just-deliverables",
    title: "We focus on results, not just deliverables",
    dek: "Many consulting firms measure success by activities completed, reports submitted, or contractual milestones met. FSM Consulting Limited measures it differently — and verifies it through evidence.",
    category: "Development Effectiveness",
    author: "FSM Consulting Limited",
    image: "/images/insights/project-delivery.jpg",
    featured: true,
    relatedServices: [
      { name: "Project Assurance Services", slug: "project-assurance" },
      { name: "Development Effectiveness Services", slug: "development-effectiveness" },
    ],
    body: [
      "Many consulting firms measure success by the completion of activities, submission of reports, or achievement of contractual milestones. FSM Consulting Limited measures success differently.",
      "We ask: did the intervention improve lives? Did beneficiaries receive the intended benefits? Did institutions become stronger and more effective? Were resources utilized efficiently and transparently? Are the results sustainable beyond project completion?",
      "Our focus extends beyond outputs to outcomes and impact. We work with our clients to ensure that development investments translate into meaningful improvements in economic opportunities, public services, institutional performance, community resilience, and overall well-being.",
      "At FSM Consulting Limited, we believe that accountability begins with evidence. Our approach combines rigorous technical analysis with direct field engagement, allowing us to independently verify project performance and validate results.",
      "Rather than relying solely on reports and administrative data, we engage directly with project beneficiaries, communities, implementing agencies, civil society organizations, and other stakeholders to determine whether interventions are producing the intended outcomes.",
      "This commitment to evidence-based verification enables our clients to make informed decisions, manage risks effectively, and strengthen programme performance.",
    ],
  },
  {
    slug: "verify-reality-through-evidence",
    title: "We verify reality through evidence",
    dek: "Accountability begins with evidence. Independent verification and direct field engagement enable governments and donors to validate ground reality and protect development investments.",
    category: "Project Assurance",
    author: "FSM Consulting Limited",
    image: "/images/insights/meal.jpg",
    featured: true,
    relatedServices: [
      { name: "Monitoring, Evaluation, Accountability and Learning (MEAL)", slug: "meal" },
      { name: "Project Assurance Services", slug: "project-assurance" },
    ],
    body: [
      "At FSM Consulting Limited, we believe that accountability begins with evidence. Our approach combines rigorous technical analysis with direct field engagement, allowing us to independently verify project performance and validate results.",
      "Rather than relying solely on reports and administrative data, we engage directly with project beneficiaries, communities, implementing agencies, civil society organizations, and other stakeholders to determine whether interventions are producing the intended outcomes.",
      "This commitment to evidence-based verification enables our clients to make informed decisions, manage risks effectively, and strengthen programme performance.",
      "Trust is earned through integrity, professionalism, and transparency. FSM Consulting Limited maintains the highest standards of ethical conduct and professional independence in every assignment we undertake.",
      "We provide objective assessments, evidence-based findings, and impartial recommendations that help our clients strengthen governance, improve performance, and enhance accountability.",
      "Our commitment to transparency ensures that stakeholders have confidence in both our processes and our findings.",
    ],
  },
  {
    slug: "cross-border-assignments-need-more-than-experts",
    title: "Why cross-border assignments need more than experts",
    dek: "Successful technical delivery across Africa depends not only on the quality of expertise deployed, but on effective operational readiness, in-country coordination, and institutional navigation.",
    category: "Operations & Mobilization",
    author: "FSM Consulting Limited",
    image: "/images/insights/land-governance.jpg",
    featured: true,
    relatedServices: [
      { name: "Technical Expert Mobilization", slug: "expert-mobilisation" },
      { name: "Implementation Support", slug: "implementation-support" },
    ],
    body: [
      "Successful technical delivery depends not only on the quality of expertise deployed, but also on effective mobilization, operational readiness, safety, and in-country coordination.",
      "Complex development assignments frequently encounter operational bottlenecks that have little to do with technical competence: visa delays, fragmented logistics, unfamiliar regulatory environments, and weak links with local administrative counterparts.",
      "FSM Consulting Limited provides integrated assignment mobilization and operational support for national, regional, and international consultants engaged on assignments across Nigeria and other African countries.",
      "Subject to applicable immigration laws, national regulations, security requirements, and client contractual arrangements, our operational coordination covers pre-deployment planning, immigration and assignment documentation, airport coordination, accommodation, local movement, in-country briefings, and administrative support.",
      "Our objective is straightforward: remove avoidable operational barriers so that technical experts can concentrate on the substantive development challenges they have been engaged to address.",
      "FSM does not simply identify experts. We mobilize, coordinate, and support integrated technical teams from deployment through delivery.",
    ],
  },
  {
    slug: "local-access-regional-reach-global-expertise",
    title: "Local access. Regional reach. Global expertise.",
    dek: "Combining international technical depth with ground-level African access bridges the gap between ambitious development strategies and field-level execution.",
    category: "Strategic Advisory",
    author: "FSM Consulting Limited",
    image: "/images/insights/governance.jpg",
    featured: true,
    relatedServices: [
      { name: "Governance and Public Sector Reform", slug: "governance-reform" },
      { name: "Development Effectiveness Services", slug: "development-effectiveness" },
    ],
    body: [
      "FSM Consulting Limited combines the technical depth of an international consulting platform with the responsiveness and contextual understanding required for effective development delivery.",
      "Our model brings together global expertise with access to international technical specialists, regional access across African markets, national implementation capability within Nigeria, and deep local knowledge from country-based practitioners.",
      "One of our greatest operational strengths is the ability to mobilize qualified professionals across all thirty-six states of Nigeria and the Federal Capital Territory. Through this extensive network, we access institutions, project sites, and communities in even the most remote locations.",
      "Our consultants possess deep understanding of local governance systems, cultural dynamics, languages, and implementation environments, enabling us to engage effectively with beneficiaries and stakeholders at every level.",
      "Where others see difficult terrain, limited access, or implementation challenges, FSM Consulting Limited sees opportunities to generate evidence, build trust, and ensure accountability.",
      "This integrated model enables clients to access the right expertise at the right level while reducing fragmentation and strengthening coordination, accountability, and implementation efficiency.",
    ],
  },
];
