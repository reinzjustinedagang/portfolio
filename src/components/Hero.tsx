import React from "react";
import {
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import { profile } from "../data/profile";

const heroIllustration = "/reinz.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient">{profile.firstName}</span>
          </h1>

          <p className="mt-4 font-display text-lg font-medium text-primary md:text-xl">
            {profile.role}
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity duration-150 ease-smooth hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View my work
              <ArrowRightIcon
                size={16}
                aria-hidden="true"
                className="transition-transform duration-150 ease-smooth group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors duration-150 ease-smooth hover:bg-accent"
            >
              Get in touch
            </a>
          </div>

          <ul className="mt-10 flex items-center gap-5">
            <li>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-muted-foreground transition-colors duration-150 ease-smooth hover:text-foreground"
                aria-label="GitHub"
              >
                <GithubIcon size={22} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-muted-foreground transition-colors duration-150 ease-smooth hover:text-foreground"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={22} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex text-muted-foreground transition-colors duration-150 ease-smooth hover:text-foreground"
                aria-label="Email"
              >
                <MailIcon size={22} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="order-1 flex items-center justify-center lg:order-2">
          <div className="relative w-full max-w-md">
            {/* Glow behind the illustration */}
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full bg-teal-400/20 blur-3xl"
            />

            <img
              src={heroIllustration}
              alt="Developer workspace with a laptop, code editor, and interface panels"
              width={480}
              height={480}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="relative z-10 mx-auto w-full rounded-2xl object-contain drop-shadow-[0_15px_25px_rgba(47,212,189,0.25)] transition-transform duration-500 ease-out hover:-translate-y-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
