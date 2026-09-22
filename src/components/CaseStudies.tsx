"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, TrendingUp, Trees, Globe2, BarChart3 } from "lucide-react";
import { deliveryCards } from "@/data/deliveryCardsData";

/**
 * "Where we deliver" (Assignment Types & Delivery Capability)
 * Matches Conceptzilla Reference (media_1789744082297.webp & 8bd1b8809a228bcdb45bd5d716fe3d4c.webp):
 * - Section heading with "Nigeria | Regional" pill toggle and arrow navigation buttons
 * - Vertical cards in deep institutional midnight navy (#07131e) matching reference geometry
 * - Assignment type badge / title, "The challenge" block, "How FSM delivers" block, and pill "Explore this service →" button.
 */
const iconMap: Record<string, React.ElementType> = {
  "independent-verification": ShieldCheck,
  "d-ready": TrendingUp,
  "safeguards": Trees,
  "expert-mobilisation": Globe2,
  "meal": BarChart3,
};

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<"Nigeria" | "Regional">("Nigeria");
  const [currentIndex, setCurrentIndex] = useState(0);
  void currentIndex;

  const displayList = deliveryCards.filter(
    (c) => c.category === activeTab.toLowerCase()
  );

  return (
    <section id="case-studies" className="bg-white px-6 md:px-12 py-16 md:py-24 border-t border-gray-100" aria-labelledby="delivery-heading">
      <div className="mx-auto max-w-7xl">
        {/* Header row matching reference: Title on left, Filters + Arrows on right */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 md:mb-14">
          <h2
            id="delivery-heading"
            className="text-[30px] sm:text-[34px] md:text-[38px] font-bold text-[#07131e] tracking-tight"
          >
            Where we deliver
          </h2>

          <div className="flex items-center gap-4">
            {/* Pill filter toggle matching reference: Nigeria | Regional */}
            <div className="inline-flex items-center rounded-full bg-[#f0f2f5] p-1 text-[13.5px] font-medium text-gray-600">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("Nigeria");
                  setCurrentIndex(0);
                }}
                className={
                  "rounded-full px-5 py-1.5 transition-all duration-200 cursor-pointer " +
                  (activeTab === "Nigeria" ? "bg-white text-[#07131e] font-semibold shadow-sm" : "hover:text-[#07131e]")
                }
              >
                Nigeria
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("Regional");
                  setCurrentIndex(0);
                }}
                className={
                  "rounded-full px-5 py-1.5 transition-all duration-200 cursor-pointer " +
                  (activeTab === "Regional" ? "bg-white text-[#07131e] font-semibold shadow-sm" : "hover:text-[#07131e]")
                }
              >
                Regional
              </button>
            </div>

            {/* Arrows navigation matching reference */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? displayList.length - 1 : prev - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#07131e] hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
                aria-label="Previous assignment card"
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev === displayList.length - 1 ? 0 : prev + 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#07131e] hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
                aria-label="Next assignment card"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Vertical Deep Blue Cards matching reference media_1789744082297.webp */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayList.map((item) => {
            const IconComponent = iconMap[item.id] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group rounded-[24px] bg-[#07131e] p-8 lg:p-9 text-white flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/5"
              >
                <div>
                  {/* Top Logo / Icon & Tag */}
                  <div className="flex flex-col items-center text-center pb-6 border-b border-white/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold tracking-wider text-[14.5px] text-white uppercase">
                      {item.tag}
                    </h3>
                    <span className="font-mono text-[11px] tracking-widest text-[#9BC2F5] uppercase mt-1">
                      {item.serviceTitle}
                    </span>
                  </div>

                  {/* The challenge */}
                  <div className="mt-7">
                    <span className="text-[13.5px] font-semibold uppercase tracking-wider text-white/90 block">
                      The challenge
                    </span>
                    <p className="mt-2 text-[14px] leading-relaxed text-white/70">
                      {item.challenge}
                    </p>
                  </div>

                  {/* How FSM delivers */}
                  <div className="mt-6">
                    <span className="text-[13.5px] font-semibold uppercase tracking-wider text-[#9BC2F5] block">
                      How FSM delivers
                    </span>
                    <p className="mt-2 text-[14px] leading-relaxed text-white/70">
                      {item.howWeDeliver}
                    </p>
                  </div>
                </div>

                {/* Bottom pill button matching reference */}
                <div className="mt-8 pt-4 border-t border-white/10">
                  <Link
                    href={item.href}
                    className="block w-full text-center rounded-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 text-[13.5px] font-medium transition-all duration-200 group-hover:bg-white group-hover:text-[#07131e]"
                  >
                    Explore this service &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
