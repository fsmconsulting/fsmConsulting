const layers = [
  {
    title: "Global expertise & knowledge exchange",
    body: "International experts, comparative learning, and Africa\u2013Asia technical cooperation.",
    metrics: "Cross-continental advisory bench",
  },
  {
    title: "Regional network access",
    body: "Strategic partners and professional networks across West, Central, and East Africa.",
    metrics: "Sub-Saharan coordination",
  },
  {
    title: "Local implementation & impact",
    body: "Direct reach into governments, institutions, and communities on the ground.",
    metrics: "Field-tested operational depth",
  },
  {
    title: "The development delivery hub",
    body: "Strategy, expert mobilization, operations support, and quality assurance in one place.",
    metrics: "End-to-end program governance",
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-navy py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Section Header */}
        <div className="mb-14 grid grid-cols-1 gap-8 border-b border-white/15 pb-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <h2 className="mt-2 font-serif text-[32px] font-normal leading-tight md:text-[44px]">
              Global expertise. Regional access. Local capability.
            </h2>
          </div>
          <p className="text-[16px] leading-relaxed text-gray-300">
            Our delivery ecosystem connects four layers, so clients can draw
            on the exact combination of expertise a project needs not
            more, not less.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 divide-y divide-white/15 border-y border-white/15 md:grid-cols-4 md:divide-x md:divide-y-0">
          {layers.map((layer) => (
            <div
              key={layer.title}
              className="group flex flex-col justify-between p-6 transition-all duration-200 hover:bg-white/[0.06] active:bg-white/[0.08] cursor-pointer md:p-8"
            >
              <div>
                <h3 className="mt-4 font-serif text-[20px] font-medium leading-snug text-white transition-colors duration-200 group-hover:text-blue-bright">
                  {layer.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-gray-300">
                  {layer.body}
                </p>
              </div>
              <div className="mt-8 border-t border-white/10 pt-4">
                <p className="text-[11.5px] font-mono uppercase tracking-wider text-gray-400 transition-colors duration-200 group-hover:text-blue-bright/70">{layer.metrics}</p>
                <a
                  href="#contact"
                  className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-white/50 transition-all duration-200 hover:text-blue-bright"
                >
                  <span>Enquire</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}