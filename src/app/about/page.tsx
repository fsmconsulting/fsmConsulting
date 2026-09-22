import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Compass, Target, Shield, Award, Users, TrendingUp } from "lucide-react";
import { InteriorHero, SectionHeader, ValueColumns, PersonCard, CtaBand } from "@/components/templates";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Africa's Development Delivery Partner | FSM Consulting Limited",
  description:
    "FSM Consulting Limited is a multidisciplinary development delivery, implementation acceleration, and project assurance firm dedicated to helping transform investments into measurable results and sustainable impact.",
};

const whatWeHelpOrganisationsDo = [
  {
    title: "Design better programmes",
    body: "Evidence-based programme structuring, theory of change formulation, and results frameworks aligned with institutional goals.",
  },
  {
    title: "Deliver projects effectively",
    body: "Hands-on execution support, PMO establishment, bottleneck unblocking, and disciplined implementation cadences.",
  },
  {
    title: "Measure results accurately",
    body: "Empirical baselines, continuous field monitoring, and rigorous evaluations that capture ground-level reality.",
  },
  {
    title: "Strengthen institutions",
    body: "Diagnostics, organizational development, standard operating procedures, and long-term capacity building.",
  },
  {
    title: "Manage risks proactively",
    body: "Early risk identification, fiduciary oversight, and environmental and social safeguard compliance systems.",
  },
  {
    title: "Improve governance systems",
    body: "Public financial management, transparency mechanisms, regulatory streamlining, and institutional accountability.",
  },
  {
    title: "Enhance service delivery",
    body: "Optimizing public-facing operations to ensure interventions reach target beneficiaries efficiently.",
  },
  {
    title: "Demonstrate development impact",
    body: "Validating sustainable outcomes, return on investment, and tangible improvements in community well-being.",
  },
];

const coreValues = [
  {
    title: "Integrity",
    desc: "We uphold the highest standards of ethics, transparency, and professionalism.",
    icon: Shield,
  },
  {
    title: "Excellence",
    desc: "We deliver quality services that consistently exceed expectations.",
    icon: Award,
  },
  {
    title: "Innovation",
    desc: "We apply creative thinking and technology-driven solutions to complex development challenges.",
    icon: Compass,
  },
  {
    title: "Accountability",
    desc: "We promote responsible stewardship of public and development resources.",
    icon: Target,
  },
  {
    title: "Collaboration",
    desc: "We leverage multidisciplinary expertise and strategic partnerships.",
    icon: Users,
  },
  {
    title: "Impact",
    desc: "We focus on generating measurable and sustainable results.",
    icon: TrendingUp,
  },
];

const combinedCapabilities = [
  "Strategic Advisory",
  "Technical Assistance",
  "Independent Verification",
  "Monitoring and Evaluation",
  "Institutional Strengthening",
  "Project Assurance",
  "Capacity Development",
];

