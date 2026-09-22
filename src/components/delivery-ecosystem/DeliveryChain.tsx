"use client";

import { useState } from "react";
import { deliveryStages } from "@/data/deliveryEcosystemData";

export default function DeliveryChain() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white px-4 py-20 md:px-10 md:py-28" aria-labelledby="delivery-chain-heading">
      <div className="mx-auto max-w-6xl">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
          Operational Methodology &middot; 8 Stages
        </span>
        <h2 id="delivery-chain-heading" className="mt-2 text-[28px] md:text-[36px] font-bold tracking-tight text-[#07131e]">
          The delivery chain
        </h2>
        <p className="mt-3 max-w-[60ch] text-[15.5px] leading-relaxed text-gray-600">
          Eight stages connect a client requirement to a measurable result. Select a stage for
          detail.
        </p>

        {/* Desktop: horizontal chain */}
        <div className="mt-12 hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[14px] h-px bg-gray-200" aria-hidden="true" />
            <div className="relative grid grid-cols-8 gap-3">
              {deliveryStages.map((stage, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={stage.title}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group text-left cursor-pointer"
                  >
                    <span
                      className={`relative z-10 mb-3 flex h-7 w-7 items-center justify-center rounded-full border text-[11.5px] font-semibold transition-all duration-300 ${
                        isActive ? "border-[#2F5FA8] bg-[#2F5FA8] text-white shadow-sm" : "border-gray-300 bg-white text-gray-400"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <p
                      className={`text-[12px] leading-snug transition-colors duration-300 ${
                        isActive ? "font-bold text-[#07131e]" : "text-gray-400"
                      }`}
                    >
                      {stage.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-8 min-h-[60px] rounded-[20px] border border-gray-100 bg-[#F4F5F7] p-6">
            <p className="max-w-[64ch] text-[15px] leading-relaxed text-gray-700">
              {deliveryStages[active].body}
            </p>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-8 md:hidden">
          {deliveryStages.map((stage, i) => (
            <div key={stage.title} className="relative flex gap-4 border-l-2 border-gray-200 pb-8 pl-5 last:pb-0">
              <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#2F5FA8] text-[11px] font-bold text-white">
                {i + 1}
              </span>
              <div className="pl-2">
                <h3 className="text-[15px] font-bold text-[#07131e]">{stage.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-gray-600">{stage.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
