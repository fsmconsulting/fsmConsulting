import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Closing() {
  return (
    <section id="contact" className="bg-white px-6 py-20 md:px-10 md:py-28" aria-labelledby="closing-cta-heading">
      {/* Major Contained Institutional Surface (Design System §24) */}
      <div className="surface-card mx-auto max-w-7xl bg-navy p-10 text-white md:p-16 lg:p-20 shadow-xl">
        <div className="max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-bright">
            Discuss an Assignment &middot; Executive Inquiries
          </span>

          <h2 id="closing-cta-heading" className="mt-4 font-serif text-[32px] font-normal leading-[1.1] md:text-[48px]">
            Partner with Africa&rsquo;s development delivery specialists.
          </h2>

          <p className="mt-6 text-[16.5px] leading-relaxed text-white/80 md:text-[18px]">
            Whether structuring an independent verification protocol (IVA), deploying specialized technical assistance, or accelerating implementation across Nigerian states and African corridors, our partners are ready to assist.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="pill-btn bg-white px-7 py-3.5 text-[15px] font-semibold text-navy transition-all hover:bg-white/90"
            >
              <span>Start an inquiry</span>
              <span className="pill-btn-arrow">&rarr;</span>
            </Link>

            <a
              href="mailto:info@fsmconsulting.com"
              className="group inline-flex items-center gap-2.5 text-[14.5px] text-white/80 transition-colors hover:text-white"
            >
              <Mail className="h-4.5 w-4.5 text-blue-bright" />
              <span>info@fsmconsulting.com</span>
            </a>

            <a
              href="tel:+2349040009512"
              className="group inline-flex items-center gap-2.5 text-[14.5px] text-white/80 transition-colors hover:text-white"
            >
              <Phone className="h-4.5 w-4.5 text-blue-bright" />
              <span>+234 904 000 9512</span>
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 font-mono text-[11.5px] text-white/50">
          <span>Headquarters: Abuja, Federal Capital Territory, Nigeria</span>
          <span>RC: 9616494 &middot; SCUML Regulated Entity</span>
        </div>
      </div>
    </section>
  );
}