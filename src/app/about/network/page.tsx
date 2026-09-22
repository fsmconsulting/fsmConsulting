import type { Metadata } from "next";
import { CheckCircle2, Globe, Building, Users, BookOpen } from "lucide-react";
import { InteriorHero, SectionHeader, ValueColumns, CtaBand } from "@/components/templates";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "National Reach & Regional Access | Delivery Network | FSM Consulting Limited",
  description:
    "Explore FSM Consulting Limited's nationwide operational capacity across all 36 Nigerian states and the FCT, plus strategic partnership access across West, Central, and East Africa.",
};

const deliveryChannels = [
  {
    icon: Building,
    title: "Direct Corporate Presence",
    body: "Assignments delivered through FSM Consulting Limited's established corporate and operational structures.",
  },
  {
    icon: Globe,
    title: "Strategic Partnership & Consortium Access",
    body: "Country-level delivery supported through partnerships, consortium arrangements, local professional firms and implementation organisations with relevant sectoral and institutional knowledge.",
  },
  {
    icon: Users,
    title: "Multidisciplinary Professional Network",
    body: "Access to vetted national, regional and international consultants, technical specialists, researchers, field practitioners and sector experts who can be mobilized according to assignment requirements.",
  },
  {
    icon: BookOpen,
    title: "International Knowledge Exchange",
    body: "Facilitation of comparative learning, peer exchange and technical collaboration between African institutions and relevant international expertise, including Africa–Asia knowledge exchange where appropriate.",
  },
];

const networkSupports = [
  "Multi-country programme implementation",
  "Regional technical assistance",
  "Cross-border project preparation and implementation support",
  "Independent verification and third-party monitoring",
  "Institutional assessments and diagnostics",
  "Field research, surveys and data collection",
  "Policy and institutional advisory",
  "Regional capacity building and peer learning",
  "Knowledge exchange and South-South cooperation",
  "Rapid deployment of technical specialists",
  "Local consultant and field team mobilization",
  "Stakeholder and community engagement",
  "Complex and time-sensitive assignments requiring coordinated deployment across multiple locations",
];

