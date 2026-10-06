import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GithubContributions } from "./components/GithubContributions";
import { NameMarquee } from "./components/NameMarquee";
import { Experience } from "./components/Experience";
import { RoleMarquee } from "./components/RoleMarquee";
import { HiremeMarquee } from "./components/HiremeMarquee";

export function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full overflow-hidden bg-background font-sans text-foreground">
        {/* Matrix grid */}
        <div
          aria-hidden="true"
          className="matrix-grid pointer-events-none absolute inset-0 z-0"
        />

        {/* Website */}
        <div className="relative z-10">
          <Navbar />

          <main>
            <Hero />
            <NameMarquee />
            <About />
            <Experience />
            <RoleMarquee />
            <Skills />
            <Projects />
            <GithubContributions />
            <HiremeMarquee />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
