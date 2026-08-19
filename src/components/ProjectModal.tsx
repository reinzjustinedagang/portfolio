import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon, XIcon } from "lucide-react";
import { Project } from "../types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const easing = [0.23, 1, 0.32, 1] as const;

const sections = (project: Project) => [
  { title: "The problem", body: project.problem },
  { title: "How I solved it", body: project.solution },
  { title: "My role", body: project.role },
];

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6">
          <motion.div
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: easing }}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            initial={{ opacity: 0, y: 20, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.99 }}
            transition={{ duration: 0.24, ease: easing }}
            className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-border bg-card p-6 sm:max-h-[85vh] sm:rounded-2xl"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors duration-150 ease-smooth hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <XIcon size={16} aria-hidden="true" />
            </button>

            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              loading="lazy"
              width={1280}
              height={800}
              className="aspect-auto w-full rounded-xl border border-border object-cover"
            />

            <div className="mt-6">
              <h2
                id="project-dialog-title"
                className="font-display text-2xl font-bold tracking-tight text-foreground"
              >
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-5 text-sm leading-relaxed">
              {sections(project).map((section) => (
                <div key={section.title}>
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {section.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{section.body}</p>
                </div>
              ))}

              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">
                  Key features
                </h3>
                <ul className="mt-2 space-y-1.5 text-muted-foreground">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">
                  Result
                </h3>
                <p className="mt-1 text-muted-foreground">{project.outcome}</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-5 border-t border-border pt-4">
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity duration-150 ease-smooth hover:opacity-80"
              >
                Live demo
                <ExternalLinkIcon size={14} aria-hidden="true" />
              </a>
              <a
                href={project.repoUrl}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-150 ease-smooth hover:text-foreground"
              >
                Code
                <GithubIcon size={14} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
