import React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;

    // Get the button's position on the screen
    const rect = button.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calculate the distance needed to cover the entire screen
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    // Use View Transitions if supported
    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }

    const transition = document.startViewTransition(() => {
      toggleTheme();
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 550,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors duration-150 ease-smooth hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {isDark ? (
        <SunIcon size={16} aria-hidden="true" />
      ) : (
        <MoonIcon size={16} aria-hidden="true" />
      )}
    </button>
  );
}