const fiveQuestions = [
  "Did the intervention improve lives?",
  "Did beneficiaries receive the intended benefits?",
  "Did institutions become stronger and more effective?",
  "Were resources utilized efficiently and transparently?",
  "Are the results sustainable beyond project completion?",
];

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
            <SectionHeader
              eyebrow="Core Competence"
              title="What We Help Organisations Do"
              subtitle="Our work is guided by international best practices, evidence-based methodologies, and a commitment to delivering practical solutions that create lasting value."
            />
            <div className="mt-12">
              <ValueColumns items={whatWeHelpOrganisationsDo} />
            </div>
          </div>
        </section>

        {/* 4. Vision / Mission / Core Values */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="rounded-[24px] bg-[#F4F5F7] p-8 sm:p-10 border border-gray-200/80">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#2F5FA8]">
                  Our Vision
                </span>
                <h3 className="mt-3 text-[24px] font-bold text-[#07131e] tracking-tight">
                  To become Africa&rsquo;s leading Development Effectiveness and Project Assurance firm, recognized for advancing accountability, innovation, and sustainable development outcomes.
                </h3>
              </div>

              <div className="rounded-[24px] bg-[#07131e] text-white p-8 sm:p-10 border border-navy/20">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#9BC2F5]">
                  Our Mission
                </span>
                <h3 className="mt-3 text-[24px] font-bold text-white tracking-tight">
                  To support governments, development partners, and organizations in achieving measurable development results through evidence-based advisory services, project assurance, institutional strengthening, and strategic technical support.
                </h3>
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Institutional Ethics"
                title="Our Core Values"
                subtitle="Six principles that define our conduct, culture, and professional engagements:"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {coreValues.map((val) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={val.title}
                      className="rounded-[20px] bg-white p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#2F5FA8]/10 text-[#2F5FA8] mb-4">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="text-[18px] font-bold text-[#07131e] tracking-tight">
                          {val.title}
                        </h4>
                        <p className="mt-2 text-[14px] leading-relaxed text-[#5A6876]">
                          {val.desc}
                        </p>
                      </div>
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Our Positioning
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-bold text-[#07131e] tracking-tight leading-tight">
                  Development Effectiveness Specialists
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-[#5A6876]">
                  Unlike traditional consulting firms that focus solely on compliance or reporting, FSM Consulting Limited focuses on ensuring that development investments generate tangible results and lasting impact. To help clients achieve their development objectives efficiently and effectively, we combine an integrated set of seven core capabilities:
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-[24px] bg-white p-8 sm:p-10 border border-gray-200/80 shadow-xs">
                  <h3 className="text-[16px] font-bold text-[#07131e] tracking-tight mb-4">
                    Seven Integrated Capabilities:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {combinedCapabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2.5 text-[14.5px] font-medium text-gray-800">
                        <CheckCircle2 className="h-4 w-4 text-[#2F5FA8] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Results, Not Just Deliverables */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100 bg-[#07131e] text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9BC2F5]">
                  Impact Philosophy
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-bold text-white tracking-tight leading-tight">
                  We Focus on Results, Not Just Deliverables
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-gray-300">
                  Many consulting firms measure success by the completion of activities, submission of reports, or achievement of contractual milestones. FSM Consulting Limited measures success differently.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-300">
                  Our focus extends beyond outputs to outcomes and impact. We work with our clients to ensure that development investments translate into meaningful improvements in economic opportunities, public services, institutional performance, community resilience, and overall well-being.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-[24px] bg-white/5 p-8 border border-white/10 backdrop-blur-xs">
                  <span className="font-mono text-[11.5px] uppercase tracking-wider text-[#9BC2F5] font-semibold">
                    The 5 Questions We Ask:
                  </span>
                  <ul className="mt-5 space-y-4">
                    {fiveQuestions.map((q, idx) => (
                      <li key={q} className="flex items-start gap-3 text-[15px] text-white">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2F5FA8] text-white text-[12px] font-bold">
                          {idx + 1}
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
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Executive Leadership
                </span>
                <h2 className="mt-2 text-[30px] sm:text-[34px] font-bold text-[#07131e] tracking-tight">
                  Guided by Experienced Development Leadership
                </h2>
              </div>
              <Link
                href="/about/leadership"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#2F5FA8] hover:text-[#264E8C] transition-colors"
              >
                <span>View Full Leadership &amp; Board</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <PersonCard
              name="Fatima Sadiq Mohammed"
              role="Chief Executive and Managing Director"
              bio="A development and governance professional with experience spanning social protection, development policy, institutional strengthening, disaster risk management, monitoring and evaluation, and World Bank-supported programmes. As Founder and Principal Shareholder, she provides the strategic leadership that brings together multidisciplinary expertise, partnerships and delivery capability."
              photoSrc="/Founder.PNG"
              photoAlt="Fatima Sadiq Mohammed"
              href="/about/leadership"
              linkText="Read full leadership profile"
              className="shadow-sm"
            />
          </div>
        </section>

        {/* 8. CTA Band */}
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
