const values = [
  {
    title: "Integrity",
    body: "We uphold the highest standards of ethics, transparency, and professionalism.",
  },
  {
    title: "Excellence",
    body: "We deliver quality services that consistently exceed expectations.",
  },
  {
    title: "Innovation",
    body: "We apply creative thinking and technology-driven solutions to complex development challenges.",
  },
  {
    title: "Accountability",
    body: "We promote responsible stewardship of public and development resources.",
  },
  {
    title: "Collaboration",
    body: "We leverage multidisciplinary expertise and strategic partnerships.",
  },
  {
    title: "Impact",
    body: "We focus on generating measurable and sustainable results.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-sand-2 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.4fr] md:mb-14">
          <h2 className="font-serif text-[28px] leading-tight text-navy md:text-[34px]">
            Our core values
          </h2>
          <p className="max-w-[54ch] pt-1.5 text-[16px] text-ink/70">
            The principles that guide how we work with governments,
            development partners, and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="border-t border-ink/15 pt-5">
              <h3 className="mb-2 font-serif text-[19px] font-medium text-navy">
                {value.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-ink/65">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
