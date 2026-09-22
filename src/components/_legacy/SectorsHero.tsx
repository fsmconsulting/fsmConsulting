export default function SectorsHero() {
  return (
    <section className="relative overflow-hidden bg-[#07131e] bg-gradient-to-b from-[#07131e] to-[#0b1c2e] pt-20 pb-20 text-white md:pt-28 md:pb-28 border-b border-white/10">
      {/* Brand blue subtle glow */}
      <div className="pointer-events-none absolute -top-32 right-10 h-80 w-80 rounded-full bg-[#2F5FA8]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        {/* Top Eyebrow Tag */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#2F5FA8]/15 border border-[#2F5FA8]/30 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-wider text-[#9BC2F5]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2F5FA8]" />
          <span>Sectoral Depth &middot; 15 Development Domains</span>
        </div>

        {/* Main Heading matching Homepage */}
        <div className="mt-4 max-w-4xl">
          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-bold leading-[1.08] tracking-tight text-white">
            Deep Domain Expertise Across Africa&rsquo;s Critical Development Sectors.
          </h1>
          <div className="my-6 h-1 w-20 rounded-full bg-[#2F5FA8]" />
          <p className="max-w-3xl text-[17px] leading-relaxed text-white/80 md:text-[19px]">
            Transforming policy into action across agriculture, energy, health, infrastructure, climate, governance, and jobs. We deploy multidisciplinary teams with profound technical knowledge, contextual mastery, and field-tested delivery frameworks.
          </p>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          <div className="border-l-2 border-[#2F5FA8] pl-4">
            <span className="block text-[24px] font-bold text-white md:text-[28px]">
              15 Verticals
            </span>
            <span className="text-[13px] text-white/70">
              Economic &amp; social infrastructure sectors
            </span>
          </div>

          <div className="border-l-2 border-[#2F5FA8] pl-4">
            <span className="block text-[24px] font-bold text-white md:text-[28px]">
              Full Cycle
            </span>
            <span className="text-[13px] text-white/70">
              Readiness through verification &amp; tracking
            </span>
          </div>

          <div className="border-l-2 border-[#2F5FA8] pl-4">
            <span className="block text-[24px] font-bold text-white md:text-[28px]">
              Pan-African
            </span>
            <span className="text-[13px] text-white/70">
              Sovereign &amp; cross-border operations
            </span>
          </div>

          <div className="border-l-2 border-[#2F5FA8] pl-4">
            <span className="block text-[24px] font-bold text-white md:text-[28px]">
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
