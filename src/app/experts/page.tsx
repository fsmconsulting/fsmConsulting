import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { InteriorHero, SectionHeader, DarkCard, CtaBand } from "@/components/templates";
import ExpertRegistrationForm from "@/components/forms/ExpertRegistrationForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Join the FSM Expert Network | FSM Consulting Limited",
  description:
    "Join FSM Consulting Limited's multidisciplinary roster of development economists, project engineers, MEAL specialists, and safeguard practitioners across Africa.",
};

const expertDisciplines = [
  "Development Planning and Policy",
  "Project Management and Implementation Support",
  "Monitoring, Evaluation, Accountability and Learning (MEAL)",
  "Governance and Public Sector Reform",
  "Environmental and Social Safeguards",
  "Land Administration and Governance",
  "Agriculture and Rural Development",
  "Health Systems Strengthening",
  "Education and Skills Development",
  "Infrastructure and Urban Development",
  "Climate Change and Sustainability",
  "Gender Equality and Social Inclusion",
  "Financial Management and Procurement",
  "Digital Transformation and Data Analytics",
];

const networkSteps = [
  {
    num: "01",
    title: "Register Profile",
    desc: "Submit your contact information, core discipline, experience, and curriculum vitae.",
  },
  {
    num: "02",
    title: "Profile Review",
    desc: "Qualifications, sector depth, and prior project references are reviewed against technical criteria.",
  },
  {
    num: "03",
    title: "Matched to Assignments",
    desc: "Contacted directly when funded assignments, proposals, or verification missions match your profile.",
  },
  {
    num: "04",
    title: "Mobilised with FSM Support",
    desc: "Deployed under structured contracts with coordinated field logistics, protocol, and duty-of-care support.",
  },
];

export default function ExpertsPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. InteriorHero */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Experts" },
        ]}
        title="Join the FSM expert network"
        subtitle="We engage national, regional, and international development professionals across specialized technical disciplines for short- and long-term assignments."
        ctaText="Submit Your Profile"
        ctaHref="#register-form"
      />

      <main>
        {/* Recruitment Fraud Callout */}
        <div className="bg-[#FBEFE4] border-b border-[#9A4B12]/20 px-6 py-4">
          <div className="mx-auto max-w-7xl flex items-center justify-between gap-4 flex-wrap text-[13.5px] text-[#9A4B12]">
            <div className="flex items-center gap-2.5">
              <ShieldAlert className="h-5 w-5 shrink-0" />
              <span>
                <strong>Notice:</strong> FSM never charges fees to join its network or for job offers.
              </span>
            </div>
            <Link
              href="/recruitment-fraud-notice"
              className="font-semibold underline hover:text-[#07131e] transition-colors shrink-0"
            >
              Read Recruitment Fraud Notice &rarr;
            </Link>
          </div>
        </div>

        {/* 2. Disciplines we engage */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Roster Scope"
              title="Disciplines We Engage"
              subtitle="Our multidisciplinary technical network actively recruits specialists across 14 primary development fields:"
            />

            <div className="flex flex-wrap gap-3 mt-10">
              {expertDisciplines.map((d) => (
                <span
                  key={d}
                  className="rounded-full bg-[#F4F5F7] px-5 py-2.5 text-[14px] font-medium text-[#07131e] border border-gray-200/80 shadow-xs"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 3. How the network works */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Onboarding Protocol"
              title="How the Network Works"
              subtitle="A transparent, merit-based process for matching qualified professionals to funded development opportunities:"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {networkSteps.map((st) => (
                <div
                  key={st.num}
                  className="rounded-[20px] bg-white p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[12px] font-bold text-[#2F5FA8]">
                      Step {st.num}
                    </span>
                    <h3 className="mt-2 text-[17px] font-bold text-[#07131e] tracking-tight">
                      {st.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#5A6876]">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Registration form */}
        <section id="register-form" className="px-6 md:px-12 py-16 md:py-24 bg-white border-b border-gray-100 scroll-mt-20">
          <div className="mx-auto max-w-4xl">
            <DarkCard
              badge="Consultant Roster"
              title="Expert Roster Registration"
              subtitle="Submit your details for review and inclusion in our multidisciplinary expert directory:"
            >
              <div className="mt-6">
                <ExpertRegistrationForm />
              </div>
            </DarkCard>
          </div>
        </section>

        {/* Closing Action Band */}
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
