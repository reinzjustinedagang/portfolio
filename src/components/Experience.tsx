import React, { useEffect, useRef } from "react";
import { roles } from "../data/experience";

export function Experience() {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const items = itemRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("experience-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    items.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="font-display text-sm font-medium text-primary">
            Experience
          </p>

          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Where I've worked
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A look at the roles I've held and what I delivered in each.
          </p>
        </div>

        {/* Zig-zag timeline */}
        <ol className="relative">
          {/* Center line */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 w-px bg-border md:left-1/2 md:-translate-x-1/2"
          />

          {roles.map((role, i) => {
            const isLeft = i % 2 === 0;

            return (
              <li
                key={role.company}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className={`experience-item relative grid pb-16 last:pb-0 md:grid-cols-2 md:gap-0 ${
                  isLeft ? "experience-left" : "experience-right"
                }`}
              >
                {/* Dot on the line */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 size-4 rounded-full border-4 border-background bg-primary ring-1 ring-primary/40 md:left-1/2 md:-translate-x-1/2"
                />

                <div
                  className={
                    isLeft
                      ? "pl-10 md:col-start-1 md:pl-0 md:pr-14 md:text-right"
                      : "pl-10 md:col-start-2 md:pl-14"
                  }
                >
                  {/* Period */}
                  <p className="font-display text-sm font-semibold text-primary">
                    {role.period}
                  </p>

                  {/* Title + company */}
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {role.title}
                  </h3>

                  <p className="mt-1 font-display text-base font-medium text-muted-foreground">
                    {role.company}
                  </p>

                  {/* Scope */}
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {role.scope}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className={`flex gap-3 ${
                          isLeft ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <span
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Animation styles */}
      <style>{`
        .experience-item {
          opacity: 0;
          will-change: transform, opacity;
          transition:
            transform 1.6s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 1.1s ease-out;
        }

        /* Start positions */
        .experience-left {
          transform: translateX(-100px);
        }

        .experience-right {
          transform: translateX(100px);
        }

        /* Final position */
        .experience-item.experience-visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Slightly slower on larger screens */
        @media (min-width: 768px) {
          .experience-item {
            transition:
              transform 1.9s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 1.3s ease-out;
          }

          .experience-left {
            transform: translateX(-140px);
          }

          .experience-right {
            transform: translateX(140px);
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .experience-item,
          .experience-item.experience-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
