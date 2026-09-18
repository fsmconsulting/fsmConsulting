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
  /** Full article body, as standalone paragraphs. Drawn directly from FSM's own
   *  corporate profile — no invented claims, figures, or examples. */
  body: string[];
};

/**
 * A single real editorial piece, drawn directly from FSM's corporate profile
 * ("Why Partner with FSM Consulting Limited" — differentiators 05 and 06).
 * No fabricated titles, bylines, dates, or claims. Add further pieces only
 * from verified FSM source material.
 */
export const insights: Insight[] = [
  {
    slug: "results-not-just-deliverables",
    title: "We focus on results, not just deliverables",
    dek: "Many consulting firms measure success by activities completed, reports submitted, or contractual milestones met. FSM Consulting Limited measures it differently — and verifies it through evidence.",
    category: "Development Effectiveness",
    author: "FSM Consulting Limited",
    image: "/images/insights/project-delivery.jpg",
    featured: true,
    body: [
      "Many consulting firms measure success by the completion of activities, submission of reports, or achievement of contractual milestones. FSM Consulting Limited measures success differently.",
      "We ask: did the intervention improve lives? Did beneficiaries receive the intended benefits? Did institutions become stronger and more effective? Were resources utilized efficiently and transparently? Are the results sustainable beyond project completion?",
      "Our focus extends beyond outputs to outcomes and impact. We work with our clients to ensure that development investments translate into meaningful improvements in economic opportunities, public services, institutional performance, community resilience, and overall well-being.",
      "At FSM Consulting Limited, we believe that accountability begins with evidence. Our approach combines rigorous technical analysis with direct field engagement, allowing us to independently verify project performance and validate results.",
      "Rather than relying solely on reports and administrative data, we engage directly with project beneficiaries, communities, implementing agencies, civil society organizations, and other stakeholders to determine whether interventions are producing the intended outcomes.",
      "This commitment to evidence-based verification enables our clients to make informed decisions, manage risks effectively, and strengthen programme performance.",
    ],
  },
];
