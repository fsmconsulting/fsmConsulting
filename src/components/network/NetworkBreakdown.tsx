const tiers = [
  {
    label: "Headquarters",
    detail: "Abuja, Federal Capital Territory, Nigeria",
    body: "FSM Consulting Limited is headquartered in Abuja, with national implementation capacity across all 36 Nigerian states and the FCT.",
  },
  {
    label: "Country Partners",
    detail: "Senegal · Sierra Leone · Cameroon · Kenya · Uganda",
    body: "Strategic in-country partnerships that give FSM delivery access and local coordination beyond Nigeria, without implying a corporate office in each location.",
  },
  {
    label: "Professional Network",
    detail: "Multidisciplinary technical bench",
    body: "A curated network of economists, engineers, safeguards specialists, MEAL practitioners, and sector experts assembled around each assignment's requirements.",
  },
  {
    label: "Delivery Access",
    detail: "Africa–Asia technical exchange",
    body: "Cross-border logistics coordination — visas, field mobilization, local consultant engagement — so technical experts can focus on delivery.",
  },
];

export default function NetworkBreakdown() {
  return (
    <section className="bg-white px-4 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-[26px] font-medium text-navy md:text-[32px]">
          How the network is structured
        </h2>
        <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink-muted">
          These are four distinct things, and we keep them distinct rather than implying a
          uniform office footprint across the continent.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {tiers.map((t) => (
            <div key={t.label} className="bento-card bento-card--hover bg-sand px-7 py-7">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-blue-accent">
                {t.label}
              </p>
              <p className="mt-2 font-serif text-[18px] font-medium text-navy">{t.detail}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
