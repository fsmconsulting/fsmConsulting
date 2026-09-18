"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-reveal microinteraction: fades + rises a block into place the first
 * time it enters the viewport. See DESIGN_SYSTEM.md §Motion.
 *
 * This is deliberately fail-safe. The block starts at opacity 0, so anything
 * that stops the reveal from running would otherwise hide real content for
 * good. Three guards prevent that:
 *   1. prefers-reduced-motion — revealed immediately, no transition.
 *   2. an on-mount geometry check, so anything already at or above the fold
 *      (including a restored scroll position or a deep link) shows at once.
 *   3. a passive scroll fallback, because a hard fling can carry an element
 *      past the viewport between frames without the observer ever sampling it.
 * A no-JS fallback lives in layout.tsx.
 *
 * Usage: <Reveal><YourSection /></Reveal>  or  <Reveal delay={120}>...
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("is-visible");

    // 1. Reduced motion: no reveal choreography at all.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    // 2. Already at or above the fold on mount.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      show();
      return;
    }

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      show();
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };

    // 3. Passive scroll fallback for fast flings the observer can skip.
    const onScroll = () => {
      if (el.getBoundingClientRect().top < window.innerHeight) finish();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) finish();
      },
      // threshold 0: any sliver counts, so a tall block on a small screen
      // can never sit below a percentage it is unable to reach.
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-up ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
