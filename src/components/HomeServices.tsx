import Link from "next/link";
import { services } from "@/data/servicesData";

/**
 * "Services overview"
 * Matches Conceptzilla Reference (media_1789744082327.webp):
 * Two-column layout: Left column with section heading, Right column with 2x2 grid of 4 cards on #f4f5f7 with "Learn More →".
 */
const servicesList = [
  {
    title: "Project Assurance & IVA",
    desc: "Independent verification (IVA), third-party monitoring, compliance audits, and fiduciary reviews across sovereign development portfolios.",
    href: "/services",
  },
  {
    title: "Implementation Acceleration & D-Ready",
    desc: "Project readiness assessments, embedded PMO units, bottleneck resolution, and turnaround support to move faster from concept to outcomes.",
    href: "/services",
  },
  {
    title: "MEAL & Evidence-Based Tracking",
    desc: "Rigorous baseline studies, mid-term evaluations, digital monitoring dashboards, and outcome harvesting to validate project performance.",
    href: "/services",
  },
  {
    title: "Governance, Reform & Safeguards",
    desc: "Public sector reform, institutional diagnostics, environmental and social safeguards (ESMP), and land governance advisory (FRILIA).",
    href: "/services",
  },
];

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
    <section id="services" className="bg-white px-6 py-16 md:px-12 md:py-24" aria-labelledby="services-overview-heading">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end border-b border-navy/15 pb-10">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-bright">
              Services &middot; Practice Areas
            </span>
            <h2 id="home-services-heading" className="mt-2 font-serif text-[32px] font-normal leading-tight text-navy md:text-[44px]">
              What we deliver across the project lifecycle.
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h2
              id="services-overview-heading"
              className="text-[26px] font-semibold text-navy md:text-[32px] tracking-tight"
            >
              Services overview
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-[15.5px] leading-relaxed text-ink-muted">
              Fourteen specialized practice areas structured to accelerate execution, satisfy strict fiduciary covenants, and verify ground-level results.
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted max-w-sm">
              Integrated technical, fiduciary, and delivery capabilities structured to support programs from concept to measurable results.
            </p>
            <Link
              href="/services"
              className="pill-btn shrink-0 bg-navy px-5 py-2.5 text-[13.5px] font-semibold text-white hover:bg-navy-2 transition-colors"
            >
              <span>All 14 practice areas</span>
              <span className="pill-btn-arrow">&rarr;</span>
            </Link>
            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-navy hover:text-blue-accent transition-colors"
              >
                <span>View all 14 practice areas</span>
                <span>&rarr;</span>
              </Link>
            </div>
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
          {/* Right Column: 2x2 Card Grid (matches media_1789744082327.webp) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {servicesList.map((svc) => (
              <div
                key={svc.title}
                className="rounded-[20px] bg-[#f4f5f7] p-7 md:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-sm"
              >
                <div>
                  <h3 className="text-[17px] font-semibold text-navy tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
                    {svc.desc}
                  </p>
                </div>
                <div className="mt-6 pt-2">
                  <Link
                    href={svc.href}
                    className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy hover:text-blue-accent transition-colors"
                  >
                    <span>Learn More</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </Link>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

