const pillars = [
  {
    num: "01",
    title: "Design Better Programs",
    desc: "Structuring evidence-based interventions, theory of change, and results frameworks aligned with client development objectives.",
  },
  {
    num: "02",
    title: "Deliver Projects Effectively",
    desc: "Providing implementation acceleration, delivery units, and project readiness (D-Ready) advisory to keep projects on track.",
  },
  {
    num: "03",
    title: "Measure Results Accurately",
    desc: "Conducting rigorous baseline studies, mid-term reviews, impact evaluations, and setting up robust MEAL frameworks.",
  },
  {
    num: "04",
    title: "Strengthen Institutions",
    desc: "Diagnostics, organizational development, executive leadership training, and public financial management reforms.",
  },
  {
    num: "05",
    title: "Manage Risks Proactively",
    desc: "Implementing environmental and social safeguards (ESMP, SEP), fiduciary controls, and risk-based assurance reviews.",
  },
  {
    num: "06",
    title: "Improve Governance Systems",
    desc: "Advising on public sector modernization, regulatory reform, and business enabling environment overhauls.",
  },
  {
    num: "07",
    title: "Enhance Service Delivery",
    desc: "Optimizing government delivery processes, citizen engagement mechanisms, and frontline public service performance.",
  },
  {
    num: "08",
    title: "Demonstrate Real Impact",
    desc: "Generating empirical proof of value through independent verification, social audits, and third-party monitoring.",
  },
];

export default function ExecutiveSummary() {
  return (
    <section id="mandate" className="border-b border-gray-100 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
              Executive Summary &middot; Institutional Mandate
            </span>
            <h2 className="mt-3 text-[32px] md:text-[42px] font-bold leading-tight tracking-tight text-[#07131e]">
              Bridging the gap between high-level strategy and ground-level execution.
            </h2>
            
            <p className="mt-6 text-[16px] leading-relaxed text-gray-600">
              FSM Consulting Limited is a multidisciplinary development delivery, implementation acceleration, and project assurance firm dedicated to helping governments, development partners, international financial institutions, and private sector organizations transform investments into measurable results and sustainable impact.
            </p>

            <p className="mt-4 text-[15.5px] leading-relaxed text-gray-500">
              We specialize in bridging the gap between strategy and execution by supporting clients to move faster from project concepts to development outcomes through implementation acceleration, project readiness (D-Ready) support, institutional strengthening, monitoring and evaluation, independent verification, and results-based delivery services.
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-[24px] border border-white/10 bg-[#07131e] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[#2F5FA8]/20 blur-3xl" />
            <div className="border-b border-white/15 pb-4 relative z-10">
              <span className="text-[12px] font-mono font-semibold uppercase tracking-wider text-[#9BC2F5]">
                The FSM Value Proposition
              </span>
              <h3 className="mt-1 text-[22px] font-bold tracking-tight text-white">
                Integrated Delivery Ecosystem
              </h3>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-white/80 relative z-10">
              Our distinctive value proposition lies in combining <strong className="font-semibold text-white">Implementation Acceleration</strong>, <strong className="font-semibold text-white">Project Readiness (D-Ready)</strong>, <strong className="font-semibold text-white">Jobs &amp; Economic Growth Advisory</strong>, <strong className="font-semibold text-white">Crisis &amp; Resilience Support</strong>, <strong className="font-semibold text-white">Procurement &amp; Fiduciary Excellence</strong>, and <strong className="font-semibold text-white">Technology-Enabled Development Delivery</strong> within a single unified platform.
            </p>
            <div className="mt-6 rounded-[16px] border-l-4 border-[#2F5FA8] bg-white/5 p-4 text-[14px] italic text-white/90 relative z-10">
              &ldquo;Transforming resources into results, policies into action, and investments into sustainable development impact.&rdquo;
            </div>
          </div>
        </div>

        {/* 8 Ways We Help Organizations */}
        <div className="mt-20">
          <div className="mb-10 text-center md:text-left">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
              Core Capabilities
            </span>
            <h3 className="mt-2 text-[26px] md:text-[32px] font-bold tracking-tight text-[#07131e]">
              How FSM Empowers Development Organizations
            </h3>
            <p className="mt-2 max-w-2xl text-[15px] text-gray-500">
              Our work is guided by international best practices, evidence-based methodologies, and a commitment to practical solutions that create lasting value.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="group relative rounded-[20px] border border-gray-100 bg-[#f4f5f7] p-7 transition-all duration-300 hover:border-[#2F5FA8]/40 hover:bg-white hover:shadow-xl hover:-translate-y-1"
              >
                <span className="block font-mono text-[24px] font-bold text-[#2F5FA8] transition-transform duration-300 group-hover:scale-105">
                  {pillar.num}
                </span>
                <h4 className="mt-3 text-[18px] font-bold tracking-tight text-[#07131e]">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
