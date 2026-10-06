import React from "react";

const names = Array.from({ length: 8 }, (_, index) => (
  <React.Fragment key={index}>
    <span className="whitespace-nowrap font-display text-sm font-bold tracking-tight text-foreground md:text-sm">
      Hire me
    </span>

    <span
      className="mx-8 text-sm text-primary md:mx-10 md:text-sm"
      aria-hidden="true"
    >
      𝖗𝖏𝖉
    </span>
  </React.Fragment>
));

export function HiremeMarquee() {
  return (
    <div
      className="group relative w-full overflow-hidden border-y border-border/60 bg-card py-4"
      aria-label="Hire me"
    >
      <div className="flex w-max animate-name-marquee items-center">
        <div className="flex shrink-0 items-center">{names}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {names}
        </div>
      </div>
    </div>
  );
}
