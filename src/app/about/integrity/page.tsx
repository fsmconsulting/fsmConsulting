import type { Metadata } from "next";
import { ShieldAlert, Lock, CheckCircle2, FileText, Scale } from "lucide-react";
import { InteriorHero, SectionHeader, ValueColumns, DarkCard, CtaBand } from "@/components/templates";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Integrity & Governance | FSM Consulting Limited",
  description:
    "Explore FSM Consulting Limited's institutional integrity framework, independence safeguards, anti-corruption policies, and confidential reporting mechanisms.",
};

const integrityPillars = [
  {
    icon: Scale,
    title: "Operational Independence",
    body: "Strict conflict-of-interest screening for all Independent Verification Agent (IVA) and Third-Party Monitoring (TPM) assignments, ensuring uncompromised objectivity.",
  },
  {
    icon: ShieldAlert,
    title: "Zero Tolerance for Corruption",
    body: "Comprehensive anti-bribery, anti-fraud, and whistleblowing policies aligned with multilateral development bank standards and Nigerian statutory laws.",
  },
  {
    icon: Lock,
    title: "Data Privacy & Confidentiality",
    body: "Strict data governance, secure evidence handling, and NDA compliance protecting government, donor, and citizen data during surveys and audits.",
  },
  {
    icon: CheckCircle2,
    title: "Safeguarding & PSEA",
    body: "Mandatory codes of conduct enforcing Protection from Sexual Exploitation, Abuse, and Harassment (PSEAH) across all field deployments and enumerator teams.",
  },
];

const policyList = [
  {
    title: "Anti-Bribery & Corruption Policy",
    desc: "Governs ethical interactions with public officials, contractors, and partners with zero tolerance for illicit payments.",
    version: "Rev 2026.1",
  },
  {
    title: "Conflict of Interest & Independence Code",
    desc: "Mandatory screening procedures preventing commercial, financial, or personal conflicts of interest in verification roles.",
    version: "Rev 2026.1",
  },
  {
    title: "Protection from Sexual Exploitation & Abuse (PSEA)",
    desc: "Rigorous standards of conduct, community reporting channels, and survivor-centered response protocols for all field personnel.",
    version: "Rev 2026.1",
  },
  {
    title: "Whistleblower & Grievance Mechanism",
    desc: "Secure, confidential, and non-retaliatory reporting framework for internal staff, consultants, and external stakeholders.",
    version: "Rev 2026.1",
  },
  {
    title: "Data Protection & Information Security Standard",
    desc: "Data lifecycle controls, encryption, and anonymization protocols aligned with the Nigeria Data Protection Act (NDPA).",
    version: "Rev 2026.1",
  },
  {
    title: "Environmental & Social Safeguards Framework",
    desc: "Organizational commitment to environmental sustainability, labor dignity, and community consultation standards.",
    version: "Rev 2026.1",
  },
];

export default function IntegrityPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Integrity & Governance" },
        ]}
        title="Institutional Integrity & Governance"
        subtitle="Uncompromising independence, rigorous ethical standards, and robust governance policies underpinning every development assignment we undertake."
        ctaText="View Due Diligence Pack"
        ctaHref="/procurement"
      />

      <main>
        {/* Core Principles */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Our Stance"
              title="The Foundation of Independent Assurance"
              subtitle="International financial institutions and sovereign governments rely on FSM because our verification is objectively independent, ethically bulletproof, and methodologically sound."
            />
            <ValueColumns items={integrityPillars} className="mt-12" />
          </div>
        </section>

        {/* Institutional Policy Register */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Policy Architecture"
              title="Institutional Policy Register"
              subtitle="Our work is guided by documented institutional policies that every director, employee, and contracted consultant signs and adheres to:"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {policyList.map((policy) => (
                <div
                  key={policy.title}
                  className="rounded-[20px] bg-white p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <FileText className="h-5 w-5 text-[#2F5FA8]" />
                      <span className="font-mono text-[11px] text-gray-500">
                        {policy.version}
                      </span>
                    </div>
                    <h3 className="text-[17px] font-bold text-[#07131e] tracking-tight">
                      {policy.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#5A6876]">
                      {policy.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 text-[12px] font-mono text-[#2F5FA8] font-medium">
                    Available in Procurement Pack
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Report a Concern / Whistleblowing Channel */}
        <section className="px-6 md:px-12 py-16 md:py-24 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Accountability Channel
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[34px] font-bold text-[#07131e] tracking-tight leading-tight">
                  Confidential &amp; Non-Retaliatory Reporting
                </h2>
                <p className="mt-4 text-[15.5px] leading-relaxed text-[#5A6876]">
                  FSM Consulting maintains an independent, confidential reporting channel for reporting any suspected violations of our Code of Conduct, financial misconduct, procurement irregularities, or safeguarding breaches.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5A6876]">
                  Reports can be submitted anonymously and are reviewed directly by the Board Ethics and Compliance Committee with full protection from retaliation.
                </p>
              </div>

              <div className="lg:col-span-5">
                <DarkCard
                  badge="Whistleblowing &amp; Ethics"
                  title="Report a Concern"
                  subtitle="Dedicated confidential reporting coordinates:"
                  className="shadow-xl"
                >
                  <div className="mt-5 space-y-4 text-[14px]">
                    <div className="rounded-[16px] bg-white/5 p-4 border border-white/10">
                      <span className="block text-[11.5px] uppercase font-mono text-[#9BC2F5]">Ethics Desk</span>
                      <a href="mailto:info@fsmconsulting.com" className="font-semibold text-white hover:text-[#9BC2F5] transition-colors mt-0.5 block">
                        info@fsmconsulting.com
                      </a>
                      <span className="text-[12px] text-gray-400 mt-1 block">Subject: Confidential Attention: Ethics Committee</span>
                    </div>

                    <div className="rounded-[16px] bg-white/5 p-4 border border-white/10">
                      <span className="block text-[11.5px] uppercase font-mono text-[#9BC2F5]">Official Address</span>
                      <p className="text-gray-200 text-[13px] mt-0.5">
                        FSM Consulting Limited<br />
                        Abuja, Federal Capital Territory, Nigeria
                      </p>
                    </div>
                  </div>
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

