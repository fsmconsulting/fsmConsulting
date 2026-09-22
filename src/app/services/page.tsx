import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, TrendingUp } from "lucide-react";
import { InteriorHero, CtaBand } from "@/components/templates";
import { pillars, getServicesByPillar } from "@/data/servicesData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services Hub | 14 Practice Areas Across 3 Pillars | FSM Consulting Limited",
  description:
    "Explore FSM Consulting Limited's 14 specialized practice areas structured under three core pillars: Verify (Independent Assurance), Mobilise (Expert Deployment & Logistics), and Deliver (Implementation Acceleration).",
};

export default function ServicesPage() {
  const verifyServices = getServicesByPillar("verify");
  const mobiliseServices = getServicesByPillar("mobilise");
  const deliverServices = getServicesByPillar("deliver");

  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. Interior Hero without stat blocks */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        title={
          <>
            14 Integrated Practice Areas<br />
            Structured Across 3 Pillars
          </>
        }
        subtitle="We help governments, development partners, and international firms verify milestones, mobilise technical teams, and accelerate project delivery from approval to lasting impact."
        ctaText="Request a Consultation"
        ctaHref="/contact"
      />

      <main>
        {/* Quick Pillar Jump Navigation */}
        <section className="bg-[#F4F5F7] border-b border-gray-200 px-6 md:px-12 py-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-gray-500">
                Jump to Pillar:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#verify"
                  className="rounded-full bg-white px-5 py-2 text-[13.5px] font-semibold text-[#07131e] shadow-xs hover:bg-[#2F5FA8] hover:text-white transition-all border border-gray-200"
                >
                  1. Verify (Assurance)
                </a>
                <a
                  href="#mobilise"
                  className="rounded-full bg-white px-5 py-2 text-[13.5px] font-semibold text-[#07131e] shadow-xs hover:bg-[#2F5FA8] hover:text-white transition-all border border-gray-200"
                >
                  2. Mobilise (Deployment)
                </a>
                <a
                  href="#deliver"
                  className="rounded-full bg-white px-5 py-2 text-[13.5px] font-semibold text-[#07131e] shadow-xs hover:bg-[#2F5FA8] hover:text-white transition-all border border-gray-200"
                >
                  3. Deliver (Execution)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PILLAR 1: VERIFY */}
        <section id="verify" className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100 scroll-mt-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5FA8]/10 text-[#2F5FA8]">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                Pillar 01 · Independent Assurance
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[36px] font-bold text-[#07131e] tracking-tight">
              {pillars.verify.title}: {pillars.verify.tagline}
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-[#5A6876] max-w-3xl">
              {pillars.verify.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10">
              {verifyServices.map((s) => (
                <div
                  key={s.slug}
                  className="group rounded-[22px] bg-[#F4F5F7] p-8 border border-gray-200/70 hover:border-[#2F5FA8]/50 hover:bg-white transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    <h3 className="text-[20px] font-bold text-[#07131e] group-hover:text-[#2F5FA8] transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] text-[#5A6876] leading-relaxed">
                      {s.summary}
                    </p>
                    <ul className="mt-5 space-y-2 text-[13px] text-gray-700">
                      {s.bulletPoints.slice(0, 3).map((bp) => (
                        <li key={bp} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#2F5FA8] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-gray-200/60">
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#07131e] group-hover:text-[#2F5FA8] transition-colors"
                    >
                      <span>Explore service scope</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PILLAR 2: MOBILISE */}
        <section id="mobilise" className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70 scroll-mt-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5FA8]/10 text-[#2F5FA8]">
                <Users className="h-5 w-5" />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                Pillar 02 · Expert Deployment &amp; Logistics
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[36px] font-bold text-[#07131e] tracking-tight">
              {pillars.mobilise.title}: {pillars.mobilise.tagline}
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-[#5A6876] max-w-3xl">
              {pillars.mobilise.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10">
              {mobiliseServices.map((s) => (
                <div
                  key={s.slug}
                  className="group rounded-[22px] bg-white p-8 border border-gray-200/80 hover:border-[#2F5FA8]/50 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    <h3 className="text-[19px] font-bold text-[#07131e] group-hover:text-[#2F5FA8] transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[14px] text-[#5A6876] leading-relaxed">
                      {s.summary}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-gray-100">
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#07131e] group-hover:text-[#2F5FA8] transition-colors"
                    >
                      <span>Explore service scope</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PILLAR 3: DELIVER */}
        <section id="deliver" className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100 scroll-mt-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5FA8]/10 text-[#2F5FA8]">
                <TrendingUp className="h-5 w-5" />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                Pillar 03 · Execution &amp; Evidence
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[36px] font-bold text-[#07131e] tracking-tight">
              {pillars.deliver.title}: {pillars.deliver.tagline}
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-[#5A6876] max-w-3xl">
              {pillars.deliver.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
              {deliverServices.map((s) => (
                <div
                  key={s.slug}
                  className="group rounded-[22px] bg-[#F4F5F7] p-8 border border-gray-200/70 hover:border-[#2F5FA8]/50 hover:bg-white transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    <h3 className="text-[19px] font-bold text-[#07131e] group-hover:text-[#2F5FA8] transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[14px] text-[#5A6876] leading-relaxed">
                      {s.summary}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-gray-200/60">
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#07131e] group-hover:text-[#2F5FA8] transition-colors"
                    >
                      <span>Explore service scope</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
