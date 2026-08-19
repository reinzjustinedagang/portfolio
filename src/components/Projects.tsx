import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { projects } from "../data/projects";
import { Project } from "../types/portfolio";
import { ProjectModal } from "./ProjectModal";

const INITIAL_COUNT = 3;

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="projects" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-display text-sm font-medium text-primary">
            Projects
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Featured work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Click any project to see the problem it solved, how I built it, and
            the result.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              onClick={() => setActive(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActive(project);
                }
              }}
              className="card-hover flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={`${project.title} interface preview`}
                loading="lazy"
                width={1280}
                height={800}
                className="aspect-[16/10] w-full shrink-0 object-cover"
              />

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Tags */}
                <div className="mb-4 min-h-[52px]">
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Title */}
                <h3 className="min-h-[28px] truncate font-display text-xl font-semibold text-foreground">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 min-h-[72px] line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* View Details */}
                <span className="mt-auto pt-6 text-sm font-medium text-primary">
                  View details
                </span>
              </div>
            </article>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground transition-colors duration-150 ease-smooth hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {showAll
                ? "Show less"
                : `See more (${projects.length - INITIAL_COUNT})`}
              <ChevronDownIcon
                size={16}
                aria-hidden="true"
                className={`transition-transform duration-200 ease-smooth ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
