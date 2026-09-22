import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Mail, ArrowRight } from "lucide-react";
import { InteriorHero, SectionHeader, DarkCard, CtaBand } from "@/components/templates";
import { contactInfo } from "@/data/siteData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Experience & Track Record | FSM Consulting Limited",
  description:
    "Explore the verified track record and executive leadership experience guiding FSM Consulting Limited across development delivery, project assurance, and public policy.",
};

const leadershipDomains = [
  {
    tag: "Domain 01",
    title: "Social Protection & Safety Nets",
    desc: "Experience in social protection programming, community engagement, and targeted delivery mechanisms.",
  },
  {
    tag: "Domain 02",
    title: "Development Policy & Institutional Strengthening",
    desc: "Advising public institutions on translating development policies into operational execution and sustainable capacity.",
  },
  {
    tag: "Domain 03",
    title: "Disaster Risk Management",
    desc: "Strategic advisory and operational planning for crisis resilience and disaster risk reduction.",
  },
  {
    tag: "Domain 04",
    title: "Monitoring & Evaluation (M&E)",
    desc: "Rigorous results tracking, indicator design, and evidence-based assessment of programme performance.",
  },
  {
    tag: "Domain 05",
    title: "World Bank-Supported Programmes",
    desc: "Technical and advisory support for government and development-finance programmes funded by international financial institutions.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Experience" },
        ]}
        title="Experience & Track Record"
        subtitle="Verifiable delivery capability grounded in executive experience across development policy, institutional strengthening, and multilateral development-finance programmes."
        ctaText="Contact Our Team"
        ctaHref="/contact"
      />

      <main>
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Verified Capability
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[34px] font-bold text-[#07131e] tracking-tight leading-tight">
                  Grounded in hands-on program delivery
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-[#5A6876]">
                  As an institution, FSM Consulting maintains a strict policy of factual integrity. We do not claim past client engagements without written client permission, nor do we present target funding environments as direct corporate clients.
                </p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-[#5A6876]">
                  Our operational depth is established through our executive leadership and multidisciplinary experts, with a strong focus on translating policy and investment into practical, measurable results.
                </p>
              </div>

              <div className="lg:col-span-5">
                <DarkCard
                  badge="Due Diligence Standard"
                  icon={ShieldCheck}
                  title="Evidence-Based Credibility"
                  subtitle="How we substantiate technical competence during procurement evaluations:"
                >
                  <ul className="mt-4 space-y-3 text-[13.5px] text-gray-200">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#9BC2F5] shrink-0 mt-0.5" />
                      <span>Individual expert CVs with full project references and client validation contacts.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#9BC2F5] shrink-0 mt-0.5" />
                      <span>Corporate statutory documentation, available on request.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#9BC2F5] shrink-0 mt-0.5" />
                      <span>Documented methodology and quality assurance framework (FSM Impact 360™).</span>
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
              eyebrow="Leadership Experience"
              title="Executive Track Record · Fatima Sadiq Mohammed"
              subtitle="The practical foundation of FSM Consulting Limited is anchored in the verified track record of our Chief Executive and Managing Director, Fatima Sadiq Mohammed:"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {leadershipDomains.map((item) => (
                <div
                  key={item.tag}
                  className="rounded-[22px] bg-white p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#2F5FA8]">
                      {item.tag}
                    </span>
                    <h3 className="mt-2 text-[18px] font-bold text-[#07131e] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-[#5A6876]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-16 md:py-24 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-4xl">
            <DarkCard
              badge="Assignment Archive"
              icon={ShieldCheck}
              title="Assignment Case Studies"
              subtitle="Formal case study publications and procurement references:"
            >
              <div className="mt-4 space-y-4 text-[15px] text-gray-300 leading-relaxed">
                <p>
                  FSM assignment case studies will be published here as client permissions are confirmed. For assignment references relevant to a specific procurement, contact us.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:${contactInfo.email}?subject=Assignment%20References%20Inquiry%20-%20Procurement`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F5FA8] hover:bg-[#264E8C] text-white px-6 py-3 text-[14px] font-semibold transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Request Assignment References</span>
                  </a>
                  <Link
                    href="/procurement"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-[14px] font-semibold transition-colors"
                  >
                    <span>View Procurement Pack</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </DarkCard>
          </div>
        </section>

        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
