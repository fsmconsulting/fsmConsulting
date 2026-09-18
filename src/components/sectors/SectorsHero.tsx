import HeroBackground from "@/components/HeroBackground";
import Nav from "@/components/Nav";

export default function SectorsHero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white min-h-[500px] md:min-h-[580px] flex flex-col justify-between">
      <HeroBackground
        src="/HeroBg.webp"
        alt="African development sectors and infrastructure"
      />
      <Nav transparent />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-14 md:px-10 md:pt-36 md:pb-16 flex-1 flex flex-col justify-between">
        {/* Top Eyebrow Tag */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-bright">
            Sectoral Depth &middot; 15 Development Domains
          </span>
          <span className="font-mono text-[11px] text-white/50">
            Multidisciplinary Bench &bull; Pan-African Reach
          </span>
        </div>

        {/* Main Heading */}
        <div className="mt-6 max-w-4xl">
          <h1 className="font-serif text-[36px] font-normal leading-[1.12] text-white md:text-[52px] lg:text-[58px]">
            Deep Domain Expertise Across Africa&rsquo;s Critical Development Sectors.
          </h1>
          <div className="my-6 h-0.5 w-20 bg-white/30" />
          <p className="max-w-3xl text-[17px] leading-relaxed text-white/80 md:text-[19px]">
            Transforming policy into action across agriculture, energy, health, infrastructure, climate, governance, and jobs. We deploy multidisciplinary teams with profound technical knowledge, contextual mastery, and field-tested delivery frameworks.
          </p>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          <div className="border-l-2 border-white/30 pl-4">
            <span className="block font-serif text-[24px] font-semibold text-white md:text-[28px]">
              15 Verticals
            </span>
            <span className="text-[13px] text-white/70">
              Economic &amp; social infrastructure sectors
            </span>
          </div>

          <div className="border-l-2 border-white/30 pl-4">
            <span className="block font-serif text-[24px] font-semibold text-white md:text-[28px]">
              Full Cycle
            </span>
            <span className="text-[13px] text-white/70">
              Readiness through verification &amp; tracking
            </span>
          </div>

          <div className="border-l-2 border-white/30 pl-4">
            <span className="block font-serif text-[24px] font-semibold text-white md:text-[28px]">
              Pan-African
            </span>
            <span className="text-[13px] text-white/70">
              Sovereign &amp; cross-border operations
            </span>
          </div>

          <div className="border-l-2 border-white/30 pl-4">
            <span className="block font-serif text-[24px] font-semibold text-white md:text-[28px]">
              Fiduciary Trust
            </span>
            <span className="text-[13px] text-white/70">
              Meeting international financing benchmarks
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

