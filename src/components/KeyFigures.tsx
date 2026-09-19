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

        {/* Open Ruled Platform Metric Strip: 2x2 grid on mobile, 1x4 on desktop */}
        <div className="grid grid-cols-2 border-y border-navy/15 lg:grid-cols-4">
          {figures.map((f, i) => {
            const isFirstRow = i < 2;
            const isOddCol = i % 2 === 1;

            return (
              <div
                key={f.label}
                className={`flex flex-col justify-between py-6 sm:py-7 lg:py-8 ${
                  isFirstRow ? "border-b border-navy/15 lg:border-b-0" : ""
                } ${
                  isOddCol
                    ? "border-l border-navy/15 pl-4 sm:pl-6 lg:px-8 lg:last:pr-0"
                    : "pr-4 sm:pr-6 lg:px-8 lg:first:pl-0"
                } ${
                  i === 2 ? "lg:border-l lg:border-navy/15" : ""
                }`}
              >
                <div>
                  <p className="flex flex-wrap items-baseline gap-1.5 font-serif leading-none text-navy sm:gap-2">
                    <span
                      className={
                        f.value === "Pan-African"
                          ? "text-[22px] sm:text-[34px] md:text-[42px] lg:text-[50px]"
                          : "text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px]"
                      }
                    >
                      {f.value}
                    </span>
                    {f.unit && (
                      <span className="font-sans text-[13px] font-medium text-blue-bright sm:text-[16px] md:text-[19px]">
                        {f.unit}
                      </span>
                    )}
                  </p>
                  <h3 className="mt-3 text-[13.5px] font-semibold text-navy sm:mt-4 sm:text-[15px]">
                    {f.label}
                  </h3>
                </div>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink-muted sm:mt-2 sm:text-[13.5px]">
                  {f.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
