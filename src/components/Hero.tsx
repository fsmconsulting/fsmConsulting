import HeroBackground from "@/components/HeroBackground";
import Nav from "@/components/Nav";

export default function Hero() {
  return (
    <section id="top" className="bg-sand px-3 pt-3 md:px-6 md:pt-6">
      <div className="bento-card hero-card-enter relative min-h-[580px] overflow-hidden bg-navy md:min-h-[700px]">
        <HeroBackground />
        <Nav transparent />

        <div className="relative flex min-h-[580px] items-end px-6 pb-12 pt-28 md:min-h-[700px] md:px-12 md:pb-16 md:pt-32">
          <div className="max-w-[640px]">
            <h1 className="font-serif text-[32px] font-medium leading-[1.12] text-white md:text-[46px] lg:text-[54px]">
              We turn development investments into measurable results.
            </h1>

            <p className="mt-5 max-w-[52ch] text-[15.5px] leading-relaxed text-white/80">
              Plans don&rsquo;t fail in the boardroom. They fail in procurement delays, missing
              local partnerships, and capability gaps no strategy document accounts for. FSM
              Consulting Limited closes that gap &mdash; from Nigeria to Africa and beyond.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="pill-btn group inline-flex items-center gap-2 bg-white px-6.5 py-3.5 text-[14px] font-semibold text-navy transition-all hover:bg-white/90"
              >
                <span>Discuss an assignment</span>
                <span className="pill-btn-arrow">&rarr;</span>
              </a>
              <a
                href="#delivery-model"
                className="relative pb-1 text-[14.5px] font-medium text-white/80 transition-colors duration-200 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-white/60 after:transition-all after:duration-300 hover:after:w-full"
              >
                See what we deliver
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
