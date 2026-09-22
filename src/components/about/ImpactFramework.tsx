const integratedCapabilities = [
  { title: "Strategic Advisory", desc: "Aligning policies, investments, and long-term reform agendas with measurable impact targets." },
  { title: "Technical Assistance", desc: "Embedding high-level specialists to assist ministries, departments, and delivery units." },
  { title: "Independent Verification", desc: "Rigorous third-party validation (IVA), technical audits, and disbursement-linked indicator checks." },
  { title: "Monitoring & Evaluation (MEAL)", desc: "Generating real-time project intelligence, baseline surveys, and outcome evaluations." },
  { title: "Institutional Strengthening", desc: "Modernizing governance structures, public financial management, and operational workflows." },
  { title: "Project Assurance", desc: "Comprehensive risk management, social and environmental safeguarding, and health checks." },
  { title: "Capacity Development", desc: "Upskilling civil servants, program staff, and local counterparts for long-term sustainability." },
];

const impactSteps = [
  {
    letter: "I",
    step: "Step 01",
    title: "Identify Priorities",
    desc: "Conduct diagnostic assessments, establish institutional stakeholder alignment, and pinpoint critical reform priorities.",
  },
  {
    letter: "M",
    step: "Step 02",
    title: "Measure Baselines",
    desc: "Collect empirical data, design robust performance indicators, and set clear, verifiable baseline targets.",
  },
  {
    letter: "P",
    step: "Step 03",
    title: "Plan for Delivery",
    desc: "Develop project readiness frameworks (D-Ready), detailed implementation roadmaps, and safeguard plans.",
  },
  {
    letter: "A",
    step: "Step 04",
    title: "Accelerate Implementation",
    desc: "Deploy delivery units, clear execution bottlenecks, coordinate field logistics, and mobilize specialist teams.",
  },
  {
    letter: "C",
    step: "Step 05",
    title: "Check Progress",
    desc: "Perform ongoing independent verification, technical and fiduciary audits, and agile course corrections.",
  },
  {
    letter: "T",
    step: "Step 06",
    title: "Track Outcomes",
    desc: "Quantify real development impact, evaluate institutional improvements, and secure lasting sustainability.",
  },
];

export default function ImpactFramework() {
  return (
    <section className="bg-white py-20 text-[#07131e] md:py-28 border-b border-gray-100" aria-labelledby="impact-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        
        {/* Positioning Overview */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
              Our Positioning &middot; Development Effectiveness
            </span>
            <h2 id="impact-heading" className="mt-3 text-[32px] md:text-[42px] font-bold leading-tight tracking-tight text-[#07131e]">
              Specialists in generating tangible results, not just compliance.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-gray-600">
              Unlike traditional consulting firms that focus solely on compliance or reporting, FSM Consulting Limited focuses on ensuring that development investments generate tangible results and lasting impact.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-gray-500">
              To help clients achieve their development objectives efficiently and effectively, we combine strategic advisory, technical assistance, independent verification, and hands-on operational delivery into a single integrated platform.
            </p>

            <div className="mt-8 rounded-[20px] border border-[#2F5FA8]/30 bg-[#2F5FA8]/5 p-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2F5FA8]">
                The FSM Advantage
              </span>
              <p className="mt-1 text-[14.5px] font-medium text-[#07131e]">
                Moving beyond superficial advisory reports into embedded execution, continuous field verification, and demonstrable public value.
              </p>
            </div>
          </div>

          <div className="rounded-[24px] border border-gray-100 bg-[#f4f5f7] p-8 shadow-xs">
            <h3 className="text-[20px] font-bold tracking-tight text-[#07131e]">
              Integrated Capabilities Matrix
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              Unified under our single development delivery platform
            </p>

            <div className="mt-6 divide-y divide-gray-200/70">
              {integratedCapabilities.map((cap) => (
                <div key={cap.title} className="py-3.5 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2F5FA8]" />
                    <span className="text-[15px] font-semibold text-[#07131e]">{cap.title}</span>
                  </div>
                  <p className="mt-1 pl-3.5 text-[13px] text-gray-600">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FSM Impact 360™ Roadmap */}
        <div className="mt-24 border-t border-gray-100 pt-16">
          <div className="text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
              Proprietary Delivery Architecture
            </span>
            <h3 className="mt-2 text-[30px] md:text-[38px] font-bold tracking-tight text-[#07131e]">
              FSM Impact 360&trade; Framework
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-[15.5px] text-gray-500">
              Our systematic working framework for every engagement, from the initial diagnostic through to independently verified, lasting outcomes.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {impactSteps.map((s, idx) => (
              <div
                key={s.letter}
                className="group relative flex flex-col justify-between rounded-[20px] border border-gray-100 bg-[#f4f5f7] p-6 transition-all duration-300 hover:border-[#2F5FA8]/40 hover:bg-white hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-gray-200/60 pb-3">
                    <span className="font-mono text-[11px] font-bold text-[#2F5FA8]">
                      {s.step}
                    </span>
                    <span className="text-[11px] text-gray-400">Phase {idx + 1}</span>
                  </div>
                  
                  <span className="mt-4 block font-mono text-[38px] font-bold leading-none text-[#2F5FA8] transition-transform duration-300 group-hover:scale-105">
                    {s.letter}
                  </span>
                  
                  <h4 className="mt-3 text-[17px] font-bold tracking-tight text-[#07131e]">
                    {s.title}
                  </h4>
                  
                  <p className="mt-2 text-[13px] leading-relaxed text-gray-600">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 h-1 w-full rounded-full bg-gray-200 group-hover:bg-[#2F5FA8] transition-colors" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
