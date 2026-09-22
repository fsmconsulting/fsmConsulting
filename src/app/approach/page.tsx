import type { Metadata } from "next";
import { InteriorHero, SectionHeader, SplitCards, CtaBand } from "@/components/templates";
import DeliveryChain from "@/components/delivery-ecosystem/DeliveryChain";
import QualityAssurance from "@/components/about/QualityAssurance";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Delivery Approach & Methodology | Impact 360™ | FSM Consulting Limited",
  description:
    "Explore the FSM Impact 360™ framework, cross-border operational delivery chain, and multi-tier quality assurance protocols ensuring verifiable results.",
};

const impact360Stages = [
  {
    tag: "Stage 01",
    title: "Identify Priorities",
    desc: "Diagnostic assessments, baseline institutional reviews, stakeholder mapping, and pinpointing critical reform blockers.",
  },
  {
    tag: "Stage 02",
    title: "Measure Baselines",
    desc: "Empirical field data collection, results framework indicator design, and establishing verifiable baseline targets.",
  },
  {
    tag: "Stage 03",
    title: "Plan for Delivery",
    desc: "Development-Ready (D-Ready) project screening, implementation roadmaps, procurement plans, and environmental & social safeguards.",
  },
  {
    tag: "Stage 04",
    title: "Accelerate Implementation",
    desc: "Project Management Office (PMO) deployment, unblocking bottlenecks, field logistics coordination, and expert mobilisation.",
  },
  {
    tag: "Stage 05",
    title: "Check Progress",
    desc: "Independent Verification Agent (IVA) validation, third-party monitoring (TPM), fiduciary audits, and agile course corrections.",
  },
  {
    tag: "Stage 06",
    title: "Track Outcomes",
    desc: "Longitudinal socio-economic impact assessment, institutional capacity transfer, and sustainable benefits realization.",
  },
];

export default function ApproachPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. Interior Hero without stat blocks */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Approach & Methodology" },
        ]}
        title={
          <>
            Impact 360&trade; &amp;<br />
            Disciplined Delivery Architecture
          </>
        }
        subtitle="Moving projects from strategy to verified results through disciplined diagnostic readiness, field execution, and independent verification."
        ctaText="View Our Services"
        ctaHref="/services"
      />

      <main>
        {/* 2. Impact 360 Framework */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SplitCards
              eyebrow="Proprietary Delivery Architecture"
              title="The FSM Impact 360™ Framework"
              subtitle="A continuous 6-stage lifecycle ensuring investments maintain strategic alignment, rigorous field execution, and verifiable developmental return."
              cards={impact360Stages}
              columns={3}
            />
          </div>
        </section>

        {/* 3. The 8-Stage Delivery Ecosystem (Absorbed from /delivery-ecosystem) */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Operational System"
              title="End-to-End Operational Delivery Chain"
              subtitle="How FSM moves an assignment from initial terms of reference to field-verified impact. Every link in the chain is actively governed and supervised."
            />
            <div className="mt-8 bg-white rounded-[24px] p-6 sm:p-10 border border-gray-200/80 shadow-xs">
              <DeliveryChain />
            </div>
          </div>
        </section>

        {/* 4. Quality Assurance & Oversight */}
        <div className="border-b border-gray-100">
          <QualityAssurance />
        </div>

        {/* 5. Closing CTA Band */}
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}

