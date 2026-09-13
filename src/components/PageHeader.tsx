export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="bg-navy pb-16 pt-16 text-ivory md:pb-20 md:pt-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="mb-4 text-[13.5px] text-gold">{eyebrow}</p>
        <h1 className="max-w-[18ch] font-serif text-[34px] font-medium leading-[1.12] md:text-[46px]">
          {title}
        </h1>
        <div className="my-6 h-0.5 w-16 bg-gold" />
        <p className="max-w-[56ch] text-[16.5px] leading-relaxed text-ivory/75">
          {intro}
        </p>
      </div>
    </section>
  );
}
