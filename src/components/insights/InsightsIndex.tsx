import Link from "next/link";
import Image from "next/image";
import { insights } from "@/data/insightsData";

export default function InsightsIndex() {
  return (
    <section className="bg-white px-4 py-16 md:px-10 md:py-20" aria-labelledby="insights-index-heading">
      <div className="mx-auto max-w-6xl">
        <h2 id="insights-index-heading" className="sr-only">
          All insights
        </h2>

        {insights.length === 0 ? (
          <p className="max-w-[56ch] text-[15px] leading-relaxed text-ink-muted">
            New perspectives are in preparation. Check back shortly.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            {insights.map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                className="bento-card bento-card--hover img-hover-zoom group flex flex-col overflow-hidden bg-white"
                aria-label={`Read insight: ${item.title}`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between px-6 py-6 md:px-8 md:py-8">
                  <div>
                    <span className="text-[12px] font-medium text-blue-accent">{item.category}</span>
                    <h3 className="mt-2 font-serif text-[20px] font-medium leading-snug text-navy md:text-[24px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[54ch] text-[14.5px] leading-relaxed text-ink-muted">
                      {item.dek}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[13px] text-ink-muted">
                    <span>{item.author}</span>
                    {item.date && (
                      <>
                        <span aria-hidden="true">&middot;</span>
                        <time>{item.date}</time>
                      </>
                    )}
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
