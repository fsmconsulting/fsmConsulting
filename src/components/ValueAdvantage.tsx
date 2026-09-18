import { Target, Globe2, Layers, ShieldCheck } from "lucide-react";
import { Target, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";

/**
 * "Our value, your advantage"
 * Matches Conceptzilla Reference (media_1789744082329.webp):
 * 4-column open layout with clean icons, bold titles, and institutional copy.
 */
const points = [
  {
    icon: Target,
    title: "Results-first approach",
    body: "We hold every assignment to one question: did outcomes actually improve, not just whether a deliverable was submitted.",
    body: "We align every technical and advisory solution with verified development outcomes, ensuring investments deliver tangible improvements rather than just milestone reports.",
  },
  {
    icon: Globe2,
    title: "National and cross-border reach",
    body: "Qualified professionals mobilized across all 36 states and the FCT, with cross-border logistics support beyond Nigeria.",
    title: "Multi-jurisdictional reach",
    body: "Headquartered in Abuja with country partners across West, Central, and East Africa, we navigate sovereign regulations and local operating environments with confidence.",
  },
  {
    icon: Layers,
    title: "Full project-cycle expertise",
    body: "From early diagnostics and readiness through implementation, verification, and close-out, on a single integrated platform.",
    icon: CheckCircle2,
    title: "Proven track record",
    body: "Mobilizing multidisciplinary experts across all 36 Nigerian states and the FCT, we deliver independent verification and project readiness on complex development portfolios.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent, accountable delivery",
    body: "Clear reporting lines and documented methodology, mirroring the governance standards we advise our clients on.",
    title: "Trusted by development institutions",
    body: "International financial institutions, bilateral partners, and sovereign governments rely on our technical bench for fiduciary excellence, ESMP safeguards, and accountability.",
  },
];

export default function ValueAdvantage() {
  return (
    <section className="bg-white px-6 py-14 md:px-10 md:py-16" aria-labelledby="value-advantage-heading">
      <div className="mx-auto max-w-6xl">
        <h2 id="value-advantage-heading" className="font-serif text-[22px] font-medium text-navy md:text-[26px]">
    <section className="bg-white px-6 py-16 md:px-12 md:py-24" aria-labelledby="value-advantage-heading">
      <div className="mx-auto max-w-7xl">
        <h2
          id="value-advantage-heading"
          className="text-[26px] font-semibold text-navy md:text-[32px] tracking-tight"
        >
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
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {points.map((p) => (
            <div key={p.title} className="flex flex-col items-start">
              <div className="flex h-9 w-9 items-center justify-center text-navy mb-3">
                <p.icon className="h-5 w-5 text-navy" strokeWidth={1.8} />
              </div>
              <h3 className="text-[16px] font-semibold text-navy tracking-tight">{p.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
