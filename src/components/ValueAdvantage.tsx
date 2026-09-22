import { Target, Globe2, CheckCircle2, ShieldCheck } from "lucide-react";

/**
 * "Our value, your advantage"
 * Matches Conceptzilla Reference (media_1789744082329.webp):
 * 4-column open layout with clean icons, bold titles, and institutional copy.
 * Grounded strictly in "FSM Consulting - Corporate Profile - r1-1.docx".
 */
const points = [
  {
    icon: Target,
    title: "Results-first approach",
    body: "We align every technical and advisory solution with verified development outcomes, ensuring investments deliver tangible improvements rather than just milestone reports.",
  },
  {
    icon: Globe2,
    title: "Multi-jurisdictional reach",
    body: "Headquartered in Abuja with country partners across West, Central, and East Africa, we navigate sovereign regulations and local operating environments with confidence.",
  },
  {
    icon: CheckCircle2,
    title: "Evidence-based verification",
    body: "Combining technical analysis with direct field engagement, we independently verify project performance, engage communities, and validate ground reality.",
  },
  {
    icon: ShieldCheck,
    title: "Multidisciplinary capability",
    body: "Our technical bench integrates governance specialists, economists, procurement advisors, and environmental safeguards experts to support complex assignments.",
  },
];

export default function ValueAdvantage() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-24" aria-labelledby="value-advantage-heading">
      <div className="mx-auto max-w-7xl">
        <h2
          id="value-advantage-heading"
          className="text-[26px] font-semibold text-navy md:text-[32px] tracking-tight"
        >
          Our value, your advantage
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
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
