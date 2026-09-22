import type { Metadata } from "next";
import { InteriorHero, PersonCard, SectionHeader, CtaBand } from "@/components/templates";
import { founderData } from "@/data/founderData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Leadership & Governance | FSM Consulting Limited",
  description:
    "Meet the leadership, board directors, and technical experts guiding FSM Consulting Limited across development delivery, project assurance, and public policy.",
};

const boardDirectors = [
  {
    name: "Rabiu Ademoh",
    role: "Director · Digital, Data & Technology",
    bio: "Over two decades of experience designing and deploying mission-critical management information systems, digital governance platforms, and enterprise data solutions across Africa.",
    disciplines: ["Management Information Systems", "Digital Governance", "Data Labs", "Enterprise Architecture"],
  },
  {
    name: "Hadi Abdullah",
    role: "Director · Infrastructure & Development",
    bio: "Specialist in large-scale infrastructure delivery, capital project appraisal, public-private partnerships (PPPs), and technical audit oversight across transportation and energy sectors.",
    disciplines: ["Infrastructure Engineering", "PPP Advisory", "Capital Projects", "Procurement Oversight"],
  },
  {
    name: "Jafar Garba",
    role: "Director · Agriculture & Food Systems",
    bio: "Agricultural economist with extensive background in value chain development, inclusive agribusiness frameworks (FRILIA), rural finance, and food system resilience.",
    disciplines: ["Agribusiness Value Chains", "FRILIA Frameworks", "Rural Development", "Food Security"],
  },
  {
    name: "Umar Jibril",
    role: "Director · Legal & Compliance",
    bio: "Seasoned legal practitioner specializing in public procurement governance, statutory compliance, dispute prevention, and fiduciary risk management under international financing standards.",
    disciplines: ["Public Procurement Law", "Regulatory Compliance", "Fiduciary Governance", "Contract Management"],
  },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Leadership" },
        ]}
        title="Leadership, Governance & Advisory Bench"
        subtitle="Experienced development practitioners, sector directors, and governance experts dedicated to bridging ambitious strategy with disciplined ground-level execution."
        ctaText="Join Our Expert Bench"
        ctaHref="/experts"
      />

      <main>
        {/* Managing Director & Founder Section */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Executive Leadership"
              title="Chief Executive & Managing Director"
              subtitle="Providing institutional vision, high-stakes development advisory, and strategic oversight."
            />

            <PersonCard
              name={founderData.name}
              role={founderData.title}
              bio={founderData.bio}
              photoSrc={founderData.photoPath}
              photoAlt={founderData.photoAlt}
              disciplines={[
                "World Bank-Supported Operations",
                "Social Protection Delivery",
                "Community-Driven Development",
                "Results-Based Verification",
              ]}
              className="mt-6 shadow-sm"
            />
          </div>
        </section>

        {/* Advisory & Board Directors */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Board of Directors"
              title="Governance & Technical Directors"
              subtitle="Guiding FSM's institutional standards, fiduciary independence, and multidisciplinary practice disciplines."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {boardDirectors.map((director) => (
                <PersonCard
                  key={director.name}
                  name={director.name}
                  role={director.role}
                  bio={director.bio}
                  disciplines={director.disciplines}
                  variant="vertical"
                  className="bg-white hover:shadow-md transition-shadow"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Global Key Experts & Discipline Roster */}
        <section className="px-6 md:px-12 py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Multidisciplinary Bench
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[34px] font-bold text-[#07131e] tracking-tight leading-tight">
                  Curated technical talent for complex assignments
                </h2>
                <p className="mt-4 text-[15.5px] leading-relaxed text-[#5A6876]">
                  Beyond our executive team and directors, FSM maintains a curated, vetted roster of senior development economists, licensed engineers, MEAL specialists, and safeguard practitioners.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5A6876]">
                  Every expert deployment is tailored to the precise fiduciary, regulatory, and linguistic requirements of the client assignment.
                </p>
              </div>

              <div className="lg:col-span-6 rounded-[24px] bg-[#F4F5F7] p-8 md:p-10 border border-gray-200/80">
                <h3 className="text-[18px] font-bold text-[#07131e] tracking-tight">
                  Expert Selection Principles
                </h3>
                <ul className="mt-5 space-y-3.5 text-[14px] text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#2F5FA8] font-bold">&bull;</span>
                    <span><strong>Verified Track Record:</strong> Minimum 10+ years of operational experience on multilateral or donor-funded projects.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#2F5FA8] font-bold">&bull;</span>
                    <span><strong>Independence Safeguards:</strong> Strict conflict-of-interest screening prior to any IVA or monitoring engagement.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#2F5FA8] font-bold">&bull;</span>
                    <span><strong>Ground-Level Fluency:</strong> Contextual and sub-national understanding across Nigeria and regional partner markets.</span>
                  </li>
                </ul>
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
