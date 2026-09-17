import { Mail, Phone } from "lucide-react";

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
            Discuss an Assignment &middot; Advisory Inquiries
          </span>
          <h2 className="mt-3 font-serif text-[34px] font-normal leading-tight md:text-[50px]">
            What is your next brilliant move?
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-gray-300 md:text-[18px]">
            Whether structuring an independent verification protocol, mobilizing
            technical specialists, or accelerating implementation across Nigerian
            states and African regions, our partners are ready to assist.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8 md:gap-12">
            <a
              href="mailto:info@fsmconsulting.com"
              className="group flex items-center gap-3 text-white transition-colors duration-200 hover:text-gold-light"
            >
              <Mail className="h-5 w-5 text-red-500 transition-transform duration-200 group-hover:scale-110" />
              <span className="font-serif text-[18px] font-medium md:text-[21px]">
                info@fsmconsulting.com
              </span>
            </a>

            <a
              href="tel:+2349040009512"
              className="group flex items-center gap-3 text-white transition-colors duration-200 hover:text-gold-light"
            >
              <Phone className="h-5 w-5 text-green-500 transition-transform duration-200 group-hover:scale-110" />
              <span className="font-serif text-[18px] font-medium md:text-[21px]">
                +234 904 000 9512
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}