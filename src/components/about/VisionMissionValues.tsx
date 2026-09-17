const coreValues = [
  {
    title: "Integrity",
    badge: "01",
    desc: "We uphold the highest standards of ethics, transparency, and professionalism in every interaction and engagement.",
  },
  {
    title: "Excellence",
    badge: "02",
    desc: "We deliver quality services that consistently exceed expectations, backed by rigorous analytical and operational standards.",
  },
  {
    title: "Innovation",
    badge: "03",
    desc: "We apply creative thinking and technology-driven solutions to solve complex, systemic development challenges.",
  },
  {
    title: "Accountability",
    badge: "04",
    desc: "We promote responsible stewardship of public and development resources, ensuring full fiduciary alignment.",
  },
  {
    title: "Collaboration",
    badge: "05",
    desc: "We leverage multidisciplinary expertise and strategic partnerships across national, regional, and global networks.",
  },
  {
    title: "Impact",
    badge: "06",
    desc: "We focus relentlessly on generating measurable, sustainable, and socially transformative results for communities.",
  },
];

export default function VisionMissionValues() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Section Tag */}
        <div className="text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
            Strategic Foundation &middot; Institutional Identity
          </span>
          <h2 className="mt-2 font-serif text-[32px] font-medium text-navy md:text-[42px]">
            Vision, Mission &amp; Guiding Values
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[16px] text-ink/70">
            The enduring principles and institutional direction that govern how we operate across the African continent.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          
          {/* Vision Card */}
          <div className="relative overflow-hidden rounded-none border border-navy/15 bg-white p-8 shadow-none md:p-10">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gold" />
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-none bg-gold/15 font-serif text-[18px] font-bold text-gold">
                V
              </span>
              <h3 className="font-serif text-[24px] font-medium text-navy md:text-[28px]">
                Our Vision
              </h3>
            </div>
            <p className="mt-6 text-[16.5px] leading-relaxed text-ink/80">
              To become Africa&rsquo;s leading <strong className="font-semibold text-navy">Development Effectiveness and Project Assurance</strong> firm, recognized for advancing accountability, innovation, and sustainable development outcomes.
            </p>
            <div className="mt-8 border-t border-navy/10 pt-4 text-xs font-semibold uppercase tracking-wider text-gold">
              Pan-African Leadership &middot; Institutional Rigor
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative overflow-hidden rounded-none border border-navy/15 bg-white p-8 shadow-none md:p-10">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-navy" />
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-none bg-navy/10 font-serif text-[18px] font-bold text-navy">
                M
              </span>
              <h3 className="font-serif text-[24px] font-medium text-navy md:text-[28px]">
                Our Mission
              </h3>
            </div>
            <p className="mt-6 text-[16.5px] leading-relaxed text-ink/80">
              To support governments, development partners, and organizations in achieving <strong className="font-semibold text-navy">measurable development results</strong> through evidence-based advisory services, project assurance, institutional strengthening, and strategic technical support.
            </p>
            <div className="mt-8 border-t border-navy/10 pt-4 text-xs font-semibold uppercase tracking-wider text-blue-accent">
              Results-Driven &middot; Evidence-Based Execution
            </div>
          </div>

        </div>

        {/* Core Values Grid */}
        <div className="mt-20">
          <div className="border-b border-navy/15 pb-4">
            <span className="text-[12px] font-mono font-semibold uppercase tracking-wider text-gold">
              Guiding Principles
            </span>
            <h3 className="mt-1 font-serif text-[24px] font-medium text-navy md:text-[30px]">
              Our Six Core Values
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="rounded-none border border-navy/10 bg-white p-6 shadow-none transition-all duration-200 hover:border-gold hover:shadow"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-[20px] font-medium text-navy">
                    {val.title}
                  </h4>
                  <span className="font-mono text-xs font-semibold text-gold">
                    {val.badge}
                  </span>
                </div>
                <div className="my-3 h-0.5 w-8 bg-gold/40" />
                <p className="text-[14.5px] leading-relaxed text-ink/75">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
