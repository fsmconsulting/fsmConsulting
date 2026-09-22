import type { Metadata } from "next";
import { InteriorHero, SectionHeader, ValueColumns, DarkCard, CtaBand } from "@/components/templates";
import CrossBorderDeliveryChain from "@/components/delivery/CrossBorderDeliveryChain";
import PartnerEnquiryForm from "@/components/forms/PartnerEnquiryForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Partner With Us | For International Firms | FSM Consulting Limited",
  description:
    "Partner with FSM Consulting Limited on development-financed assignments across Nigeria and Africa. We provide local registration, nationwide field reach, and integrated mobilisation support.",
};

const crossBorderCapabilities = [
  {
    title: "Global Expertise",
    body: "Access to international technical specialists and comparative experience across development disciplines.",
  },
  {
    title: "Regional Access",
    body: "Strategic partnerships, professional networks and delivery relationships across Africa.",
  },
  {
    title: "National Capability",
    body: "Strong implementation capacity and institutional access within Nigeria across all 36 states and the FCT.",
  },
  {
    title: "Local Knowledge",
    body: "Country-based professionals, field practitioners, and implementation partners responsive to local realities.",
  },
  {
    title: "Integrated Operations Support",
    body: "Coordinated consultant mobilization, logistics, security, and in-country assignment support from deployment to delivery.",
  },
];

const assignmentSupportItems = [
  "Pre-deployment planning and assignment mobilization",
  "Visa and immigration documentation support",
  "Invitation letters and assignment documentation",
  "Airport arrival and departure coordination",
  "Accommodation arrangements",
  "Local transportation and movement coordination",
  "Security and safety arrangements",
  "In-country orientation and assignment briefings",
  "Coordination with local counterparts and implementing institutions",
  "Field mission and site visit logistics",
  "Stakeholder meeting coordination",
  "Translation and interpretation support where required",
  "Local consultant, enumerator and field team mobilization",
  "Administrative and operational support throughout assignments",
  "Emergency and contingency coordination",
];

const teamingWays = [
  {
    title: "Joint Venture (JV) Partner",
    desc: "Proportional equity participation in consortium tenders, contributing key experts and shared technical leadership.",
  },
  {
    title: "Lead Sub-Consultant",
    desc: "Delivering defined technical workstreams such as independent verification, safeguards, or MEAL under the prime contractor.",
  },
  {
    title: "Local Implementation Partner",
    desc: "Managing in-country field deployment, enumerator teams, subnational consultations, and local regulatory coordination.",
  },
  {
    title: "Mobilisation & Logistics Only",
    desc: "Providing duty-of-care logistics, visas, protocol, secure ground movement, and field support for visiting evaluation missions.",
  },
];

export default function PartnerWithUsPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. InteriorHero */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partner With Us" },
        ]}
        title="Your delivery partner in Nigeria and across Africa"
        subtitle="Local registration, nationwide field reach and integrated mobilisation support for firms delivering development-financed assignments."
        ctaText="Submit Teaming Opportunity"
        ctaHref="#partner-form"
      />

      <main>
        {/* 2. What FSM brings to a bid */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Consortium Value"
              title="What FSM Brings to a Bid"
              subtitle="Our integrated model enables international partners to access the right expertise at the right level while strengthening coordination, accountability, and implementation efficiency:"
            />
            <ValueColumns items={crossBorderCapabilities} className="mt-12" />
          </div>
        </section>

        {/* 3. The FSM Cross-Border Delivery Model */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Delivery Architecture"
              title="The FSM Cross-Border Delivery Model"
              subtitle="An 8-step delivery chain connecting client requirements to verified, ground-level results:"
            />
            <div className="mt-12">
              <CrossBorderDeliveryChain />
            </div>
          </div>
        </section>

        {/* 4. Assignment Support */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Operational Protocol
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[34px] font-bold text-[#07131e] tracking-tight leading-tight">
                  Integrated Assignment Support
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[#5A6876]">
                  Successful technical delivery depends not only on the quality of expertise deployed, but also on effective mobilization, operational readiness, safety, and in-country coordination.
                </p>
                <div className="mt-6 rounded-[16px] bg-[#F4F5F7] p-5 border border-gray-200/80">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#07131e] font-semibold block mb-1">
                    Regulatory Qualifier
                  </span>
                  <p className="text-[13px] text-[#5A6876] leading-relaxed">
                    Subject to applicable immigration laws, national regulations, security requirements and client contractual arrangements.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {assignmentSupportItems.map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[14px] bg-[#F4F5F7] p-4 border border-gray-200/70"
                  >
                    <span className="font-mono text-[11.5px] font-bold text-[#2F5FA8] mt-0.5">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="text-[13.5px] font-medium text-[#07131e] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Ways to team with us */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Commercial Frameworks"
              title="Ways to Team With Us"
              subtitle="We adapt our commercial engagement to match the structuring requirements of your proposal:"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {teamingWays.map((way) => (
                <div
                  key={way.title}
                  className="rounded-[20px] bg-white p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-[18px] font-bold text-[#07131e] tracking-tight">
                      {way.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-[#5A6876]">
                      {way.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Partnership enquiry form */}
        <section id="partner-form" className="px-6 md:px-12 py-16 md:py-24 bg-white border-b border-gray-100 scroll-mt-20">
          <div className="mx-auto max-w-4xl">
            <DarkCard
              badge="Teaming Collaboration"
              title="Submit a Teaming Opportunity"
              subtitle="Connect with our partnership directors to explore consortium structuring, RFP collaboration, or operational subcontracting:"
            >
              <div className="mt-6">
                <PartnerEnquiryForm />
              </div>
            </DarkCard>

            {/* 7. Closing profile line */}
            <div className="mt-12 text-center max-w-2xl mx-auto">
              <p className="text-[16px] italic text-[#5A6876] leading-relaxed">
                &ldquo;FSM does not simply identify experts. We mobilize, coordinate and support integrated technical teams from deployment through delivery.&rdquo;
              </p>
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
