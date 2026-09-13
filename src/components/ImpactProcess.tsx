const steps = [
  { letter: "I", title: "Identify Priorities" },
  { letter: "M", title: "Measure Baselines" },
  { letter: "P", title: "Plan for Delivery" },
  { letter: "A", title: "Accelerate Implementation" },
  { letter: "C", title: "Check Progress" },
  { letter: "T", title: "Track Outcomes" },
];

export default function ImpactProcess() {
  return (
    <section className="bg-navy py-20 text-ivory md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.4fr]">
          <h2 className="font-serif text-[28px] leading-tight md:text-[34px]">
            FSM Impact 360&trade;
          </h2>
          <p className="max-w-[54ch] pt-1.5 text-[16px] text-ivory/75">
            Our working framework for every engagement, from the first
            diagnostic through to tracked, measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <span className="mb-3 block font-serif text-[13px] text-gold">
                Step {i + 1}
              </span>
              <span className="mb-2 block font-serif text-[30px] leading-none text-gold-light">
                {step.letter}
              </span>
              <h3 className="text-[14.5px] font-medium leading-snug">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
