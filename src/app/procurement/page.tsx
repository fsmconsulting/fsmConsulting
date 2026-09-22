import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { InteriorHero, SectionHeader, DownloadRow, DarkCard, CtaBand, type DownloadItem } from "@/components/templates";
import { contactInfo } from "@/data/siteData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Procurement & Due Diligence Dossier | FSM Consulting Limited",
  description:
    "Official corporate due diligence package for procurement officers, task team leaders, and bid directors. Request capability statements, registration details, and institutional policies.",
};

const dueDiligenceDownloads: DownloadItem[] = [
  {
    title: "FSM Consulting Corporate Profile",
    description: "Official comprehensive corporate profile detailing practice areas, delivery network, and executive leadership.",
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
    description: "Standards governing field survey data collection, beneficiary confidentiality, and information security under the NDPA.",
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
  const requestPackMailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent("Procurement pack request")}`;

  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. InteriorHero */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Procurement Pack" },
        ]}
        title="Procurement & Due Diligence Dossier"
        subtitle="Institutional credentials, corporate registration data, and official governance policies for procurement officers and consortium leads."
        ctaText="Request Due Diligence Pack"
        ctaHref={requestPackMailto}
      />

      <main>
        {/* 1. Company Identity */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Corporate Identity"
              title="Statutory Registration & Verification"
              subtitle="Key organizational facts for vendor registries, expressions of interest (EOIs), and request for proposal (RFP) evaluations:"
            />

            <div className="mt-10 rounded-[24px] bg-[#F4F5F7] p-8 sm:p-10 border border-gray-200/80">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-gray-500">
                    Official Entity Name
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
                    RC: {contactInfo.rcNumber}
                  </p>
                </div>

                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-gray-500">
                    Headquarters Address
                  </span>
                  <p className="mt-1 text-[15px] font-medium text-[#07131e]">
                    {contactInfo.address}
                  </p>
                </div>

                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-gray-500">
                    Inquiries &amp; Phone
                  </span>
                  <p className="mt-1 text-[15px] font-medium text-[#07131e]">
                    {contactInfo.email}<br />
                    {contactInfo.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Document Register */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Due Diligence Register"
              title="Official Institutional Policies &amp; Statements"
              subtitle="All institutional policy documents are available on request to authorized procurement leads and donor evaluation teams:"
            />

            <div className="mt-10 space-y-4">
              {dueDiligenceDownloads.map((item) => (
                <DownloadRow key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* 3. Leadership Summary & 4. Integrity Links */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-[22px] bg-[#F4F5F7] p-8 border border-gray-200/80 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#2F5FA8] font-semibold">
                    Governance Structure
                  </span>
                  <h3 className="mt-2 text-[22px] font-bold text-[#07131e] tracking-tight">
                    Board of Directors &amp; Executive Leadership
                  </h3>
                  <p className="mt-3 text-[15px] text-[#5A6876] leading-relaxed">
                    Review the verified governance bench guiding FSM Consulting Limited across fiduciary assurance, public policy, and program management.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    href="/about/leadership"
                    className="inline-flex items-center gap-2 font-semibold text-[#2F5FA8] hover:underline text-[14px]"
                  >
                    <span>View leadership profiles</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-[22px] bg-[#F4F5F7] p-8 border border-gray-200/80 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#2F5FA8] font-semibold">
                    Ethics &amp; Standards
                  </span>
                  <h3 className="mt-2 text-[22px] font-bold text-[#07131e] tracking-tight">
                    Institutional Integrity &amp; Quality Protocols
                  </h3>
                  <p className="mt-3 text-[15px] text-[#5A6876] leading-relaxed">
                    Learn about our 8 quality assurance commitments, conflict of interest safeguards, and independent verification protocols.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    href="/about/integrity"
                    className="inline-flex items-center gap-2 font-semibold text-[#2F5FA8] hover:underline text-[14px]"
                  >
                    <span>Read integrity &amp; QA framework</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Request a full procurement pack DarkCard */}
        <section className="px-6 md:px-12 py-16 md:py-24 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-4xl">
            <DarkCard
              badge="Procurement Request"
              title="Request a Full Procurement Pack"
              subtitle="Authorized evaluation teams and task leads may request a formal corporate dossier for specific procurement tenders:"
            >
              <div className="mt-6 space-y-5 text-gray-200">
                <p className="text-[15px] text-white/80 leading-relaxed">
                  Our corporate services team will assemble certified registration documents, audited credentials, policy frameworks, and customized capability statements according to your tender specifications.
                </p>
                <div className="pt-2">
                  <a
                    href={requestPackMailto}
                    className="inline-flex items-center gap-2 rounded-full bg-[#2F5FA8] hover:bg-[#264E8C] px-8 py-3.5 text-[14.5px] font-semibold text-white shadow-lg transition-colors cursor-pointer"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Request procurement pack</span>
                  </a>
                </div>
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
