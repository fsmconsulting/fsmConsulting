import Link from "next/link";
import { capabilities } from "@/data/capabilitiesData";

export default function DeliveryModelSection() {
  return (
    <section
      id="delivery-model"
      className="bg-white px-4 py-20 md:px-10 md:py-28"
      aria-labelledby="delivery-model-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="delivery-model-heading" className="font-serif text-[30px] font-medium text-navy md:text-[40px]">
          Services overview
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 md:gap-5">
          {capabilities.map((cap) => (
            <Link
              key={cap.slug}
              href={`/capabilities/${cap.slug}`}
              className="group rounded-[var(--radius-card)] bg-sand px-8 py-9 transition-colors duration-200 hover:bg-sand/70 md:px-10 md:py-10"
              aria-label={`Learn more about ${cap.title}`}
            >
              <h3 className="text-[19px] font-medium text-navy md:text-[21px]">{cap.title}</h3>
              <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-ink-muted">
                {cap.tagline}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-navy/70 transition-colors duration-200 group-hover:text-navy">
                Learn more
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
