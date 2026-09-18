"use client";

import { useState } from "react";
import Link from "next/link";
import { sectorsData, sectorCategories, SectorItem } from "@/data/sectorsData";

export default function SectorDirectory() {
  const [filter, setFilter] = useState<string>("all");
  const [activeSectorId, setActiveSectorId] = useState<string>(sectorsData[0].id);

  const filtered = filter === "all" ? sectorsData : sectorsData.filter((s) => s.category === filter);
  const activeSector = sectorsData.find((s) => s.id === activeSectorId) || sectorsData[0];

  return (
    <section id="sector-directory" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
              Sectoral Catalog &middot; 15 Industry Verticals
            </span>
            <h2 className="mt-2 font-serif text-[32px] font-medium text-navy md:text-[42px]">
              Sector Verticals &amp; Focus Areas
            </h2>
            <p className="mt-3 text-[16px] text-ink/75">
              Comprehensive technical advisory, delivery acceleration, and independent verification customized for Africa&rsquo;s leading economic and social portfolios.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {sectorCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`rounded px-4 py-2 text-[13px] font-medium transition-all ${
                  filter === cat.id
                    ? "bg-navy text-white shadow-none"
                    : "bg-white text-navy border border-navy/10 hover:bg-navy/5"
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Layout: Sector Selector List + Deep Detail Panel */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr]">
          
          {/* Sector Selector List */}
          <div className="space-y-3 max-h-[900px] overflow-y-auto pr-1">
            {filtered.map((sec) => {
              const isSelected = sec.id === activeSector.id;
              return (
                <div
                  key={sec.id}
                  onClick={() => setActiveSectorId(sec.id)}
                  className={`cursor-pointer rounded-[var(--radius-card-sm)] border p-5 transition-all duration-200 ${
                    isSelected
                      ? "border-blue-accent bg-white shadow-xs ring-1 ring-blue-accent/40"
                      : "border-navy/10 bg-white/70 hover:border-navy/30 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-mono font-bold ${
                        isSelected ? "bg-navy text-white" : "bg-navy/10 text-navy"
                      }`}>
                        {sec.num}
                      </span>
                      <h3 className="font-serif text-[17px] font-medium text-navy">
                        {sec.title}
                      </h3>
                    </div>
                    <span className="text-xs font-medium text-blue-accent">
                      {isSelected ? "Active View" : "Preview &rarr;"}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] text-ink/70 line-clamp-2">
                    {sec.tagline}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                    <span className="text-[11px] uppercase tracking-wider">{sec.categoryLabel}</span>
                    <Link
                      href={`/sectors/${sec.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="font-semibold text-blue-accent hover:underline flex items-center gap-0.5"
                    >
                      <span>Dedicated Page</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deep Detail Panel */}
          <div className="rounded-[var(--radius-card)] border border-navy/15 bg-white p-8 shadow-none md:p-10 sticky top-28">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy/10 pb-4">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-accent">
                  Sector {activeSector.num} &middot; {activeSector.categoryLabel}
                </span>
                <h3 className="mt-1 font-serif text-[26px] font-medium text-navy md:text-[30px]">
                  {activeSector.title}
                </h3>
              </div>

              {/* Link directly to dedicated page */}
              <Link
                href={`/sectors/${activeSector.id}`}
                className="pill-btn inline-flex items-center gap-2 bg-navy px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-blue-accent"
              >
                <span>Explore Dedicated Page</span>
                <span className="pill-btn-arrow">&rarr;</span>
              </Link>
            </div>

            <p className="mt-4 text-[14.5px] font-medium text-blue-accent">
              {activeSector.tagline}
            </p>

            <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
              {activeSector.overview}
            </p>

            {/* Key Stats Row */}
            <div className="mt-6 grid grid-cols-3 gap-3 rounded-[var(--radius-card-sm)] border border-navy/10 bg-[#fcfdfe] p-4 text-center">
              {activeSector.stats.map((stat, sIdx) => (
                <div key={sIdx} className="flex flex-col">
                  <span className="font-serif text-[20px] font-bold text-navy">{stat.value}</span>
                  <span className="text-[11px] font-medium text-gray-600">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Key Focus Areas */}
            <div className="mt-6 rounded-[var(--radius-card-sm)] border border-navy/5 bg-sand p-5">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-navy">
                Key Strategic Focus Areas:
              </h4>
              <ul className="mt-3 space-y-2">
                {activeSector.focusAreas.map((fa, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-[13.5px] text-ink/75">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-accent" />
                    <div>
                      <strong className="text-navy">{fa.title}: </strong>
                      <span>{fa.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* FSM Specific Interventions */}
            <div className="mt-6">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-accent">
                Representative FSM Interventions &amp; Methodologies:
              </h4>
              <ul className="mt-3 space-y-2">
                {activeSector.interventions.slice(0, 4).map((inv, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-ink/80">
                    <span className="mt-0.5 text-navy font-bold">&rsaquo;</span>
                    <span>{inv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Clients & Dedicated Page Link */}
            <div className="mt-8 flex flex-col gap-4 border-t border-navy/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  Target Clients
                </span>
                <span className="text-xs text-navy/80">
                  {activeSector.targetClients.slice(0, 2).join(" • ")}
                </span>
              </div>

              <Link
                href={`/sectors/${activeSector.id}`}
                className="group inline-flex items-center gap-2 font-semibold text-navy hover:text-blue-accent text-sm"
              >
                <span>Read Full Technical Profile</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
