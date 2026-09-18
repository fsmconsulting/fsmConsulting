const coverage = [
  { num: "01", region: "West Africa", places: "Nigeria (HQ), Senegal, Sierra Leone" },
  { num: "02", region: "Central Africa", places: "Cameroon" },
  { num: "03", region: "East Africa", places: "Kenya, Uganda" },
  { num: "04", region: "National Reach", places: "All 36 Nigerian states + Federal Capital Territory" },
  { num: "05", region: "Inter-Regional Cooperation", places: "Africa–Asia technical & knowledge exchange" },
];

export default function NetworkCoverage() {
  return (
    <section className="bg-navy px-4 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-blue-bright">
          Regional Delivery Footprint
        </p>
        <h2 className="mt-2 font-serif text-[26px] font-medium md:text-[32px]">
          Built for cross-border delivery
        </h2>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {coverage.map((row) => (
            <div
              key={row.region}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-[15px] text-blue-bright/80">{row.num}</span>
                <span className="text-[16px] font-medium">{row.region}</span>
              </div>
              <span className="text-[14px] text-white/65 sm:text-right">{row.places}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
