import Link from "next/link";
import { capabilities } from "@/data/capabilitiesData";

/**
 * The positioning section: FSM's four delivery levels.
 *
 * Deliberately NOT a four-card grid. Four equal cards would say these are
 * four interchangeable products; they are levels of one model, so they read
 * as a ruled editorial list against a single large statement. The statement
 * itself is FSM's own line from the corporate profile.
 *
 * Each row's supporting line is revealed on hover/focus at desktop width and
 * left permanently open below md — a touch user must never have to hover to
 * reach content (see FSM_DIGITAL_EXPERIENCE.md §Responsive).
 */
export default function PositioningPillars() {
  return (
    <section
      id="positioning"
      className="bg-white px-4 py-20 md:px-10 md:py-28"
      aria-labelledby="positioning-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-[12px] font-medium uppercase tracking-wide text-blue-accent">
            Positioning
          </span>
          <h2
            id="positioning-heading"
            className="mt-4 font-serif text-[28px] font-medium leading-[1.18] text-navy md:text-[36px]"
          >
            Global expertise where required, regional access where valuable,
            and local capability where delivery matters most.
          </h2>
          <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-ink-muted">
            One model, assembled to the requirement of each assignment rather
            than sold as four separate services.
          </p>
        </div>

        <div className="border-t border-navy/12">
          {capabilities.map((cap, i) => (
            <Link
              key={cap.slug}
              href={`/capabilities/${cap.slug}`}
              className="group block border-b border-navy/12 py-7 outline-none md:py-8"
            >
              <div className="flex items-baseline gap-5 md:gap-7">
                <span className="w-6 shrink-0 font-serif text-[14px] text-navy/30 transition-colors duration-500 group-hover:text-blue-accent group-focus-visible:text-blue-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="flex-1 font-serif text-[22px] font-medium leading-snug text-navy md:text-[28px]">
                  {cap.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 translate-x-0 text-[18px] text-navy/25 transition-all duration-500 group-hover:translate-x-1 group-hover:text-blue-accent group-focus-visible:translate-x-1 group-focus-visible:text-blue-accent"
                >
                  &rarr;
                </span>
              </div>

              <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] md:group-focus-visible:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="mt-3 max-w-[48ch] pl-11 text-[14.5px] leading-relaxed text-ink-muted md:mt-4 md:pl-12">
                    {cap.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
