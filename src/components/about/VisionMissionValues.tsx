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
    <section className="bg-[#f4f5f7] py-20 md:py-28 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        
        {/* Section Tag */}
        <div className="text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
            Strategic Foundation &middot; Institutional Identity
          </span>
          <h2 className="mt-2 text-[32px] md:text-[42px] font-bold tracking-tight text-[#07131e]">
            Vision, Mission &amp; Guiding Values
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[16px] text-gray-600">
            The enduring principles and institutional direction that govern how we operate across the African continent.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          
          {/* Vision Card */}
          <div className="relative overflow-hidden rounded-[24px] border border-gray-100 bg-white p-8 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-[#2F5FA8]" />
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2F5FA8]/10 text-[20px] font-bold text-[#2F5FA8]">
                V
              </span>
              <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#07131e]">
                Our Vision
              </h3>
            </div>
            <p className="mt-6 text-[16.5px] leading-relaxed text-gray-600">
              To become Africa&rsquo;s leading <strong className="font-semibold text-[#07131e]">Development Effectiveness and Project Assurance</strong> firm, recognized for advancing accountability, innovation, and sustainable development outcomes.
            </p>
            <div className="mt-8 border-t border-gray-100 pt-4 text-xs font-semibold uppercase tracking-wider text-[#2F5FA8]">
              Pan-African Leadership &middot; Institutional Rigor
              Nigerian roots &middot; Regional reach
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative overflow-hidden rounded-[24px] border border-gray-100 bg-white p-8 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-[#2F5FA8]" />
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2F5FA8]/10 text-[20px] font-bold text-[#2F5FA8]">
                M
              </span>
              <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#07131e]">
                Our Mission
              </h3>
            </div>
            <p className="mt-6 text-[16.5px] leading-relaxed text-gray-600">
              To support governments, development partners, and organizations in achieving <strong className="font-semibold text-[#07131e]">measurable development results</strong> through evidence-based advisory services, project assurance, institutional strengthening, and strategic technical support.
            </p>
            <div className="mt-8 border-t border-gray-100 pt-4 text-xs font-semibold uppercase tracking-wider text-[#2F5FA8]">
              Results-Driven &middot; Evidence-Based Execution
            </div>
          </div>

        </div>

        {/* Core Values Grid */}
        <div className="mt-20">
          <div className="border-b border-gray-200/80 pb-4">
            <span className="text-[12px] font-mono font-semibold uppercase tracking-wider text-[#2F5FA8]">
              Guiding Principles
            </span>
            <h3 className="mt-1 text-[24px] md:text-[30px] font-bold tracking-tight text-[#07131e]">
              Our Six Core Values
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="rounded-[20px] border border-gray-100 bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#2F5FA8]/40 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-[20px] font-bold tracking-tight text-[#07131e]">
                    {val.title}
                  </h4>
                  <span className="font-mono text-sm font-bold text-[#2F5FA8]">
                    {val.badge}
                  </span>
                </div>
                <div className="my-3 h-1 w-8 rounded-full bg-[#2F5FA8]/30" />
                <p className="text-[14.5px] leading-relaxed text-gray-600">
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
