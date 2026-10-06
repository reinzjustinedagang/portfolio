import React, { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { projects } from "../data/projects";
import { Project } from "../types/portfolio";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const moved = useRef(false);

  const total = projects.length;
  const current = projects[index];

  const go = (dir: 1 | -1) => {
    setIndex((i) => Math.min(Math.max(i + dir, 0), total - 1));
  };

  const cardStyle = (offset: number): React.CSSProperties => {
    if (offset < 0) {
      // already swiped away
      return {
        transform: "translateX(-120%) rotate(-10deg)",
        opacity: 0,
        zIndex: 0,
        pointerEvents: "none",
      };
    }
    if (offset === 0) {
      return {
        transform: "translate(0,0) rotate(0deg) scale(1)",
        opacity: 1,
        zIndex: 30,
      };
    }
    if (offset === 1) {
      return {
        transform: "translate(0,14px) rotate(2deg) scale(0.96)",
        opacity: 1,
        zIndex: 20,
        pointerEvents: "none",
      };
    }
    if (offset === 2) {
      return {
        transform: "translate(0,28px) rotate(-2deg) scale(0.92)",
        opacity: 1,
        zIndex: 10,
        pointerEvents: "none",
      };
    }
    return {
      transform: "translate(0,28px) rotate(-2deg) scale(0.9)",
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
    };
  };

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    moved.current = false;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;

    if (Math.abs(dx) > 50) {
      moved.current = true;
      go(dx < 0 ? 1 : -1);
    }
  };

  const openActive = () => {
    if (moved.current) {
      moved.current = false;
      return;
    }
    setModalProject(current);
  };

  return (
    <section id="projects" className="px-6 py-20 md:py-28">
      <style>{`
        @keyframes project-text-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .project-text-in { animation: project-text-in 0.45s ease-out both; }
      `}</style>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="font-display text-sm font-medium text-primary">
            Projects
          </p>

          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Featured work
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Explore some of the projects I have built and worked on. Swipe or
            use the arrows to browse through my work.
          </p>
        </div>

        {/* Side by side: stack (left) + description (right) */}
        <div
          className="grid items-center gap-12 md:grid-cols-2 md:gap-16"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
          }}
        >
          {/* Card stack */}
          <div
            className="relative mb-10 w-full touch-pan-y select-none md:mb-8"
            style={{ aspectRatio: "16 / 10" }}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => (startX.current = null)}
          >
            {projects.map((project, i) => {
              const offset = i - index;
              const isFront = offset === 0;

              return (
                <article
                  key={project.title}
                  role={isFront ? "button" : undefined}
                  tabIndex={isFront ? 0 : -1}
                  aria-hidden={!isFront}
                  aria-haspopup={isFront ? "dialog" : undefined}
                  aria-label={
                    isFront ? `Open ${project.title} details` : undefined
                  }
                  onClick={isFront ? openActive : undefined}
                  onKeyDown={
                    isFront
                      ? (event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setModalProject(project);
                          }
                        }
                      : undefined
                  }
                  style={cardStyle(offset)}
                  className="absolute inset-0 cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-xl transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                </article>
              );
            })}
          </div>

          {/* Description + navigation */}
          <div className="flex flex-col">
            <div key={index} className="project-text-in" aria-live="polite">
              <p className="font-display text-sm font-medium text-muted-foreground">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </p>

              {current.tags?.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {current.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}

              <h3 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">
                {current.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {current.description}
              </p>

              <button
                type="button"
                onClick={() => setModalProject(current)}
                className="mt-6 inline-block border-b border-foreground text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View full case study →
              </button>
            </div>

            {/* Arrows + dots */}
            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={index === 0}
                aria-label="Previous project"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeftIcon size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => go(1)}
                disabled={index === total - 1}
                aria-label="Next project"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRightIcon size={18} aria-hidden="true" />
              </button>

              <div
                className="ml-2 flex items-center gap-2"
                role="tablist"
                aria-label="Projects"
              >
                {projects.map((p, i) => (
                  <button
                    key={p.title}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show ${p.title}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-6 bg-primary"
                        : "w-2 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
