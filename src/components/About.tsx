export default function About() {
  return (
    <section id="about" className="border-b border-gray-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Category Header */}
        <div className="mb-12">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
            Institutional Purpose &middot; Delivery Philosophy
          </span>
          <h2 className="mt-2 font-serif text-[32px] font-normal text-navy md:text-[42px]">
            Bridging the divide between ambitious strategy and ground-level execution.
          </h2>
        </div>

        {/* Pull Quote Spotlight Banner */}
        <div className="relative mb-16 border-l-4 border-gold bg-[#f8f9fa] p-8 md:p-12">
          <blockquote className="font-serif text-[22px] font-light italic leading-relaxed text-navy md:text-[28px] lg:text-[30px]">
            &ldquo;Unlike firms that focus solely on compliance or reporting,
            FSM ensures development investments generate tangible results and
            lasting impact.&rdquo;
          </blockquote>
          <div className="mt-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <span>The FSM Delivery Mandate</span>
          </div>
        </div>

        {/* 3-Column Analytical Framework Cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          
          {/* Card 1 */}
          <div className="flex flex-col border-t border-gray-200 pt-6">
            <h3 className="mt-3 font-serif text-[20px] font-medium text-navy">
              Implementation Acceleration
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
              FSM Consulting Limited is a multidisciplinary development
              delivery, implementation acceleration, and project assurance
              firm. We help governments, development partners, international
              financial institutions, and private sector organizations bridge
              the gap between strategy and execution.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col border-t border-gray-200 pt-6">
            <h3 className="mt-3 font-serif text-[20px] font-medium text-navy">
              Multidisciplinary Bench
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
              Our network brings together development economists,
              implementation specialists, policy advisors, procurement and
              fiduciary experts, governance professionals, MEAL specialists,
              environmental and social safeguard experts, engineers, and
              digital transformation specialists, combining global best
              practice with deep contextual understanding.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col border-t border-gray-200 pt-6">
            <h3 className="mt-3 font-serif text-[20px] font-medium text-navy">
              Measured by Real Impact
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
              We measure success differently: not by activities completed, but
              by whether institutions grew stronger, beneficiaries were
              reached, and resources were used well. Every project is anchored
              in verifiable outcomes.
            </p>
          </div>

        </div>

        {/* Footnote Link */}
        <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-6">
          <span className="text-xs text-gray-500">Guided by international best practice &amp; pan-African execution.</span>
          <a
            href="/about"
            className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy transition-all duration-200 hover:text-blue-accent"
          >
            <span>Read Corporate Profile &amp; Institutional Mandate</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}