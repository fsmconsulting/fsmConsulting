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
    <section className="bg-white px-6 py-20 md:px-10 md:py-28" aria-labelledby="impact360-heading">
      <div className="surface-card mx-auto max-w-7xl bg-navy p-8 md:p-14 lg:p-16 text-white shadow-xl">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end border-b border-white/15 pb-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-bright">
              Proprietary Methodology &middot; Full Project Cycle
            </span>
            <h2 id="impact360-heading" className="mt-2 font-serif text-[30px] font-normal leading-tight md:text-[42px]">
              FSM Impact 360&trade; Delivery Framework
            </h2>
          </div>
          <p className="text-[15.5px] leading-relaxed text-white/75">
            A continuous, closed-loop methodology connecting baseline diagnostics with ground-level
            implementation acceleration and verified outcome tracking.
          </p>
        </div>

        {/* Desktop: Sequential Progression Strip with Letterform Accent */}
        <div className="hidden md:block">
          <div className="grid grid-cols-6 border-b border-white/15">
            {impact360Stages.map((step, i) => {
              const isActive = i === active;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group relative pb-6 text-left outline-none transition-all duration-300 cursor-pointer ${
                    i > 0 ? "border-l border-white/10 pl-5 pr-3" : "pr-3"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-baseline justify-between">
                    <span
                      className={`font-serif text-[48px] lg:text-[56px] leading-none transition-colors duration-300 ${
                        isActive ? "text-blue-bright" : "text-white/20 group-hover:text-white/45"
                      }`}
                    >
                      {step.letter}
                    </span>
                    <span className="font-mono text-[11px] text-white/40">0{i + 1}</span>
                  </div>

                  <span
                    className={`mt-4 block text-[13.5px] font-medium leading-snug transition-colors duration-300 ${
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
          <div className="mt-8 flex items-start gap-6 pt-4">
            <span className="font-mono text-xs uppercase tracking-wider text-blue-bright shrink-0 pt-1">
              Stage 0{active + 1} Focus:
            </span>
            <p className="max-w-3xl text-[16.5px] leading-relaxed text-white/90">
              {impact360Stages[active].body}
            </p>
          </div>
        </div>

        {/* Mobile: Vertical Sequential Progression (Never gated behind hover) */}
        <div className="divide-y divide-white/10 md:hidden">
          {impact360Stages.map((step, i) => (
            <div key={step.title} className="py-5 first:pt-0">
              <div className="flex items-center gap-4">
                <span className="font-serif text-[32px] font-medium text-blue-bright">{step.letter}</span>
                <div>
                  <span className="font-mono text-[10px] uppercase text-blue-bright">Step 0{i + 1}</span>
                  <h3 className="text-[15px] font-semibold text-white">{step.title}</h3>
                </div>
              </div>
              <p className="mt-2 pl-10 text-[13.5px] leading-relaxed text-white/70">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
