"use client";

import { useState } from "react";
import Link from "next/link";
import { caseStudiesData } from "@/data/caseStudiesData";

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<"All" | "Regional" | "Global">("All");

  const displayList = caseStudiesData.filter(
    (c) => activeTab === "All" || c.category === activeTab
  );

  return (
    <section
      id="case-studies"
      className="bg-[#F3F6F9] px-6 py-16 md:px-12 md:py-24 border-t border-[#D3DBE3]"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header row: Editorial Headline + Segment Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-[#2251FF] block">
              Evidence &middot; Verified Engagements
            </span>
            <h2
              id="case-studies-heading"
              className="mt-2 font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#051C2C] leading-[1.08] tracking-tight"
            >
              Case studies
            </h2>
            <p className="mt-3 text-[15.5px] md:text-[16.5px] leading-relaxed text-[#2B4052]">
              Demonstrated technical leadership, safeguards compliance, and delivery acceleration across sovereign and multilateral partner assignments.
            </p>
          </div>

          {/* Segmented Filter Control */}
          <div className="inline-flex items-center border border-[#D3DBE3] bg-white p-1 rounded-[2px] self-start md:self-end">
            {(["All", "Regional", "Global"] as const).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 text-[13px] font-semibold tracking-wide rounded-[2px] transition-colors duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#051C2C] text-white"
                      : "text-[#566B7D] hover:text-[#051C2C] hover:bg-[#F3F6F9]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* High-Contrast Editorial Cards with Prominent Navy Shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {displayList.map((item) => (
            <Link
              key={item.id}
              href={`/case-studies/${item.slug}`}
              className="group relative flex flex-col justify-between rounded-[2px] border border-[#D3DBE3] bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-2 shadow-[0_16px_36px_rgba(5,28,44,0.18),0_4px_12px_rgba(5,28,44,0.12)] hover:shadow-[0_24px_52px_rgba(5,28,44,0.32),0_8px_20px_rgba(5,28,44,0.2)] hover:border-[#2251FF]/60"
            >
              {/* Top Accent Line on hover */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[#2251FF] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-3 border-b border-[#D3DBE3] pb-4">
                  <span className="font-mono text-[10.5px] font-bold tracking-[0.1em] text-[#2251FF] uppercase truncate">
                    {item.client}
                  </span>
                  <span className="shrink-0 font-mono text-[10.5px] font-medium uppercase tracking-wider text-[#566B7D] border border-[#D3DBE3] bg-[#F3F6F9] px-2 py-0.5 rounded-[2px]">
                    {item.category}
                  </span>
                </div>

                {/* Sub-label & Major Heading */}
                <div className="mt-5">
                  <span className="block font-mono text-[11px] font-medium tracking-wide uppercase text-[#566B7D]">
                    {item.clientType}
                  </span>
                  <h3 className="mt-2 font-serif text-[24px] sm:text-[26px] font-semibold text-[#051C2C] leading-[1.2] group-hover:text-[#2251FF] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Short Description */}
                <p className="mt-4 text-[15px] leading-relaxed text-[#2B4052]">
                  {item.shortDescription}
                </p>
              </div>

              {/* Text-driven Link with Animated Arrow */}
              <div className="mt-8 border-t border-[#D3DBE3] pt-5">
                <span className="ds-link--arrow text-[14px] font-semibold text-[#2251FF] group-hover:text-[#1A3FD6] transition-colors">
                  Read full case study
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
