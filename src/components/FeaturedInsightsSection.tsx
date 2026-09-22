import Link from "next/link";
import Image from "next/image";
import { insights } from "@/data/insightsData";

interface FeaturedInsightsSectionProps {
  eyebrow?: string;
  heading?: string;
}

/**
 * Editorial Insights & Perspectives Section
 * Matches Conceptzilla Reference (2433588c582ab68b20ec69ab1722d0b2.webp & 91e92a42cb383981c55b96b7197da0d2.webp):
 * - Large headline paragraph across top
 * - Exactly 3 prominent insight cards in a clean horizontal 3-column grid
 * - Rounded images (16/10 aspect ratio), bold titles, concise deks
 * - Light grey pill button "Show All Insights" at the bottom.
 */
export default function FeaturedInsightsSection({
  heading = "We don’t just advise clients — we bridge the gap between ambitious strategy and ground-level execution. Our team regularly publishes insights, case analyses, and thought pieces to help organizations anticipate challenges and seize opportunities.",
}: FeaturedInsightsSectionProps) {
  // Show the 3 most recent insights
  const featured = insights.slice(0, 3);

  return (
    <section
      id="insights"
      className="bg-white px-6 md:px-12 py-16 md:py-24 border-t border-gray-100"
      aria-labelledby="insights-statement-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Large Editorial Headline Statement matching reference */}
        <h2
          id="insights-statement-heading"
          className="max-w-4xl text-[24px] sm:text-[28px] md:text-[34px] font-normal leading-[1.22] text-navy tracking-tight"
        >
          {heading}
        </h2>

        {/* 3-Column Card Grid matching reference 2433588c582ab68b20ec69ab1722d0b2.webp */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {featured.map((item) => (
            <Link
              key={item.slug}
              href={`/insights/${item.slug}`}
              className="group flex flex-col transition-transform duration-300 hover:-translate-y-1.5"
            >
              {/* Rounded image container with zoom effect */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-gray-100 shadow-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title & Description directly under image */}
              <h3 className="mt-5 text-[17px] sm:text-[18px] font-semibold leading-snug text-navy group-hover:text-blue-accent transition-colors tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-gray-600">
                {item.dek}
              </p>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Button matching reference: "Show All Insights" */}
        <div className="mt-12 md:mt-14">
          <Link
            href="/insights"
            className="inline-flex items-center justify-center rounded-full bg-[#f0f2f5] px-8 py-3.5 text-[14.5px] font-semibold text-navy hover:bg-navy hover:text-white hover:shadow-md transition-all duration-200"
          >
            Show All Insights
          </Link>
        </div>
      </div>
    </section>
  );
}
