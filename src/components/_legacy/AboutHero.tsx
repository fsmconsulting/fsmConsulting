export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#07131e] bg-gradient-to-b from-[#07131e] to-[#0b1c2e] pt-20 pb-20 text-white md:pt-28 md:pb-28 border-b border-white/10">
      {/* Brand blue subtle glow */}
      <div className="pointer-events-none absolute -top-32 right-10 h-80 w-80 rounded-full bg-[#2F5FA8]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        {/* Top Eyebrow Tag */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#2F5FA8]/15 border border-[#2F5FA8]/30 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-wider text-[#9BC2F5]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2F5FA8]" />
          <span>Corporate Profile &middot; Institutional Overview</span>
        </div>

        {/* Main Heading matching Homepage */}
        <div className="mt-4 max-w-4xl">
          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-bold leading-[1.08] tracking-tight text-white">
            Africa&rsquo;s Development Delivery, Implementation Acceleration &amp; Project Assurance Platform.
          </h1>
          <div className="my-6 h-1 w-20 rounded-full bg-[#2F5FA8]" />
          <p className="max-w-3xl text-[17px] leading-relaxed text-white/80 md:text-[19px]">
            Bridging the gap between ambitious strategy and ground-level execution. We partner with governments, development partners, international financial institutions, and the private sector to translate investments into measurable results, institutional strength, and sustainable impact.
          </p>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          <div className="border-l-2 border-[#2F5FA8] pl-4">
            <span className="block text-[24px] font-bold text-white md:text-[28px]">
              36 States + FCT
            </span>
            <span className="text-[13px] text-white/70">
              Complete nationwide operational reach across Nigeria
            </span>
          </div>

          <div className="border-l-2 border-[#2F5FA8] pl-4">
            <span className="block text-[24px] font-bold text-white md:text-[28px]">
              Pan-African
            </span>
            <span className="text-[13px] text-white/70">
              West, Central &amp; East Africa regional delivery hubs
            </span>
          </div>

          <div className="border-l-2 border-[#2F5FA8] pl-4">
            <span className="block text-[24px] font-bold text-white md:text-[28px]">
              Multidisciplinary
            </span>
            <span className="text-[13px] text-white/70">
              Economists, engineers, MEAL, digital &amp; safeguard specialists
            </span>
          </div>

          <div className="border-l-2 border-[#2F5FA8] pl-4">
            <span className="block text-[24px] font-bold text-white md:text-[28px]">
              Outcome-Driven
            </span>
            <span className="text-[13px] text-white/70">
              Measuring success through verifiable socio-economic impact
            </span>
          </div>
        </div>

        {/* CTA pill buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#mandate"
            className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-[14.5px] font-semibold text-[#07131e] shadow-lg hover:bg-white/90 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>Explore Corporate Mandate</span>
            <span className="ml-2">&rarr;</span>
          </a>
          <a
            href="/services"
            className="inline-flex items-center rounded-full bg-white/10 border border-white/25 px-7 py-3.5 text-[14.5px] font-semibold text-white hover:bg-[#2F5FA8] hover:border-[#2F5FA8] active:scale-95 transition-all"
          >
            <span>Explore Services &amp; Capabilities</span>
            <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