const partnerCountries = [
  { country: "Senegal", region: "West Africa", accessType: "Partnership & professional network access" },
  { country: "Sierra Leone", region: "West Africa", accessType: "Partnership & professional network access" },
  { country: "Cameroon", region: "Central Africa", accessType: "Partnership & professional network access" },
  { country: "Kenya", region: "East Africa", accessType: "Partnership & professional network access" },
  { country: "Uganda", region: "East Africa", accessType: "Partnership & professional network access" },
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
        title="National Reach, Regional Access"
        subtitle="FSM Consulting Limited is built for cross-border delivery. Headquartered in Nigeria, FSM is developing a regional delivery network that enables us to connect clients with the right expertise, partners and implementation capacity across Africa and international markets."
        ctaText="Partner With Us"
        ctaHref="/partner-with-us"
      />

      <main>
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  National Presence
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-bold text-[#07131e] tracking-tight leading-tight">
                  All 36 Nigerian States & the Federal Capital Territory
                </h2>
                <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-[#5A6876]">
                  <p>
                    One of FSM Consulting Limited’s greatest strengths is our ability to mobilize qualified professionals across all thirty-six states of Nigeria and the Federal Capital Territory. Through our extensive network of regional and sector specialists, we are able to access communities, institutions, project sites, and stakeholders in even the most remote and underserved locations.
                  </p>
                  <p>
                    Our consultants possess deep understanding of local governance systems, cultural dynamics, languages, and implementation environments, enabling us to engage effectively with beneficiaries and stakeholders at every level. This national reach allows us to provide real-time field verification, independent oversight, and direct engagement that many traditional consulting firms are unable to achieve.
                  </p>
                  <p className="font-medium text-[#07131e]">
                    Where others see difficult terrain, limited access, or implementation challenges, FSM Consulting Limited sees opportunities to generate evidence, build trust, and ensure accountability.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-[24px] bg-[#F4F5F7] p-8 border border-gray-200/80 shadow-xs flex flex-col items-center justify-center">
                  <div className="w-full max-w-[320px] aspect-[4/3] flex items-center justify-center relative">
                    <svg
                      viewBox="0 0 400 300"
                      className="w-full h-full text-[#2F5FA8]/20 stroke-[#2F5FA8] stroke-[1.5]"
                      fill="currentColor"
                      aria-label="Map illustration of Nigeria representing nationwide operational coverage"
                    >
                      <path d="M 50 120 C 60 70, 110 50, 160 40 C 220 30, 290 35, 340 60 C 370 75, 385 100, 375 140 C 365 170, 360 210, 320 230 C 280 250, 240 240, 210 260 C 180 270, 140 275, 110 250 C 80 230, 70 190, 60 160 Z" />
                      <path d="M 160 40 L 175 150 L 210 260" strokeDasharray="3,3" fill="none" />
                      <path d="M 60 160 L 175 150 L 365 170" strokeDasharray="3,3" fill="none" />
                      <path d="M 175 150 L 340 60" strokeDasharray="3,3" fill="none" />
                    </svg>
                    <div className="absolute top-[48%] left-[45%] flex items-center gap-1.5 bg-[#07131e] text-white px-3 py-1 rounded-full text-[11px] font-mono shadow-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2F5FA8]" />
                      <span>Abuja (HQ)</span>
                    </div>
                  </div>
                  <p className="mt-4 font-mono text-[11.5px] uppercase tracking-wider text-gray-500 text-center">
                    Full Coverage: 36 States + Federal Capital Territory
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Regional & International Access"
              title="Built for Cross-Border Delivery"
              subtitle="Our strength is not limited to where our headquarters is located. Through strategic partnerships, country-based collaborators, professional networks and multidisciplinary experts, FSM can build country-specific delivery capacity around the requirements of each assignment."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
              <div className="lg:col-span-7">
                <h3 className="text-[20px] font-bold text-[#07131e] tracking-tight">
                  Partnership & Professional Network Access
                </h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-[#5A6876]">
                  Our growing network provides access to expertise and delivery relationships across West, Central and East Africa, including strategic partnerships and professional networks in countries such as Senegal, Sierra Leone, Cameroon, Kenya and Uganda, with further expansion across the continent.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {partnerCountries.map((pc) => (
                    <div
                      key={pc.country}
                      className="rounded-[16px] bg-white p-5 border border-gray-200/80 shadow-xs"
                    >
                      <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#2F5FA8] font-semibold">
                        {pc.region}
                      </span>
                      <h4 className="text-[17px] font-bold text-[#07131e] tracking-tight mt-1">
                        {pc.country}
                      </h4>
                      <p className="mt-1 text-[12.5px] text-[#5A6876]">
                        {pc.accessType}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-[24px] bg-white p-8 border border-gray-200/80 shadow-xs">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#2F5FA8]">
                    Technical Cooperation
                  </span>
                  <h3 className="text-[19px] font-bold text-[#07131e] tracking-tight mt-2">
                    Africa–Asia Knowledge Exchange
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[#5A6876]">
                    We see significant value in Africa–Asia knowledge exchange and technical cooperation, creating opportunities to connect African development challenges with relevant international experience, innovation and specialist expertise.
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#5A6876]">
                    This enables comparative learning, peer exchange, and cross-pollination of delivery models across both continents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Delivery Architecture"
              title="Four Complementary Delivery Channels"
              subtitle="How FSM structures country access and assembles the right combination of global expertise, regional experience, and local knowledge:"
            />

            <div className="mt-12">
              <ValueColumns items={deliveryChannels} />
            </div>
          </div>
        </section>

        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Operational Capabilities"
              title="What Our Network Supports"
              subtitle="Our regional and international delivery network is configured to deliver thirteen core operational requirements:"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {networkSupports.map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] bg-white p-5 border border-gray-200/80 shadow-xs flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#2F5FA8] shrink-0 mt-0.5" />
                  <span className="text-[14px] font-medium text-gray-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-16 md:py-20 bg-[#07131e] text-white">
          <div className="mx-auto max-w-4xl text-center">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9BC2F5]">
              Delivery Principle
            </span>
            <blockquote className="mt-4 text-[24px] sm:text-[30px] font-bold text-white tracking-tight leading-snug">
              “Global expertise where required, regional access where valuable, and local capability where delivery matters most.”
            </blockquote>
            <p className="mt-3 font-mono text-[12px] uppercase tracking-wider text-gray-400">
              — FSM Consulting Limited Delivery Philosophy
            </p>
          </div>
        </section>

        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
