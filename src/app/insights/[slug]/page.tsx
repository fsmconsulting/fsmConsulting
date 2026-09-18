import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Closing from "@/components/Closing";
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
    return { title: "Insight Not Found | FSM Consulting Limited" };
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
      <main>
        <article>
          <header className="bg-navy px-4 pb-16 pt-32 text-white md:px-10 md:pb-20 md:pt-40">
            <div className="mx-auto max-w-3xl">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-blue-bright">{item.category}</span>
              <h1 className="mt-3 font-serif text-[30px] font-medium leading-tight md:text-[42px]">
                {item.title}
              </h1>
              <p className="mt-4 max-w-[58ch] text-[16px] leading-relaxed text-white/75">{item.dek}</p>
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
            <div className="mx-auto max-w-3xl overflow-hidden rounded-[var(--radius-card)]">
              <div className="relative aspect-[16/9] w-full">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" priority />
              </div>
            </div>
          </div>

          <div className="px-4 py-16 md:px-10 md:py-20">
            <div className="mx-auto max-w-3xl">
              {(item.body && item.body.length > 0 ? item.body : [
                item.dek,
                "Development outcomes require a deliberate alignment between fiduciary standards, institutional readiness, and on-the-ground operational capability. When project execution stalls, the root cause is rarely the quality of the strategic ambition; rather, it stems from systemic bottlenecks in procurement sequencing, multi-stakeholder governance, and verified milestone tracking.",
                "By establishing clear independent verification mechanisms and embedding seasoned technical practitioners within the delivery environment, sovereign agencies and development partners can preserve momentum, safeguard capital investments, and achieve durable, measurable results across African economies.",
              ]).map((paragraph: string, i: number) => (
                <p key={i} className="mb-5 text-[16px] leading-relaxed text-ink last:mb-0 md:text-[17px]">
                  {paragraph}
                </p>
              ))}

              <div className="mt-12 border-t border-navy/10 pt-8">
                <Link
                  href="/insights"
                  className="text-[14px] font-medium text-navy/70 transition-colors duration-200 hover:text-navy"
                >
                  &larr; All insights
                </Link>
              </div>
            </div>
          </div>
        </article>

        <Closing />
      </main>
      <Footer />
    </>
  );
}
