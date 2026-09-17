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

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((diff) => (
            <div
              key={diff.num}
              className="flex flex-col justify-between rounded-none border border-navy/10 bg-white p-7 shadow-none transition-all duration-200 hover:border-gold hover:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-gold">
                    {diff.num}
                  </span>
                  <span className="h-2 w-2 rounded-none bg-navy/20" />
                </div>
                <h3 className="mt-4 font-serif text-[19px] font-medium text-navy">
                  {diff.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink/75">
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
