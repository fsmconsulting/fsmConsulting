import type { Metadata } from "next";
import Image from "next/image";
import { InteriorHero, SectionHeader, CtaBand } from "@/components/templates";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Board of Directors & Executive Leadership | FSM Consulting Limited",
  description:
    "Meet the Board of Directors and Executive Leadership guiding FSM Consulting Limited across development delivery, project assurance, and public policy.",
};

const boardDirectors = [
  {
    name: "Rabiu Ademoh",
    title: "Non-Executive Director, Digital, Data & Technology",
    initials: "RA",
  },
  {
    name: "Hadi Abdullah",
    title: "Non-Executive Director, Infrastructure & Development",
    initials: "HA",
  },
  {
    name: "Jafar Garba",
    title: "Non-Executive Director, Agriculture, Food Systems & Agribusiness",
    initials: "JG",
  },
  {
    name: "Umar Jibril",
    title: "Non-Executive Director, Legal and Compliance",
    initials: "UJ",
  },
];

const ceoResponsibilities = [
  "Strategic leadership and corporate direction",
  "Development-finance and institutional partnerships",
  "Business development, client relationships and strategic engagements",
  "Technical quality and development effectiveness",
  "Mobilization and management of multidisciplinary expert teams",
  "Regional and international growth and partnerships",
  "Corporate governance, integrity and accountability",
  "Oversight of major assignments delivery, assurance, and institutional performance",
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
        title="Board of Directors and Executive Leadership"
        subtitle="Bringing together strategic leadership, governance oversight, and technical delivery capability to support complex development assignments."
        ctaText="Explore Our Approach"
        ctaHref="/approach"
      />

      <main>
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Executive Leadership"
              title="Chief Executive and Managing Director"
              subtitle="Providing strategic leadership, partnership cultivation, and institutional governance."
            />

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start rounded-[28px] bg-[#F4F5F7] p-8 md:p-12 border border-gray-200/80">
              <div className="lg:col-span-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-gray-200 shadow-md border border-gray-200">
                  <Image
                    src="/Founder.PNG"
                    alt="Fatima Sadiq Mohammed, Chief Executive and Managing Director"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 360px"
                    priority
                  />
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-[26px] sm:text-[30px] font-bold text-[#07131e] tracking-tight">
                    Fatima Sadiq Mohammed
                  </h3>
                  <p className="mt-1 text-[15px] font-semibold text-[#2F5FA8]">
                    Chief Executive and Managing Director
                  </p>

                  <p className="mt-4 text-[15.5px] leading-relaxed text-[#5A6876]">
                    A development and governance professional with experience spanning social protection, development policy, institutional strengthening, disaster risk management, monitoring and evaluation, and World Bank-supported programmes. She has provided technical and advisory support for government and development-finance programmes, with a strong focus on translating policy and investment into practical, measurable results. As Founder and Principal Shareholder of FSM Consulting Limited, she provides the strategic leadership that brings together multidisciplinary expertise, partnerships and delivery capability to support complex development assignments across Nigeria and beyond.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200/80">
                  <h4 className="font-mono text-[12px] font-semibold uppercase tracking-wider text-gray-500">
                    Key Areas of Responsibility:
                  </h4>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13.5px] text-gray-800">
                    {ceoResponsibilities.map((resp) => (
                      <li key={resp} className="flex items-start gap-2.5">
                        <span className="text-[#2F5FA8] font-bold text-[16px] leading-none mt-0.5">&bull;</span>
                        <span className="leading-snug">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Governance Oversight"
              title="Board of Directors"
              subtitle="Independent non-executive directors guiding institutional governance, fiduciary integrity, and technical standards."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {boardDirectors.map((director) => (
                <div
                  key={director.name}
                  className="rounded-[22px] bg-white p-6 sm:p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#07131e] text-white font-mono text-[16px] font-bold tracking-wider mb-5">
                      {director.initials}
                    </div>
                    <h3 className="text-[18px] font-bold text-[#07131e] tracking-tight">
                      {director.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] font-medium leading-snug text-[#2F5FA8]">
                      {director.title}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-[12px] italic text-[#5A6876]">
                      Full profile forthcoming
                    </span>
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
