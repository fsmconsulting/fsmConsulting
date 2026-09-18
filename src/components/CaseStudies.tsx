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
      className="bg-white px-6 md:px-12 py-16 md:py-24 border-t border-navy/10"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header row: Title on left, Filters + Arrows on right */}
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
            <div className="inline-flex items-center rounded-full bg-[#f0f2f5] p-1 text-[13px] font-medium text-gray-600">
              <button
                type="button"
                onClick={() => setActiveTab("All")}
                className={
                  "rounded-full px-4 py-1.5 transition-all duration-200 cursor-pointer " +
                  (activeTab === "All"
                    ? "bg-navy text-white font-semibold shadow-sm"
                    : "hover:text-navy")
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
                    ? "bg-navy text-white font-semibold shadow-sm"
                    : "hover:text-navy")
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
                    ? "bg-navy text-white font-semibold shadow-sm"
                    : "hover:text-navy")
                }
              >
                Global
              </button>
            </div>
          </div>
        </div>

        {/* Vertical Deep Blue Cards matching Conceptzilla styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {displayList.map((item) => (
            <div
              key={item.id}
              className="group rounded-[24px] bg-[#07131e] p-8 lg:p-9 text-white flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/10"
            >
              <div>
                {/* Top Logo & Entity Name */}
                <div className="flex flex-col items-center text-center pb-6 border-b border-white/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-blue-bright" />
                  </div>
                  <h3 className="font-semibold tracking-wider text-[14px] text-white uppercase">
                    {item.client}
                  </h3>
                  <span className="font-mono text-[10.5px] tracking-widest text-blue-bright/90 uppercase mt-1">
                    {item.clientType}
                  </span>
                </div>

                {/* Challenge Section */}
                <div className="mt-6">
                  <span className="text-[13px] font-mono font-semibold uppercase tracking-wider text-white/90 block">
                    Challenge
                  </span>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/70">
                    {item.challenge}
                  </p>
                </div>

                {/* FSM Relevance Tags */}
                <div className="mt-5">
                  <span className="text-[13px] font-mono font-semibold uppercase tracking-wider text-white/90 block mb-2">
                    FSM Relevance
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.relevance.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-white/10 px-2 py-0.5 font-mono text-[11px] text-white/85"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact / Outcome Section */}
                <div className="mt-6 border-t border-white/10 pt-5">
                  <span className="text-[13px] font-mono font-semibold uppercase tracking-wider text-blue-bright block">
                    Verified Outcome
                  </span>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/90 font-medium">
                    {item.impact}
                  </p>
                </div>
              </div>

              {/* Bottom pill button */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <Link
                  href="/services"
                  className="block w-full text-center rounded-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 text-[13px] font-medium transition-all duration-200 group-hover:bg-white group-hover:text-[#07131e]"
                >
                  Explore Capabilities &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


