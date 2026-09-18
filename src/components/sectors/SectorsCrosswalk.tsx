const sectors = [
  {
    title: "Agriculture & Rural Development",
    desc: "FRILIA land investment assessments, value chain upgrading, agricultural PMO support, and farmer feedback systems.",
    practices: ["Land Governance (FRILIA)", "MEAL", "Safeguards (ESMP)", "Jobs & Economy"],
  },
  {
    title: "Energy, Power & Clean Tech",
    desc: "Renewable energy transaction advisory, rural electrification verification, grid project assurance, and PPP structuring.",
    practices: ["PPP & Transactions", "Project Assurance (IVA)", "Safeguards", "Procurement"],
  },
  {
    title: "Health Systems Strengthening",
    desc: "Primary health care delivery units, medical supply chain fiduciary reviews, and facility readiness diagnostics.",
    practices: ["Implementation Acceleration", "Procurement & Fiduciary", "MEAL", "Capacity Building"],
  },
  {
    title: "Education & Skills Development",
    desc: "Technical vocational training (TVET) diagnostics, school infrastructure audits, and youth employment tracking.",
    practices: ["Jobs Advisory", "Institutional Strengthening", "Project Assurance", "Digital Data Labs"],
  },
  {
    title: "Transport & Urban Infrastructure",
    desc: "Engineering audits, resettlement action plans (RAP), transaction advisory for toll roads, and contractor compliance checks.",
    practices: ["Safeguards (RAP/SEP)", "PPP & Transactions", "Project Assurance", "Procurement"],
  },
  {
    title: "Public Financial Management (PFM)",
    desc: "State revenue optimization, budget reform advisory, expenditure tracking, and procurement regulatory modernization.",
    practices: ["Governance & Reform", "Procurement Excellence", "Capacity Building", "Digital MIS"],
  },
  {
    title: "Climate Resilience & Environment",
    desc: "Disaster risk management, climate adaptation strategies, ESG advisory, and carbon project safeguard assessments.",
    practices: ["Safeguards & ESG", "Crisis Resilience", "MEAL", "Digital GIS"],
  },
  {
    title: "Trade, MSME & Industrial Growth",
    desc: "Special economic zone (SEZ) advisory, local content policies, market systems development, and entrepreneurship ecosystems.",
    practices: ["Jobs & Economic Transformation", "Governance & Reform", "PPP Advisory", "D-Ready"],
  },
];

export default function SectorsCrosswalk() {
  return (
    <section className="border-b border-navy/10 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        <div className="max-w-3xl">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
            Sectoral Integration &middot; Real-World Application
          </span>
          <h2 className="mt-2 font-serif text-[32px] font-medium text-navy md:text-[42px]">
            Sector-Specific Capability Deployment
          </h2>
          <p className="mt-3 text-[16px] text-ink/70">
            Our multidisciplinary practice teams align technical expertise with sector-specific operational realities across key economic and social development portfolios.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sec) => (
            <div
              key={sec.title}
              className="flex flex-col justify-between rounded-[var(--radius-card-sm)] border border-navy/10 bg-sand p-6 transition-all duration-200 hover:border-navy hover:shadow-xs"
            >
              <div>
                <h3 className="font-serif text-[18px] font-medium text-navy">
                  {sec.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/75">
                  {sec.desc}
                </p>
              </div>

              <div className="mt-5 border-t border-navy/10 pt-4">
                <span className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-accent">
                  Core Practice Linkages:
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {sec.practices.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-medium text-navy border border-navy/10 shadow-xs"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
