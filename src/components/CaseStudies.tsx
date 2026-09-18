import Reveal from "@/components/Reveal";
import { ShieldCheck, Lock } from "lucide-react";

/**
 * Case-study presentation per FSM_DIGITAL_EXPERIENCE.md & approved P1.3:
 * Single restrained editorial waiting card on light porcelain/sand canvas,
 * establishing the verification and publication protocol without heavy
 * dark containers or fabricated case-study metrics.
 */
export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="bg-sand px-4 py-20 md:px-10 md:py-28"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
              Evidence of Delivery &middot; Project Verification
            </span>
            <h2
              id="case-studies-heading"
              className="mt-2 font-serif text-[28px] font-medium tracking-tight text-navy md:text-[36px]"
            >
              Case studies &amp; project outcomes
            </h2>
          </div>
          <p className="max-w-[48ch] text-[14.5px] leading-relaxed text-ink-muted">
            Published in accordance with sovereign client disclosure protocols and independent third-party verification standards.
          </p>
        </div>

        <Reveal>
          <div className="bento-card bento-card--hover mt-10 border border-navy/10 bg-white p-8 md:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy/5 text-navy">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </span>
                  <span className="inline-block rounded-full bg-navy/5 px-3 py-1 text-[11.5px] font-medium tracking-wide text-navy">
                    Case study &middot; pending client publication approval
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-[22px] font-medium text-navy md:text-[26px]">
                  Fiduciary documentation and verified outcome benchmarks
                </h3>

                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">
                  FSM Consulting Limited provides independent verification, technical advisory, and implementation acceleration across sovereign programs. Full project profiles and quantitative outcomes will be published here as client disclosure authorizations are concluded.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-[12px] text-ink-muted">
                  <span className="rounded-full border border-navy/10 bg-sand px-3 py-1 font-mono">
                    Independent Verification (IVA)
                  </span>
                  <span className="rounded-full border border-navy/10 bg-sand px-3 py-1 font-mono">
                    Project Readiness (D-Ready)
                  </span>
                  <span className="rounded-full border border-navy/10 bg-sand px-3 py-1 font-mono">
                    Safeguards &amp; ESMP
                  </span>
                </div>
              </div>

              <div className="flex shrink-0 flex-col items-start rounded-[var(--radius-card-sm)] border border-navy/10 bg-sand p-6 lg:w-72">
                <div className="flex items-center gap-2 text-navy">
                  <Lock className="h-4 w-4 text-navy/70" />
                  <span className="text-[12.5px] font-semibold uppercase tracking-wider text-navy">
                    Disclosure Protocol
                  </span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                  We maintain strict confidentiality covenants with bilateral and multilateral partners until formal public release.
                </p>
                <div className="mt-4 border-t border-navy/10 pt-3 text-[11.5px] text-navy/60">
                  Verification status: Active
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
