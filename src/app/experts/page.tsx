import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { InteriorHero, SectionHeader, SplitCards, DarkCard, CtaBand } from "@/components/templates";
import { contactInfo } from "@/data/siteData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Join Our Expert Network | Careers & Roster | FSM Consulting Limited",
  description:
    "Join FSM Consulting Limited's multidisciplinary roster of development economists, project engineers, MEAL specialists, and safeguard practitioners across Africa.",
};

const expertDisciplines = [
  {
    tag: "Verification & Quality",
    title: "Independent Verification & TPM Specialists",
    desc: "Practitioners experienced in milestone verification, technical inspections, results-based lending (PforR / DLI), and third-party monitoring.",
  },
  {
    tag: "Safeguards & Inclusion",
    title: "Environmental & Social Safeguards Experts",
    desc: "Specialists in World Bank Environmental and Social Framework (ESF), ESIA, ESMP, Resettlement Action Plans (RAP), and PSEA protocols.",
  },
  {
    tag: "Evaluation & Evidence",
    title: "MEAL & Impact Evaluation Leads",
    desc: "Quantitative and qualitative evaluators, survey statisticians, outcome harvesting leads, and mobile data collection architects.",
  },
  {
    tag: "Delivery & PMO",
    title: "Implementation Acceleration & D-Ready Leads",
    desc: "Project directors, delivery unit leads, turnaround specialists, and procurement practitioners with hands-on sovereign experience.",
  },
];

const vettingSteps = [
  {
    num: "01",
    title: "Credential & Experience Verification",
    desc: "Comprehensive review of degrees, professional licenses, language fluencies, and at least 8+ years of proven project delivery experience.",
  },
  {
    num: "02",
    title: "Reference & Deliverable Audit",
    desc: "Confidential checks with past team leads and review of sample redacted reports to confirm analytical rigor and delivery timeliness.",
  },
  {
    num: "03",
    title: "Integrity & Conflict Screening",
    desc: "Formal independence checks, adherence to our Anti-Corruption and PSEA codes of conduct, and inclusion in our active deployment roster.",
  },
];

export default function ExpertsPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. Interior Hero */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Join Our Experts" },
        ]}
        title="Join Africa's Multidisciplinary Expert Network"
        subtitle="We collaborate with senior development practitioners, sector specialists, and field researchers on high-impact sovereign and multilateral assignments."
        ctaText="Submit Your Profile"
        ctaHref="#expert-form"
      />

      <main>
        {/* Fraud Notice Alert Banner */}
        <div className="bg-[#FBEFE4] border-b border-[#9A4B12]/20 px-6 py-4">
          <div className="mx-auto max-w-7xl flex items-center justify-between gap-4 flex-wrap text-[13.5px] text-[#9A4B12]">
            <div className="flex items-center gap-2.5">
              <ShieldAlert className="h-5 w-5 shrink-0" />
              <span>
                <strong>Important Notice:</strong> FSM Consulting Limited never requests application fees, security deposits, or banking details during recruitment.
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

        {/* 2. Key Disciplines Sought */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SplitCards
              eyebrow="Talent Requirements"
              title="Disciplines We Regularly Deploy"
              subtitle="We actively recruit international, regional, and national specialists across our core practice areas:"
              cards={expertDisciplines}
            />
          </div>
        </section>

        {/* 3. Vetting Process */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Roster Governance"
              title="Our Expert Vetting Standard"
              subtitle="How we evaluate and admit independent specialists into our active deployment network:"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10">
              {vettingSteps.map((step) => (
                <div
                  key={step.num}
                  className="rounded-[22px] bg-white p-8 border border-gray-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="font-serif text-[32px] font-bold text-[#2F5FA8]">
                      {step.num}
                    </span>
                    <h3 className="mt-3 text-[18px] font-bold text-[#07131e] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-[#5A6876]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Expert Registration Form */}
        <section id="expert-form" className="px-6 md:px-12 py-16 md:py-24 bg-white border-b border-gray-100 scroll-mt-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Expert Intake
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-bold text-[#07131e] tracking-tight leading-tight">
                  Register on our expert roster
                </h2>
                <p className="mt-4 text-[15.5px] leading-relaxed text-[#5A6876]">
                  When you join the FSM expert bench, your profile is matched against upcoming expressions of interest, competitive bids, and immediate field advisory opportunities.
                </p>

                <div className="mt-8 rounded-[20px] bg-[#F4F5F7] p-6 sm:p-8 border border-gray-200/70">
                  <h4 className="text-[16px] font-bold text-[#07131e]">Data Protection Promise</h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#5A6876]">
                    Your CV and personal information are treated with strict confidentiality under the Nigeria Data Protection Act (NDPA). We never submit your CV to any client or proposal without your prior written consent.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <DarkCard
                  badge="Roster Intake"
                  title="Submit Expert Profile"
                  subtitle="Provide your professional details to initiate the vetting process:"
                  className="shadow-xl"
                >
                  <form className="mt-5 space-y-4" action={`mailto:${contactInfo.email}`} method="GET">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-mono uppercase text-gray-300 mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Dr. / Mr. / Ms. Name"
                          className="w-full rounded-[12px] bg-white/10 border border-white/15 px-4 py-2.5 text-[14px] text-white placeholder-gray-400 focus:outline-none focus:border-[#2F5FA8]"
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-mono uppercase text-gray-300 mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="expert@domain.com"
                          className="w-full rounded-[12px] bg-white/10 border border-white/15 px-4 py-2.5 text-[14px] text-white placeholder-gray-400 focus:outline-none focus:border-[#2F5FA8]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-mono uppercase text-gray-300 mb-1">Primary Discipline</label>
                        <select className="w-full rounded-[12px] bg-[#0c1f30] border border-white/15 px-4 py-2.5 text-[14px] text-white focus:outline-none focus:border-[#2F5FA8]">
                          <option>Project Assurance &amp; IVA</option>
                          <option>Environmental &amp; Social Safeguards</option>
                          <option>MEAL &amp; Evaluation</option>
                          <option>Implementation / PMO / D-Ready</option>
                          <option>Governance &amp; PFM</option>
                          <option>Digital &amp; MIS</option>
                          <option>Agriculture &amp; Food Systems</option>
                          <option>Infrastructure &amp; Energy</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[12px] font-mono uppercase text-gray-300 mb-1">Years of Experience</label>
                        <select className="w-full rounded-[12px] bg-[#0c1f30] border border-white/15 px-4 py-2.5 text-[14px] text-white focus:outline-none focus:border-[#2F5FA8]">
                          <option>5 - 9 years</option>
                          <option>10 - 14 years</option>
                          <option>15+ years (Senior Advisor)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-mono uppercase text-gray-300 mb-1">LinkedIn Profile or CV Link</label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/..."
                        className="w-full rounded-[12px] bg-white/10 border border-white/15 px-4 py-2.5 text-[14px] text-white placeholder-gray-400 focus:outline-none focus:border-[#2F5FA8]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#2F5FA8] hover:bg-[#264E8C] text-white font-semibold py-3 px-6 text-[14px] transition-colors shadow-md cursor-pointer"
                    >
                      Submit Profile for Review &rarr;
                    </button>
                    <p className="text-[11.5px] text-gray-400 text-center">
                      Or email your CV directly to <a href="mailto:info@fsmconsulting.com" className="text-[#9BC2F5] underline">info@fsmconsulting.com</a>
                    </p>
                  </form>
                </DarkCard>
              </div>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
