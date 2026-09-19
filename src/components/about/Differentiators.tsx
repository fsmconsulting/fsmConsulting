const differentiators = [
  {
    num: "01",
    title: "Deep Development Sector Expertise",
    desc: "Extensive track record working on donor-funded and government reform projects across multilateral and bilateral portfolios.",
  },
  {
    num: "02",
    title: "Evidence-Driven & Field-Validated",
    desc: "Rigorous empirical data and ground-level facts inform all analytical diagnostics, policy recommendations, and verification findings.",
  },
  {
    num: "03",
    title: "Integrated Multidisciplinary Bench",
    desc: "Seamless collaboration across development economists, engineers, MEAL specialists, legal advisors, digital architects, and safeguard experts.",
  },
  {
    num: "04",
    title: "National & Regional Reach",
    desc: "Ability to rapidly deploy vetted teams across all 36 Nigerian states, the FCT, and expanding hubs across West, Central, and East Africa.",
  },
  {
    num: "05",
    title: "Technology & AI-Enabled Delivery",
    desc: "Deploying custom management information systems (MIS), real-time GIS mapping, predictive analytics, and automated delivery dashboards.",
  },
  {
    num: "06",
    title: "Independent & Impartial Assurance",
    desc: "Uncompromising commitment to objectivity, ethical conduct, and fiduciary integrity as an Independent Verification Agent (IVA).",
  },
  {
    num: "07",
    title: "Strong Multi-Stakeholder Coalition Engagement",
    desc: "Deep familiarity with the nuances of engaging federal and state governments, civil society, local communities, and international development partners.",
  },
  {
    num: "08",
    title: "End-to-End Lifecycle Coverage",
    desc: "Holistic understanding of the entire project lifecycle, from initial diagnostic and program structuring to mid-term review and post-completion sustainability.",
  },
  {
    num: "09",
    title: "Agile, Responsive & Client-Centric",
    desc: "A flexible operating model capable of assembling custom project teams and surge capacity on short notice without bureaucratic bottlenecks.",
  },
  {
    num: "10",
    title: "Focus on Outcomes, Not Just Deliverables",
    desc: "We measure success not by reports delivered, but by whether public institutions grew stronger, resources were saved, and communities thrived.",
  },
];

export default function Differentiators() {
  return (
    <section className="bg-sand-2 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        <div className="max-w-3xl">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
            Competitive Edge &middot; Why Partner With Us
          </span>
          <h2 className="mt-2 font-serif text-[32px] font-medium text-navy md:text-[42px]">
            What Makes FSM Consulting Different
          </h2>
          <p className="mt-3 text-[16px] text-ink/70">
            Delivering more than traditional consulting, creating verified, lasting development impact through ten institutional pillars.
          </p>
        </div>

        <div className="mt-14 divide-y divide-navy/15">
          {differentiators.map((diff) => (
            <div
              key={diff.num}
              className="py-5 transition-colors duration-150 sm:py-6 md:py-7"
            >
              <div className="grid grid-cols-[36px_1fr] gap-x-4 gap-y-2 md:grid-cols-[60px_320px_1fr] md:items-baseline md:gap-8 lg:grid-cols-[70px_360px_1fr] lg:gap-10">
                <span className="font-mono text-[13px] font-semibold text-blue-accent md:text-[15px]">
                  {diff.num}
                </span>
                <h3 className="font-serif text-[17px] font-medium leading-snug text-navy md:text-[20px] md:col-auto">
                  {diff.title}
                </h3>
                <p className="col-start-2 text-[14px] leading-relaxed text-ink/75 md:col-auto md:text-[15px]">
                  {diff.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
