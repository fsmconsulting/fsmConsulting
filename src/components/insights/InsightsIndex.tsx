import Link from "next/link";
import Image from "next/image";
import { insights } from "@/data/insightsData";

export default function InsightsIndex() {
  return (
    <section className="bg-white px-6 py-16 md:px-10 md:py-20" aria-labelledby="insights-index-heading">
      <div className="mx-auto max-w-7xl">
        <h2 id="insights-index-heading" className="sr-only">
          All insights
        </h2>

        {insights.length === 0 ? (
          <p className="max-w-[56ch] text-[15.5px] leading-relaxed text-ink-muted">
            New perspectives are in preparation. Check back shortly.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {insights.map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                className="surface-card group flex flex-col overflow-hidden border border-navy/10 bg-canvas transition-colors hover:border-navy/30"
                aria-label={`Read insight: ${item.title}`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-8 md:p-9">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-blue-bright">
                      {item.category}
                    </span>
                    <h3 className="mt-2.5 font-serif text-[22px] font-medium leading-snug text-navy md:text-[26px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[54ch] text-[14.5px] leading-relaxed text-ink-muted">
                      {item.dek}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-4 font-mono text-[12px] text-ink-muted">
                    <span>{item.author}</span>
                    {item.date && <time>{item.date}</time>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
