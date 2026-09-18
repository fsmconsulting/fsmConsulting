import { ShieldCheck, Lock } from "lucide-react";

/**
 * Case studies presentation per FSM_DIGITAL_EXPERIENCE.md & DESIGN_SYSTEM.md:
 * Restrained editorial waiting card establishing sovereign verification
 * and disclosure protocols without fabricated claims or fake metrics.
 */
export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="bg-canvas px-6 py-20 md:px-10 md:py-28"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-navy/15 pb-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-bright">
              Evidence &middot; Independent Verification
            </span>
            <h2
              id="case-studies-heading"
              className="mt-2 font-serif text-[30px] font-normal text-navy md:text-[40px]"
            >
              Case studies &amp; verified project outcomes
            </h2>
          </div>
          <p className="max-w-md text-[14.5px] leading-relaxed text-ink-muted">
            Published in strict accordance with sovereign disclosure protocols and independent third-party verification benchmarks.
          </p>
        </div>

        {/* Substantial, honest publication-pending card */}
        <div className="surface-card mt-10 border border-navy/10 bg-white p-8 md:p-12 shadow-sm">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy/5 text-navy">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </span>
                <span className="inline-block rounded-full bg-navy/5 px-3.5 py-1 text-[11.5px] font-medium tracking-wide text-navy">
                  Case studies &middot; pending sovereign client disclosure release
                </span>
              </div>

              <h3 className="mt-5 font-serif text-[24px] font-medium text-navy md:text-[28px]">
                Fiduciary documentation and verified outcome benchmarks
              </h3>

              <p className="mt-3.5 text-[15px] leading-relaxed text-ink-muted">
                FSM Consulting Limited provides independent verification (IVA), technical advisory, and implementation acceleration across sovereign programs. In adherence to bilateral covenants, quantitative outcomes and detailed project profiles are published following formal client authorization.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-[12px] text-ink-muted font-mono">
                <span className="surface-card-sm border border-navy/10 bg-canvas px-3 py-1">
                  Independent Verification (IVA)
                </span>
                <span className="surface-card-sm border border-navy/10 bg-canvas px-3 py-1">
                  Project Readiness (D-Ready)
                </span>
                <span className="surface-card-sm border border-navy/10 bg-canvas px-3 py-1">
                  Safeguards &amp; ESMP
                </span>
              </div>
            </div>

            <div className="surface-card-sm flex shrink-0 flex-col items-start border border-navy/10 bg-canvas p-6 lg:w-80">
              <div className="flex items-center gap-2 text-navy">
                <Lock className="h-4 w-4 text-navy/70" />
                <span className="text-[12px] font-mono uppercase tracking-wider text-navy font-semibold">
                  Disclosure Protocol
                </span>
              </div>
              <p className="mt-2.5 text-[13px] leading-relaxed text-ink-muted">
                We maintain strict confidentiality covenants with bilateral and multilateral partners until formal public release.
              </p>
              <div className="mt-5 w-full border-t border-navy/10 pt-3 text-[12px] font-mono text-ink-muted">
                Protocol Status: Active &middot; Regulated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
