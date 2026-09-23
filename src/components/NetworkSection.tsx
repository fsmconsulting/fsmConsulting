import Link from "next/link";

const coverage = [
  { region: "West Africa", places: "Nigeria, Senegal, Sierra Leone", tag: "Primary Hubs" },
  { region: "Central Africa", places: "Cameroon", tag: "Francophone Reach" },
  { region: "East Africa", places: "Kenya, Uganda", tag: "Regional Corridors" },
  { region: "National Coverage", places: "36 Nigerian States + Federal Capital Territory (FCT)", tag: "Field Operations" },
  { region: "South-South Cooperation", places: "Africa\u2013Asia technical & knowledge exchange", tag: "Advisory Network" },
];

export default function NetworkSection() {
  return (
    <section id="network" className="bg-canvas py-16 px-6 md:px-10 md:py-24" aria-labelledby="network-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Editorial Narrative Column (7 Cols) */}
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-bright">
              Geographic Scope &middot; Regional Delivery Bench
            </span>
            <h2 id="network-heading" className="mt-2 font-serif text-[32px] font-normal leading-tight text-navy md:text-[42px]">
              Built for sovereign and cross-border delivery.
            </h2>

            <p className="mt-6 text-[16px] leading-relaxed text-ink-muted">
              Headquartered in Abuja, FSM combines deep national operational capability across all 36
              Nigerian states and the FCT with an expanding regional network. We assemble multidisciplinary
              specialists configured to the sovereign regulations, community safeguards, and institutional
              dynamics of each assignment.
            </p>

            <p className="mt-4 text-[15.5px] leading-relaxed text-ink-muted">
              From managing embedded PMO delivery units to field enumerator logistics and in-country
              verification protocols, our platform ensures technical advisors deliver ground-level results
              without administrative friction.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="pill-btn bg-navy px-6 py-3 text-[14px] font-semibold text-white hover:bg-navy-2 transition-colors"
              >
                <span>Schedule a Consultation</span>
                <span className="pill-btn-arrow">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Compact Regional Footprint Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="surface-card-sm border border-navy/10 bg-white p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-navy/10 pb-3.5">
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-blue-bright">
                    Operational Presence
                  </span>
                  <h3 className="mt-0.5 font-serif text-[17px] font-medium text-navy">
                    Regional Delivery Footprint
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-ink-muted">Active</span>
              </div>

              <div className="divide-y divide-navy/5">
                {coverage.map((row) => (
                  <div key={row.region} className="flex items-center justify-between gap-3 py-2.5">
                    <div className="min-w-0 pr-1">
                      <span className="block text-[13px] font-semibold text-navy leading-snug">
                        {row.region}
                      </span>
                      <p className="text-[12px] text-ink-muted leading-tight mt-0.5">
                        {row.places}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-[11px] text-ink-muted text-right whitespace-nowrap">
                      {row.tag}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-3.5 border-t border-navy/10 pt-3 text-[11px] leading-relaxed text-ink-muted font-sans">
                Coordinating multi-tier delivery teams with localized compliance &amp; field ground-truthing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}