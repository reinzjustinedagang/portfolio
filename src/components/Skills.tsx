import React, { useEffect, useRef, useState } from "react";
import { skills } from "../data/skills";
import { Skill } from "../types/portfolio";

function SkillSphere({ visible }: { visible: boolean }) {
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!visible) return;

    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      setRotation((prev) => prev + delta * 0.018);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [visible]);

  return (
    <div
      className={`
        relative
        h-[420px]
        w-full
        transition-all
        duration-[1200ms]
        ease-out
        md:h-[560px]
        ${visible ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0"}
      `}
    >
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          md:h-[440px]
          md:w-[440px]
        "
      >
        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            bg-primary/5
            blur-3xl
          "
        />

        {/* Core */}
        <div
          className="
          absolute
          left-1/2
          top-1/2
          z-[5]
          h-20
          w-20
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-primary/30
          bg-primary/10
          shadow-[0_0_40px_hsl(var(--primary)/0.25)]
        "
        >
          <div
            className="
            absolute
            inset-2
            rounded-full
            bg-primary/10
            shadow-[0_0_25px_hsl(var(--primary)/0.35)]
          "
          />

          <div
            className="
            absolute
            left-1/2
            top-1/2
            h-10
            w-10
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary
            shadow-[0_0_20px_hsl(var(--primary)/0.8)]
          "
          />
        </div>

        {/* Horizontal orbit */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[180px]
            w-full
            -translate-x-1/2
            -translate-y-1/2
            rounded-[50%]
            border
            border-primary/10
          "
        />

        {/* Vertical orbit */}
        <div
          className="
          absolute
          left-1/2
          top-1/2
          h-full
          w-full
          -translate-x-1/2
          -translate-y-1/2
          rounded-[50%]
          border
          border-primary/10
        "
        />

        {skills.map((skill: Skill, index) => {
          const Icon = skill.icon;

          /*
           * Alternate skills between the horizontal
           * and vertical orbit.
           */
          const isVertical = index % 2 === 1;

          const totalOnOrbit = Math.ceil(skills.length / 2);

          const orbitIndex = Math.floor(index / 2);

          const angle =
            (orbitIndex / totalOnOrbit) * Math.PI * 2 + rotation * 0.01;

          let x: number;
          let y: number;
          let tangentAngle: number;

          if (!isVertical) {
            const radiusX = 190;
            const radiusY = 85;

            x = Math.cos(angle) * radiusX;
            y = Math.sin(angle) * radiusY;

            const dx = -Math.sin(angle) * radiusX;
            const dy = Math.cos(angle) * radiusY;

            tangentAngle = Math.atan2(dy, dx) * (180 / Math.PI);
          } else {
            const radiusX = 220;
            const radiusY = 220;

            x = Math.cos(angle) * radiusX;
            y = Math.sin(angle) * radiusY;

            const dx = -Math.sin(angle) * radiusX;
            const dy = Math.cos(angle) * radiusY;

            tangentAngle = Math.atan2(dy, dx) * (180 / Math.PI);
          }

          /*
           * Depth illusion.
           *
           * Front = brighter/larger
           * Back = dimmer/smaller
           */
          let scale: number;
          let opacity: number;
          let zIndex: number;

          if (isVertical) {
            scale = 1;
            opacity = 1;
            zIndex = 10;
          } else {
            const depth = (Math.sin(angle) + 1) / 2;
            scale = 0.72 + depth * 0.38;
            opacity = 0.35 + depth * 0.65;
            zIndex = Math.round(depth * 100);
          }

          return (
            <div
              key={`${skill.name}-${index}`}
              className="
                absolute
                left-1/2
                top-1/2
                whitespace-nowrap
                transition-opacity
                duration-300
              "
              style={{
                transform: `
                translate(-50%, -50%)
                translate3d(${x}px, ${y}px, 0)
                rotate(${tangentAngle}deg)
                scale(${scale})
              `,
                opacity,
                zIndex,
              }}
            >
              <div
                className="
                  group
                  flex
                  items-center
                  gap-2
                  transition-transform
                  duration-300
                  hover:scale-125
                "
                style={{
                  color: skill.color || "hsl(var(--primary))",
                }}
              >
                <Icon size={20} aria-hidden="true" />

                <span
                  className="
                    font-display
                    text-sm
                    font-semibold
                  "
                >
                  {skill.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("skills");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="
        px-6
        py-20
        md:py-28
        overflow-hidden
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* TWO COLUMN LAYOUT */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* RIGHT — YOUR EXISTING HEADER */}
          <div
            className={`
              max-w-2xl
              transition-all
              duration-[1200ms]
              ease-out
              ${
                visible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-32 opacity-0"
              }
            `}
          >
            {/* Section heading */}
            <div className="mb-12">
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

            {/* Optional extra text */}
            <div className="space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                I enjoy working with modern technologies to build responsive,
                interactive, and user-focused digital experiences.
              </p>

              <p>
                My toolkit continues to grow as I explore new technologies,
                frameworks, and better ways to solve problems.
              </p>
            </div>
          </div>

          {/* LEFT — SKILLS SPHERE */}
          <SkillSphere visible={visible} />
        </div>
      </div>
    </section>
  );
}
