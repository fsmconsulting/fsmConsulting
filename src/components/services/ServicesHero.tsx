export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-20 pb-20 text-white md:pt-28 md:pb-28">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Top Eyebrow Tag */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-bright">
            Services &amp; Capabilities &middot; Practice Architecture
          </span>
          <span className="font-mono text-[11px] text-white/50">
            14 Practice Areas &bull; Pan-African Reach
          </span>
        </div>

        {/* Main Heading */}
        <div className="mt-6 max-w-4xl">
          <h1 className="font-serif text-[36px] font-normal leading-[1.12] text-white md:text-[52px] lg:text-[58px]">
            Integrated Technical, Fiduciary &amp; Delivery Capabilities.
          </h1>
          <div className="my-6 h-0.5 w-20 bg-white/30" />
          <p className="max-w-3xl text-[17px] leading-relaxed text-white/80 md:text-[19px]">
            We provide governments, development partners, international financial institutions, and the private sector with an end-to-end suite of 14 integrated practice areas, from program conceptualization and project readiness (D-Ready) to embedded delivery units, independent verification, and digital transformation.
          </p>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          <div className="border-l-2 border-white/30 pl-4">
            <span className="block font-serif text-[24px] font-semibold text-white md:text-[28px]">
              14 Practices
            </span>
            <span className="text-[13px] text-white/70">
              Four specialized capability clusters
            </span>
          </div>

          <div className="border-l-2 border-white/30 pl-4">
            <span className="block font-serif text-[24px] font-semibold text-white md:text-[28px]">
              Independent
            </span>
            <span className="text-[13px] text-white/70">
              Rigorous verification &amp; quality assurance
            </span>
          </div>

          <div className="border-l-2 border-white/30 pl-4">
            <span className="block font-serif text-[24px] font-semibold text-white md:text-[28px]">
              Pan-African
            </span>
            <span className="text-[13px] text-white/70">
              Rapid expert deployment across regions
            </span>
          </div>

          <div className="border-l-2 border-white/30 pl-4">
            <span className="block font-serif text-[24px] font-semibold text-white md:text-[28px]">
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
