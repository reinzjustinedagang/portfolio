import React from "react";
import { skills } from "../data/skills";
import { Skill } from "../types/portfolio";

function SkillItem({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <div className="flex shrink-0 items-center gap-3 px-6">
      <div
        className="transition-transform duration-300 group-hover/item:scale-110"
        style={{ color: skill.color }}
      >
        <Icon size={24} aria-hidden="true" />
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold text-foreground">
          {skill.name}
        </h3>

        <p className="text-xs text-muted-foreground">{skill.category}</p>
      </div>
    </div>
  );
}

export function Skills() {
  const track = [...skills, ...skills];

  return (
    <section id="skills" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12 max-w-2xl">
          <p className="font-display text-sm font-medium text-primary">
            Skills
          </p>

          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Technologies I work with
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A growing toolkit focused on modern web development, solid
            fundamentals, and practical problem-solving.
          </p>
        </div>

        {/* Skill slider */}
        <div className="group relative overflow-hidden py-6">
          <ul
            className="skill-track flex w-max items-center"
            aria-label="Technologies I work with"
          >
            {track.map((skill, index) => (
              <li
                key={`${skill.name}-${index}`}
                aria-hidden={index >= skills.length}
                className="group/item"
              >
                <SkillItem skill={skill} />
              </li>
            ))}
          </ul>

          {/* Left fade */}
          <div
            className="
              pointer-events-none
              absolute inset-y-0 left-0
              w-32
              bg-gradient-to-r
              from-background
              via-background/80
              to-transparent
            "
            aria-hidden="true"
          />

          {/* Right fade */}
          <div
            className="
              pointer-events-none
              absolute inset-y-0 right-0
              w-32
              bg-gradient-to-l
              from-background
              via-background/80
              to-transparent
            "
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
