"use client";

import { useState } from "react";
import { impact360Stages } from "@/data/impact360Data";

/**
 * FSM Impact 360™ — the signature framework.
 *
 * The acronym is the idea, so the letterforms carry the section rather than
 * sitting as small glyphs inside badges. The rule-separated setting follows
 * FSM's own treatment of this framework in the corporate profile.
 *
 * Desktop drives the detail panel from hover/focus; below md every stage's
 * description is permanently visible, so nothing is gated behind a hover a
 * touch user cannot perform.
 */
export default function ImpactProcess() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white px-4 py-16 md:px-10 md:py-20" aria-labelledby="impact360-heading">
      {/* Navy is an emphasis surface here, not a section background —
          see FSM_DIGITAL_EXPERIENCE.md §Component philosophy. */}
      <div className="bento-card mx-auto max-w-6xl bg-navy px-6 py-14 text-ivory md:px-14 md:py-20">
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-[0.9fr_1.4fr] md:gap-8">
          <h2 id="impact360-heading" className="font-serif text-[28px] leading-tight md:text-[38px]">
            FSM Impact 360&trade;
          </h2>
          <p className="max-w-[54ch] pt-1.5 text-[16px] text-ivory/75">
            Our working framework for every engagement — a continuous cycle, not a one-time
            checklist. Select a stage to see what it covers.
          </p>
        </div>

        {/* Desktop: the acronym, set large and rule-separated */}
        <div className="hidden md:block">
          <div className="grid grid-cols-6">
            {impact360Stages.map((step, i) => {
              const isActive = i === active;
              return (
                <button
                  key={step.title}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group px-4 pb-5 text-left outline-none transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    i > 0 ? "border-l border-white/15" : ""
                  } ${isActive ? "border-b-2 border-b-blue-bright" : "border-b-2 border-b-transparent"}`}
                >
                  <span
                    className={`block font-serif text-[64px] leading-none transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:text-[76px] ${
                      isActive ? "text-blue-bright" : "text-white/25 group-hover:text-white/45"
                    }`}
                  >
                    {step.letter}
                  </span>
                  <span
                    className={`mt-5 block text-[13.5px] font-medium leading-snug transition-colors duration-500 ${
                      isActive ? "text-white" : "text-white/45"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 min-h-[56px]">
            <p className="max-w-[64ch] text-[16px] leading-relaxed text-white/80">
              {impact360Stages[active].body}
            </p>
          </div>
        </div>

        {/* Mobile: vertical progression, nothing gated behind hover */}
        <div className="md:hidden">
          {impact360Stages.map((step) => (
            <div
              key={step.title}
              className="flex gap-5 border-b border-white/10 py-6 first:border-t first:border-white/10"
            >
              <span className="w-9 shrink-0 font-serif text-[40px] leading-none text-blue-bright">
                {step.letter}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15.5px] font-medium leading-snug text-white">{step.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/65">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
