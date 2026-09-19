

export default function ExecutiveSummary() {
  return (
    <section id="mandate" className="border-b border-navy/10 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
              Executive Summary &middot; Institutional Mandate
            </span>
            <h2 className="mt-3 font-serif text-[32px] font-medium leading-tight text-navy md:text-[42px]">
              Bridging the gap between high-level strategy and ground-level execution.
            </h2>
            
            <p className="mt-6 text-[16px] leading-relaxed text-ink/80">
              FSM Consulting Limited is a multidisciplinary development delivery, implementation acceleration, and project assurance firm dedicated to helping governments, development partners, international financial institutions, and private sector organizations transform investments into measurable results and sustainable impact.
            </p>

            <p className="mt-4 text-[15.5px] leading-relaxed text-ink/70">
              We specialize in bridging the gap between strategy and execution by supporting clients to move faster from project concepts to development outcomes through implementation acceleration, project readiness (D-Ready) support, institutional strengthening, monitoring and evaluation, independent verification, and results-based delivery services.
            </p>

            <p className="mt-4 text-[15.5px] leading-relaxed text-ink/70">
              Our network brings together highly experienced professionals from international development organizations, government institutions, multilateral agencies, academia, donor-funded programs, and the private sector.
            </p>

            <p className="mt-4 text-[15.5px] leading-relaxed text-ink/70">
              Our team comprises development economists, implementation specialists, policy advisors, procurement and fiduciary experts, governance professionals, monitoring and evaluation specialists, environmental and social safeguard experts, engineers, financial management professionals, legal practitioners, digital transformation experts, and sector specialists.
            </p>

            <p className="mt-4 text-[15.5px] leading-relaxed text-ink/70">
              FSM Consulting Limited is uniquely positioned as a Development Delivery and Results Partner, helping clients accelerate implementation, strengthen institutional performance, create pathways for jobs and economic growth, enhance resilience in times of crisis, improve procurement and fiduciary systems, and leverage technology to deliver development outcomes more efficiently.
            </p>
          </div>

          <div className="flex flex-col rounded-[var(--radius-card)] border border-navy/10 bg-sand p-8">
            <div className="border-b border-navy/10 pb-4">
              <span className="text-[12px] font-mono font-semibold uppercase tracking-wider text-blue-accent">
                The FSM Value Proposition
              </span>
              <h3 className="mt-1 font-serif text-[22px] font-medium text-navy">
                Integrated Delivery Ecosystem
              </h3>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
              Our distinctive value proposition lies in combining <strong className="font-semibold text-navy">Implementation Acceleration</strong>, <strong className="font-semibold text-navy">Project Readiness (D-Ready)</strong>, <strong className="font-semibold text-navy">Jobs &amp; Economic Growth Advisory</strong>, <strong className="font-semibold text-navy">Crisis &amp; Resilience Support</strong>, <strong className="font-semibold text-navy">Procurement &amp; Fiduciary Excellence</strong>, and <strong className="font-semibold text-navy">Technology-Enabled Development Delivery</strong> within a single unified platform.
            </p>
            <div className="mt-6 rounded-[var(--radius-card-sm)] border-l-4 border-navy bg-white p-4 text-[14px] italic text-navy">
              &ldquo;Transforming resources into results, policies into action, and investments into sustainable development impact.&rdquo;
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
