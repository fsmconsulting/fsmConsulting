export default function DeliveryMethodology() {
  const deliveryEngines = [
    {
      title: "Project Readiness (D-Ready) Advisory",
      focus: "Upstream Preparation",
      desc: "Conducting rigorous diagnostic assessments before project approval to verify institutional capacity, procurement frameworks, safeguard compliance, and baseline metrics, preventing costly implementation delays.",
      tags: ["Readiness Filters", "Risk Diagnostics", "Disbursement Readiness"],
    },
    {
      title: "Results Delivery Units & PMO",
      focus: "Midstream Acceleration",
      desc: "Deploying embedded Project Management Offices and dedicated delivery units within implementing ministries and agencies to unblock procurement, coordinate field activities, and track milestones.",
      tags: ["Bottleneck Removal", "Embedded PMO", "Surge Staffing"],
    },
    {
      title: "Independent Verification & TPM",
      focus: "Downstream Assurance",
      desc: "Providing rigorous third-party verification for Disbursement-Linked Indicators (DLIs), social audits, engineering reviews, and GPS-tagged field verification in remote or insecure regions.",
      tags: ["DLI Verification", "Third-Party Monitoring", "Fiduciary Audits"],
    },
    {
      title: "Digital Data Labs & Real-Time Dashboards",
      focus: "Cross-Cutting Intelligence",
      desc: "Integrating custom Management Information Systems (MIS), GIS geospatial mapping, and automated performance dashboards for transparent, data-driven project steering.",
      tags: ["GIS Intelligence", "Automated BI", "Predictive Analytics"],
    },
  ];

  return (
    <section className="bg-navy py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">
            Methodology &middot; How We Deliver
          </span>
          <h2 className="mt-2 font-serif text-[32px] font-medium leading-tight text-white md:text-[42px]">
            From Diagnostic Scoping to Verified Development Results.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ivory/80">
            Our delivery methodology pairs international technical rigor with deep local contextual execution. We design, accelerate, monitor, and independently verify development initiatives across their full lifecycle.
          </p>
        </div>

        {/* 4 Core Delivery Engines */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deliveryEngines.map((engine) => (
            <div
              key={engine.title}
              className="flex flex-col justify-between rounded-none border border-white/10 bg-navy-2 p-6 transition-all duration-200 hover:border-gold/60 hover:bg-navy-3"
            >
              <div>
                <span className="inline-block rounded bg-gold/15 px-2.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-gold-light">
                  {engine.focus}
                </span>
                <h3 className="mt-4 font-serif text-[19px] font-medium text-white">
                  {engine.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ivory/70">
                  {engine.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {engine.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-white/5 px-2 py-0.5 text-[11px] text-ivory/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Field Verification Banner */}
        <div className="mt-16 rounded-none border border-gold/30 bg-navy-3/90 p-8 md:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                Empirical Ground-Level Rigor
              </span>
              <h3 className="mt-2 font-serif text-[24px] font-medium text-white md:text-[28px]">
                Direct Field Verification Across All 36 Nigerian States &amp; Beyond
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ivory/75">
                We believe that accountability begins with evidence. Rather than relying solely on desktop reports, our multidisciplinary teams engage directly with project beneficiaries, communities, implementing agencies, and field sites, even in remote, fragile, or conflict-affected environments.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-none border border-white/10 bg-white/5 p-6 text-[13.5px]">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-none bg-gold/20 font-mono text-xs font-bold text-gold">
                  1
                </span>
                <span>GPS &amp; Timestamped Photographic Verification</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-none bg-gold/20 font-mono text-xs font-bold text-gold">
                  2
                </span>
                <span>Direct Beneficiary Feedback &amp; Citizen Surveys</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-none bg-gold/20 font-mono text-xs font-bold text-gold">
                  3
                </span>
                <span>Technical Engineering &amp; Fiduciary Milestone Audits</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
