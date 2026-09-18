export type Impact360Stage = {
  letter: string;
  title: string;
  body: string;
};

export const impact360Stages: Impact360Stage[] = [
  {
    letter: "I",
    title: "Identify Priorities",
    body: "Understand context, stakeholder needs, risks, and where an intervention can have the most effect.",
  },
  {
    letter: "M",
    title: "Measure Baselines",
    body: "Establish the starting point — the data and conditions every later result will be measured against.",
  },
  {
    letter: "P",
    title: "Plan for Delivery",
    body: "Translate priorities and baselines into a practical, sequenced delivery and readiness plan.",
  },
  {
    letter: "A",
    title: "Accelerate Implementation",
    body: "Support execution directly — mobilizing expertise, resolving bottlenecks, and keeping delivery moving.",
  },
  {
    letter: "C",
    title: "Check Progress",
    body: "Independently monitor and verify performance against the plan as the work proceeds.",
  },
  {
    letter: "T",
    title: "Track Outcomes",
    body: "Follow results through to completion, generating evidence and lessons for what comes next.",
  },
];
