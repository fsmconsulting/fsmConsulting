import Link from "next/link";
import { services } from "@/data/servicesData";

export default function HomeServices() {

  return (
    <section id="services" className="bg-canvas px-6 py-20 md:px-10 md:py-28" aria-labelledby="home-services-heading">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end border-b border-navy/15 pb-10">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-bright">
              Services &middot; Practice Areas
            </span>
            <h2 id="home-services-heading" className="mt-2 font-serif text-[32px] font-normal leading-tight text-navy md:text-[44px]">
              What we deliver across the project lifecycle.
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-[15.5px] leading-relaxed text-ink-muted">
              Fourteen specialized practice areas structured to accelerate execution, satisfy strict fiduciary covenants, and verify ground-level results.
            </p>
            <Link
              href="/services"
              className="pill-btn shrink-0 bg-navy px-5 py-2.5 text-[13.5px] font-semibold text-white hover:bg-navy-2 transition-colors"
            >
              <span>All 14 practice areas</span>
              <span className="pill-btn-arrow">&rarr;</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

