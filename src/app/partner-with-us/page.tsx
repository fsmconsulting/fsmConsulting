import type { Metadata } from "next";
import { Building2, Globe2, Truck, Users, CheckCircle2 } from "lucide-react";
import { InteriorHero, SectionHeader, ValueColumns, SplitCards, DarkCard, CtaBand } from "@/components/templates";
import { contactInfo } from "@/data/siteData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Partner With Us | For International Consulting Firms | FSM Consulting Limited",
  description:
    "Partner with FSM Consulting Limited on major development bids in Nigeria and West Africa. We provide local registration, nationwide field teams, vetted national experts, and complete in-country assignment support.",
};

const bidAdvantages = [
  {
    icon: Building2,
    title: "Full Local Registration",
    body: "Fully incorporated in Nigeria with complete statutory compliance (CAC, Tax, PENCOM, ITF), meeting all local content eligibility criteria for international tenders.",
  },
  {
    icon: Globe2,
    title: "Nationwide Field Reach",
    body: "Immediate operational reach across all 36 states and the FCT, with vetted field supervisors, enumerator networks, and state-level institutional access.",
  },
  {
    icon: Users,
    title: "Vetted National Talent",
    body: "Deep roster of high-caliber national consultants across economics, engineering, MEAL, safeguards, digital, and public financial management.",
  },
  {
    icon: Truck,
    title: "End-to-End Assignment Support",
    body: "Complete in-country logistics: business visas, invitation letters, secure ground transport, vetted lodging, security protocols, and field accounting.",
  },
];

const teamingModels = [
  {
    tag: "Model 01",
    title: "Joint Venture (JV) Partner",
    desc: "Equal or proportional equity participation in consortium bids, contributing key experts, local institutional relationships, and co-management of delivery.",
  },
  {
    tag: "Model 02",
    title: "Lead Sub-Consultant",
    desc: "Delivering defined technical workstreams (e.g. independent verification, MEAL, stakeholder engagement, or environmental safeguards) under the prime contractor.",
  },
  {
    tag: "Model 03",
    title: "Local Implementation Partner",
    desc: "Managing in-country field deployment, enumerator operations, sub-national stakeholder consultations, and regulatory clearances.",
  },
  {
    tag: "Model 04",
    title: "Mobilisation & Field Support Only",
    desc: "Providing duty-of-care logistics, visas, protocol, security management, and local operational support for visiting international evaluation missions.",
  },
];

export default function PartnerWithUsPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. Interior Hero */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partner With Us" },
        ]}
        title="Your Strategic Delivery Partner for Bids in Africa"
        subtitle="We partner with international consulting firms, consortium leads, and multilateral primes to deliver local execution depth, nationwide reach, and fiduciary trust."
        ctaText="Submit a Teaming Opportunity"
        ctaHref="#partner-form"
      />

      <main>
        {/* 2. What FSM Brings to a Bid */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Consortium Value"
              title="What FSM Brings to Your Proposal"
              subtitle="International primes win more bids when their local partner provides real capability rather than just a legal shell. Here is how FSM strengthens your tender submission:"
            />
            <ValueColumns items={bidAdvantages} className="mt-12" />
          </div>
        </section>

        {/* 3. Flexible Teaming Models */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SplitCards
              eyebrow="Collaboration Frameworks"
              title="Flexible Teaming & Partnership Models"
              subtitle="We adapt our commercial engagement to match the structuring requirements of your proposal:"
              cards={teamingModels}
            />
          </div>
        </section>

        {/* 4. Partnership Enquiry Section with Form */}
        <section id="partner-form" className="px-6 md:px-12 py-16 md:py-24 bg-white border-b border-gray-100 scroll-mt-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Direct Teaming Desk
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-bold text-[#07131e] tracking-tight leading-tight">
                  Discuss an upcoming tender or consortium opportunity
                </h2>
                <p className="mt-4 text-[15.5px] leading-relaxed text-[#5A6876]">
                  Whether you are preparing an Expression of Interest (EOI), responding to a Request for Proposals (RFP), or scoping local delivery requirements in Nigeria or West Africa, our leadership team reviews partnership opportunities within 24 hours.
                </p>

                <div className="mt-8 space-y-4 text-[14px] text-gray-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#2F5FA8] shrink-0 mt-0.5" />
                    <span>Rapid turnaround on corporate capability statements and non-disclosure agreements (NDAs).</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#2F5FA8] shrink-0 mt-0.5" />
                    <span>Curated shortlists of vetted national expert CVs aligned with ToR evaluation criteria.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#2F5FA8] shrink-0 mt-0.5" />
                    <span>Transparent commercial rates and clear scopes of work.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <DarkCard
                  badge="Consortium Inquiry"
                  title="Partnership Inquiry Form"
                  subtitle="Submit details about your upcoming tender or teaming requirement:"
                  className="shadow-xl"
                >
                  <form className="mt-5 space-y-4" action={`mailto:${contactInfo.email}`} method="GET">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-mono uppercase text-gray-300 mb-1">Firm Name</label>
                        <input
                          type="text"
                          required
                          placeholder="International Consulting Ltd"
                          className="w-full rounded-[12px] bg-white/10 border border-white/15 px-4 py-2.5 text-[14px] text-white placeholder-gray-400 focus:outline-none focus:border-[#2F5FA8]"
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-mono uppercase text-gray-300 mb-1">Contact Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Bid Director / Partner"
                          className="w-full rounded-[12px] bg-white/10 border border-white/15 px-4 py-2.5 text-[14px] text-white placeholder-gray-400 focus:outline-none focus:border-[#2F5FA8]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-mono uppercase text-gray-300 mb-1">Corporate Email</label>
                        <input
                          type="email"
                          required
                          placeholder="name@firm.com"
                          className="w-full rounded-[12px] bg-white/10 border border-white/15 px-4 py-2.5 text-[14px] text-white placeholder-gray-400 focus:outline-none focus:border-[#2F5FA8]"
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-mono uppercase text-gray-300 mb-1">Opportunity / Tender</label>
                        <input
                          type="text"
                          placeholder="e.g. World Bank IVA / PforR"
                          className="w-full rounded-[12px] bg-white/10 border border-white/15 px-4 py-2.5 text-[14px] text-white placeholder-gray-400 focus:outline-none focus:border-[#2F5FA8]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-mono uppercase text-gray-300 mb-1">Summary of Teaming Needs</label>
                      <textarea
                        rows={3}
                        placeholder="Describe the opportunity, target country/states, submission deadline, and required roles..."
                        className="w-full rounded-[12px] bg-white/10 border border-white/15 px-4 py-2.5 text-[14px] text-white placeholder-gray-400 focus:outline-none focus:border-[#2F5FA8]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#2F5FA8] hover:bg-[#264E8C] text-white font-semibold py-3 px-6 text-[14px] transition-colors shadow-md cursor-pointer"
                    >
                      Send Partnership Inquiry &rarr;
                    </button>
                    <p className="text-[11.5px] text-gray-400 text-center">
                      Direct contact: <a href="mailto:info@fsmconsulting.com" className="text-[#9BC2F5] underline">info@fsmconsulting.com</a>
                    </p>
                  </form>
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
