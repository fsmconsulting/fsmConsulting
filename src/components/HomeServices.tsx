import Link from "next/link";
import { services } from "@/data/servicesData";

export default function HomeServices() {
  // Practice clusters representing FSM's 14 service lines
  const clusters = [
    {
      group: "Delivery & Assurance",
      tagline: "Execution, verification, and independent monitoring",
      items: services.filter((s) => s.group === "delivery"),
    },
    {
      group: "Strategic Advisory",
      tagline: "Development effectiveness, policy reform, and program design",
      items: services.filter((s) => s.group === "advisory"),
    },
    {
      group: "Evidence & Learning",
      tagline: "Rigorous measurement, baselines, and outcome harvesting",
      items: services.filter((s) => s.group === "evidence"),
    },
    {
      group: "Enabling Disciplines",
      tagline: "Safeguards, land governance, procurement, and digital solutions",
      items: services.filter((s) => s.group === "enabling"),
    },
  ];

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

        {/* Structured Service Clusters (Restrained 24px Surfaces, No Dashboard Bento) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {clusters.map((cluster) => (
            <div
              key={cluster.group}
              className="surface-card border border-navy/10 bg-white p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-blue-bright">
                  Practice Cluster
                </span>
                <h3 className="mt-2 font-serif text-[24px] font-medium text-navy">
                  {cluster.group}
                </h3>
                <p className="mt-2 text-[14px] text-ink-muted">
                  {cluster.tagline}
                </p>

                <div className="mt-6 border-t border-navy/10 pt-4 divide-y divide-navy/10">
                  {cluster.items.map((service) => (
                    <div key={service.slug} className="py-3.5 first:pt-0">
                      <h4 className="text-[15px] font-semibold text-navy">
                        {service.shortTitle}
                      </h4>
                      <p className="mt-1 line-clamp-2 text-[13.5px] leading-relaxed text-ink-muted">
                        {service.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-navy/10">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-1.5 text-[13.5px] font-medium text-navy hover:text-blue-bright transition-colors"
                >
                  <span>Explore practice capabilities</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

