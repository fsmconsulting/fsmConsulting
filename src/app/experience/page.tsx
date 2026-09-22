import type { Metadata } from "next";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { InteriorHero, SplitCards, DarkCard, CtaBand } from "@/components/templates";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Experience & Track Record | FSM Consulting Limited",
  description:
    "Explore the verified track record of FSM Consulting Limited's team and leadership across sovereign development programs, independent verification, and institutional reform.",
};

const leadershipExperience = [
  {
    tag: "Social Protection & Cash Transfers",
    title: "Sovereign Social Safety Net Verification",
    desc: "Leadership of independent verification protocols validating identity, payment disbursements, and grievance resolution mechanisms across national social safety nets.",
  },
  {
    tag: "Public Financial Management",
    title: "Sub-National Fiscal Transparency & Diagnostics",
    desc: "Advising state governments and line ministries on PEFA diagnostics, budget credibility tracking, and disbursement-linked indicator (DLI) achievement.",
  },
  {
    tag: "Agribusiness & Land Governance",
    title: "FRILIA Frameworks & Value Chain Studies",
    desc: "Deployment of Framework for Responsible Inclusive Land-Intensive Agriculture (FRILIA) instruments and inclusive farmer-outgrower contracting.",
  },
  {
    tag: "Digital Monitoring Platforms",
    title: "Real-Time Field Data & MEAL Architectures",
    desc: "Design and rollout of nationwide mobile data collection pipelines, geo-tagged asset tracking, and executive analytics dashboards.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. Interior Hero */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Experience" },
        ]}
        title="Our Team's Experience & Track Record"
        subtitle="Verifiable delivery capability grounded in decades of collective leadership across complex development investments, sovereign reforms, and independent assurance."
        ctaText="Commission an Assignment"
        ctaHref="/contact"
      />

      <main>
        {/* 2. Institutional Attribution & Honesty Statement */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Verified Capability
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[34px] font-bold text-[#07131e] tracking-tight leading-tight">
                  Grounded in hands-on program delivery
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-[#5A6876]">
                  As an institution, FSM Consulting maintains a strict policy of factual integrity. We do not claim past client engagements without written client permission, nor do we present target funding environments as direct corporate clients.
                </p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-[#5A6876]">
                  Our operational depth is established through our leadership and key experts, who have personally designed, supervised, and evaluated major multilateral and sovereign operations across Africa.
                </p>
              </div>

              <div className="lg:col-span-5">
                <DarkCard
                  badge="Due Diligence Standard"
                  icon={ShieldCheck}
                  title="Evidence-Based Credibility"
                  subtitle="How we substantiate technical competence during procurement evaluations:"
                >
                  <ul className="mt-4 space-y-3 text-[13.5px] text-gray-200">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#9BC2F5] shrink-0 mt-0.5" />
                      <span>Individual expert CVs with full project references and client validation contacts.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#9BC2F5] shrink-0 mt-0.5" />
                      <span>Certified corporate statutory documentation (CAC, Tax Clearance, PENCOM, ITF).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#9BC2F5] shrink-0 mt-0.5" />
                      <span>Documented methodology and quality assurance framework (FSM Impact 360™).</span>
                    </li>
                  </ul>
                </DarkCard>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Programmatic Focus Areas */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SplitCards
              eyebrow="Key Program Areas"
              title="Where our team has delivered results"
              subtitle="Illustrative delivery domains where our directors and specialists have led diagnostics, field verification, and institutional reforms:"
              cards={leadershipExperience}
            />
          </div>
        </section>

        {/* 4. Case Studies in Preparation Notice */}
        <section className="px-6 md:px-12 py-16 md:py-20 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-4xl text-center">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
              Portfolio Documentation
            </span>
            <h3 className="mt-3 text-[26px] sm:text-[30px] font-bold text-[#07131e] tracking-tight">
              Case study dossiers and deliverable extracts
            </h3>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[#5A6876]">
              Detailed assignment profiles, third-party monitoring methodologies, and sample verification frameworks are compiled in our corporate due-diligence package.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/procurement"
                className="inline-flex items-center gap-2 rounded-full bg-[#07131e] text-white hover:bg-[#2F5FA8] px-7 py-3 text-[14.5px] font-semibold transition-all duration-200"
              >
                <span>Access Procurement Pack</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#F4F5F7] text-[#07131e] hover:bg-gray-200 px-7 py-3 text-[14.5px] font-semibold transition-all duration-200 border border-gray-200"
              >
                <span>Request a Technical Briefing</span>
              </a>
            </div>
          </div>
        </section>

        {/* 5. CTA Band */}
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}

