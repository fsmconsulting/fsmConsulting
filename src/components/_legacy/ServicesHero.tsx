export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#07131e] bg-gradient-to-b from-[#07131e] to-[#0b1c2e] pt-20 pb-20 text-white md:pt-28 md:pb-28 border-b border-white/10">
      {/* Brand blue subtle glow */}
      <div className="pointer-events-none absolute -top-32 right-10 h-80 w-80 rounded-full bg-[#2F5FA8]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        {/* Top Eyebrow Tag */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#2F5FA8]/15 border border-[#2F5FA8]/30 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-wider text-[#9BC2F5]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2F5FA8]" />
          <span>Services &amp; Capabilities &middot; Practice Architecture</span>
        </div>

        {/* Main Heading matching Homepage */}
        <div className="mt-4 max-w-4xl">
          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-bold leading-[1.08] tracking-tight text-white">
            Integrated Technical, Fiduciary &amp; Delivery Capabilities.
          </h1>
          <div className="my-6 h-1 w-20 rounded-full bg-[#2F5FA8]" />
          <p className="max-w-3xl text-[17px] leading-relaxed text-white/80 md:text-[19px]">
            We provide governments, development partners, international financial institutions, and the private sector with an end-to-end suite of 14 integrated practice areas, from program conceptualization and project readiness (D-Ready) to embedded delivery units, independent verification, and digital transformation.
          </p>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          <div className="border-l-2 border-[#2F5FA8] pl-4">
            <span className="block text-[24px] font-bold text-white md:text-[28px]">
              14 Practices
            </span>
            <span className="text-[13px] text-white/70">
              Four specialized capability clusters
            </span>
          </div>

          <div className="border-l-2 border-[#2F5FA8] pl-4">
            <span className="block text-[24px] font-bold text-white md:text-[28px]">
              Independent
            </span>
            <span className="text-[13px] text-white/70">
              Rigorous verification &amp; quality assurance
            </span>
          </div>

          <div className="border-l-2 border-[#2F5FA8] pl-4">
            <span className="block text-[24px] font-bold text-white md:text-[28px]">
              Pan-African
            </span>
            <span className="text-[13px] text-white/70">
              Rapid expert deployment across regions
            </span>
          </div>

          <div className="border-l-2 border-[#2F5FA8] pl-4">
            <span className="block text-[24px] font-bold text-white md:text-[28px]">
              Outcome-Led
            </span>
            <span className="text-[13px] text-white/70">
              Focused on tangible public value
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
