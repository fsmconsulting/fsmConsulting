import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-16 pb-20 text-ivory md:pt-24 md:pb-28">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-bright/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Top Eyebrow Tag */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-light">
            Corporate Profile &middot; FSM Consulting Limited
          </span>
          <span className="text-[12px] tracking-wider text-ivory/50">
            Abuja, Nigeria &bull; Pan-African Delivery
          </span>
        </div>

        {/* Main Heading */}
        <div className="mt-6 max-w-4xl">
          <h1 className="font-serif text-[36px] font-medium leading-[1.12] text-white md:text-[52px] lg:text-[58px]">
            Africa&rsquo;s Development Delivery, Implementation Acceleration &amp; Project Assurance Platform.
          </h1>
          <div className="my-6 h-1 w-20 bg-gradient-to-r from-gold to-gold-light" />
          <p className="max-w-3xl text-[17px] leading-relaxed text-ivory/80 md:text-[19px]">
            Bridging the gap between ambitious strategy and ground-level execution. We partner with governments, development partners, international financial institutions, and the private sector to translate investments into measurable results, institutional strength, and sustainable impact.
          </p>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          <div className="border-l-2 border-gold pl-4">
            <span className="block font-serif text-[24px] font-semibold text-gold-light md:text-[28px]">
              36 States + FCT
            </span>
            <span className="text-[13px] text-ivory/70">
              Complete nationwide operational reach across Nigeria
            </span>
          </div>

          <div className="border-l-2 border-gold pl-4">
            <span className="block font-serif text-[24px] font-semibold text-gold-light md:text-[28px]">
              Pan-African
            </span>
            <span className="text-[13px] text-ivory/70">
              West, Central &amp; East Africa regional delivery hubs
            </span>
          </div>

          <div className="border-l-2 border-gold pl-4">
            <span className="block font-serif text-[24px] font-semibold text-gold-light md:text-[28px]">
              Multidisciplinary
            </span>
            <span className="text-[13px] text-ivory/70">
              Economists, engineers, MEAL, digital &amp; safeguard specialists
            </span>
          </div>

          <div className="border-l-2 border-gold pl-4">
            <span className="block font-serif text-[24px] font-semibold text-gold-light md:text-[28px]">
              Outcome-Driven
            </span>
            <span className="text-[13px] text-ivory/70">
              Measuring success through verifiable socio-economic impact
            </span>
          </div>
        </div>

        {/* CTA links */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#mandate"
            className="rounded bg-gold px-6 py-3 text-[14.5px] font-semibold text-navy transition-colors hover:bg-gold-light"
          >
            Explore Corporate Mandate
          </a>
          <a
            href="/services"
            className="rounded border border-white/30 px-6 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore Services &amp; Capabilities &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
