import Link from "next/link";
import Image from "next/image";
import { insights, type Insight } from "@/data/insightsData";

interface FeaturedInsightsSectionProps {
  eyebrow?: string;
  heading?: string;
  insightsList?: Insight[];
}

export default function FeaturedInsightsSection({
  heading = "Perspectives on development delivery",
  insightsList = insights,
}: FeaturedInsightsSectionProps) {
  // Pull the most recent featured insight
  const featured = insightsList.find((item) => item.featured) || insightsList[0];

  // Pull secondary insights
  const secondary = insightsList.filter((item) => item.slug !== featured.slug).slice(0, 3);

  return (
    <section
      id="featured-insights"
      className="bg-white px-6 py-20 md:px-10 md:py-28"
      aria-labelledby="insights-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-navy/15 pb-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-bright">
              Editorial Insights &middot; Sector Perspectives
            </span>
            <h2 id="insights-heading" className="mt-2 font-serif text-[30px] font-normal text-navy md:text-[40px]">
              {heading}
            </h2>
          </div>
          <Link
            href="/insights"
            className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-navy hover:text-blue-bright transition-colors"
          >
            <span>View all perspectives</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Featured Dominant Editorial Block (7 Cols) */}
          {featured && (
            <Link
              href={`/insights/${featured.slug}`}
              className="surface-card group col-span-1 flex flex-col overflow-hidden border border-navy/10 bg-canvas transition-colors duration-300 hover:border-navy/30 lg:col-span-7"
              aria-label={`Read featured insight: ${featured.title}`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  priority
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-8 md:p-10">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-blue-bright">
                    {featured.category}
                  </span>
                  <h3 className="mt-3 font-serif text-[24px] font-medium leading-snug text-navy md:text-[30px]">
                    {featured.title}
                  </h3>
                  <p className="mt-3.5 max-w-[54ch] text-[15px] leading-relaxed text-ink-muted">
                    {featured.dek}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-3 border-t border-navy/10 pt-4 font-mono text-[12px] text-ink-muted">
                  <span>{featured.author}</span>
                  {featured.date && (
                    <>
                      <span aria-hidden="true">&bull;</span>
                      <time>{featured.date}</time>
                    </>
                  )}
                </div>
              </div>
            </Link>
          )}

          {/* Secondary Editorial Stories Column (5 Cols) */}
          <div className="col-span-1 flex flex-col gap-4 lg:col-span-5">
            {secondary.map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                className="surface-card-sm group flex flex-1 flex-col justify-between border border-navy/10 bg-canvas p-6 transition-colors duration-300 hover:border-navy/30 md:p-7"
                aria-label={`Read insight: ${item.title}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-blue-bright">
                      {item.category}
                    </span>
                    <time className="font-mono text-[11px] text-ink-muted">{item.date}</time>
                  </div>
                  <h3 className="mt-2.5 font-serif text-[18px] font-medium leading-snug text-navy md:text-[20px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-ink-muted">
                    {item.dek}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-navy/10 flex items-center justify-between text-[12.5px] text-ink-muted">
                  <span>{item.author}</span>
                  <span className="text-navy group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
