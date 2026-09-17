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
    <section className="border-b border-navy/10 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
              Governance &middot; Compliance &middot; Standards
            </span>
            <h2 className="mt-3 font-serif text-[32px] font-medium leading-tight text-navy md:text-[42px]">
              Committed to international standards and fiduciary integrity.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink/80">
              FSM Consulting Limited is committed to maintaining international standards of quality, independence, and operational compliance. Our institutional protocols ensure that development partners and sovereign clients can rely fully on the integrity and accuracy of our deliverables.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
              Our geographic footprint is delivered through a flexible country-access model comprising direct corporate presence, strategic partnerships, consortium arrangements, and multidisciplinary professional networks, complying strictly with applicable national laws, procurement regulations, and client policies.
            </p>
          </div>

          <div className="rounded-none border border-navy/15 bg-navy p-8 text-white">
            <div className="border-b border-white/15 pb-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                Corporate Governance &amp; Registration
              </span>
              <h3 className="mt-1 font-serif text-[22px] font-medium text-white">
                FSM Consulting Limited
              </h3>
            </div>

            <div className="mt-6 space-y-3.5 text-[14px] text-ivory/80">
              <div className="flex items-start gap-2.5">
                <svg className="mt-1 h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Incorporated under the Companies and Allied Matters Act, Federal Republic of Nigeria.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="mt-1 h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Fully registered and compliant with federal corporate regulatory bodies and statutory tax requirements.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="mt-1 h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Headquartered in Abuja, Nigeria with established regional delivery alliances across West, Central, and East Africa.</span>
              </div>
            </div>

            <div className="mt-6 rounded border-t border-white/15 pt-4 text-xs text-gold-light">
              Official Corporate Profile Reference Document
            </div>
          </div>
        </div>

        {/* 8 Compliance Standards Grid */}
        <div className="mt-20">
          <div className="border-b border-navy/15 pb-4">
            <span className="text-[12px] font-mono font-semibold uppercase tracking-wider text-gold">
              Quality Framework
            </span>
            <h3 className="mt-1 font-serif text-[24px] font-medium text-navy md:text-[30px]">
              Institutional Quality Assurance Protocols
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {policies.map((p) => (
              <div
                key={p.title}
                className="rounded-none border border-navy/10 bg-sand p-5 transition-all duration-200 hover:border-gold hover:bg-white hover:shadow-none"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-none bg-gold" />
                  <h4 className="font-serif text-[16px] font-medium text-navy">
                    {p.title}
                  </h4>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-ink/70">
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
