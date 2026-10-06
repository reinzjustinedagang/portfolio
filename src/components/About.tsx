import React, { useEffect, useState } from "react";
import { profile } from "../data/profile";

// Put your cut-out photos in /public/images
const MAIN_PHOTO = "/images/main.png";
const SMALL_PHOTOS = ["/images/small-2.png", "/images/small-1.png"];

export function About() {
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    const name = profile.name;

    let index = 0;
    let deleting = false;
    let pause = 0;

    const timer = setInterval(() => {
      // Pause after typing the full name
      if (!deleting && index === name.length) {
        pause++;

        if (pause < 12) return;

        pause = 0;
        deleting = true;
        return;
      }

      // Pause after deleting the full name
      if (deleting && index === 0) {
        pause++;

        if (pause < 5) return;

        pause = 0;
        deleting = false;
        return;
      }

      if (!deleting) {
        index++;
        setTypedName(name.slice(0, index));
      } else {
        index--;
        setTypedName(name.slice(0, index));
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-20 md:py-28"
    >
      <style>{`
        .about-photo {
          --outline: #ffffff;
          --drop: rgba(0, 0, 0, 0.14);
          filter:
            drop-shadow(3px 0 0 var(--outline))
            drop-shadow(-3px 0 0 var(--outline))
            drop-shadow(0 3px 0 var(--outline))
            drop-shadow(0 -3px 0 var(--outline))
            drop-shadow(0 14px 24px var(--drop));
        }

        .dark .about-photo {
          --outline: #3f3f46;
          --drop: rgba(0, 0, 0, 0.6);
        }
      `}</style>

      {/* Soft glow behind the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden size-[420px] -translate-x-[75%] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl dark:block lg:left-[18%] lg:translate-x-0"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[auto_1fr_auto] lg:gap-14">
        {/* Main photo */}
        <div className="mx-auto lg:mx-0">
          <img
            src={MAIN_PHOTO}
            alt={`Portrait of ${profile.name}`}
            width={400}
            height={560}
            loading="lazy"
            className="about-photo h-[360px] w-auto object-contain md:h-[440px]"
          />
        </div>

        {/* Text */}
        <div className="max-w-xl text-center lg:text-left">
          <p className="font-display text-sm font-medium text-primary">About</p>

          <h2 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Hi, I'm
            <span className="mt-1 block min-h-[1.2em] text-primary">
              {typedName}
              <span className="typing-cursor" aria-hidden="true" />
            </span>
          </h2>

          <div className="mt-6 space-y-4">
            {profile.about.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Small stacked photos */}
        <div
          className="relative mx-auto hidden h-64 w-48 lg:block"
          aria-hidden="true"
        >
          {SMALL_PHOTOS.map((src, i) => (
            <div
              key={src}
              className="absolute w-32 rounded-md bg-white p-2 shadow-lg ring-1 ring-black/5 transition-transform duration-500 hover:scale-105 dark:bg-zinc-800 dark:shadow-black/60 dark:ring-white/10"
              style={
                i === 0
                  ? {
                      top: 0,
                      right: 0,
                      transform: "rotate(4deg)",
                      zIndex: 1,
                    }
                  : {
                      bottom: 0,
                      left: 0,
                      transform: "rotate(-5deg)",
                      zIndex: 2,
                    }
              }
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                draggable={false}
                className="aspect-[3/4] w-full rounded-sm object-cover dark:brightness-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
