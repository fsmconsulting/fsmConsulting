"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Sprout, ShieldCheck } from "lucide-react";

interface CaseStudy {
  id: string;
  category: "Regional" | "Global";
  icon: typeof Building2;
  client: string;
  clientType: string;
  title: string;
  challenge: string;
  relevance: string[];
  impact: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "social-protection",
    category: "Global",
    icon: ShieldCheck,
    client: "WORLD BANK-SUPPORTED PROGRAMME",
    clientType: "SOCIAL PROTECTION & DEVELOPMENT SYSTEMS",
    title: "Social Protection & Delivery Systems",
    challenge:
      "Strengthening implementation systems, multi-agency coordination, safeguards adherence, and verifiable delivery tracking under international financing covenants.",
    relevance: [
      "Social protection systems",
      "Institutional strengthening",
      "Implementation support",
      "Development effectiveness",
    ],
    impact:
      "Clearly documented improvements and delivery results established strictly on verified project evidence and third-party monitoring benchmarks.",
  },
  {
    id: "risk-management",
    category: "Regional",
    icon: Sprout,
    client: "WORLD BANK PFORR / IPF ASSISTANCE",
    clientType: "ENVIRONMENTAL & SOCIAL RISK MANAGEMENT",
    title: "Labour & Social Safeguards Systems",
    challenge:
      "Strengthening labour and social risk management, establishing active Grievance Redress (GRM), and operationalising the Labour Management Plan (LMP).",
    relevance: [
      "Social safeguards (ESS2)",
      "Labour Management Plan",
      "Grievance Redress (GRM)",
      "Stakeholder engagement",
      "Security management",
    ],
    impact:
      "Sensitisation, institutional awareness, strengthened implementation arrangements, and integration of LMP requirements into ground delivery.",
  },
  {
    id: "programme-design",
    category: "Regional",
    icon: Building2,
    client: "GOVERNMENT / PARTNER ASSIGNMENT",
    clientType: "PROGRAMME DESIGN & READINESS (D-READY)",
    title: "Development Programme Readiness",
    challenge:
      "Translating a high-priority sovereign development mandate into a structured, bankable, and implementable multi-sector investment programme.",
    relevance: [
      "Feasibility assessment",
      "Programme design",
      "Results frameworks",
      "Implementation planning",
      "Investment readiness",
    ],
    impact:
      "Delivered a comprehensive, decision-ready programme and investment framework structured for immediate sovereign and financier approval.",
  },
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<"All" | "Regional" | "Global">("All");

  const displayList = caseStudies.filter(
    (c) => activeTab === "All" || c.category === activeTab
  );

  return (
    <section
      id="case-studies"
      className="bg-canvas px-6 md:px-12 py-16 md:py-24 border-t border-navy/10"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header row: Title on left, Filters on right */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-bright">
              Evidence &middot; Verified Engagements
            </span>
            <h2
              id="case-studies-heading"
              className="mt-1 text-[30px] sm:text-[34px] md:text-[38px] font-serif font-normal text-navy tracking-tight"
            >
              Case studies
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Pill filter toggle: All | Regional | Global */}
            <div className="inline-flex items-center rounded-full bg-white p-1 text-[13px] font-medium text-navy border border-navy/10 shadow-2xs">
              <button
                type="button"
                onClick={() => setActiveTab("All")}
                className={
                  "rounded-full px-4 py-1.5 transition-all duration-200 cursor-pointer " +
                  (activeTab === "All"
                    ? "bg-navy text-white font-semibold shadow-xs"
                    : "text-navy/70 hover:text-navy")
                }
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("Regional")}
                className={
                  "rounded-full px-4 py-1.5 transition-all duration-200 cursor-pointer " +
                  (activeTab === "Regional"
                    ? "bg-navy text-white font-semibold shadow-xs"
                    : "text-navy/70 hover:text-navy")
                }
              >
                Regional
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("Global")}
                className={
                  "rounded-full px-4 py-1.5 transition-all duration-200 cursor-pointer " +
                  (activeTab === "Global"
                    ? "bg-navy text-white font-semibold shadow-xs"
                    : "text-navy/70 hover:text-navy")
                }
              >
                Global
              </button>
            </div>
          </div>
        </div>

        {/* High-Readability Surface Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {displayList.map((item) => (
            <div
              key={item.id}
              className="group rounded-[24px] bg-white p-7 sm:p-8 lg:p-9 text-navy flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl border border-navy/10 shadow-xs"
            >
              <div>
                {/* Top Logo & Entity Name */}
                <div className="flex flex-col items-center text-center pb-6 border-b border-navy/10">
                  <h3 className="font-semibold tracking-wider text-[13px] text-navy uppercase">
                    {item.client}
                  </h3>
                  <span className="font-mono text-[10.5px] tracking-wider text-blue-bright uppercase mt-1 font-medium">
                    {item.clientType}
                  </span>
                </div>

                {/* Challenge Section */}
                <div className="mt-6">
                  <span className="text-[11.5px] font-mono font-semibold uppercase tracking-wider text-navy/70 block">
                    Challenge
                  </span>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink">
                    {item.challenge}
                  </p>
                </div>

                {/* FSM Relevance Tags */}
                <div className="mt-5">
                  <span className="text-[11.5px] font-mono font-semibold uppercase tracking-wider text-navy/70 block mb-2">
                    FSM Relevance
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.relevance.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-canvas px-2.5 py-1 font-mono text-[11px] text-navy font-medium border border-navy/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact / Outcome Section */}
                <div className="mt-6 border-t border-navy/10 pt-5">
                  <span className="text-[11.5px] font-mono font-semibold uppercase tracking-wider text-blue-accent block">
                    Verified Outcome
                  </span>
                  <p className="mt-2 text-[14px] leading-relaxed text-navy font-medium">
                    {item.impact}
                  </p>
                </div>
              </div>

              {/* Bottom pill button */}
              <div className="mt-8 pt-4 border-t border-navy/10">
                <Link
                  href="/services"
                  className="pill-btn w-full bg-canvas hover:bg-navy text-navy hover:text-white border border-navy/15 justify-center py-2.5 text-[13px] font-semibold transition-all duration-200"
                >
                  <span>Explore Capabilities</span>
                  <span className="pill-btn-arrow">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


