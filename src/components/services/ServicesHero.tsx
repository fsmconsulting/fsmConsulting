export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-16 pb-20 text-ivory md:pt-24 md:pb-28">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-none bg-blue-bright/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-none bg-gold/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Top Eyebrow Tag */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-none border border-gold/40 bg-gold/10 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-light">
            Services &amp; Capabilities &middot; Practice Architecture
          </span>
          <span className="text-[12px] tracking-wider text-ivory/50">
            14 Practice Areas &bull; Pan-African Reach
          </span>
        </div>

        {/* Main Heading */}
        <div className="mt-6 max-w-4xl">
          <h1 className="font-serif text-[36px] font-medium leading-[1.12] text-white md:text-[52px] lg:text-[58px]">
            Integrated Technical, Fiduciary &amp; Delivery Capabilities.
          </h1>
          <div className="my-6 h-1 w-20 bg-gradient-to-r from-gold to-gold-light" />
          <p className="max-w-3xl text-[17px] leading-relaxed text-ivory/80 md:text-[19px]">
            We provide governments, development partners, international financial institutions, and the private sector with an end-to-end suite of 14 integrated practice areas, from program conceptualization and project readiness (D-Ready) to embedded delivery units, independent verification, and digital transformation.
          </p>
        </div>

        {/* Practice Clusters Quick Links */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href="#cluster-delivery"
            className="group rounded-none border border-white/15 bg-white/5 p-5 transition-all duration-200 hover:border-gold hover:bg-white/10"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider text-gold-light">
              Cluster 01 &rarr;
            </span>
            <h3 className="mt-2 font-serif text-[18px] font-medium text-white group-hover:text-gold-light">
              Delivery, Assurance &amp; MEAL
            </h3>
            <p className="mt-1 text-[13px] text-ivory/70">
              Expert mobilization, IVA, D-Ready, and outcome evaluations.
            </p>
          </a>

          <a
            href="#cluster-governance"
            className="group rounded-none border border-white/15 bg-white/5 p-5 transition-all duration-200 hover:border-gold hover:bg-white/10"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider text-gold-light">
              Cluster 02 &rarr;
            </span>
            <h3 className="mt-2 font-serif text-[18px] font-medium text-white group-hover:text-gold-light">
              Governance, Reform &amp; Safeguards
            </h3>
            <p className="mt-1 text-[13px] text-ivory/70">
              Public sector modernization, ESMP/SEP, FRILIA, and capacity development.
            </p>
          </a>

          <a
            href="#cluster-innovation"
            className="group rounded-none border border-white/15 bg-white/5 p-5 transition-all duration-200 hover:border-gold hover:bg-white/10"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider text-gold-light">
              Cluster 03 &rarr;
            </span>
            <h3 className="mt-2 font-serif text-[18px] font-medium text-white group-hover:text-gold-light">
              Data, Economy &amp; Transactions
            </h3>
            <p className="mt-1 text-[13px] text-ivory/70">
              Digital GIS/AI labs, jobs advisory, donor procurement, and PPP finance.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
