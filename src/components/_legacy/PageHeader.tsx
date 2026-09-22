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
    <section className="relative overflow-hidden bg-[#07131e] bg-gradient-to-b from-[#07131e] to-[#0b1c2e] pt-20 pb-20 text-white md:pt-28 md:pb-28 border-b border-white/10">
      {/* Subtle brand blue ambient glow */}
      <div className="pointer-events-none absolute -top-32 right-10 h-80 w-80 rounded-full bg-[#2F5FA8]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        {/* Eyebrow Pill Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#2F5FA8]/15 border border-[#2F5FA8]/30 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-wider text-[#9BC2F5]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2F5FA8]" />
          <span>{eyebrow}</span>
        </div>

        {/* Bold Sans-Serif Headline matching Homepage */}
        <h1 className="max-w-[20ch] text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-bold leading-[1.08] tracking-tight text-white">
          {title}
        </h1>

        {/* Brand Blue Accent Bar */}
        <div className="my-6 h-1 w-20 rounded-full bg-[#2F5FA8]" />

        {/* Subtitle Dek */}
        <p className="max-w-[56ch] text-[17px] md:text-[19px] leading-relaxed text-white/80">
          {intro}
        </p>
      </div>
    </section>
  );
}
