import type { Metadata } from "next";
import { ShieldAlert, CheckCircle2, Mail } from "lucide-react";
import { InteriorHero, SectionHeader } from "@/components/templates";
import { contactInfo } from "@/data/siteData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Recruitment Fraud Notice | Official Warning | FSM Consulting Limited",
  description:
    "Official security warning regarding fraudulent recruitment communications impersonating FSM Consulting Limited. Learn how to verify legitimate job offers.",
};

const warningPoints = [
  "FSM Consulting Limited NEVER charges application, processing, screening, or interview fees at any stage of recruitment.",
  "FSM Consulting Limited NEVER requests security deposits, travel advance bonds, or equipment procurement fees from candidates.",
  "All official recruitment communications originate EXCLUSIVELY from official '@fsmconsulting.com' domain email addresses. We never recruit through Gmail, Yahoo, Hotmail, WhatsApp, or Telegram.",
  "Formal job offers are issued only following rigorous, multi-stage interviews and verified reference checks.",
];

export default function RecruitmentFraudNoticePage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. Interior Hero */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Recruitment Fraud Notice" },
        ]}
        title="Official Recruitment Fraud Warning"
        subtitle="Protecting candidates, development experts, and the public against fraudulent job solicitations and unauthorized representations."
      />

      <main className="px-6 md:px-12 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Urgent Alert Banner */}
          <div className="rounded-[24px] bg-[#FBEFE4] border-2 border-[#9A4B12] p-8 text-[#9A4B12] shadow-sm mb-12">
            <div className="flex items-start gap-4">
              <ShieldAlert className="h-8 w-8 shrink-0 mt-0.5 text-[#9A4B12]" />
              <div>
                <h2 className="text-[22px] font-bold tracking-tight text-[#9A4B12]">
                  Security Notice: Beware of Fraudulent Job Solicitations
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-[#9A4B12]/90">
                  It has come to our attention that unauthorized individuals or syndicates periodically attempt to impersonate legitimate development consulting firms, including FSM Consulting Limited, by posting counterfeit job opportunities, issuing fake interview invitations, or soliciting &ldquo;application fees&rdquo;.
                </p>
              </div>
            </div>
          </div>

          <SectionHeader
            eyebrow="Verification Principles"
            title="How to Identify Legitimate FSM Communications"
            subtitle="Please review the following institutional protocols that govern all FSM Consulting recruitment activities:"
          />

          <div className="space-y-4 mt-8">
            {warningPoints.map((point) => (
              <div
                key={point}
                className="rounded-[18px] bg-[#F4F5F7] p-5 border border-gray-200/80 flex items-start gap-3.5"
              >
                <CheckCircle2 className="h-5 w-5 text-[#2F5FA8] shrink-0 mt-0.5" />
                <p className="text-[14.5px] text-[#07131e] font-medium leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Verification & Reporting Box */}
          <div className="mt-12 rounded-[24px] bg-[#07131e] p-8 md:p-10 text-white shadow-xl">
            <h3 className="text-[22px] font-bold tracking-tight text-white">
              Verify an Offer or Report Suspicious Activity
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-300">
              If you receive a communication claiming to represent FSM Consulting Limited that requests funds, banking information, or originates from a non-corporate email address, treat it as fraudulent. Do not share personal data or transfer funds.
            </p>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[#9BC2F5]">
                  Verification Desk
                </span>
                <p className="text-[15px] font-semibold text-white">
                  {contactInfo.email}
                </p>
                <p className="text-[13px] text-gray-400">
                  Subject: Recruitment Verification Request
                </p>
              </div>

              <div>
                <a
                  href={`mailto:${contactInfo.email}?subject=Recruitment%20Verification%20Request`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2F5FA8] hover:bg-[#264E8C] text-white px-6 py-3 text-[14px] font-semibold transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Verify with FSM</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

