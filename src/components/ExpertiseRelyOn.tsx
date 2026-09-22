import Image from "next/image";
import Link from "next/link";
import { founderData } from "@/data/founderData";

const boardMembers = [
  { name: "Rabiu Ademoh", discipline: "Digital, Data & Technology" },
  { name: "Hadi Abdullah", discipline: "Infrastructure & Development" },
  { name: "Jafar Garba", discipline: "Agriculture, Food Systems & Agribusiness" },
  { name: "Umar Jibril", discipline: "Legal & Compliance" },
];

/**
 * "Expertise you can rely on"
 * Matches Conceptzilla Reference:
 * - Leadership narrative and text-only chips for the board
 * - Prominent portrait card of the Chief Executive & Managing Director
 * - Link to /about#leadership
 */
export default function ExpertiseRelyOn() {
  return (
    <section className="bg-white px-6 md:px-12 py-16 md:py-24 border-t border-gray-100" aria-labelledby="expertise-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Narrative, Board Chips, and Link */}
          <div className="lg:col-span-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
              Leadership &amp; Governance
            </span>
            <h2 id="expertise-heading" className="mt-3 text-[32px] md:text-[42px] font-bold text-[#07131e] tracking-tight leading-tight">
              Expertise you can rely on
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-600 max-w-2xl">
              FSM is led by development practitioners with hands-on experience across World Bank-supported programmes, social protection, governance and institutional strengthening, backed by a board spanning digital, infrastructure, agriculture and legal disciplines.
            </p>

            {/* Board member text-only chips */}
            <div className="mt-8">
              <span className="block font-mono text-[11px] uppercase tracking-wider text-gray-400 mb-3">
                Advisory &amp; Board Bench
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {boardMembers.map((member) => (
                  <div
                    key={member.name}
                    className="flex flex-col rounded-[16px] border border-gray-200/80 bg-[#F4F5F7] p-4 transition-all duration-200 hover:border-[#2F5FA8]/40 hover:bg-white"
                  >
                    <span className="text-[14.5px] font-bold text-[#07131e]">
                      {member.name}
                    </span>
                    <span className="mt-0.5 text-[12.5px] text-gray-500 font-medium">
                      {member.discipline}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Link to about leadership */}
            <div className="mt-8">
              <Link
                href="/about#leadership"
                className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-[#2F5FA8] hover:text-[#264E8C] transition-colors"
              >
                <span>Meet our leadership</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Founder Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="group relative w-full max-w-md overflow-hidden rounded-[24px] border border-gray-100 bg-[#07131e] shadow-xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={founderData.photoPath}
                  alt={founderData.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07131e] via-[#07131e]/20 to-transparent" />
              </div>

              {/* Portrait Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#9BC2F5]">
                  Executive Leadership
                </span>
                <h3 className="mt-1 text-[20px] font-bold tracking-tight text-white">
                  {founderData.name}
                </h3>
                <p className="mt-0.5 text-[13.5px] text-white/80">
                  Chief Executive &amp; Managing Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
