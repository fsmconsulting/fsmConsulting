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
    <section className="bg-white py-20 md:py-28 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
              Operational Backbone &middot; Field Mobilization
            </span>
            <h2 className="mt-2 text-[32px] md:text-[42px] font-bold leading-tight tracking-tight text-[#07131e]">
              We don&rsquo;t just mobilize experts, we deploy complete delivery systems.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-gray-600">
              Technical excellence in development consulting cannot succeed without flawless field logistics, rapid mobilization, and robust operational support. FSM removes avoidable logistical friction so consultants and technical teams can focus entirely on high-impact technical delivery.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-gray-500">
              Whether deploying an emergency monitoring team to a fragile region, staffing a multi-year project management office, or mobilizing international transaction advisors for a national PPP, FSM ensures total operational readiness from day one.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center rounded-full bg-[#2F5FA8] px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-md hover:bg-[#264E8C] transition-all cursor-pointer"
              >
                <span>Request Expert Mobilization</span>
                <span className="ml-2">&rarr;</span>
              </a>
              <a
                href="/about"
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-[14.5px] font-semibold text-[#07131e] hover:border-[#2F5FA8]/40 hover:text-[#2F5FA8] transition-all cursor-pointer"
              >
                <span>Learn About Our Network</span>
                <span className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {supportPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[20px] border border-gray-100 bg-[#f4f5f7] p-6 shadow-none transition-all duration-300 hover:border-[#2F5FA8]/40 hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
              >
                <h3 className="text-[17px] font-bold tracking-tight text-[#07131e]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-gray-600">
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
