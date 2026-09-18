import HeroBackground from "@/components/HeroBackground";
import Nav from "@/components/Nav";

/**
 * Continuous Full-Bleed Editorial Hero
 * Aligned with Conceptzilla consulting visual grammar:
 * Continuous photographic visual surface → Integrated transparent navigation → Typography directly composed over image.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-navy text-white flex flex-col justify-between"
    >
      {/* 1. Continuous Full-Bleed Photographic Surface */}
      <HeroBackground />

      {/* 2. Integrated Transparent Navigation */}
      <Nav transparent />

      {/* 3. Typography & Content Directly Composed Over Image */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12 pt-32 sm:pt-36 md:pt-44 pb-12 md:pb-16 flex-1 flex flex-col justify-between">
        <div className="max-w-[820px]">
          {/* Eyebrow / Positioning Tag */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-bright" />
            <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-blue-bright">
              Advisory &middot; Implementation &middot; Assurance
            </span>
          </div>

          {/* Large Editorial Headline (Source Serif 4) */}
          <h1 className="mt-5 font-serif text-[44px] sm:text-[58px] md:text-[72px] lg:text-[84px] xl:text-[90px] font-normal leading-[1.02] tracking-tight text-white max-w-[17ch]">
            Africa&rsquo;s Development Delivery Partner.
          </h1>

          {/* Grounded Corporate Profile Narrative */}
          <p className="mt-6 md:mt-8 max-w-[54ch] text-[16px] sm:text-[17.5px] md:text-[18.5px] leading-[1.65] text-white/80 font-normal">
            Bridging the gap between ambitious strategy and ground-level execution. We partner with
            governments, development partners, and international financial institutions to translate
            investments into measurable results, institutional strength, and sustainable impact.
          </p>

          {/* Primary Action & Secondary Direction */}
          <div className="mt-9 md:mt-11 flex flex-wrap items-center gap-5 sm:gap-6">
            <a
              href="#contact"
              className="pill-btn bg-white px-7 py-3.5 text-[15px] font-semibold text-navy transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
            >
              <span>Discuss an assignment</span>
              <span className="pill-btn-arrow">&rarr;</span>
            </a>

            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-[14.5px] md:text-[15px] font-medium text-white/80 transition-colors hover:text-white"
            >
              <span>See our capabilities</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Bottom Editorial Trust Markers Directly Integrated into Hero */}
        <div className="mt-16 md:mt-24 border-t border-white/15 pt-6 pb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-[11.5px] md:text-[12px] text-white/60">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>HQ: Abuja, Nigeria</span>
            <span className="hidden sm:inline text-white/25">&bull;</span>
            <span>36 States + FCT Operational Reach</span>
            <span className="hidden sm:inline text-white/25">&bull;</span>
            <span>Pan-African Delivery Bench</span>
          </div>

          <a
            href="#positioning"
            className="hidden lg:inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
          >
            <span>Scroll to explore</span>
            <span className="text-[14px]">&darr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
