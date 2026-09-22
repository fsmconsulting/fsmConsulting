import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { qaCommitments } from "@/data/companyData";

export default function QualityAssurance() {
  return (
    <section className="bg-white py-20 md:py-28 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
              Governance &middot; Standards &middot; Ethics
            </span>
            <h2 className="mt-2 text-[32px] md:text-[42px] font-bold tracking-tight text-[#07131e]">
              Institutional Quality Assurance
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-600">
              FSM Consulting Limited is committed to maintaining international standards of professionalism, integrity, and analytical rigor in every engagement we undertake.
            </p>
          </div>

          <div className="lg:col-span-7 rounded-[24px] bg-[#f4f5f7] p-8 md:p-10 border border-gray-200/80">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5FA8]/10 text-[#2F5FA8]">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="text-[20px] font-bold text-[#07131e]">
                Fiduciary Independence &amp; Legal Registration
              </h3>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
              We operate with strict administrative and technical separation between our advisory teams and independent verification units to avoid conflicts of interest and uphold uncompromising objectivity.
            </p>
            <div className="mt-6 space-y-3 text-[14px] text-gray-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2F5FA8]" />
                <span>Incorporated under the Companies and Allied Matters Act, Federal Republic of Nigeria.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2F5FA8]" />
                <span>Fully registered and compliant with federal corporate regulatory bodies and statutory tax requirements.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2F5FA8]" />
                <span>Fiduciary oversight aligned with international financial institution (IFI) benchmarks.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Quality Assurance Policies */}
        <div className="mt-20">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
              Quality Framework
            </span>
            <h3 className="mt-1 text-[24px] md:text-[30px] font-bold tracking-tight text-[#07131e]">
              Institutional Quality Assurance Protocols
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qaCommitments.map((p) => (
              <div
                key={p.title}
                className="rounded-[20px] border border-gray-100 bg-[#f4f5f7] p-6 transition-all duration-300 hover:border-[#2F5FA8]/40 hover:bg-white hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2F5FA8]/10 text-[#2F5FA8]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-[17px] font-bold text-[#07131e]">
                  {p.title}
                </h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-gray-600">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
