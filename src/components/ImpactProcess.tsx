"use client";

import { useState } from "react";
import { impact360Stages } from "@/data/impact360Data";

/**
 * FSM Impact 360™ — Continuous Delivery Framework.
 * Contained Institutional Surface per Design System §9 & §17.
 * Interactive on desktop; cleanly vertical on mobile.
 */
export default function ImpactProcess() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:px-10 md:py-28" aria-labelledby="impact360-heading">
      <div className="surface-card mx-auto max-w-7xl bg-navy p-6 sm:p-10 md:p-14 lg:p-16 text-white shadow-xl">
        <div className="mb-8 md:mb-12 grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end border-b border-white/15 pb-6 md:pb-8">
          <div>
            <span className="font-mono text-[10.5px] md:text-[11px] uppercase tracking-[0.2em] text-blue-bright">
              Proprietary Methodology &middot; Full Project Cycle
            </span>
            <h2 id="impact360-heading" className="mt-2 font-serif text-[24px] sm:text-[30px] font-normal leading-tight md:text-[42px]">
              FSM Impact 360&trade; Delivery Framework
            </h2>
          </div>
          <p className="text-[13px] sm:text-[14.5px] md:text-[15.5px] leading-relaxed text-white/75">
            A continuous, closed-loop methodology connecting baseline diagnostics with ground-level
            implementation acceleration and verified outcome tracking.
          </p>
        </div>

        {/* Sequential Progression Strip: 3-cols (IMP / ACT) on mobile, 6-cols on desktop */}
        <div className="grid grid-cols-3 border-b border-white/15 md:grid-cols-6">
          {impact360Stages.map((step, i) => {
            const isActive = i === active;
            const isFirstInMobileRow = i % 3 === 0;

            return (
              <button
                key={step.title}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group relative pb-4 md:pb-6 text-left outline-none transition-all duration-300 cursor-pointer ${
                  i < 3 ? "border-b border-white/15 md:border-b-0 pt-0" : "pt-4 md:pt-0"
                } ${
                  isFirstInMobileRow
                    ? "pl-0 pr-2.5 sm:pr-4 md:pr-3"
                    : "border-l border-white/10 pl-2.5 sm:pl-4 pr-2.5 sm:pr-4 md:pl-5 md:pr-3"
                } ${
                  i === 3 ? "md:border-l md:border-white/10 md:pl-5" : ""
                }`}
                aria-pressed={isActive}
              >
                <div className="flex items-baseline justify-between">
                  <span
                    className={`font-serif text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-none transition-colors duration-300 ${
                      isActive ? "text-blue-bright" : "text-white/20 group-hover:text-white/45"
                    }`}
                  >
                    {step.letter}
                  </span>
                  <span className="font-mono text-[10px] sm:text-[10.5px] md:text-[11px] text-white/40">
                    0{i + 1}
                  </span>
                </div>

                <span
                  className={`mt-2.5 sm:mt-3 md:mt-4 block text-[11px] sm:text-[12px] md:text-[13.5px] font-medium leading-snug transition-colors duration-300 ${
                    isActive ? "text-white font-semibold" : "text-white/50 group-hover:text-white/80"
                  }`}
                >
                  {step.title}
                </span>

                {/* Active Indicator Line */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                    isActive ? "bg-blue-bright" : "bg-transparent"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Active Detail Display */}
        <div className="mt-6 flex flex-col md:flex-row items-start gap-2 md:gap-6 pt-4 md:mt-8 md:pt-4">
          <span className="font-mono text-[10.5px] md:text-xs uppercase tracking-wider text-blue-bright shrink-0 md:pt-1">
            Stage 0{active + 1} Focus:
          </span>
          <p className="max-w-3xl text-[13px] sm:text-[14.5px] md:text-[16.5px] leading-relaxed text-white/90">
            {impact360Stages[active].body}
          </p>
        </div>
      </div>
    </section>
  );
}
