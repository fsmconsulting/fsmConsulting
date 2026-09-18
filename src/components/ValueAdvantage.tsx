import { Target, Globe2, Layers, ShieldCheck } from "lucide-react";

const points = [
  {
    icon: Target,
    title: "Results-first approach",
    body: "We hold every assignment to one question: did outcomes actually improve, not just whether a deliverable was submitted.",
  },
  {
    icon: Globe2,
    title: "National and cross-border reach",
    body: "Qualified professionals mobilized across all 36 states and the FCT, with cross-border logistics support beyond Nigeria.",
  },
  {
    icon: Layers,
    title: "Full project-cycle expertise",
    body: "From early diagnostics and readiness through implementation, verification, and close-out, on a single integrated platform.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent, accountable delivery",
    body: "Clear reporting lines and documented methodology, mirroring the governance standards we advise our clients on.",
  },
];

export default function ValueAdvantage() {
  return (
    <section className="bg-white px-6 py-14 md:px-10 md:py-16" aria-labelledby="value-advantage-heading">
      <div className="mx-auto max-w-6xl">
        <h2 id="value-advantage-heading" className="font-serif text-[22px] font-medium text-navy md:text-[26px]">
          Our value, your advantage
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-10 md:grid-cols-4 md:gap-0">
          {points.map((p, i) => (
            <div
              key={p.title}
              className={`md:px-7 ${i > 0 ? "md:border-l md:border-navy/10" : ""} ${i === 0 ? "md:pl-0" : ""}`}
            >
              <p.icon className="h-[18px] w-[18px] text-navy/70" strokeWidth={1.75} />
              <h3 className="mt-3 text-[14.5px] font-semibold text-navy">{p.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
