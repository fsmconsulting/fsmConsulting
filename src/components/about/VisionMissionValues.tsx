export default function VisionMissionValues() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Section Tag */}
        <div className="text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
            Strategic Foundation &middot; Institutional Identity
          </span>
          <h2 className="mt-2 font-serif text-[32px] font-medium text-navy md:text-[42px]">
            Vision &amp; Mission
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[16px] text-ink/70">
            The enduring principles and institutional direction that govern how we operate across the African continent.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          
          {/* Vision Card */}
          <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-navy/15 bg-white p-8 md:p-10">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-navy" />
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10 font-serif text-[18px] font-bold text-navy">
                V
              </span>
              <h3 className="font-serif text-[24px] font-medium text-navy md:text-[28px]">
                Our Vision
              </h3>
            </div>
            <p className="mt-6 text-[16.5px] leading-relaxed text-ink/80">
              To become Africa&rsquo;s leading <strong className="font-semibold text-navy">Development Effectiveness and Project Assurance</strong> firm, recognized for advancing accountability, innovation, and sustainable development outcomes.
            </p>
            <div className="mt-8 border-t border-navy/10 pt-4 text-xs font-semibold uppercase tracking-wider text-blue-accent">
              Pan-African Leadership &middot; Institutional Rigor
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-navy/15 bg-white p-8 md:p-10">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-navy" />
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10 font-serif text-[18px] font-bold text-navy">
                M
              </span>
              <h3 className="font-serif text-[24px] font-medium text-navy md:text-[28px]">
                Our Mission
              </h3>
            </div>
            <p className="mt-6 text-[16.5px] leading-relaxed text-ink/80">
              To support governments, development partners, and organizations in achieving <strong className="font-semibold text-navy">measurable development results</strong> through evidence-based advisory services, project assurance, institutional strengthening, and strategic technical support.
            </p>
            <div className="mt-8 border-t border-navy/10 pt-4 text-xs font-semibold uppercase tracking-wider text-blue-accent">
              Results-Driven &middot; Evidence-Based Execution
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
