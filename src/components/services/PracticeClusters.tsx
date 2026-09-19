"use client";

import { useState } from "react";
import Link from "next/link";
import { practicesData } from "@/data/practicesData";
import { capabilities } from "@/data/capabilitiesData";

export default function PracticeClusters() {
  const [activeTab, setActiveTab] = useState<"all" | "delivery" | "governance" | "innovation">("all");

  const filteredPractices = activeTab === "all"
    ? practicesData
    : practicesData.filter((p) => p.cluster === activeTab);

  return (
    <section id="practices" className="bg-sand py-20 md:py-28" aria-labelledby="practices-heading">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        
        {/* Section Header: 14 Practices */}
        <div className="flex flex-col justify-between gap-6 border-b border-navy/12 pb-10 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="font-mono text-[11.5px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
              Core Practice Catalog &middot; 14 Disciplines
            </span>
            <h2 id="practices-heading" className="mt-2 font-serif text-[32px] font-medium leading-tight text-navy md:text-[42px]">
              Fourteen Specialized Practice Areas
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-muted">
              Select any practice area to explore comprehensive service scopes, methodological standards, and institutional deliverables.
            </p>
          </div>

          {/* Cluster Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`rounded-[2px] px-3.5 py-1.5 text-[13px] font-medium transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-navy text-white shadow-none"
                  : "bg-white text-navy border border-navy/10 hover:bg-navy/5"
              }`}
            >
              All 14 Practices
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("delivery")}
              className={`rounded-[2px] px-3.5 py-1.5 text-[13px] font-medium transition-all cursor-pointer ${
                activeTab === "delivery"
                  ? "bg-navy text-white shadow-none"
                  : "bg-white text-navy border border-navy/10 hover:bg-navy/5"
              }`}
            >
              Delivery &amp; MEAL
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("governance")}
              className={`rounded-[2px] px-3.5 py-1.5 text-[13px] font-medium transition-all cursor-pointer ${
                activeTab === "governance"
                  ? "bg-navy text-white shadow-none"
                  : "bg-white text-navy border border-navy/10 hover:bg-navy/5"
              }`}
            >
              Governance &amp; Safeguards
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("innovation")}
              className={`rounded-[2px] px-3.5 py-1.5 text-[13px] font-medium transition-all cursor-pointer ${
                activeTab === "innovation"
                  ? "bg-navy text-white shadow-none"
                  : "bg-white text-navy border border-navy/10 hover:bg-navy/5"
              }`}
            >
              Data, Economy &amp; PPP
            </button>
          </div>
        </div>

        {/* 14 Practices Styled Ruled List */}
        <div className="border-t border-navy/12">
          {filteredPractices.map((practice) => (
            <Link
              key={practice.slug}
              href={`/services/${practice.slug}`}
              className="group block border-b border-navy/12 py-7 outline-none md:py-8 transition-colors hover:bg-white/40"
            >
              <div className="flex items-baseline gap-5 md:gap-7">
                <span className="w-6 shrink-0 font-serif text-[14px] text-navy/30 transition-colors duration-500 group-hover:text-blue-accent group-focus-visible:text-blue-accent">
                  {practice.num}
                </span>
                <h3 className="flex-1 font-serif text-[22px] font-medium leading-snug text-navy transition-colors duration-300 group-hover:text-blue-accent md:text-[28px]">
                  {practice.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 translate-x-0 text-[18px] text-navy/25 transition-all duration-500 group-hover:translate-x-1 group-hover:text-blue-accent group-focus-visible:translate-x-1 group-focus-visible:text-blue-accent"
                >
                  &rarr;
                </span>
              </div>

              <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="overflow-hidden">
                  <p className="mt-3 max-w-3xl pl-11 text-[14.5px] leading-relaxed text-ink-muted md:mt-4 md:pl-12">
                    {practice.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Section Header: 4 Delivery Capabilities */}
        <div className="mt-24 border-t border-navy/12 pt-16">
          <div className="max-w-3xl mb-10">
            <span className="font-mono text-[11.5px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
              Delivery Operating Levels &middot; 4 Capabilities
            </span>
            <h2 className="mt-2 font-serif text-[30px] font-medium leading-tight text-navy md:text-[38px]">
              Four Integrated Capability Layers
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-muted">
              How we deploy across global, regional, national, and community implementation ecosystems.
            </p>
          </div>

          {/* 4 Capabilities Styled Ruled List */}
          <div className="border-t border-navy/12">
            {capabilities.map((cap, i) => (
              <Link
                key={cap.slug}
                href={`/capabilities/${cap.slug}`}
                className="group block border-b border-navy/12 py-7 outline-none md:py-8 transition-colors hover:bg-white/40"
              >
                <div className="flex items-baseline gap-5 md:gap-7">
                  <span className="w-6 shrink-0 font-serif text-[14px] text-navy/30 transition-colors duration-500 group-hover:text-blue-accent group-focus-visible:text-blue-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="flex-1 font-serif text-[22px] font-medium leading-snug text-navy transition-colors duration-300 group-hover:text-blue-accent md:text-[28px]">
                    {cap.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="shrink-0 translate-x-0 text-[18px] text-navy/25 transition-all duration-500 group-hover:translate-x-1 group-hover:text-blue-accent group-focus-visible:translate-x-1 group-focus-visible:text-blue-accent"
                  >
                    &rarr;
                  </span>
                </div>

                <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <div className="overflow-hidden">
                    <p className="mt-3 max-w-3xl pl-11 text-[14.5px] leading-relaxed text-ink-muted md:mt-4 md:pl-12">
                      {cap.tagline}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
