import type { Metadata } from "next";
import { ShieldCheck, Mail } from "lucide-react";
import { InteriorHero, SectionHeader, DownloadRow, DarkCard, CtaBand, type DownloadItem } from "@/components/templates";
import { contactInfo } from "@/data/siteData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Procurement & Due Diligence Pack | FSM Consulting Limited",
  description:
    "Official corporate due diligence package for procurement officers, task team leaders, and bid directors. Request capability statements, registration details, and institutional policies.",
};

const dueDiligenceDownloads: DownloadItem[] = [
  {
    title: "FSM Consulting Corporate Profile",
    description: "Official comprehensive corporate profile detailing 14 practice areas, delivery network, and executive leadership.",
    fileType: "PDF",
    status: "on-request",
    category: "Corporate Profile",
  },
  {
    title: "Executive Capability Statement",
    description: "Compact briefing statement designed for inclusion in consortium bids, donor vendor files, and shortlist assessments.",
    fileType: "PDF",
    status: "on-request",
    category: "Capability Statement",
  },
  {
    title: "Anti-Corruption Framework & Ethical Conduct Policy",
    description: "Institutional policy document governing interactions with public officials, partners, and zero tolerance for illicit commissions.",
    fileType: "PDF",
    status: "on-request",
    category: "Governance & Ethics",
  },
  {
    title: "Safeguarding Policy",
    description: "Operational safeguarding code of conduct applicable to all deployed consultants, field teams, and survey enumerators.",
    fileType: "PDF",
    status: "on-request",
    category: "Safeguarding",
  },
  {
    title: "Data Protection Policy",
    description: "Standards governing field survey data collection, beneficiary confidentiality, and information security.",
    fileType: "PDF",
    status: "on-request",
    category: "Information Security",
  },
  {
    title: "Quality Assurance & Management Framework",
    description: "Quality management systems establishing technical review, evidence validation, and client sign-off procedures.",
    fileType: "PDF",
    status: "on-request",
    category: "Quality Assurance",
  },
];

export default function ProcurementPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Procurement Pack" },
        ]}
        title="Procurement & Due Diligence Dossier"
        subtitle="Institutional credentials, corporate registration data, and official governance policies for procurement officers and consortium leads."
        ctaText="Request Due Diligence Pack"
        ctaHref={`mailto:${contactInfo.email}?subject=Due%20Diligence%20Inquiry%20-%20Procurement`}
      />

      <main>
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Corporate Credentials"
              title="Statutory Registration & Verification"
              subtitle="Key organizational facts for vendor registries, expressions of interest (EOIs), and request for proposal (RFP) evaluations:"
            />

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 rounded-[24px] bg-[#F4F5F7] p-8 sm:p-10 border border-gray-200/80">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-gray-500">
                      Official Entity Name
                    </span>
                    <p className="mt-1 text-[18px] font-bold text-[#07131e]">
                      FSM Consulting Limited
                    </p>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-gray-500">
                      Registration Number (CAC)
                    </span>
                    <p className="mt-1 text-[17px] font-bold text-[#07131e] font-mono">
                      RC: {contactInfo.rcNumber}
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
                      {contactInfo.address}
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
                      Bank Reference
                    </span>
                    <p className="mt-1 text-[16px] font-semibold text-gray-800">
                      Available on request for formal EOI/RFP submissions
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <DarkCard
                  badge="Due Diligence Desk"
                  icon={ShieldCheck}
                  title="Direct Verification"
                  subtitle="Need confidential verification or specific portal vendor registration numbers?"
                >
                  <div className="mt-4 space-y-3 text-[14px]">
                    <p className="text-gray-300">
                      Our commercial desk provides customized capability packages and answers evaluation queries directly.
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

        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Downloadable Governance Pack"
              title="Official Policies & Capability Documents"
              subtitle="Governance statements, institutional codes, and operational standards available upon request:"
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
