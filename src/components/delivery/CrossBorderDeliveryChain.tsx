export const deliveryChainSteps = [
  {
    num: "01",
    title: "Client Requirement",
    desc: "Terms of reference, development objectives, and assignment parameters.",
  },
  {
    num: "02",
    title: "FSM Technical Leadership",
    desc: "Methodological structuring, governance, and assignment direction.",
  },
  {
    num: "03",
    title: "Global / Regional Expertise",
    desc: "Mobilization of international and regional technical specialists.",
  },
  {
    num: "04",
    title: "Country Partner & Local Access",
    desc: "In-country partner institutions and subnational operational networks.",
  },
  {
    num: "05",
    title: "Consultant Mobilization",
    desc: "Integrated deployment, briefing, travel, and logistics coordination.",
  },
  {
    num: "06",
    title: "Field & Implementation Support",
    desc: "Direct field mission execution, stakeholder engagement, and evidence gathering.",
  },
  {
    num: "07",
    title: "Quality Assurance",
    desc: "Fiduciary oversight, technical review, and milestone validation.",
  },
  {
    num: "08",
    title: "Measurable Results",
    desc: "Verified development outcomes and documented institutional impact.",
  },
];

export default function CrossBorderDeliveryChain() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {deliveryChainSteps.map((step) => (
        <div
          key={step.num}
          className="rounded-[18px] bg-white p-6 border border-gray-200/80 shadow-xs flex flex-col justify-between"
        >
          <div>
            <span className="font-mono text-[12px] font-bold text-[#2F5FA8]">
              Step {step.num}
            </span>
            <h4 className="mt-2 text-[16px] font-bold text-[#07131e] tracking-tight">
              {step.title}
            </h4>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#5A6876]">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
