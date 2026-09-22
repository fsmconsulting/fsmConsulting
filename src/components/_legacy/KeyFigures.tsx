import { services } from "@/data/servicesData";
import { sectorsData } from "@/data/sectorsData";

/**
 * Platform Scale & Key Figures
 * Open Ruled Metric Strip adhering to Conceptzilla editorial visual grammar.
 * Verified figures grounded in FSM corporate profile and platform datasets.
 */
export default function KeyFigures() {
  const figures = [
    {
      value: "36",
      unit: "+ FCT",
      label: "States Covered",
      detail: "Nationwide operational and field reach across Nigeria",
    },
    {
      value: String(services.length),
      unit: "",
      label: "Practice Areas",
      detail: "Advisory, delivery, assurance, and evidence disciplines",
    },
    {
      value: String(sectorsData.length),
      unit: "",
      label: "Development Verticals",
      detail: "From governance and health to energy and infrastructure",
    },
    {
      value: "Pan-African",
      unit: "",
      label: "Delivery Bench",
      detail: "Regional access across West, Central, and East Africa",
    },
  ];

  return (
    <section className="bg-canvas px-6 py-16 md:px-10 md:py-24" aria-labelledby="key-figures-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-bright">
            Platform Scale &middot; Verified Presence
          </span>
          <h2 id="key-figures-heading" className="mt-2 font-serif text-[26px] font-normal text-navy md:text-[34px]">
            Grounded in verified institutional capability.
          </h2>
        </div>

        {/* Open Ruled Platform Metric Strip */}
        <div className="grid grid-cols-1 divide-y divide-navy/15 border-y border-navy/15 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {figures.map((f) => (
            <div
              key={f.label}
              className="py-8 sm:py-6 sm:px-8 first:sm:pl-0 last:sm:pr-0 flex flex-col justify-between"
            >
              <div>
                <p className="flex items-baseline gap-2 font-serif text-[42px] font-normal leading-none text-navy md:text-[50px]">
                  <span>{f.value}</span>
                  {f.unit && (
                    <span className="text-[17px] font-sans font-medium text-blue-bright md:text-[19px]">
                      {f.unit}
                    </span>
                  )}
                </p>
                <h3 className="mt-4 text-[15px] font-semibold text-navy">{f.label}</h3>
              </div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                {f.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
