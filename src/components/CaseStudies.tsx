import { ShieldCheck, Lock } from "lucide-react";
"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Sprout, ShieldCheck } from "lucide-react";

/**
 * Case studies presentation per FSM_DIGITAL_EXPERIENCE.md & DESIGN_SYSTEM.md:
 * Restrained editorial waiting card establishing sovereign verification
 * and disclosure protocols without fabricated claims or fake metrics.
 * "Case studies"
 * Matches Conceptzilla Reference (media_1789744082297.webp, media_1789744082265.webp, media_1789744082327.webp):
 * - Section heading with "Regional | Global" pill toggle and arrow buttons
 * - Vertical cards in deep institutional blue (#07131e) matching reference geometry
 * - Client logo / name / subtitle, Challenge section, Impact section, and pill "Learn More →" button.
 */
const caseStudies = [
  {
    id: "iva-governance",
    category: "sovereign",
    icon: Building2,
    client: "STATE FISCAL GOVERNANCE",
    clientType: "INDEPENDENT VERIFICATION AGENT (IVA)",
    challenge:
      "Sub-national governments faced multi-year disbursement backlogs and compliance hurdles under bilateral financing frameworks requiring verified public expenditure benchmarks.",
    impact:
      "Conducted independent verification across target states, validating fiscal governance milestones and unlocking disbursement tranches within scheduled donor timelines.",
  },
  {
    id: "dready-resilience",
    category: "regional",
    icon: Sprout,
    client: "AGRO-CLIMATIC RESILIENCE",
    clientType: "PROJECT READINESS & D-READY ADVISORY",
    challenge:
      "Implementation teams experienced severe procurement friction and baseline data gaps, stalling community infrastructure investments across rural agricultural corridors.",
    impact:
      "Deployed embedded delivery units and resolved fiduciary bottlenecks, accelerating project readiness (D-Ready) and mobilizing field teams across priority catchment zones.",
  },
  {
    id: "safeguards-health",
    category: "sovereign",
    icon: ShieldCheck,
    client: "HEALTH SYSTEMS STRENGTHENING",
    clientType: "SAFEGUARDS, ESMP & VERIFICATION",
    challenge:
      "Complex multi-agency delivery arrangements required rigorous social safeguards (ESMP) and continuous third-party monitoring to ensure intended beneficiary reach.",
    impact:
      "Established digital real-time monitoring and citizen feedback mechanisms across target states, verifying service delivery and strengthening institutional accountability.",
  },
];

export default function CaseStudies() {
  const [filter, setFilter] = useState<"all" | "regional" | "sovereign">("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = filter === "all" ? caseStudies : caseStudies.filter((c) => c.category === filter);

  return (
    <section
      id="case-studies"
      className="bg-canvas px-6 py-20 md:px-10 md:py-28"
      aria-labelledby="case-studies-heading"
    >
    <section id="case-studies" className="bg-white px-6 py-16 md:px-12 md:py-24" aria-labelledby="case-studies-heading">
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
        {/* Header row matching reference: Title on left, Filters + Arrows on right */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 md:mb-12">
          <h2
            id="case-studies-heading"
            className="text-[28px] md:text-[36px] font-semibold text-navy tracking-tight"
          >
            Case studies
          </h2>

          <div className="flex items-center gap-4">
            {/* Pill filter toggle matching reference: Regional | Global */}
            <div className="inline-flex items-center rounded-full bg-[#f0f2f5] p-1 text-[13px] font-medium text-gray-600">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`rounded-full px-4 py-1.5 transition-all cursor-pointer ${
                  filter === "all" ? "bg-white text-navy font-semibold shadow-sm" : "hover:text-navy"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setFilter("regional")}
                className={`rounded-full px-4 py-1.5 transition-all cursor-pointer ${
                  filter === "regional" ? "bg-white text-navy font-semibold shadow-sm" : "hover:text-navy"
                }`}
              >
                Regional
              </button>
              <button
                type="button"
                onClick={() => setFilter("sovereign")}
                className={`rounded-full px-4 py-1.5 transition-all cursor-pointer ${
                  filter === "sovereign" ? "bg-white text-navy font-semibold shadow-sm" : "hover:text-navy"
                }`}
              >
                Sovereign
              </button>
            </div>

            {/* Arrows navigation matching reference */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-navy hover:bg-gray-50 transition-colors cursor-pointer"
                aria-label="Previous case studies"
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.min(filtered.length - 1, prev + 1))}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-navy hover:bg-gray-50 transition-colors cursor-pointer"
                aria-label="Next case studies"
              >
                &rarr;
              </button>
            </div>
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
        {/* Vertical Deep Blue Cards matching reference media_1789744082297.webp */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-[22px] md:rounded-[26px] bg-[#07131e] p-7 md:p-8 text-white flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Top Logo & Entity Name */}
                <div className="flex flex-col items-center text-center pb-6 border-b border-white/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white mb-3">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold tracking-wider text-[15px] text-white">
                    {item.client}
                  </h3>
                  <span className="font-mono text-[10.5px] tracking-widest text-white/50 uppercase mt-1">
                    {item.clientType}
                  </span>
                </div>

              <h3 className="mt-5 font-serif text-[24px] font-medium text-navy md:text-[28px]">
                Fiduciary documentation and verified outcome benchmarks
              </h3>
                {/* Challenge Section */}
                <div className="mt-6">
                  <span className="text-[13.5px] font-semibold text-white block">
                    Challenge
                  </span>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/70">
                    {item.challenge}
                  </p>
                </div>

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
                {/* Impact Section */}
                <div className="mt-5">
                  <span className="text-[13.5px] font-semibold text-white block">
                    Impact
                  </span>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/70">
                    {item.impact}
                  </p>
                </div>
              </div>
            </div>

            <div className="surface-card-sm flex shrink-0 flex-col items-start border border-navy/10 bg-canvas p-6 lg:w-80">
              <div className="flex items-center gap-2 text-navy">
                <Lock className="h-4 w-4 text-navy/70" />
                <span className="text-[12px] font-mono uppercase tracking-wider text-navy font-semibold">
                  Disclosure Protocol
                </span>
              {/* Bottom pill button matching reference */}
              <div className="mt-8 pt-2">
                <Link
                  href="/services"
                  className="block w-full text-center rounded-full bg-white/10 hover:bg-white/20 text-white py-2.5 px-5 text-[13px] font-medium transition-colors"
                >
                  Learn More &rarr;
                </Link>
              </div>
              <p className="mt-2.5 text-[13px] leading-relaxed text-ink-muted">
                We maintain strict confidentiality covenants with bilateral and multilateral partners until formal public release.
              </p>
              <div className="mt-5 w-full border-t border-navy/10 pt-3 text-[12px] font-mono text-ink-muted">
                Protocol Status: Active &middot; Regulated
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
