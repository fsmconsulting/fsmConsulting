import HeroBackground from "@/components/HeroBackground";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden text-ivory min-h-screen flex items-center">
      <HeroBackground />

      <div className="relative mx-auto max-w-6xl w-full px-6 py-28 md:px-10 md:py-36">
        <div className="max-w-[640px]">
          <h1 className="font-serif font-medium leading-[1.05]">
            <span className="block text-[15px] font-sans font-medium uppercase tracking-[0.2em] text-ivory/60 md:text-[16px]">
              Welcome to
            </span>
            <span className="block whitespace-nowrap text-[42px] md:text-[60px] lg:text-[72px]">
              FSM Consulting
            </span>
            <span className="block text-[42px] md:text-[60px] lg:text-[72px]">
              Limited
            </span>
          </h1>

          <div className="my-6 h-0.5 w-16 bg-gold" />

          <p className="max-w-[46ch] text-[17.5px] leading-relaxed text-ivory/80">
            Plans don't fail in the boardroom. They fail in procurement delays, missing local partnerships, 
            and capability gaps no strategy document accounts for. 
            FSM Consulting Limited closes that gap, connecting governments and development partners with the people, 
            partnerships, and technical capability needed to carry projects from concept to lasting impact, from Nigeria to Africa and beyond.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-8">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-gold px-6.5 py-3.5 text-[13px] font-medium uppercase tracking-[0.06em] text-navy transition-colors duration-200 hover:bg-gold-light"
            >
              <span className="inline-block">Discuss an assignment</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </a>
            <a
              href="#services"
              className="relative pb-1 text-[14.5px] font-medium text-ivory/80 transition-colors duration-200 hover:text-ivory after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-ivory/60 after:transition-all after:duration-300 hover:after:w-full"
            >
              See what we deliver
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <span className="block font-serif text-[30px] text-gold">{value}</span>
      <span className="text-[13px] text-ivory/65">{label}</span>
    </div>
  );
}