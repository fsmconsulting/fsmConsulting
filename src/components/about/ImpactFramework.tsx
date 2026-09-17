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
    <section className="bg-navy py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Positioning Overview */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">
              Our Positioning &middot; Development Effectiveness
            </span>
            <h2 className="mt-3 font-serif text-[32px] font-medium leading-tight text-white md:text-[42px]">
              Specialists in generating tangible results, not just compliance.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ivory/80">
              Unlike traditional consulting firms that focus solely on compliance or reporting, FSM Consulting Limited focuses on ensuring that development investments generate tangible results and lasting impact.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ivory/70">
              To help clients achieve their development objectives efficiently and effectively, we combine strategic advisory, technical assistance, independent verification, and hands-on operational delivery into a single integrated platform.
            </p>

            <div className="mt-8 rounded-none border border-gold/30 bg-gold/10 p-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gold-light">
                The FSM Advantage
              </span>
              <p className="mt-1 text-[14.5px] text-ivory/90">
                Moving beyond superficial advisory reports into embedded execution, continuous field verification, and demonstrable public value.
              </p>
            </div>
          </div>

          <div className="rounded-none border border-white/15 bg-navy-2 p-8">
            <h3 className="font-serif text-[20px] font-medium text-gold-light">
              Integrated Capabilities Matrix
            </h3>
            <p className="mt-1 text-xs text-ivory/60">
              Unified under our single development delivery platform
            </p>

            <div className="mt-6 divide-y divide-white/10">
              {integratedCapabilities.map((cap) => (
                <div key={cap.title} className="py-3.5 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-none bg-gold" />
                    <span className="text-[15px] font-medium text-white">{cap.title}</span>
                  </div>
                  <p className="mt-1 pl-3.5 text-[13px] text-ivory/70">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FSM Impact 360™ Roadmap */}
        <div className="mt-24 border-t border-white/15 pt-16">
          <div className="text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">
              Proprietary Delivery Architecture
            </span>
            <h3 className="mt-2 font-serif text-[30px] font-medium text-white md:text-[38px]">
              FSM Impact 360&trade; Framework
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-[15.5px] text-ivory/75">
              Our systematic working framework for every engagement, from the initial diagnostic through to independently verified, lasting outcomes.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {impactSteps.map((s, idx) => (
              <div
                key={s.letter}
                className="group relative flex flex-col justify-between rounded-none border border-white/10 bg-navy-3/60 p-6 transition-all duration-300 hover:border-gold hover:bg-navy-3"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-[11px] font-semibold text-gold">
                      {s.step}
                    </span>
                    <span className="text-[11px] text-ivory/40">Phase {idx + 1}</span>
                  </div>
                  
                  <span className="mt-4 block font-serif text-[42px] font-bold leading-none text-gold-light transition-transform duration-300 group-hover:scale-110">
                    {s.letter}
                  </span>
                  
                  <h4 className="mt-3 font-serif text-[17px] font-medium text-white">
                    {s.title}
                  </h4>
                  
                  <p className="mt-2 text-[13px] leading-relaxed text-ivory/70">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 h-0.5 w-full bg-white/10 group-hover:bg-gold/60" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
