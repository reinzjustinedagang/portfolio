import React from 'react';
import { profile } from '../data/profile';
import { roles } from '../data/experience';

export function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <div>
          <p className="font-display text-sm font-medium text-primary">About</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A developer who finishes what he starts
          </h2>
          <div className="mt-4 space-y-4">
            {profile.about.map((paragraph) =>
            <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            )}
          </div>
        </div>

        <ol className="space-y-4">
          {roles.map((role) =>
          <li key={role.company} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {role.title} <span className="text-muted-foreground">· {role.company}</span>
                </h3>
                <p className="text-xs font-medium text-muted-foreground">{role.period}</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{role.scope}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {role.highlights.map((highlight) =>
              <li key={highlight} className="flex gap-2">
                    <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true" />
                
                    {highlight}
                  </li>
              )}
              </ul>
            </li>
          )}
        </ol>
      </div>
    </section>);

}