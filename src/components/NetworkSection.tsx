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
    <section id="network" className="bg-canvas py-20 px-6 md:px-10 md:py-28" aria-labelledby="network-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Editorial Narrative Column (6 Cols) */}
          <div className="lg:col-span-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-bright">
              Geographic Scope &middot; Regional Delivery Bench
            </span>
            <h2 id="network-heading" className="mt-2 font-serif text-[32px] font-normal leading-tight text-navy md:text-[44px]">
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
                <span>Discuss an assignment</span>
                <span className="pill-btn-arrow">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Regional Footprint Matrix Card (6 Cols, 24px Surface) */}
          <div className="surface-card border border-navy/10 bg-white p-8 md:p-10 lg:col-span-6 shadow-sm">
            <div className="border-b border-navy/10 pb-4 flex items-baseline justify-between">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-blue-bright">
                  Operational Presence
                </span>
                <h3 className="mt-1 font-serif text-[22px] font-medium text-navy">
                  Regional Delivery Footprint
                </h3>
              </div>
              <span className="font-mono text-[11px] text-ink-muted">Active</span>
            </div>

            <div className="divide-y divide-navy/10 mt-2">
              {coverage.map((row) => (
                <div key={row.region} className="flex flex-col justify-between py-4 sm:flex-row sm:items-center">
                  <div>
                    <span className="text-[14.5px] font-semibold text-navy">
                      {row.region}
                    </span>
                    <p className="text-[13.5px] text-ink-muted">
                      {row.places}
                    </p>
                  </div>
                  <span className="surface-card-sm mt-1 inline-block self-start border border-navy/10 bg-canvas px-3 py-1 font-mono text-[11px] text-navy sm:mt-0 sm:self-center">
                    {row.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-navy/10 pt-4 text-[12px] font-mono text-ink-muted">
              Coordinating multi-tier delivery teams with localized compliance &amp; field ground-truthing.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}