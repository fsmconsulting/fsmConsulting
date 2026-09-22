import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CtaBand } from "@/components/templates";
import { insights } from "@/data/insightsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = insights.find((i) => i.slug === slug);

  if (!item) {
    return { title: "Perspective Not Found | FSM Consulting Limited" };
  }

  return {
    title: `${item.title} | FSM Consulting Limited`,
    description: item.dek,
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = insights.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <Nav transparent />
      <main id="main-content">
        <article>
          <header className="bg-[#07131e] px-4 pb-16 pt-32 text-white md:px-10 md:pb-20 md:pt-40">
            <div className="mx-auto max-w-3xl">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#9BC2F5]">
                {item.category}
              </span>
              <h1 className="mt-3 text-[30px] md:text-[42px] font-bold leading-tight tracking-tight text-white">
                {item.title}
              </h1>
              <p className="mt-4 max-w-[58ch] text-[16px] leading-relaxed text-white/75">
                {item.dek}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[13.5px] text-white/60">
                <span>{item.author}</span>
                {item.date && (
                  <>
                    <span aria-hidden="true">&middot;</span>
                    <time>{item.date}</time>
                  </>
                )}
              </div>
            </div>
          </header>

          <div className="relative -mt-8 px-4 md:-mt-12 md:px-10">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-[20px] shadow-lg">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="px-4 py-16 md:px-10 md:py-20">
            <div className="mx-auto max-w-3xl">
              {item.body.map((paragraph: string, i: number) => (
                <p
                  key={i}
                  className="mb-5 text-[16px] leading-relaxed text-gray-700 last:mb-0 md:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}

              {/* Related services (2 links) */}
              {item.relatedServices && item.relatedServices.length > 0 && (
                <div className="mt-12 border-t border-gray-100 pt-8">
                  <h2 className="text-[18px] font-bold text-[#07131e] mb-4">
                    Related Services
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.relatedServices.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        className="group rounded-2xl border border-gray-200 bg-[#F4F5F7] p-5 transition-all hover:border-[#2F5FA8]/50 hover:bg-white hover:shadow-sm"
                      >
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2F5FA8]">
                          Service Area
                        </span>
                        <p className="mt-1 text-[15px] font-bold text-[#07131e] group-hover:text-[#2F5FA8] transition-colors">
                          {svc.name} &rarr;
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-10 border-t border-gray-100 pt-6">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#2F5FA8] hover:underline"
                >
                  &larr; All perspectives
                </Link>
              </div>
            </div>
          </div>
        </article>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
