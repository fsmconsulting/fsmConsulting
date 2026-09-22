import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Closing() {
  return (
    <section id="contact" className="bg-white px-6 py-20 md:px-10 md:py-28" aria-labelledby="closing-cta-heading">
      {/* Contained Deep Blue Institutional Card matching Conceptzilla Grammar */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#07131e] bg-gradient-to-br from-[#07131e] via-[#0d2238] to-[#173254] p-10 md:p-16 lg:p-20 text-white shadow-2xl border border-white/10">
        {/* Brand blue ambient accent glow */}
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#2F5FA8]/25 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#2F5FA8]/20 border border-[#2F5FA8]/30 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-wider text-[#9BC2F5]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F5FA8]" />
            <span>Discuss an Assignment &middot; Executive Inquiries</span>
          </div>

          <h2 id="closing-cta-heading" className="mt-2 text-[32px] md:text-[46px] lg:text-[52px] font-bold leading-[1.08] tracking-tight text-white">
            Partner with Africa&rsquo;s development delivery specialists.
          </h2>

          <div className="my-6 h-1 w-20 rounded-full bg-[#2F5FA8]" />

          <p className="text-[16.5px] md:text-[18px] leading-relaxed text-white/80">
            Whether structuring an independent verification protocol (IVA), deploying specialized technical assistance, or accelerating implementation across Nigerian states and African corridors, our partners are ready to assist.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#07131e] shadow-xl hover:bg-white/90 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <span>Start an inquiry</span>
              <span className="ml-2">&rarr;</span>
            </Link>

            <a
              href="mailto:info@fsmconsulting.com"
              className="group inline-flex items-center gap-2.5 text-[14.5px] text-white/85 transition-colors hover:text-[#9BC2F5]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-[#2F5FA8]/30 transition-colors">
                <Mail className="h-4 w-4 text-[#9BC2F5]" />
              </div>
              <span>info@fsmconsulting.com</span>
            </a>

            <a
              href="tel:+2349040009512"
              className="group inline-flex items-center gap-2.5 text-[14.5px] text-white/85 transition-colors hover:text-[#9BC2F5]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-[#2F5FA8]/30 transition-colors">
                <Phone className="h-4 w-4 text-[#9BC2F5]" />
              </div>
              <span>+234 904 000 9512</span>
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 font-mono text-[11.5px] text-white/60">
          <span>Headquarters: Abuja, Federal Capital Territory, Nigeria</span>
          <span>RC: 9616494 &middot; SCUML Regulated Entity</span>
        </div>
      </div>
    </section>
  );
}