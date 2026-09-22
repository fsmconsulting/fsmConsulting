import type { Metadata } from "next";
import { MapPin, Globe, CheckCircle2, ShieldCheck, Layers } from "lucide-react";
import { InteriorHero, SectionHeader, SplitCards, NumberList, CtaBand } from "@/components/templates";
import { partnerAccessText } from "@/data/siteData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Delivery Network & Regional Reach | FSM Consulting Limited",
  description:
    "Explore FSM Consulting Limited's nationwide operational presence across all 36 Nigerian states and FCT, plus strategic delivery partner networks across West, Central, and East Africa.",
};

const networkMetrics = [
  {
    value: "36",
    unit: "+ FCT",
    label: "States with operational and field enumerator reach across Nigeria",
    icon: MapPin,
  },
  {
    value: "5+",
    label: "Partner countries across West, Central, and East Africa",
    icon: Globe,
  },
  {
    value: "14",
    label: "Integrated development practice areas supported in the field",
    icon: Layers,
  },
  {
    value: "100%",
    label: "Compliance with local statutory, security, and duty-of-care protocols",
    icon: ShieldCheck,
  },
];

const geopoliticalZones = [
  {
    tag: "North West & North East",
    title: "Northern Agricultural & Fragility Corridors",
    desc: "Active field presence for agricultural value chain monitoring, rural electrification verification, nutrition surveys, and social protection disbursements.",
  },
  {
    tag: "North Central",
    title: "Federal Hub & Inter-State Governance",
    desc: "Coordinated from Abuja HQ, delivering fast-response advisory to federal MDAs, sub-national PFM diagnostics, and regional infrastructure reviews.",
  },
  {
    tag: "South West",
    title: "Commercial & Industrial Development",
    desc: "Specialized in industrial park due diligence, digital economy initiatives, port logistics, and municipal PPP transaction advisory.",
  },
  {
    tag: "South South & South East",
    title: "Resource Corridors & Environmental Safeguards",
    desc: "Extensive experience in coastal environmental audits, ESMP compliance, community resettlement frameworks, and youth employment interventions.",
  },
];

const regionalPartnerships = [
  {
    country: "Senegal",
    focus: "Francophone West Africa & Institutional Reforms",
    detail: "Collaboration with local advisory firms on public sector modernization and regional trade facilitation frameworks.",
  },
  {
    country: "Sierra Leone",
    focus: "Post-Conflict Recovery & Governance",
    detail: "Partner network facilitating capacity development, social safety net assessments, and health sector monitoring.",
  },
  {
    country: "Cameroon",
    focus: "Central African Cross-Border Initiatives",
    detail: "Bilingual technical specialists collaborating on transport corridors, forestry safeguards, and community engagement.",
  },
  {
    country: "Kenya",
    focus: "East African Digital & Agriculture Hub",
    detail: "Knowledge exchange and technical expert mobilization on digital monitoring platforms and climate-smart agriculture.",
  },
  {
    country: "Uganda",
    focus: "Refugee Hosting & Social Accountability",
    detail: "Joint research relationships focused on third-party verification, livelihood restoration, and community-driven development.",
  },
];

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Delivery Network" },
        ]}
        title="Nationwide Reach & Regional Partnership Model"
        subtitle="Headquartered in Abuja with verified field reach across all 36 Nigerian states and strategic delivery partnerships across West, Central, and East Africa."
        ctaText="Partner With Us"
        ctaHref="/partner-with-us"
      />

      <main>
        {/* Scale & Footprint */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Verified Footprint
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[34px] font-bold text-[#07131e] tracking-tight leading-tight">
                  Field reach grounded in local execution
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-[#5A6876]">
                  Nigeria is a continental economy of continental complexity. FSM&rsquo;s delivery model is built around verified sub-national reach across every geopolitical zone, backed by trusted institutional access.
                </p>
                <div className="mt-6 rounded-[16px] bg-[#F4F5F7] p-4 border border-gray-200/60 text-[13px] text-[#5A6876]">
                  <strong className="text-[#07131e]">Official Headquarters:</strong> Abuja, Nigeria.<br />
                  <span className="text-[#2F5FA8] font-semibold">{partnerAccessText}</span>
                </div>
              </div>

              <div className="lg:col-span-7">
                <NumberList items={networkMetrics} />
              </div>
            </div>
          </div>
        </section>

        {/* Sub-national Zonal Coverage */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SplitCards
              eyebrow="Sub-National Capability"
              title="Operational coverage across Nigeria"
              subtitle="Our decentralized field networks enable immediate deployment of enumerators, technical monitors, and safeguard specialists in any LGA across the country."
              cards={geopoliticalZones}
            />
          </div>
        </section>

        {/* Regional Partnership Model */}
        <section className="px-6 md:px-12 py-16 md:py-24 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Cross-Border Delivery Model"
              title="Regional Partnership Network"
              subtitle="Rather than establishing unsustainable brick-and-mortar overhead, FSM operates through vetted, established consulting partners and professional networks across key African markets:"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {regionalPartnerships.map((p) => (
                <div
                  key={p.country}
                  className="rounded-[20px] bg-[#F4F5F7] p-7 border border-gray-200/70 flex flex-col justify-between hover:border-[#2F5FA8]/50 hover:bg-white transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[20px] font-bold text-[#07131e]">
                        {p.country}
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 font-mono text-[11px] font-semibold text-[#2F5FA8] border border-gray-200/60">
                        Delivery Partner
                      </span>
                    </div>
                    <h4 className="text-[14.5px] font-bold text-[#07131e]">
                      {p.focus}
                    </h4>
                    <p className="mt-2 text-[13.5px] text-[#5A6876] leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-gray-200/60 flex items-center gap-1.5 text-[12px] font-mono text-gray-500">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#2F5FA8]" />
                    <span>Cross-Border Assignment Access</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}

