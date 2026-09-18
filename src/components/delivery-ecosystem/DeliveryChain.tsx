"use client";

import { useState } from "react";
import { deliveryStages } from "@/data/deliveryEcosystemData";

export default function DeliveryChain() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="delivery-ecosystem"
      className="bg-white px-6 py-20 md:px-10 md:py-28 border-t border-navy/10"
      aria-labelledby="delivery-chain-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-bright">
            Delivery Ecosystem &middot; Operational System
          </span>
          <h2 id="delivery-chain-heading" className="mt-2 font-serif text-[30px] font-normal text-navy md:text-[40px]">
            An operational system connecting requirement to results.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
            Global and regional expertise becomes useful only when it connects to local delivery capability. Eight interconnected stages structure that movement:
          </p>
        </div>

        {/* Desktop: horizontal chain */}
        <div className="mt-12 hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[14px] h-px bg-navy/10" aria-hidden="true" />
            <div className="relative grid grid-cols-8 gap-3">
              {deliveryStages.map((stage, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={stage.title}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group text-left"
                  >
                    <span
                      className={`relative z-10 mb-3 flex h-7 w-7 items-center justify-center rounded-full border text-[11.5px] font-medium transition-all duration-300 ${
                        isActive ? "border-navy bg-navy text-white" : "border-navy/25 bg-white text-navy/50"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <p
                      className={`text-[12px] leading-snug transition-colors duration-300 ${
                        isActive ? "font-medium text-navy" : "text-navy/45"
                      }`}
                    >
                      {stage.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-8 min-h-[50px] border-t border-navy/10 pt-6">
            <p className="max-w-[64ch] text-[15px] leading-relaxed text-ink-muted">
              {deliveryStages[active].body}
            </p>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-8 md:hidden">
          {deliveryStages.map((stage, i) => (
            <div key={stage.title} className="relative flex gap-4 border-l-2 border-navy/10 pb-8 pl-5 last:pb-0">
              <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-[11px] font-medium text-white">
                {i + 1}
              </span>
              <div className="pl-2">
                <h3 className="text-[15px] font-medium text-navy">{stage.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-muted">{stage.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
