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
  // Pull the most recent featured insight for hero placement
  const featured = insightsList.find((item) => item.featured) || insightsList[0];

  // Pull up to 3 secondary insights
  const secondary = insightsList.filter((item) => item.slug !== featured.slug).slice(0, 3);

  return (
    <section
      id="featured-insights"
      className="bg-sand px-4 py-20 md:px-10 md:py-28"
      aria-labelledby="insights-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="insights-heading" className="font-serif text-[26px] font-medium text-navy md:text-[34px]">
            Perspectives on development delivery
          </h2>
          <Link
            href="/insights"
            className="text-[14px] font-medium text-navy/70 transition-colors duration-200 hover:text-navy"
          >
            View all insights
          </Link>
        </div>

        <div
          className={`mt-8 grid grid-cols-1 gap-3 md:mt-10 md:gap-4 ${
            secondary.length > 0 ? "md:grid-cols-3" : ""
          }`}
        >
          {featured && (
            <Link
              href={`/insights/${featured.slug}`}
              className={`bento-card bento-card--hover img-hover-zoom group col-span-1 flex flex-col overflow-hidden bg-white md:flex-row ${
                secondary.length > 0 ? "md:col-span-2 md:row-span-2 md:flex-col" : ""
              }`}
              aria-label={`Read featured insight: ${featured.title}`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden md:w-1/2 md:aspect-auto">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-1 flex-col justify-between px-6 py-6 md:px-8 md:py-8">
                <div>
                  <span className="text-[12px] font-medium text-blue-accent">
                    {featured.category}
                  </span>
                  <h3 className="mt-2 font-serif text-[22px] font-medium leading-snug text-navy md:text-[26px]">
                    {featured.title}
                  </h3>
                  <p className="mt-3 max-w-[54ch] text-[14.5px] leading-relaxed text-ink-muted">
                    {featured.dek}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-[13px] text-ink-muted">
                  <span>{featured.author}</span>
                  {featured.date && (
                    <>
                      <span aria-hidden="true">&middot;</span>
                      <time>{featured.date}</time>
                    </>
                  )}
                </div>
              </div>
            </Link>
          )}

          {secondary.map((item) => (
            <Link
              key={item.slug}
              href={`/insights/${item.slug}`}
              className="bento-card bento-card--hover img-hover-zoom group flex items-center gap-4 overflow-hidden bg-white p-3 md:flex-col md:items-stretch md:p-0"
              aria-label={`Read insight: ${item.title}`}
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[var(--radius-card-sm)] md:h-40 md:w-full md:rounded-none">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 80px, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1 md:px-6 md:py-5">
                <span className="text-[11px] font-medium text-blue-accent">
                  {item.category}
                </span>
                <h3 className="mt-1 truncate text-[15px] font-medium text-navy md:whitespace-normal">
                  {item.title}
                </h3>
                <time className="mt-1 block text-[12.5px] text-ink-muted">{item.date}</time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
