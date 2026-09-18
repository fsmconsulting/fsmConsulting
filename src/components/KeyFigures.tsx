import Reveal from "@/components/Reveal";
import { services } from "@/data/servicesData";
import { sectorsData } from "@/data/sectorsData";

/**
 * The scale of the platform, in figures.
 *
 * Every figure here is countable against FSM's own material — three are
 * derived from the site's data files so they can never drift out of step
 * with the pages they describe, and 36 states + FCT is stated in the
 * corporate profile. Nothing in this section is an estimate or a claim.
 * See DESIGN_SYSTEM.md §Data — never invent stats.
 */
const figures = [
  {
    value: "36",
    unit: "+ FCT",
    label: "States covered",
    detail: "Nationwide operational reach across Nigeria",
  },
  {
    value: String(services.length),
    label: "Practice areas",
    detail: "Advisory, delivery, evidence and enabling disciplines",
  },
  {
    value: String(sectorsData.length),
    label: "Sectors served",
    detail: "From governance and health to energy and infrastructure",
  },
  {
    value: "3",
    label: "African regions",
    detail: "West, Central and East Africa delivery network",
  },
];

export default function KeyFigures() {
  return (
    <section className="bg-sand px-4 py-20 md:px-10 md:py-28" aria-labelledby="key-figures-heading">
      <div className="mx-auto max-w-6xl">
        <h2 id="key-figures-heading" className="sr-only">
          FSM Consulting in figures
        </h2>

        <Reveal className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {figures.map((f) => (
            <div
              key={f.label}
              className="bento-card bento-card--hover flex h-full flex-col justify-between bg-white px-5 py-6 md:px-7 md:py-8"
            >
              <p className="flex items-baseline gap-1.5">
                <span className="font-serif text-[44px] font-medium leading-none text-navy md:text-[56px]">
                  {f.value}
                </span>
                {f.unit && (
                  <span className="font-serif text-[15px] text-blue-accent md:text-[17px]">
                    {f.unit}
                  </span>
                )}
              </p>
              <div className="mt-5 md:mt-7">
                <h3 className="text-[14px] font-semibold text-navy md:text-[15px]">{f.label}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted md:text-[13px]">
                  {f.detail}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
