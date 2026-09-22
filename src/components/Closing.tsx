import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { contactInfo } from "@/data/siteData";

export default function Closing() {
  return (
    <section id="contact" className="bg-white px-6 py-20 md:px-10 md:py-28" aria-labelledby="closing-cta-heading">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#07131e] bg-gradient-to-br from-[#07131e] via-[#0d2238] to-[#173254] p-10 md:p-16 lg:p-20 text-white shadow-2xl border border-white/10">
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#2F5FA8]/25 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#2F5FA8]/20 border border-[#2F5FA8]/30 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-wider text-[#9BC2F5]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F5FA8]" />
            <span>Discuss an Assignment &middot; Executive Inquiries</span>
          </div>

          <h2 id="closing-cta-heading" className="text-[32px] sm:text-[42px] md:text-[50px] font-bold leading-[1.08] tracking-tight text-white">
            Ready to Translate Development Strategy into Verified Ground-Level Impact?
          </h2>

          <p className="mt-6 max-w-[56ch] text-[16px] md:text-[18px] leading-relaxed text-white/80">
            Connect with FSM Consulting Limited to discuss advisory mandates, independent verification, project acceleration, or specialized expert mobilization.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="pill-btn group inline-flex items-center gap-2 bg-[#2F5FA8] px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-lg hover:bg-[#264E8C] transition-all"
            >
              <span>Schedule an Executive Consultation</span>
              <span className="pill-btn-arrow">&rarr;</span>
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
          <span>Headquarters: {contactInfo.address}</span>
          <span>RC: {contactInfo.rcNumber}</span>
        </div>
      </div>
    </section>
  );
}
