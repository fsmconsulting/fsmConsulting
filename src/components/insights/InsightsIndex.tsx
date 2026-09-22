import Link from "next/link";
import Image from "next/image";
import { insights } from "@/data/insightsData";

export default function InsightsIndex() {
  return (
    <section className="bg-white px-6 py-16 md:px-10 md:py-20" aria-labelledby="insights-index-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
            Thought Leadership
          </p>
          <h2 id="insights-index-heading" className="mt-1 text-[28px] md:text-[36px] font-bold tracking-tight text-[#07131e]">
            Perspectives
          </h2>
          <p className="mt-2 text-[15px] text-gray-600 max-w-2xl">
            Practical knowledge, analytical frameworks, and field-tested methodologies grounded in FSM&rsquo;s core development delivery principles.
          </p>
        </div>

        {insights.length === 0 ? (
          <p className="max-w-[56ch] text-[15.5px] leading-relaxed text-gray-500">
            New perspectives are in preparation. Check back shortly.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {insights.map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-gray-100 bg-[#F4F5F7] transition-all hover:border-[#2F5FA8]/40 hover:shadow-md"
                aria-label={`Read perspective: ${item.title}`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 md:p-8">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2F5FA8]">
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-[20px] md:text-[22px] font-bold leading-snug tracking-tight text-[#07131e] group-hover:text-[#2F5FA8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
                      {item.dek}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-gray-200/80 pt-4 text-[12.5px] text-gray-500 font-medium">
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
