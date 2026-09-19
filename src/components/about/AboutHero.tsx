export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-20 pb-20 text-white md:pt-28 md:pb-28">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Top Eyebrow Tag */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] text-white/50">
            Abuja, Nigeria &bull; Pan-African Delivery
          </span>
        </div>

        {/* Main Heading */}
        <div className="mt-6 max-w-4xl">
          <h1 className="font-serif text-[36px] font-normal leading-[1.12] text-white md:text-[52px] lg:text-[58px]">
            Africa&rsquo;s Development Delivery, Implementation Acceleration &amp; Project Assurance Platform.
          </h1>
          <div className="my-6 h-0.5 w-20 bg-white/30" />
          <p className="max-w-3xl text-[17px] leading-relaxed text-white/80 md:text-[19px]">
            Bridging the gap between ambitious strategy and ground-level execution. We partner with governments, development partners, international financial institutions, and the private sector to translate investments into measurable results, institutional strength, and sustainable impact.
          </p>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          <div className="border-l-2 border-white/30 pl-4">
            <span className="block font-serif text-[24px] font-semibold text-white md:text-[28px]">
              36 States + FCT
            </span>
            <span className="text-[13px] text-white/70">
              Complete nationwide operational reach across Nigeria
            </span>
          </div>

          <div className="border-l-2 border-white/30 pl-4">
            <span className="block font-serif text-[24px] font-semibold text-white md:text-[28px]">
              Pan-African
            </span>
            <span className="text-[13px] text-white/70">
              West, Central &amp; East Africa regional delivery hubs
            </span>
          </div>

          <div className="border-l-2 border-white/30 pl-4">
            <span className="block font-serif text-[24px] font-semibold text-white md:text-[28px]">
              Multidisciplinary
            </span>
            <span className="text-[13px] text-white/70">
              Economists, engineers, MEAL, digital &amp; safeguard specialists
            </span>
          </div>

          <div className="border-l-2 border-white/30 pl-4">
            <span className="block font-serif text-[24px] font-semibold text-white md:text-[28px]">
              Outcome-Driven
            </span>
            <span className="text-[13px] text-white/70">
              Measuring success through verifiable socio-economic impact
            </span>
          </div>
        </div>

        {/* CTA links */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="/services"
            className="pill-btn inline-flex items-center border border-white/30 px-6 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            <span>Explore Services &amp; Capabilities</span>
            <span className="pill-btn-arrow ml-2">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
