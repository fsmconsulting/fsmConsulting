import Link from "next/link";
import Image from "next/image";
import { insights, type Insight } from "@/data/insightsData";

interface FeaturedInsightsSectionProps {
  eyebrow?: string;
  heading?: string;
  insightsList?: Insight[];
}

export default function FeaturedInsightsSection({
  eyebrow = "Insights",
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
      className="featured-insights-section"
      aria-labelledby="insights-heading"
    >
      <div className="featured-insights-container">
        {/* Section Header */}
        <header className="featured-insights-header">
          <p className="featured-insights-eyebrow">{eyebrow}</p>
          <h2 id="insights-heading" className="featured-insights-heading">
            {heading}
          </h2>
        </header>

        {/* Asymmetric Editorial Grid */}
        <div className="featured-insights-grid">
          {/* Main Hero Card (Left / ~60% width) */}
          {featured && (
            <article className="featured-insight-article">
              <Link
                href={`/insights/${featured.slug}`}
                className="featured-insight-link group"
                aria-label={`Read featured insight: ${featured.title}`}
              >
                <div className="featured-insight-image-wrapper">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="featured-insight-image"
                    priority
                  />
                </div>

                <div className="featured-insight-body">
                  <span className="featured-insight-category">
                    {featured.category}
                  </span>

                  <h3 className="featured-insight-title">
                    {featured.title}
                  </h3>

                  <p className="featured-insight-dek">
                    {featured.dek}
                  </p>

                  <div className="featured-insight-meta">
                    <span className="featured-insight-author">{featured.author}</span>
                    <span className="featured-insight-separator" aria-hidden="true">/</span>
                    <time className="featured-insight-date">{featured.date}</time>
                  </div>
                </div>
              </Link>
            </article>
          )}

          {/* Secondary Cards Column (Right / ~40% width) */}
          <div className="secondary-insights-stack">
            {secondary.map((item) => (
              <article key={item.slug} className="secondary-insight-article">
                <Link
                  href={`/insights/${item.slug}`}
                  className="secondary-insight-link group"
                  aria-label={`Read insight: ${item.title}`}
                >
                  <div className="secondary-insight-image-wrapper">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 90px, 120px"
                      className="secondary-insight-image"
                    />
                  </div>

                  <div className="secondary-insight-body">
                    <span className="secondary-insight-category">
                      {item.category}
                    </span>

                    <h3 className="secondary-insight-title">
                      {item.title}
                    </h3>

                    <time className="secondary-insight-date">
                      {item.date}
                    </time>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Section Footer CTA */}
        <div className="featured-insights-footer">
          <Link href="/insights" className="featured-insights-cta">
            <span>View all insights</span>
            <span className="featured-insights-cta-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
