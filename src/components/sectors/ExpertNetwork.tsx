const expertDisciplines = [
  {
    role: "Development Economists & Policy Specialists",
    scope: "Public expenditure analysis, macroeconomic diagnostics, fiscal decentralization, and sector master planning.",
  },
  {
    role: "Implementation Specialists & PMO Directors",
    scope: "Delivery unit leadership, bottleneck elimination, project turnaround, and milestone acceleration.",
  },
  {
    role: "Procurement & Fiduciary Compliance Advisors",
    scope: "Multilateral development bank (World Bank, AfDB) procurement guidelines, bid evaluations, and value-for-money audits.",
  },
  {
    role: "Environmental & Social Safeguards Experts",
    scope: "World Bank ESF compliance, ESIA/ESMP formulation, Resettlement Action Plans (RAP), and Stakeholder Engagement Plans (SEP).",
  },
  {
    role: "Civil, Energy & Infrastructure Engineers",
    scope: "Engineering design verification, site inspections, quality audits, and contractor performance assessments.",
  },
  {
    role: "MEAL & Evaluation Researchers",
    scope: "Baseline and endline survey architecture, impact evaluations, outcome harvesting, and real-time field data collection.",
  },
  {
    role: "Land Governance & FRILIA Practitioners",
    scope: "Customary land tenure mapping, land acquisition audits, responsible investor diagnostics, and community consultations.",
  },
  {
    role: "Digital Architects & GIS Data Scientists",
    scope: "Management Information Systems (MIS), spatial asset mapping, mobile data collection, and AI-enabled development dashboards.",
  },
  {
    role: "Legal & PPP Transaction Advisors",
    scope: "Concession agreement drafting, regulatory reform, investor due diligence, and risk allocation modeling.",
  },
];

export default function ExpertNetwork() {
  return (
    <section id="expert-bench" className="bg-navy py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">
              Human Capital &middot; Multidisciplinary Bench
            </span>
            <h2 className="mt-2 font-serif text-[32px] font-medium leading-tight text-white md:text-[42px]">
              Our Technical Expert Network
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ivory/80">
              Our consultants possess extensive experience supporting projects funded by international development partners, multilateral development banks, and governments across Africa.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ivory/70">
              FSM operates through an elite multidisciplinary network bringing together development economists, implementation leaders, governance advisors, safeguard professionals, engineers, and digital architects, combining global best practices with profound contextual understanding.
            </p>
          </div>

          <div className="rounded-none border border-white/15 bg-navy-2 p-8">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold-light">
              Mobilization Capability
            </span>
            <h3 className="mt-2 font-serif text-[22px] font-medium text-white">
              Tailored Team Formation
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ivory/75">
              We don&rsquo;t rely on one-size-fits-all consultants. For every assignment, FSM curates an optimal combination of international technical leaders, regional sector specialists, and local field practitioners with native institutional and linguistic familiarity.
            </p>
            <div className="mt-6 border-t border-white/10 pt-4 font-mono text-xs text-gold">
              Fully Vetted Roster &bull; Surge Capacity &bull; 36 States + Regional Hubs
            </div>
          </div>
        </div>

        {/* 9 Disciplines Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertDisciplines.map((disc) => (
            <div
              key={disc.role}
              className="flex flex-col justify-between rounded-none border border-white/10 bg-navy-3/70 p-6 transition-all duration-200 hover:border-gold/50 hover:bg-navy-3"
            >
              <div>
                <h4 className="font-serif text-[18px] font-medium text-white">
                  {disc.role}
                </h4>
                <div className="my-3 h-0.5 w-8 bg-gold/40" />
                <p className="text-[13.5px] leading-relaxed text-ivory/70">
                  {disc.scope}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
