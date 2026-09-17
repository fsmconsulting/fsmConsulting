import Link from "next/link";
import { sectorsData } from "@/data/sectorsData";

export default function Sectors() {
  return (
    <section id="sectors" className="border-b border-gray-200 bg-gradient-to-b from-[#fbfcfd] to-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 gap-6 border-b border-gray-200 pb-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
              Sector Specialization &middot; 15 Verticals
            </span>
            <h2 className="mt-2 font-serif text-[34px] font-normal text-navy md:text-[44px]">
              Sectors we work across
            </h2>
          </div>
          <p className="text-[16px] leading-relaxed text-gray-600">
            Our multidisciplinary technical network spans the sectors where development
            financing is concentrated and where implementation gaps matter
            most. Explore our dedicated sector practice pages below.
          </p>
        </div>

        {/* McKinsey-Style Sector Grid with Direct Links */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {sectorsData.map((sector) => (
            <Link
              key={sector.id}
              href={`/sectors/${sector.id}`}
              className="group flex flex-col justify-between border border-gray-200 bg-[#fbfcfd] p-5 transition-all duration-200 hover:border-navy hover:bg-white hover:shadow-none hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs font-semibold text-gray-400 group-hover:text-blue-accent">
                  {sector.num}
                </span>
                <span className="text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-navy">
                  &rarr;
                </span>
              </div>
              <div className="mt-6">
                <span className="block text-[11px] uppercase tracking-wider text-gray-400">
                  {sector.categoryLabel}
                </span>
                <h3 className="mt-1 font-serif text-[15.5px] font-medium leading-snug text-navy group-hover:text-blue-accent">
                  {sector.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Footnote callout */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-gray-100 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center">
          <span>Targeting high-priority national development programs &amp; cross-border initiatives across Africa.</span>
          <span className="text-navy/70 font-medium">
            Select any of the 15 sector verticals above to explore its dedicated practice page &rarr;
          </span>
        </div>

      </div>
    </section>
  );
}