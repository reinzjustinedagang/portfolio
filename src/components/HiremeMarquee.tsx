import React from "react";

const items = [
  "Hire Me",
  "Let's Work Together",
  "Open to Opportunities",
  "Ready to Contribute",
];

const track = Array.from({ length: 6 }, (_, index) => (
  <React.Fragment key={index}>
    {items.map((role) => (
      <React.Fragment key={`${role}-${index}`}>
        <span className="whitespace-nowrap font-display text-sm font-bold tracking-tight text-foreground md:text-sm">
          {role}
        </span>

        <span className="mx-8 text-sm text-primary md:mx-10" aria-hidden="true">
          𝖗𝖏𝖉
        </span>
      </React.Fragment>
    ))}
  </React.Fragment>
));

export function HiremeMarquee() {
  return (
    <div
      className="group relative w-full overflow-hidden border-y border-border/60 bg-card py-4"
      aria-label="Web Developer, Full-Stack Developer, Business Analyst, Software Developer, Frontend Developer"
    >
      <div className="flex w-max animate-role-marquee items-center">
        <div className="flex shrink-0 items-center">{track}</div>

        <div className="flex shrink-0 items-center" aria-hidden="true">
          {track}
        </div>
      </div>
    </div>
  );
}
