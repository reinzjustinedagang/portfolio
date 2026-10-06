import React from "react";
import {
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-24"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Name */}
        <h1 className="font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Reinz Justine <span className="text-gradient">Dagang</span>
        </h1>

        {/* Roles */}
        <p className="mt-5 font-display text-lg font-medium text-primary md:text-xl">
          Web Developer <span className="mx-2 text-muted-foreground/50">•</span>
          Business Analyst
        </p>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          I build responsive web applications and practical software solutions
          using modern technologies. I enjoy turning ideas, requirements, and
          problems into clean and functional applications.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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

        {/* Stats */}
        <div className="mt-14 grid w-full max-w-2xl grid-cols-4 gap-8 py-7">
          <div className="px-2">
            <p className="font-display text-2xl font-bold text-primary md:text-3xl">
              {projects.length}+
            </p>
            <p className="mt-1 text-xs text-muted-foreground md:text-sm">
              Projects Delivered
            </p>
          </div>

          <div className="px-2">
            <p className="font-display text-2xl font-bold text-primary md:text-3xl">
              2+
            </p>
            <p className="mt-1 text-xs text-muted-foreground md:text-sm">
              Years of Experience
            </p>
          </div>

          <div className="px-2">
            <p className="font-display text-2xl font-bold text-primary md:text-3xl">
              BSIT
            </p>
            <p className="mt-1 text-xs text-muted-foreground md:text-sm">
              Program
            </p>
          </div>

          <div className="px-2">
            <p className="font-display text-2xl font-bold text-primary md:text-3xl">
              2026
            </p>
            <p className="mt-1 text-xs text-muted-foreground md:text-sm">
              Year Graduated
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
