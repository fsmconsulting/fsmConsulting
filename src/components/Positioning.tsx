const combine = [
  "Strategic Advisory",
  "Technical Assistance",
  "Independent Verification",
  "Monitoring and Evaluation",
  "Institutional Strengthening",
  "Project Assurance",
  "Capacity Development",
];

export default function Positioning() {
  return (
    <section className="bg-sand py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h2 className="mb-5 font-serif text-[28px] leading-tight text-navy md:text-[34px]">
            Development Effectiveness Specialists
          </h2>
          <p className="max-w-[56ch] text-[15.5px] leading-relaxed text-ink/75">
            Unlike traditional consulting firms that focus solely on
            compliance or reporting, FSM Consulting Limited focuses on
            ensuring that development investments generate tangible results
            and lasting impact. To help clients achieve their development
            objectives efficiently and effectively, we combine the following
            into a single integrated platform.
          </p>
        </div>

        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {combine.map((item) => (
            <li key={item} className="py-3.5 text-[15px] text-navy">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
