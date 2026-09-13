export default function Closing() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      {/* Decorative subtle background elements */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "28px 28px"
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-light">
            Start a Conversation &middot; Advisory Inquiries
          </span>
          <h2 className="mt-3 font-serif text-[34px] font-normal leading-tight md:text-[50px]">
            Let&rsquo;s talk about what your project needs to move faster.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-gray-300 md:text-[18px]">
            Whether structuring an independent verification protocol, mobilizing
            technical specialists, or accelerating implementation across Nigerian
            states and African regions, our partners are ready to assist.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Email Contact Card */}
            <a
              href="mailto:info@fsmconsulting.com"
              className="group border border-white/15 bg-white/[0.04] p-6 transition-all duration-200 hover:border-gold hover:bg-white/[0.08]"
            >
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-gray-400">
                <span>Electronic Mail</span>
                <span className="transition-transform group-hover:translate-x-1 group-hover:text-gold-light">&rarr;</span>
              </div>
              <div className="mt-3 font-serif text-[20px] font-medium text-white group-hover:text-gold-light">
                info@fsmconsulting.com
              </div>
              <div className="mt-1 text-xs text-gray-400">
                Direct advisory inquiries & RFP submissions
              </div>
            </a>

            {/* Phone Contact Card */}
            <a
              href="tel:+2349040009512"
              className="group border border-white/15 bg-white/[0.04] p-6 transition-all duration-200 hover:border-gold hover:bg-white/[0.08]"
            >
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-gray-400">
                <span>Direct Line</span>
                <span className="transition-transform group-hover:translate-x-1 group-hover:text-gold-light">&rarr;</span>
              </div>
              <div className="mt-3 font-serif text-[20px] font-medium text-white group-hover:text-gold-light">
                +234 904 000 9512
              </div>
              <div className="mt-1 text-xs text-gray-400">
                Abuja Headquarters &middot; Mon&ndash;Fri 8am&ndash;6pm WAT
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}