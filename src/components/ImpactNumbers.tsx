import { MapPin, Globe2, Layers, CheckCircle2 } from "lucide-react";

interface MetricItem {
  value: string;
  unit?: string;
  label: string;
  icon: React.ElementType;
}

const impactMetrics: MetricItem[] = [
  {
    value: "36",
    unit: "+ FCT",
    label: "States with field reach across Nigeria",
    icon: MapPin,
  },
  {
    value: "5+",
    label: "Partner countries across West, Central and East Africa",
    icon: Globe2,
  },
  {
    value: "14",
    label: "Integrated practice areas",
    icon: Layers,
  },
  {
    value: "6",
    label: "Stages in the FSM Impact 360™ delivery framework",
    icon: CheckCircle2,
  },
];

/**
 * Section 7: "Our impact in numbers"
 * Adheres to Conceptzilla Prism layout grammar:
 * - Stacked list layout with thin dividers and small icons on the right
 * - Verified metrics only grounded in FSM Corporate Profile (r1-1.docx)
 */
export default function ImpactNumbers() {
  return (
    <section
      id="impact-in-numbers"
      className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-t border-gray-200/70"
      aria-labelledby="impact-numbers-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Section Title & Restrained Editorial Narrative */}
          <div className="lg:col-span-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
              Institutional Scale
            </span>
            <h2
              id="impact-numbers-heading"
              className="mt-3 text-[30px] sm:text-[34px] md:text-[40px] font-bold text-[#07131e] tracking-tight leading-[1.15]"
            >
              Our impact in numbers
            </h2>
            <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#5A6876] max-w-md">
              Delivering operational capability, sovereign reach, and disciplined implementation frameworks across federal, state, and cross-border development environments.
            </p>
          </div>

          {/* Right Column: Stacked List with Thin Dividers and Icons on the Right */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-gray-200/90 border-y border-gray-200/90">
              {impactMetrics.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="py-6 sm:py-7 flex items-center justify-between gap-6 group transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                      <span className="text-[40px] sm:text-[48px] md:text-[54px] font-bold text-[#07131e] tracking-tight leading-none min-w-[140px] sm:min-w-[180px]">
                        {item.value}
                        {item.unit && (
                          <span className="ml-1 text-[20px] sm:text-[24px] font-semibold text-[#2F5FA8]">
                            {item.unit}
                          </span>
                        )}
                      </span>
                      <span className="text-[15px] sm:text-[16.5px] text-[#07131e] font-medium leading-snug">
                        {item.label}
                      </span>
                    </div>

                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200/80 text-[#2F5FA8] shadow-xs group-hover:bg-[#2F5FA8] group-hover:text-white group-hover:border-[#2F5FA8] transition-all duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
