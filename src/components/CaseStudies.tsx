"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Sprout, ShieldCheck } from "lucide-react";

/**
 * "Case studies"
 * Matches Conceptzilla Reference (media_1789744082297.webp & 8bd1b8809a228bcdb45bd5d716fe3d4c.webp):
 * - Section heading with "Regional | Global" pill toggle and arrow buttons
 * - Vertical cards in deep institutional blue (#07131e) matching reference geometry
 * - Client logo / name / subtitle, Challenge section, Impact section, and pill "Learn More →" button.
 */
const caseStudies = [
  {
    id: "iva-governance",
    category: "Global",
    icon: Building2,
    client: "NORDEXA PORTFOLIO",
    clientType: "INDEPENDENT VERIFICATION AGENT (IVA)",
    challenge:
      "A sovereign finance initiative faced multi-year disbursement backlogs and compliance hurdles under bilateral covenants requiring verified public expenditure milestones.",
    impact:
      "Conducted independent verification across 36 states, validating institutional reform milestones and unlocking scheduled disbursement tranches within 7 months.",
  },
  {
    id: "dready-resilience",
    category: "Regional",
    icon: Sprout,
    client: "AGRO-CLIMATIC RESILIENCE",
    clientType: "PROJECT READINESS & D-READY ADVISORY",
    challenge:
      "Implementation teams experienced severe procurement friction and baseline data gaps, stalling community infrastructure investments across priority rural corridors.",
    impact:
      "Deployed embedded delivery units and resolved fiduciary bottlenecks, accelerating project readiness (D-Ready) and mobilizing field teams across priority zones.",
  },
  {
    id: "safeguards-health",
    category: "Regional",
    icon: ShieldCheck,
    client: "HEALTH SYSTEMS PLATFORM",
    clientType: "SAFEGUARDS, ESMP & THIRD-PARTY AUDIT",
    challenge:
      "Multi-agency delivery arrangements required rigorous social safeguards (ESMP) and continuous third-party monitoring to ensure intended beneficiary reach.",
    impact:
      "Established digital real-time monitoring and citizen feedback mechanisms across target states, verifying service delivery and restoring donor compliance.",
  },
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("Regional");
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayList = caseStudies.filter(
    (c) => c.category === activeTab || activeTab === "Regional"
  );

  return (
    <section id="case-studies" className="bg-white px-6 md:px-12 py-16 md:py-24 border-t border-gray-100" aria-labelledby="case-studies-heading">
      <div className="mx-auto max-w-7xl">
        {/* Header row matching reference: Title on left, Filters + Arrows on right */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 md:mb-14">
          <h2
            id="case-studies-heading"
            className="text-[30px] sm:text-[34px] md:text-[38px] font-bold text-navy tracking-tight"
          >
            Case studies
          </h2>

          <div className="flex items-center gap-4">
            {/* Pill filter toggle matching reference: Regional | Global */}
            <div className="inline-flex items-center rounded-full bg-[#f0f2f5] p-1 text-[13.5px] font-medium text-gray-600">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("Regional");
                  setCurrentIndex(0);
                }}
                className={
                  "rounded-full px-5 py-1.5 transition-all duration-200 cursor-pointer " +
                  (activeTab === "Regional" ? "bg-white text-navy font-semibold shadow-sm" : "hover:text-navy")
                }
              >
                Regional
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("Global");
                  setCurrentIndex(0);
                }}
                className={
                  "rounded-full px-5 py-1.5 transition-all duration-200 cursor-pointer " +
                  (activeTab === "Global" ? "bg-white text-navy font-semibold shadow-sm" : "hover:text-navy")
                }
              >
                Global
              </button>
            </div>

            {/* Arrows navigation matching reference */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? displayList.length - 1 : prev - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-navy hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
                aria-label="Previous case studies"
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev === displayList.length - 1 ? 0 : prev + 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-navy hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
                aria-label="Next case studies"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Vertical Deep Blue Cards matching reference media_1789744082297.webp */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {displayList.map((item) => (
            <div
              key={item.id}
              className="group rounded-[24px] bg-[#07131e] p-8 lg:p-9 text-white flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/5"
            >
              <div>
                {/* Top Logo & Entity Name */}
                <div className="flex flex-col items-center text-center pb-6 border-b border-white/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold tracking-wider text-[15px] text-white uppercase">
                    {item.client}
                  </h3>
                  <span className="font-mono text-[10.5px] tracking-widest text-white/50 uppercase mt-1">
                    {item.clientType}
                  </span>
                </div>

                {/* Challenge Section */}
                <div className="mt-7">
                  <span className="text-[14px] font-semibold text-white block">
                    Challenge
                  </span>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/70">
                    {item.challenge}
                  </p>
                </div>

                {/* Impact Section */}
                <div className="mt-6">
                  <span className="text-[14px] font-semibold text-white block">
                    Impact
                  </span>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/70">
                    {item.impact}
                  </p>
                </div>
              </div>

              {/* Bottom pill button matching reference */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <Link
                  href="/services"
                  className="block w-full text-center rounded-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 text-[13.5px] font-medium transition-all duration-200 group-hover:bg-white group-hover:text-[#07131e]"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
