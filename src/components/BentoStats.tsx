import Reveal from "@/components/Reveal";

/**
 * Mixed-size rounded stat/brand tiles — the "bento grid" signature of the
 * Prism reference. Numbers here are the ones FSM's corporate profile
 * actually supports (see DESIGN_SYSTEM.md §Data — never invent stats).
 */
export default function BentoStats() {
  return (
    <section className="bg-sand px-4 py-20 md:px-10 md:py-28" aria-labelledby="bento-stats-heading">
      <div className="mx-auto max-w-6xl">
        <h2 id="bento-stats-heading" className="sr-only">
          FSM Consulting in numbers
        </h2>

        <Reveal className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          <>
            <div className="col-span-1">
              <StatTile value="36" label="States + FCT — complete nationwide operational reach across Nigeria" />
            </div>
            <div className="col-span-1">
              <StatTile value="Pan-African" label="West, Central &amp; East Africa regional delivery network" small />
            </div>

            <div className="col-span-2 md:col-span-2">
              <div className="bento-card bento-card--hover flex h-full min-h-[180px] items-center justify-center bg-navy px-8 py-12 md:min-h-[220px]">
                <span className="font-serif text-[30px] italic text-white md:text-[38px]">
                  FSM Consulting.
                </span>
              </div>
            </div>

            <div className="col-span-1">
              <StatTile value="Multidisciplinary" label="Economists, engineers, MEAL, digital &amp; safeguard specialists" small />
            </div>
            <div className="col-span-1">
              <StatTile value="Outcome-Driven" label="Measuring success through verifiable results" small />
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}

function StatTile({
  value,
  label,
  small,
}: {
  value: string;
  label: string;
  small?: boolean;
}) {
  return (
    <div className="bento-card bento-card--hover flex h-full min-h-[180px] flex-col justify-between bg-white px-7 py-7 md:min-h-[220px] md:px-8 md:py-8">
      <span
        className={`font-serif font-medium text-navy ${
          small ? "text-[24px] md:text-[29px]" : "text-[38px] md:text-[46px]"
        }`}
      >
        {value}
      </span>
      <span className="mt-3 text-[14px] leading-snug text-ink-muted">{label}</span>
    </div>
  );
}
