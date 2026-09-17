const coverage = [
  { region: "West Africa", places: "Nigeria, Senegal, Sierra Leone", tag: "Primary Hubs" },
  { region: "Central Africa", places: "Cameroon", tag: "Francophone Reach" },
  { region: "East Africa", places: "Kenya, Uganda", tag: "Regional Corridors" },
  { region: "National Reach", places: "36 Nigerian states + Federal Capital Territory (FCT)", tag: "Field Operations" },
  { region: "Inter-Regional Cooperation", places: "Africa\u2013Asia technical & knowledge exchange", tag: "Global South Advisory" },
];

export default function NetworkSection() {
  return (
    <section id="network" className="bg-[#f8f9fa] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          
          {/* Editorial Column */}
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
              Geographic Reach &middot; Cross-Border Model
            </span>
            <h2 className="mt-2 font-serif text-[34px] font-normal leading-tight text-navy md:text-[44px]">
              Built for cross-border delivery.
            </h2>
            
            <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
              Headquartered in Abuja, FSM combines strong national
              implementation capacity with a growing regional network, including
              strategic partnerships, country-based collaborators, and a
              multidisciplinary professional bench that can be assembled around
              the requirements of each assignment.
            </p>
            
            <p className="mt-4 text-[15.5px] leading-relaxed text-gray-600">
              Depending on the assignment, we coordinate everything from visa
              and field logistics to local consultant mobilization, so
              technical experts can focus on the work they were engaged to
              deliver.
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border-b-2 border-navy pb-1 text-[14.5px] font-medium text-navy transition-all duration-200 hover:border-blue-accent hover:text-blue-accent active:scale-[0.98]"
              >
                <span>Talk to us about a cross-border assignment</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Regional Footprint Matrix Card */}
          <div className="border border-gray-200 bg-white p-8 shadow-none">
            <div className="border-b border-gray-200 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                Network Coverage Matrix // 2026
              </span>
              <h3 className="mt-1 font-serif text-[20px] font-medium text-navy">
                Regional Delivery Footprint
              </h3>
            </div>

            <div className="divide-y divide-gray-100">
              {coverage.map((row) => (
                <div key={row.region} className="flex flex-col justify-between py-4 sm:flex-row sm:items-center">
                  <div>
                    <span className="text-[14.5px] font-semibold text-navy">
                      {row.region}
                    </span>
                    <p className="text-[13.5px] text-gray-600">
                      {row.places}
                    </p>
                  </div>
                  <span className="mt-1 inline-block self-start rounded bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600 transition-all duration-200 hover:bg-navy hover:text-white cursor-pointer sm:mt-0 sm:self-center">
                    {row.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-gray-100 pt-4 text-xs text-gray-500">
              Coordinating multi-country teams with localized compliance & logistical protocols.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}