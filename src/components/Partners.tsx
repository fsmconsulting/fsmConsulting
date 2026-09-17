const partners = [
  "World Bank Group",
  "African Development Bank",
  "Islamic Development Bank",
  "United Nations Agencies",
  "European Union",
  "FCDO",
  "USAID",
  "GIZ",
];

export default function Partners() {
  return (
    <section className="border-y border-gray-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          
          <div className="text-center lg:text-left">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
              Financing & Institutional Alignment
            </span>
            <p className="mt-1 font-serif text-[18px] text-navy">
              Supporting projects financed by
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-end">
            {partners.map((p) => (
              <div
                key={p}
                className="group flex items-center gap-3 transition-colors hover:text-navy"
              >
                <span className="h-1.5 w-1.5 rounded-none bg-gold/60 group-hover:bg-gold" />
                <span className="font-serif text-[15px] font-medium tracking-tight text-gray-700 group-hover:text-navy">
                  {p}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}