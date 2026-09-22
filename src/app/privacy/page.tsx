import type { Metadata } from "next";
import { InteriorHero, SectionHeader } from "@/components/templates";
import { contactInfo } from "@/data/siteData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Notice | Data Protection | FSM Consulting Limited",
  description:
    "Privacy notice explaining how FSM Consulting Limited handles personal data, with reference to the Nigeria Data Protection Act 2023.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Notice" },
        ]}
        title="Privacy Notice & Data Protection"
        subtitle="This notice explains how FSM Consulting Limited handles personal data, with reference to the Nigeria Data Protection Act 2023."
      />

      <main className="px-6 md:px-12 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 rounded-[12px] bg-amber-50/70 border border-amber-200/80 px-4 py-3 text-[13px] text-amber-900">
            <span className="font-semibold">Notice:</span> Draft notice, subject to legal review.
          </div>

          <SectionHeader
            eyebrow="Data Protection Statement"
            title="How We Handle Personal Data"
            subtitle="This notice explains how FSM Consulting Limited handles personal data, with reference to the Nigeria Data Protection Act 2023."
          />

          <div className="mt-10 space-y-8 text-[15.5px] leading-relaxed text-[#5A6876]">
            <div>
              <h3 className="text-[20px] font-bold text-[#07131e] mb-2">1. Scope of This Notice</h3>
              <p>
                This Privacy Notice applies to personal data collected by FSM Consulting Limited (&ldquo;FSM&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) through our website, during expert roster onboarding, through procurement inquiries, and within field research, monitoring surveys, and technical advisory engagements.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-[#07131e] mb-2">2. Information We Collect</h3>
              <p>Depending on your interaction with FSM, we may collect:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-gray-700">
                <li><strong>Inquiries &amp; Communications:</strong> Name, professional title, corporate email address, telephone number, and message contents.</li>
                <li><strong>Expert Roster Submissions:</strong> Curriculum vitae (CV), academic qualifications, employment history, sector disciplines, references, and contact details.</li>
                <li><strong>Field Research &amp; Evaluation Data:</strong> Survey responses, socioeconomic data, and community feedback collected under informed consent protocols.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-[#07131e] mb-2">3. How We Use Information</h3>
              <p>Personal data is processed strictly for legitimate operational purposes:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-gray-700">
                <li>Evaluating prospective experts for specific consulting proposals and assignments.</li>
                <li>Responding to commercial partnership inquiries and client service requests.</li>
                <li>Conducting research, monitoring, and verification analysis in aggregated or anonymized formats.</li>
                <li>Fulfilling legal, statutory, and fiduciary obligations under applicable law.</li>
              </ul>
              <p className="mt-3 font-medium text-[#07131e]">
                We do not sell, rent, or trade personal information to third-party commercial marketing entities. We do not submit expert CVs to prospective clients without prior communication.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-[#07131e] mb-2">4. Data Security &amp; Retention</h3>
              <p>
                We implement technical and organizational measures to safeguard personal data against unauthorized access, loss, alteration, or disclosure. Personal records are retained only for the duration required to satisfy the operational or statutory purpose for which they were obtained.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-[#07131e] mb-2">5. Your Data Rights</h3>
              <p>
                With reference to the Nigeria Data Protection Act 2023, individuals may request access to their personal data, request correction of inaccurate records, or request the removal of their expert profile from our active roster.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-[#07131e] mb-2">6. Contact Our Data Desk</h3>
              <p>
                For questions regarding this draft notice or data handling practices, please contact:
              </p>
              <div className="mt-3 rounded-[16px] bg-[#F4F5F7] p-5 border border-gray-200/80 text-[14px] text-gray-800">
                <p><strong>FSM Consulting Limited</strong></p>
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
