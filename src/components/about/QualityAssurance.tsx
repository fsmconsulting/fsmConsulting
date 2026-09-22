const policies = [
  { title: "Quality Management Systems", desc: "Rigorous internal review processes ensuring analytical precision and editorial excellence." },
  { title: "Ethical Conduct Policies", desc: "Strict adherence to international anti-fraud, transparency, and professional integrity standards." },
  { title: "Anti-Corruption Frameworks", desc: "Zero tolerance for corruption, bribery, or illicit inducement in any phase of delivery." },
  { title: "Data Protection Policies", desc: "Enterprise-grade confidentiality, data governance, and strict compliance with privacy regulations." },
  { title: "Safeguarding Policies", desc: "Robust do-no-harm protocols protecting vulnerable groups, communities, and field personnel." },
  { title: "Gender Equality Policies", desc: "Promoting social inclusion, gender mainstreaming, and equitable community participation." },
  { title: "Risk Management Frameworks", desc: "Proactive fiduciary, operational, security, and reputational risk mitigation architectures." },
  { title: "Continuous Professional Development", desc: "Regular accreditation, peer reviews, and skills upgrading for our expert roster." },
];

export default function QualityAssurance() {
  return (
    <section className="border-b border-gray-100 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        
        {/* Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
              Governance &middot; Compliance &middot; Standards
            </span>
            <h2 className="mt-3 text-[32px] md:text-[42px] font-bold leading-tight tracking-tight text-[#07131e]">
              Committed to international standards and fiduciary integrity.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-gray-600">
              FSM Consulting Limited is committed to maintaining international standards of quality, independence, and operational compliance. Our institutional protocols ensure that development partners and sovereign clients can rely fully on the integrity and accuracy of our deliverables.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
              Our geographic footprint is delivered through a flexible country-access model comprising direct corporate presence, strategic partnerships, consortium arrangements, and multidisciplinary professional networks, complying strictly with applicable national laws, procurement regulations, and client policies.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#07131e] p-8 text-white shadow-xl relative overflow-hidden">
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#2F5FA8]/20 blur-2xl" />
            <div className="border-b border-white/15 pb-4 relative z-10">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#9BC2F5]">
                Corporate Governance &amp; Registration
              </span>
              <h3 className="mt-1 text-[22px] font-bold tracking-tight text-white">
                FSM Consulting Limited
              </h3>
            </div>

            <div className="mt-6 space-y-3.5 text-[14px] text-white/80 relative z-10">
              <div className="flex items-start gap-2.5">
                <svg className="mt-1 h-4 w-4 shrink-0 text-[#2F5FA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Incorporated under the Companies and Allied Matters Act, Federal Republic of Nigeria.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="mt-1 h-4 w-4 shrink-0 text-[#2F5FA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Fully registered and compliant with federal corporate regulatory bodies and statutory tax requirements.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="mt-1 h-4 w-4 shrink-0 text-[#2F5FA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Fiduciary oversight aligned with international financial institution (IFI) benchmarks.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="mt-1 h-4 w-4 shrink-0 text-[#2F5FA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Full compliance with Special Control Unit Against Money Laundering (SCUML) protocols.</span>
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
            {policies.map((p) => (
              <div
                key={p.title}
                className="rounded-[20px] border border-gray-100 bg-[#f4f5f7] p-6 transition-all duration-300 hover:border-[#2F5FA8]/40 hover:bg-white hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#2F5FA8]" />
                  <h4 className="text-[16px] font-bold tracking-tight text-[#07131e]">
                    {p.title}
                  </h4>
                </div>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
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
