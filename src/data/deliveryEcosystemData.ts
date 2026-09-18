export type DeliveryStage = {
  title: string;
  body: string;
};

export const deliveryStages: DeliveryStage[] = [
  {
    title: "Client Requirement",
    body: "An assignment, program, or delivery challenge is defined with the client.",
  },
  {
    title: "FSM Technical Leadership",
    body: "FSM's core team takes ownership of the assignment's technical direction and quality.",
  },
  {
    title: "Global & Regional Expertise",
    body: "International and regional specialists are drawn in where comparative expertise is needed.",
  },
  {
    title: "Country Partner & Local Access",
    body: "Country-based partners provide institutional relationships and on-the-ground access.",
  },
  {
    title: "Consultant Mobilization",
    body: "National and field consultants are sourced, deployed, and onboarded for the assignment.",
  },
  {
    title: "Field & Implementation Support",
    body: "Logistics, coordination, and technical support keep delivery moving on the ground.",
  },
  {
    title: "Quality Assurance",
    body: "Independent review and verification check performance and compliance throughout.",
  },
  {
    title: "Measurable Results",
    body: "The assignment closes out with evidence of what was actually delivered.",
  },
];
