import Link from "next/link";

/**
 * "Services overview"
 * Matches Conceptzilla Reference (91e92a42cb383981c55b96b7197da0d2.webp & 8bd1b8809a228bcdb45bd5d716fe3d4c.webp):
 * - Left column: Just the clean title "Services overview"
 * - Right column: 2x2 grid of light grey cards (#f4f5f7) with rounded corners, concise descriptions, and "Learn More →".
 */
const servicesList = [
  {
    title: "Project Assurance & IVA",
    desc: "We provide independent verification agent (IVA) services, third-party monitoring, compliance audits, and fiduciary reviews across sovereign portfolios.",
    href: "/services",
  },
  {
    title: "Implementation Acceleration",
    desc: "Our specialists deploy project readiness (D-Ready) diagnostics, embedded PMO units, bottleneck resolution, and turnaround support for complex operations.",
    href: "/services",
  },
  {
    title: "MEAL & Evidence Tracking",
    desc: "We design rigorous baseline studies, mid-term evaluations, digital monitoring dashboards, and outcome harvesting to validate development performance.",
    href: "/services",
  },
  {
    title: "Governance & Safeguards",
    desc: "We advise on public sector reform, institutional diagnostics, environmental and social safeguards (ESMP), and land governance advisory (FRILIA).",
    href: "/services",
  },
];

export default function HomeServices() {
  return (
    <section id="services" className="bg-white px-6 md:px-12 py-16 md:py-24" aria-labelledby="services-overview-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left Column: Exactly title only matching reference */}
          <div className="lg:col-span-4">
            <h2
              id="services-overview-heading"
              className="text-[30px] sm:text-[34px] md:text-[38px] font-bold text-navy tracking-tight"
            >
              Services overview
            </h2>
          </div>

          {/* Right Column: 2x2 Card Grid matching reference */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {servicesList.map((svc) => (
              <div
                key={svc.title}
                className="group rounded-[20px] bg-[#f4f5f7] p-8 md:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
              >
                <div>
                  <h3 className="text-[18px] font-semibold text-navy tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
                    {svc.desc}
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-navy hover:text-blue-accent transition-colors"
                  >
                    <span>Learn More</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
