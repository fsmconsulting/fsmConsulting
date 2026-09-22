import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InteriorHero, SplitCards, CtaBand } from "@/components/templates";
import { pillars, getServicesByPillar } from "@/data/servicesData";
import { impact360Stages } from "@/data/impact360Data";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Integrated Services | 14 Practice Areas | FSM Consulting Limited",
  description:
    "Integrated services for development-financed projects. Fourteen practice areas organised around three things clients need most: independent evidence, the right experts in the field, and delivery that moves.",
};

export default function ServicesPage() {
  const verifyServices = getServicesByPillar("verify");
  const mobiliseServices = getServicesByPillar("mobilise");
  const deliverServices = getServicesByPillar("deliver");

  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. Interior Hero */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        title="Integrated services for development-financed projects"
        subtitle="Fourteen practice areas organised around three things clients need most: independent evidence, the right experts in the field, and delivery that moves."
        ctaText="Discuss an Assignment"
        ctaHref="/contact"
      />

      {/* Sticky In-Page Pillar Jump Nav */}
      <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-6 md:px-12 py-4 shadow-xs">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-gray-500">
            Practice Pillars:
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href="#verify"
              className="rounded-full bg-[#F4F5F7] hover:bg-[#2F5FA8] hover:text-white px-4 py-1.5 text-[13px] font-semibold text-[#07131e] transition-colors"
            >
              1. Verify (Assurance)
            </a>
            <a
              href="#mobilise"
              className="rounded-full bg-[#F4F5F7] hover:bg-[#2F5FA8] hover:text-white px-4 py-1.5 text-[13px] font-semibold text-[#07131e] transition-colors"
            >
              2. Mobilise (Expertise)
            </a>
            <a
              href="#deliver"
              className="rounded-full bg-[#F4F5F7] hover:bg-[#2F5FA8] hover:text-white px-4 py-1.5 text-[13px] font-semibold text-[#07131e] transition-colors"
            >
              3. Deliver (Execution)
            </a>
            <a
              href="#how-we-work"
              className="rounded-full bg-white hover:bg-[#07131e] hover:text-white px-4 py-1.5 text-[13px] font-semibold text-[#07131e] border border-gray-200 transition-colors"
            >
              How We Work &rarr;
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* PILLAR 1: VERIFY */}
        <section id="verify" className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100 scroll-mt-20">
          <div className="mx-auto max-w-7xl">
            <SplitCards
              eyebrow="Pillar 01 · Independent Assurance"
              title={pillars.verify.title}
              subtitle={pillars.verify.description}
              cards={verifyServices.map((s) => ({
                title: s.title,
                desc: s.summary,
                href: `/services/${s.slug}`,
                linkText: "Learn more →",
              }))}
            />
          </div>
        </section>

        {/* PILLAR 2: MOBILISE */}
        <section id="mobilise" className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70 scroll-mt-20">
          <div className="mx-auto max-w-7xl">
            <SplitCards
              eyebrow="Pillar 02 · Expert Deployment & Logistics"
              title={pillars.mobilise.title}
              subtitle={pillars.mobilise.description}
              cards={mobiliseServices.map((s) => ({
                title: s.title,
                desc: s.summary,
                href: `/services/${s.slug}`,
                linkText: "Learn more →",
              }))}
            />
          </div>
        </section>

        {/* PILLAR 3: DELIVER */}
        <section id="deliver" className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100 scroll-mt-20">
          <div className="mx-auto max-w-7xl">
            <SplitCards
              eyebrow="Pillar 03 · Execution & Evidence"
              title={pillars.deliver.title}
              subtitle={pillars.deliver.description}
              cards={deliverServices.map((s) => ({
                title: s.title,
                desc: s.summary,
                href: `/services/${s.slug}`,
                linkText: "Learn more →",
              }))}
            />
          </div>
        </section>

        {/* HOW WE WORK: FSM Impact 360™ Sequence */}
        <section id="how-we-work" className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70 scroll-mt-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Operational Framework
                </span>
                <h2 className="mt-2 text-[30px] sm:text-[34px] md:text-[38px] font-bold text-[#07131e] tracking-tight">
                  How We Work: FSM Impact 360™
                </h2>
                <p className="mt-3 text-[16px] text-[#5A6876] max-w-2xl">
                  A disciplined six-stage delivery model that ensures every assignment moves from priority definition to verified, lasting outcomes.
                </p>
              </div>
              <Link
                href="/approach"
                className="inline-flex items-center gap-2 font-semibold text-[#2F5FA8] hover:underline text-[14.5px] shrink-0"
              >
                <span>Read detailed methodology</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Compact Horizontal Sequence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {impact360Stages.map((st, idx) => (
                <div
                  key={st.letter}
                  className="rounded-[18px] bg-white p-6 border border-gray-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07131e] text-white font-mono text-[14px] font-bold">
                        {st.letter}
                      </span>
                      <span className="font-mono text-[11px] font-semibold text-gray-500">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[15px] font-bold text-[#07131e] tracking-tight leading-snug">
                      {st.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-[#5A6876]">
                      {st.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Action Band */}
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
