import React from "react";
import {
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  Code2Icon,
  BriefcaseBusinessIcon,
  FolderGit2Icon,
} from "lucide-react";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

const heroIllustration = "/reinz.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          {/* Name */}
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient">{profile.firstName}</span>
          </h1>

          {/* Role */}
          <p className="mt-4 font-display text-lg font-medium text-primary md:text-xl">
            {profile.role}
          </p>

          {/* Intro */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I build responsive web applications and practical software solutions
            using modern technologies. I enjoy turning ideas, requirements, and
            problems into clean and functional applications.
          </p>

          {/* Experience / Projects */}
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            <div className="rounded-xl border border-border/60 bg-card/40 p-4">
              <Code2Icon
                size={18}
                className="mb-3 text-primary"
                aria-hidden="true"
              />
              <p className="font-display text-lg font-bold text-foreground">
                {profile.experience}+
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Years Coding</p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/40 p-4">
              <FolderGit2Icon
                size={18}
                className="mb-3 text-primary"
                aria-hidden="true"
              />
              <p className="font-display text-lg font-bold text-foreground">
                {projects.length}+
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Projects Delivered
              </p>
            </div>
          </div>

          {/* Buttons */}
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

          {/* Social links */}
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

        {/* RIGHT IMAGE */}
        <div className="order-1 flex items-center justify-center lg:order-2">
          <div className="relative flex w-full max-w-lg items-center justify-center">
            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="absolute h-72 w-72 rounded-full bg-[#2BC0AC]/15 blur-3xl md:h-96 md:w-96"
            />

            {/* Decorative outer ring */}
            <div
              aria-hidden="true"
              className="absolute h-[85%] w-[85%] rounded-full border border-[#2BC0AC]/20"
            />

            {/* Image */}
            <div
              className="
              relative
              z-10
              overflow-hidden
              rounded-2xl
              border
              border-[#2BC0AC]/40
              bg-card/30
              shadow-[0_0_40px_rgba(43,192,172,0.12)]
              transition-all
              duration-500
              ease-out
              hover:-translate-y-2
              hover:border-[#2BC0AC]/70
              hover:shadow-[0_0_55px_rgba(43,192,172,0.22)]
            "
            >
              <img
                src={heroIllustration}
                alt="Reinz Justine Dagang — Full-Stack Developer"
                width={520}
                height={520}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="
                block
                w-full
                max-w-[520px]
                rounded-xl
                object-contain
              "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
