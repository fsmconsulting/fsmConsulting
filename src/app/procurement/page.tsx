import type { Metadata } from "next";
import { ShieldCheck, Mail } from "lucide-react";
import { InteriorHero, SectionHeader, DownloadRow, DarkCard, CtaBand, type DownloadItem } from "@/components/templates";
import { contactInfo } from "@/data/siteData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Procurement & Due Diligence Pack | FSM Consulting Limited",
  description:
    "Official corporate due diligence package for procurement officers, task team leaders, and bid directors. Download verified capability statements, registration details, and compliance policies.",
};

const dueDiligenceDownloads: DownloadItem[] = [
  {
    title: "FSM Consulting Corporate Profile (2026 Edition)",
    description: "Official comprehensive corporate profile detailing 14 practice areas, Impact 360™ framework, leadership bench, and delivery network.",
    fileType: "PDF",
    fileSize: "2.4 MB",
    href: "#",
    category: "Corporate Profile",
  },
  {
    title: "2-Page Executive Capability Statement",
    description: "Compact briefing statement designed for rapid inclusion in consortium bids, donor vendor files, and shortlist assessments.",
    fileType: "PDF",
    fileSize: "480 KB",
    href: "#",
    category: "Capability Statement",
  },
  {
    title: "Anti-Bribery, Corruption & Fiduciary Code",
    description: "Institutional policy document governing interactions with public officials, partners, and zero tolerance for illicit commissions.",
    fileType: "PDF",
    fileSize: "320 KB",
    href: "#",
    category: "Governance & Ethics",
  },
  {
    title: "Protection from Sexual Exploitation & Abuse (PSEA)",
    description: "Operational safeguarding code of conduct mandatory for all deployed consultants, field teams, and survey enumerators.",
    fileType: "PDF",
    fileSize: "290 KB",
    href: "#",
    category: "Safeguarding",
  },
  {
    title: "Data Protection & Privacy Policy (NDPA Aligned)",
    description: "Technical standards governing field survey data collection, beneficiary anonymization, and secure cloud storage.",
    fileType: "PDF",
    fileSize: "310 KB",
    href: "#",
    category: "Information Security",
  },
  {
    title: "Quality Assurance & Independent Verification Protocol",
    description: "Four-tier QA methodology establishing technical review, evidence audit, and partner sign-off procedures.",
    fileType: "PDF",
    fileSize: "450 KB",
    href: "#",
    category: "Quality Assurance",
  },
];

export default function ProcurementPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. Interior Hero */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Procurement Due Diligence" },
        ]}
        title="Procurement & Due Diligence Package"
        subtitle="One-stop due diligence information for procurement officers, task team leaders, and consortium bid directors evaluating FSM Consulting Limited."
        ctaText="Request Specific Filing"
        ctaHref="/contact"
      />

      <main>
        {/* 2. Statutory Legal Identity Card */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Corporate Identity"
              title="Statutory & Registration Record"
              subtitle="Verified corporate information registered with statutory regulatory bodies in Nigeria:"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
              <div className="lg:col-span-8 rounded-[24px] bg-[#F4F5F7] p-8 md:p-10 border border-gray-200/80">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-gray-500">
                      Registered Legal Name
                    </span>
                    <p className="mt-1 text-[17px] font-bold text-[#07131e]">
                      FSM Consulting Limited
                    </p>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-gray-500">
                      Registration Number (CAC)
                    </span>
                    <p className="mt-1 text-[17px] font-bold text-[#07131e] font-mono">
                      RC: 9616494
                    </p>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-gray-500">
                      Corporate Form
                    </span>
                    <p className="mt-1 text-[16px] font-semibold text-gray-800">
                      Private Limited Liability Company
                    </p>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-gray-500">
                      Headquarters
                    </span>
                    <p className="mt-1 text-[16px] font-semibold text-gray-800">
                      Abuja, Federal Capital Territory, Nigeria
                    </p>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-gray-500">
                      Corporate Email
                    </span>
                    <p className="mt-1 text-[16px] font-semibold text-[#2F5FA8]">
                      {contactInfo.email}
                    </p>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-gray-500">
                      Bank Reference Availability
                    </span>
                    <p className="mt-1 text-[16px] font-semibold text-gray-800">
                      Available on request for formal EOI/RFP
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 text-[13.5px] text-[#5A6876] flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#2F5FA8] shrink-0" />
                  <span>
                    Tax Clearance, PENCOM, ITF, and NSITF compliance documents are maintained current and provided directly to evaluation committees.
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4">
                <DarkCard
                  badge="Due Diligence Desk"
                  title="Direct Verification"
                  subtitle="Need confidential verification or specific portal vendor registration numbers?"
                >
                  <div className="mt-4 space-y-3 text-[14px]">
                    <p className="text-gray-300">
                      Our commercial desk provides customized capability packages within 24 hours of notification.
                    </p>
                    <div className="pt-2">
                      <a
                        href={`mailto:${contactInfo.email}?subject=Due%20Diligence%20Inquiry%20-%20Procurement`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-[#07131e] px-5 py-2.5 text-[13.5px] font-semibold hover:bg-gray-100 transition-colors"
                      >
                        <Mail className="h-4 w-4 text-[#2F5FA8]" />
                        <span>Email Procurement Desk</span>
                      </a>
                    </div>
                  </div>
                </DarkCard>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Official Policy & Document Downloads */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Downloadable Governance Pack"
              title="Official Policies & Capability Documents"
              subtitle="Direct downloads of our core institutional statements, governance codes, and operational standards:"
            />

            <div className="space-y-4 mt-8">
              {dueDiligenceDownloads.map((item) => (
                <DownloadRow key={item.title} item={item} />
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

