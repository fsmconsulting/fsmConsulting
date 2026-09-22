import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Target, Award, Lightbulb, Users, TrendingUp, CheckCircle2 } from "lucide-react";
import { InteriorHero, SectionHeader, DarkCard, CtaBand } from "@/components/templates";
import {
  vision,
  mission,
  coreValues,
  positioningList,
  whatWeHelpOrganisationsDo,
  fiveResultsQuestions,
} from "@/data/companyData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Africa's Development Delivery Partner | FSM Consulting Limited",
  description:
    "FSM Consulting Limited is a multidisciplinary development delivery, implementation acceleration, and project assurance firm bridging the gap between strategy and execution across Africa.",
};

const valueIcons: Record<string, typeof ShieldCheck> = {
  Integrity: ShieldCheck,
  Excellence: Award,
  Innovation: Lightbulb,
  Accountability: Target,
  Collaboration: Users,
  Impact: TrendingUp,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. InteriorHero */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        title="Africa's Development Delivery Partner"
        subtitle="FSM Consulting Limited is a multidisciplinary development delivery, implementation acceleration, and project assurance firm dedicated to helping governments, development partners, international financial institutions, and private sector organizations transform investments into measurable results and sustainable impact."
        ctaText="Explore Our Mandate"
        ctaHref="#mandate"
      />

      <main>
        {/* 2. Executive Summary */}
        <section id="mandate" className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100 scroll-mt-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Executive Summary
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-bold text-[#07131e] tracking-tight leading-tight">
                  Bridging the gap between strategy and execution
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-5 text-[16px] leading-relaxed text-[#5A6876]">
                <p>
                  FSM Consulting Limited is a multidisciplinary development delivery, implementation acceleration, and project assurance firm dedicated to helping governments, development partners, international financial institutions, and private sector organizations transform investments into measurable results and sustainable impact. We specialize in bridging the gap between strategy and execution by supporting clients to move faster from project concepts to development outcomes through implementation acceleration, project readiness (D-Ready) support, institutional strengthening, monitoring and evaluation, independent verification, and results-based delivery services.
                </p>
                <p>
                  Our network brings together highly experienced professionals from international development organizations, government institutions, multilateral agencies, academia, donor-funded programs, and the private sector. By combining evidence-based advisory services with hands-on implementation support, project assurance, and innovative digital solutions, FSM Consulting Limited helps deliver projects faster, achieve stronger results, strengthen accountability, and create lasting impact for communities and economies across Africa.
                </p>
                <div className="mt-6 rounded-[18px] bg-[#F4F5F7] p-6 border border-gray-200/80">
                  <h3 className="font-mono text-[11.5px] font-semibold uppercase tracking-wider text-[#07131e]">
                    Financing Environments Supported
                  </h3>
                  <p className="mt-2 text-[14.5px] text-[#5A6876]">
                    FSM Consulting Limited specializes in supporting projects financed across major development-finance environments, including multilateral development banks, bilateral donor institutions, sovereign special funds, and public-private partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What We Help Organisations Do */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Operational Capabilities
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[34px] font-bold text-[#07131e] tracking-tight leading-tight">
                  What we help organisations do
                </h2>
                <p className="mt-4 text-[15.5px] leading-relaxed text-[#5A6876]">
                  Our multidisciplinary delivery platform assists institutions across the entire project lifecycle, ensuring every phase creates measurable accountability and lasting institutional value.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whatWeHelpOrganisationsDo.map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-[16px] bg-white p-5 border border-gray-200/80 shadow-xs"
                  >
                    <span className="font-mono text-[13px] font-bold text-[#2F5FA8]">
                      0{idx + 1}
                    </span>
                    <span className="text-[15px] font-semibold text-[#07131e]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Vision, Mission & Core Values */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Institutional Foundation"
              title="Vision, Mission & Guiding Principles"
              subtitle="The strategic direction and ethical anchors governing our advisory mandates and field verification across Africa."
            />

            {/* Vision & Mission Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <DarkCard
                badge="Our Vision"
                icon={Target}
                title="Pan-African Leadership"
                subtitle="The long-term institutional horizon guiding our growth:"
              >
                <p className="mt-4 text-[16px] leading-relaxed text-gray-200">
                  {vision}
                </p>
              </DarkCard>

              <div className="rounded-[24px] bg-[#F4F5F7] p-8 md:p-10 border border-gray-200/80 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#2F5FA8]">
                    Our Mission
                  </span>
                  <h3 className="mt-2 text-[22px] font-bold text-[#07131e] tracking-tight">
                    Evidence-Based Results
                  </h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-[#5A6876]">
                    {mission}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200 text-xs font-mono uppercase tracking-wider text-[#2F5FA8]">
                  Operational Mandate · Measurable Impact
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="mt-16">
              <h3 className="text-[20px] font-bold text-[#07131e] tracking-tight mb-6">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {coreValues.map((val) => {
                  const IconComp = valueIcons[val.title] || ShieldCheck;
                  return (
                    <div
                      key={val.title}
                      className="rounded-[20px] bg-white p-7 border border-gray-200/80 shadow-xs hover:border-[#2F5FA8]/50 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5FA8]/10 text-[#2F5FA8]">
                          <IconComp className="h-5 w-5" />
                        </span>
                        <span className="font-mono text-[11.5px] font-semibold text-gray-500">
                          {val.num}
                        </span>
                      </div>
                      <h4 className="mt-4 text-[18px] font-bold text-[#07131e]">
                        {val.title}
                      </h4>
                      <p className="mt-2 text-[14px] leading-relaxed text-[#5A6876]">
                        {val.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Positioning: Development Effectiveness Specialists */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Strategic Positioning
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[34px] font-bold text-[#07131e] tracking-tight leading-tight">
                  Development effectiveness specialists
                </h2>
                <p className="mt-4 text-[15.5px] leading-relaxed text-[#5A6876]">
                  Unlike traditional consulting firms that focus solely on compliance or reporting, FSM Consulting Limited focuses on ensuring that development investments generate tangible results and lasting impact.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-[24px] bg-white p-8 md:p-10 border border-gray-200/80 shadow-xs">
                  <h3 className="text-[18px] font-bold text-[#07131e] tracking-tight mb-4">
                    To help clients achieve their development objectives efficiently and effectively, we combine:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {positioningList.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-[12px] bg-[#F4F5F7] px-4 py-3 text-[14px] font-medium text-[#07131e]"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#2F5FA8] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Results, Not Just Deliverables */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Delivery Philosophy
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[34px] font-bold text-[#07131e] tracking-tight leading-tight">
                  We focus on results, not just deliverables
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-[#5A6876]">
                  Many consulting firms measure success by the completion of activities, submission of reports, or achievement of contractual milestones. FSM Consulting Limited measures success differently.
                </p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-[#5A6876]">
                  Our focus extends beyond outputs to outcomes and impact. We work with our clients to ensure that development investments translate into meaningful improvements in economic opportunities, public services, institutional performance, community resilience, and overall well-being.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-[24px] bg-[#07131e] p-8 md:p-10 text-white shadow-xl">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#9BC2F5] font-semibold">
                    The Five Evaluative Questions We Ask
                  </span>
                  <ul className="mt-6 space-y-4 text-[14.5px] text-gray-200">
                    {fiveResultsQuestions.map((q, idx) => (
                      <li key={q} className="flex items-start gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                        <span className="font-mono text-[12px] font-bold text-[#9BC2F5] mt-0.5">
                          0{idx + 1}
                        </span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Leadership Teaser */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Executive Direction
                </span>
                <h2 className="mt-3 text-[28px] sm:text-[32px] font-bold text-[#07131e] tracking-tight">
                  Guided by development practitioners and sector specialists
                </h2>
                <p className="mt-3 text-[15.5px] leading-relaxed text-[#5A6876]">
                  FSM Consulting is led by Fatima Sadiq Mohammed, a development and governance professional with extensive experience across social protection, development policy, institutional strengthening, and World Bank-supported programmes.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/about/leadership"
                  className="pill-btn group inline-flex items-center gap-2 bg-[#07131e] px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-md hover:bg-[#2F5FA8] transition-all"
                >
                  <span>Meet Our Leadership</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Closing Action Band */}
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
