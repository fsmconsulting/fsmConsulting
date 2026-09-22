import type { Metadata } from "next";
import { InteriorHero, SectionHeader } from "@/components/templates";
import { contactInfo } from "@/data/siteData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Notice | Data Protection | FSM Consulting Limited",
  description:
    "Privacy notice and data protection policies of FSM Consulting Limited, compliant with the Nigeria Data Protection Act (NDPA) and international standards.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Notice" },
        ]}
        title="Privacy Notice &amp; Data Protection"
        subtitle="How FSM Consulting Limited collects, protects, processes, and respects personal and institutional data across our advisory, evaluation, and research engagements."
      />

      <main className="px-6 md:px-12 py-16 md:py-24">
        <div className="mx-auto max-w-4xl prose prose-slate">
          <SectionHeader
            eyebrow="Data Protection Commitment"
            title="Our Commitment to Confidentiality &amp; Privacy"
            subtitle="Last updated: January 2026. Aligned with the Nigeria Data Protection Act (NDPA) and international development data standards."
          />

          <div className="mt-10 space-y-8 text-[15.5px] leading-relaxed text-[#5A6876]">
            <div>
              <h3 className="text-[20px] font-bold text-[#07131e] mb-2">1. Scope of This Notice</h3>
              <p>
                This Privacy Notice applies to all personal data collected by FSM Consulting Limited (&ldquo;FSM&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) through our website, during expert roster recruitment, through procurement due diligence, and within field research, monitoring surveys, and technical advisory engagements.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-[#07131e] mb-2">2. Information We Collect</h3>
              <p>Depending on your interaction with FSM, we may collect:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-gray-700">
                <li><strong>Inquiries &amp; Communications:</strong> Name, professional title, corporate email address, telephone number, and message contents.</li>
                <li><strong>Expert Roster Submissions:</strong> Curriculum vitae (CV), academic qualifications, employment history, sector disciplines, references, and citizenship.</li>
                <li><strong>Field Research &amp; Evaluation Data:</strong> Survey responses, socioeconomic indicators, and community feedback collected under formal institutional ethics clearance and informed consent protocols.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-[#07131e] mb-2">3. How We Use Information</h3>
              <p>
                Personal data is processed strictly for legitimate operational purposes:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-gray-700">
                <li>Evaluating prospective experts for specific consulting proposals and assignments.</li>
                <li>Responding to commercial partnership inquiries and client service requests.</li>
                <li>Conducting research, monitoring, and verification analysis in aggregated, anonymized formats.</li>
                <li>Fulfilling legal, statutory, and fiduciary obligations under Nigerian law.</li>
              </ul>
              <p className="mt-2 font-medium text-[#07131e]">
                We never sell, rent, or trade personal information to third-party commercial marketing entities. We never submit expert CVs to prospective clients without prior written consent.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-[#07131e] mb-2">4. Data Security &amp; Retention</h3>
              <p>
                We implement technical and organizational measures to safeguard personal data against unauthorized access, loss, alteration, or disclosure. Data collected during field monitoring is encrypted in transit and at rest. Personal records are retained only for the duration required to satisfy the operational or statutory purpose for which they were obtained.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-[#07131e] mb-2">5. Your Data Rights</h3>
              <p>
                Under the NDPA, you have the right to request access to your personal data, request rectification of inaccurate records, object to processing, or request the deletion of your expert profile from our active roster at any time.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-[#07131e] mb-2">6. Contact Our Data Protection Desk</h3>
              <p>
                For questions regarding this policy or to exercise your privacy rights, please contact our Data Protection Officer:
              </p>
              <div className="mt-3 rounded-[16px] bg-[#F4F5F7] p-5 border border-gray-200/80 text-[14px] text-gray-800">
                <p><strong>Data Protection Desk &middot; FSM Consulting Limited</strong></p>
                <p>Abuja, Federal Capital Territory, Nigeria</p>
                <p className="text-[#2F5FA8] font-semibold mt-1">
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

