const crossCuttingPillars = [
  {
    title: "Independent Quality & Verification (IVA)",
    desc: "Every sector intervention is backed by objective ground-level verification, third-party monitoring, and transparent disbursement tracking.",
  },
  {
    title: "Environmental & Social Safeguards",
    desc: "Rigorous alignment with World Bank Environmental and Social Framework (ESF), IFC Performance Standards, and national statutory environmental mandates.",
  },
  {
    title: "Digital Tracking & Geospatial Intelligence",
    desc: "Real-time project dashboards, mobile GPS enumerator data, and GIS spatial mapping integrated into sectoral project management units.",
  },
  {
    title: "Institutional Capacity Strengthening",
    desc: "Ensuring long-term sustainability by transferring skills, systems, and operational methodologies to host ministry and agency counterparts.",
  },
];

export default function CrossSectorImpact() {
  return (
    <section className="border-b border-navy/10 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        <div className="max-w-3xl">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
            Institutional Standards &middot; Assurance Everywhere
          </span>
          <h2 className="mt-2 font-serif text-[32px] font-medium text-navy md:text-[42px]">
            Cross-Cutting Delivery Standards in Every Sector
          </h2>
          <p className="mt-3 text-[16px] text-ink/75">
            Regardless of sector, whether constructing solar mini-grids, modernizing agricultural land registries, or revitalizing health clinics, FSM applies four non-negotiable delivery foundations.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {crossCuttingPillars.map((p) => (
            <div
              key={p.title}
              className="flex flex-col justify-between rounded-xl border border-navy/10 bg-sand p-6 transition-all duration-200 hover:border-gold hover:shadow-sm"
            >
              <div>
                <div className="flex h-8 w-8 items-center justify-center rounded bg-navy text-gold-light">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 font-serif text-[18px] font-medium text-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/70">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 flex flex-col justify-between gap-6 rounded-2xl border border-navy/10 bg-navy p-8 text-white sm:flex-row sm:items-center md:p-10">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
              Consult With Our Sector Leads
            </span>
            <h3 className="mt-1 font-serif text-[22px] font-medium text-white md:text-[26px]">
              Ready to deploy specialized expertise for your sector assignment?
            </h3>
          </div>
          <a
            href="/#contact"
            className="shrink-0 rounded bg-gold px-6 py-3 text-[14px] font-semibold text-navy transition-colors hover:bg-gold-light"
          >
            Start a Conversation &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
