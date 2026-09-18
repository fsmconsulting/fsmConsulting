const supportPillars = [
  {
    title: "Vetted Expert Sourcing & Contracting",
    desc: "Maintaining an extensive bench of pre-vetted national, regional, and international experts across all development disciplines, with flexible short-term and long-term contracting mechanisms.",
  },
  {
    title: "Operational & In-Country Logistics",
    desc: "Complete pre-deployment planning, visa facilitation, flight/airport protocol, secure in-country transport, field lodging, and 24/7 security tracking across all 36 Nigerian states and regional corridors.",
  },
  {
    title: "Field Teams & Enumerator Networks",
    desc: "Rapid mobilization of local enumerators, field monitors, and translation specialists with deep linguistic and cultural fluency in local operating environments.",
  },
  {
    title: "Counterpart Integration & Knowledge Transfer",
    desc: "Embedding technical experts alongside civil service counterparts with structured handover frameworks, coaching, and institutional memory retention.",
  },
];

export default function MobilizationSupport() {
  return (
    <section className="bg-sand-2 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
              Operational Backbone &middot; Field Mobilization
            </span>
            <h2 className="mt-2 font-serif text-[32px] font-medium leading-tight text-navy md:text-[42px]">
              We don&rsquo;t just mobilize experts, we deploy complete delivery systems.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink/80">
              Technical excellence in development consulting cannot succeed without flawless field logistics, rapid mobilization, and robust operational support. FSM removes avoidable logistical friction so consultants and technical teams can focus entirely on high-impact technical delivery.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ink/70">
              Whether deploying an emergency monitoring team to a fragile region, staffing a multi-year project management office, or mobilizing international transaction advisors for a national PPP, FSM ensures total operational readiness from day one.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded bg-navy px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-navy-2"
              >
                Request Expert Mobilization
              </a>
              <a
                href="/about"
                className="rounded border border-navy/20 bg-white px-6 py-3 text-[14px] font-semibold text-navy transition-colors hover:bg-navy/5"
              >
                Learn About Our Network
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {supportPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[var(--radius-card-sm)] border border-navy/10 bg-white p-6 shadow-none transition-all duration-200 hover:border-navy hover:shadow-xs"
              >
                <h3 className="font-serif text-[18px] font-medium text-navy">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/75">
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
