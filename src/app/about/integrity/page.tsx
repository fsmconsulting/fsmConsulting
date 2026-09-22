import type { Metadata } from "next";
import { Mail, ShieldCheck, CheckCircle2 } from "lucide-react";
import { InteriorHero, SectionHeader, ValueColumns, DownloadRow, DarkCard, CtaBand, type DownloadItem } from "@/components/templates";
import { contactInfo } from "@/data/siteData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Independence and Integrity | FSM Consulting Limited",
  description:
    "Explore FSM Consulting Limited's commitment to transparency, accountability, professional independence, quality assurance, and institutional ethics.",
};

const qualityCommitments = [
  {
    title: "Quality Management Systems",
    body: "Structured review processes, technical peer review, and operational protocols ensuring consistent deliverable quality across assignments.",
  },
  {
    title: "Ethical Conduct Policies",
    body: "Uncompromising standards of honesty, fairness, and professional discipline governing all staff and deployed consultants.",
  },
  {
    title: "Anti-Corruption Frameworks",
    body: "Zero tolerance for bribery, fraud, financial impropriety, or illicit commissions across all operational engagements.",
  },
  {
    title: "Data Protection Policies",
    body: "Strict confidentiality and information security controls protecting institutional, program, and survey participant data.",
  },
  {
    title: "Safeguarding Policies",
    body: "Robust codes of conduct protecting communities, vulnerable groups, and field personnel from harm, exploitation, or abuse.",
  },
  {
    title: "Gender Equality Policies",
    body: "Integrating social inclusion, gender equity, and non-discrimination principles throughout staffing and project execution.",
  },
  {
    title: "Risk Management Frameworks",
    body: "Proactive identification, assessment, and mitigation of operational, fiduciary, security, and reputational risks.",
  },
  {
    title: "Continuous Professional Development",
    body: "Ongoing capacity building, skills upgrading, and peer learning across our multidisciplinary network of professionals.",
  },
];

const policyRegister: DownloadItem[] = [
  {
    title: "Anti-Corruption Framework",
    description: "Institutional policy document establishing zero tolerance for bribery, fraud, and illicit inducements.",
    fileType: "PDF",
    status: "on-request",
    category: "Integrity",
  },
  {
    title: "Ethical Conduct Policy",
    description: "Standards of professional conduct, conflict management, and transparency mandatory for all consultants and personnel.",
    fileType: "PDF",
    status: "on-request",
    category: "Ethics",
  },
  {
    title: "Safeguarding Policy",
    description: "Protection protocols preventing sexual exploitation, abuse, and harassment across field operations.",
    fileType: "PDF",
    status: "on-request",
    category: "Safeguarding",
  },
  {
    title: "Data Protection Policy",
    description: "Guidelines governing ethical data collection, beneficiary anonymity, and secure information storage.",
    fileType: "PDF",
    status: "on-request",
    category: "Information Security",
  },
  {
    title: "Gender Equality Policy",
    description: "Institutional commitments to gender-responsive programming, equal opportunity, and social inclusion.",
    fileType: "PDF",
    status: "on-request",
    category: "Social Inclusion",
  },
  {
    title: "Risk Management Framework",
    description: "Operational guidelines for identifying, logging, and mitigating project delivery and fiduciary risks.",
    fileType: "PDF",
    status: "on-request",
    category: "Risk",
  },
  {
    title: "Quality Management System",
    description: "Standard operating procedures for deliverable review, field validation, and milestone sign-off.",
    fileType: "PDF",
    status: "on-request",
    category: "Quality",
  },
];

export default function IntegrityPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Integrity" },
        ]}
        title="Independence and Integrity"
        subtitle="Trust is earned through integrity, professionalism, and transparency. FSM Consulting Limited maintains the highest standards of ethical conduct and professional independence in every assignment we undertake."
        ctaText="View Policy Register"
        ctaHref="#policy-register"
      />

      <main>
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Transparency & Accountability
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-bold text-[#07131e] tracking-tight leading-tight">
                  At the Core of Our Work
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-[#5A6876]">
                  Trust is earned through integrity, professionalism, and transparency. FSM Consulting Limited maintains the highest standards of ethical conduct and professional independence in every assignment we undertake.
                </p>
                <p className="mt-3 text-[16px] leading-relaxed text-[#5A6876]">
                  We provide objective assessments, evidence-based findings, and impartial recommendations that help our clients strengthen governance, improve performance, and enhance accountability. Our commitment to transparency ensures that stakeholders have confidence in both our processes and our findings.
                </p>
                <div className="mt-6 rounded-[16px] bg-[#F4F5F7] p-5 border border-gray-200/80">
                  <p className="text-[14px] font-medium text-[#07131e]">
                    FSM declares and manages conflicts of interest on every assurance assignment.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <DarkCard
                  badge="Institutional Assurance"
                  icon={ShieldCheck}
                  title="Professional Independence"
                  subtitle="How we safeguard objectivity across independent verification and advisory work:"
                >
                  <ul className="mt-4 space-y-3.5 text-[14px] text-gray-200">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#9BC2F5] shrink-0 mt-0.5" />
                      <span>Formal declaration and screening for commercial or personal conflicts of interest.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#9BC2F5] shrink-0 mt-0.5" />
                      <span>Evidence-based findings substantiated by direct field observation and empirical data.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#9BC2F5] shrink-0 mt-0.5" />
                      <span>Impartial reporting without editorial compromise from implementing parties.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#9BC2F5] shrink-0 mt-0.5" />
                      <span>Zero tolerance for corrupt, fraudulent, collusive, or coercive practices.</span>
                    </li>
                  </ul>
                </DarkCard>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Quality Assurance Framework"
              title="Maintaining International Standards"
              subtitle="FSM Consulting Limited is committed to maintaining international standards through eight structured institutional commitments:"
            />

            <div className="mt-12">
              <ValueColumns items={qualityCommitments} />
            </div>
          </div>
        </section>

        <section id="policy-register" className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100 scroll-mt-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Institutional Governance"
              title="Policy Register"
              subtitle="Official institutional policies and governance codes available on request for procurement and due diligence:"
            />

            <div className="space-y-4 mt-8">
              {policyRegister.map((item) => (
                <DownloadRow key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-16 md:py-24 bg-[#07131e] text-white">
          <div className="mx-auto max-w-4xl text-center">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9BC2F5]">
              Ethical Accountability
            </span>
            <h2 className="mt-3 text-[28px] sm:text-[34px] font-bold text-white tracking-tight">
              Report an Integrity Concern
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-gray-300 max-w-2xl mx-auto">
              FSM Consulting Limited maintains a zero-tolerance policy toward unethical behavior, fraud, bribery, and safeguarding violations. If you have concerns regarding the conduct of any FSM assignment, consultant, or employee, please report it directly to our integrity desk.
            </p>

            <div className="mt-8">
              <a
                href={`mailto:${contactInfo.email}?subject=Integrity%20concern`}
                className="inline-flex items-center gap-2 rounded-full bg-[#2F5FA8] hover:bg-[#264E8C] text-white px-7 py-3 text-[14px] font-semibold transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Submit Confidential Integrity Concern</span>
              </a>
            </div>
            <p className="mt-4 text-[12.5px] text-gray-400">
              All inquiries and concerns are treated with strict confidentiality.
            </p>
          </div>
        </section>

        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
