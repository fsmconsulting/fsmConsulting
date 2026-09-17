import Image from "next/image";

const practices = [
  {
    tag: "ASSURANCE & VERIFICATION",
    title: "Development Effectiveness & Project Assurance",
    summary:
      "Development effectiveness reviews, results-based management, independent verification (IVA), third-party monitoring, and project readiness (D-Ready) support.",
    highlights: ["Independent Verification (IVA)", "Third-Party Monitoring", "D-Ready Assessments"],
  },
  {
    tag: "MEASUREMENT & ACCOUNTABILITY",
    title: "Monitoring, Evaluation, Accountability & Learning",
    summary:
      "Baseline and end-line studies, impact assessments, outcome harvesting, beneficiary feedback mechanisms, and knowledge management systems.",
    highlights: ["Baseline & End-Line Studies", "Outcome Harvesting", "Beneficiary Feedback"],
  },
  {
    tag: "SUSTAINABILITY & POLICY",
    title: "Governance, Safeguards & Land Advisory",
    summary:
      "Public sector reform, environmental and social safeguards, resettlement planning, land governance reviews, and responsible investment assessments.",
    highlights: ["E&S Safeguards", "Resettlement Planning", "Land Governance"],
  },
  {
    tag: "TECHNOLOGY & ANALYTICS",
    title: "Digital Transformation & Data Solutions",
    summary:
      "Management information systems, digital monitoring platforms, GIS mapping, predictive analytics, and real-time project dashboards.",
    highlights: ["Real-time Project Dashboards", "GIS Spatial Mapping", "Predictive Analytics"],
  },
  {
    tag: "ECONOMIC TRANSFORMATION",
    title: "Jobs, Procurement & Investment Advisory",
    summary:
      "Economic transformation advisory, procurement and fiduciary excellence, PPP project preparation, and technical expert mobilization.",
    highlights: ["Procurement & Fiduciary Excellence", "PPP Preparation", "Expert Mobilization"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-28">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/projectManagement.webp"
          alt="Project management background"
          fill
          className="object-cover object-center"
          priority={false}
          sizes="100vw"
        />
        {/* Dark overlay - reduced opacity so the image stays visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/75 via-navy/65 to-[#051c2c]/70" />
        {/* Subtle texture grain overlay */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Section Header */}
        <div className="mb-14 grid grid-cols-1 gap-6 border-b border-white/15 pb-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light">
              Services &amp; Capabilities
            </p>
            <h2 className="mt-2 font-serif text-[34px] font-normal text-white md:text-[44px]">
              What we deliver
            </h2>
          </div>
          <p className="text-[16px] leading-relaxed text-white/70">
            Fourteen service lines organized around five practice areas,
            from project readiness through independent verification to
            digital delivery.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {practices.map((practice, idx) => (
            <div
              key={practice.title}
              className={`group relative flex flex-col justify-between border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-white/10 hover:shadow-none hover:-translate-y-1 cursor-pointer ${
                idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                {/* Category Tag */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-light">
                    {practice.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`mt-5 font-serif font-medium leading-snug text-white ${
                    idx === 0 ? "text-[24px] md:text-[28px]" : "text-[21px]"
                  }`}
                >
                  {practice.title}
                </h3>

                {/* Description */}
                <p className="mt-3.5 text-[14.5px] leading-relaxed text-white/65">
                  {practice.summary}
                </p>

                {/* Highlight Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {practice.highlights.map((item) => (
                    <span
                      key={item}
                      className="inline-block border border-white/15 bg-white/5 px-2.5 py-1 text-[11.5px] font-medium text-white/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 border-t border-white/10 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[13.5px] font-medium text-white/60 transition-all group-hover:gap-3 group-hover:text-white/90"
                >
                  <span>Inquire about this capability</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border border-gold-light/30 bg-gold-light/10 px-8 py-6 backdrop-blur-sm sm:flex-row">
          <div className="text-[14.5px] text-white/75">
            Explore detailed scopes, deliverables, and methodologies across all fourteen service lines.
          </div>
          <a
            href="/services"
            className="group inline-flex items-center gap-2 bg-gold-light px-6 py-2.5 text-[13.5px] font-semibold text-navy transition-all duration-200 hover:brightness-110"
          >
            <span>Explore All 14 Practice Areas</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}