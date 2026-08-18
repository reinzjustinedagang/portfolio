import React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors duration-150 ease-smooth hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
      
      {isDark ?
      <SunIcon size={16} aria-hidden="true" /> :

      <MoonIcon size={16} aria-hidden="true" />
      }
    </button>);

}