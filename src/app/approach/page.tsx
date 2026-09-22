import type { Metadata } from "next";
import { InteriorHero, SectionHeader, CtaBand } from "@/components/templates";
import { impact360Stages } from "@/data/impact360Data";
import { fiveResultsQuestions, qaCommitments } from "@/data/companyData";
import CrossBorderDeliveryChain from "@/components/delivery/CrossBorderDeliveryChain";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Delivery Approach & Methodology | FSM Consulting Limited",
  description:
    "Explore how FSM Consulting Limited delivers development results through the FSM Impact 360™ framework, cross-border delivery model, and evidence-based verification.",
};

export default function ApproachPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. InteriorHero */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Approach" },
        ]}
        title="How we deliver"
        subtitle="A disciplined methodology combining evidence-based design, rapid mobilization, and independent verification."
        ctaText="Explore Our Services"
        ctaHref="/services"
      />

      <main>
        {/* 2. FSM Impact 360™: 6 stages */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Proprietary Lifecycle Architecture"
              title="FSM Impact 360™ Framework"
              subtitle="A continuous six-stage delivery model that ensures every assignment moves from priority definition to verified, lasting outcomes:"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-12">
              {impact360Stages.map((st, idx) => (
                <div
                  key={st.letter}
                  className="rounded-[18px] bg-[#F4F5F7] p-6 border border-gray-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07131e] text-white font-mono text-[14px] font-bold">
                        {st.letter}
                      </span>
                      <span className="font-mono text-[11px] font-semibold text-gray-500">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[15px] font-bold text-[#07131e] tracking-tight leading-snug">
                      {st.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-[#5A6876]">
                      {st.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Cross-border delivery model */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Operational Deployment"
              title="Cross-Border Delivery Model"
              subtitle="An integrated eight-stage chain connecting client mandates to localized implementation and verified impact:"
            />
            <div className="mt-12">
              <CrossBorderDeliveryChain />
            </div>
          </div>
        </section>

        {/* 4. Results, not just deliverables: 5 questions */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Results Philosophy
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[34px] font-bold text-[#07131e] tracking-tight leading-tight">
                  Results, not just deliverables
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-[#5A6876]">
                  Many consulting firms measure success by the completion of activities, submission of reports, or achievement of contractual milestones. FSM Consulting Limited measures success differently.
                </p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-[#5A6876]">
                  Our focus extends beyond outputs to outcomes and impact. We work with our clients to ensure that development investments translate into meaningful improvements in economic opportunities, public services, institutional performance, community resilience, and overall well-being.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-[24px] bg-[#07131e] p-8 md:p-10 text-white shadow-xl">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#9BC2F5] font-semibold">
                    The Five Evaluative Questions We Ask
                  </span>
                  <ul className="mt-6 space-y-4 text-[14.5px] text-gray-200">
                    {fiveResultsQuestions.map((q, idx) => (
                      <li key={q} className="flex items-start gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                        <span className="font-mono text-[12px] font-bold text-[#9BC2F5] mt-0.5">
                          0{idx + 1}
                        </span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. We verify reality through evidence: profile text */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-4xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
              Evidence-Based Accountability
            </span>
            <h2 className="mt-3 text-[30px] sm:text-[36px] font-bold text-[#07131e] tracking-tight leading-tight">
              We Verify Reality Through Evidence
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-[#5A6876]">
              <p>
                At FSM Consulting Limited, we believe that accountability begins with evidence. Our approach combines rigorous technical analysis with direct field engagement, allowing us to independently verify project performance and validate results.
              </p>
              <p>
                Rather than relying solely on reports and administrative data, we engage directly with project beneficiaries, communities, implementing agencies, civil society organizations, and other stakeholders to determine whether interventions are producing the intended outcomes.
              </p>
              <p>
                This commitment to evidence-based verification enables our clients to make informed decisions, manage risks effectively, and strengthen programme performance.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Quality assurance: 8 commitments */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Integrity Standards"
              title="Quality Assurance Commitments"
              subtitle="Institutional protocols upholding analytical precision and compliance across every assignment:"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {qaCommitments.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] bg-[#F4F5F7] p-6 border border-gray-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-[17px] font-bold text-[#07131e]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[#5A6876]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Action Band */}
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
