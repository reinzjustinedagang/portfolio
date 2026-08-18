import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-sm font-semibold text-foreground">{profile.handle}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>

        <ul className="flex items-center gap-5">
          <li>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-muted-foreground transition-colors duration-150 ease-smooth hover:text-foreground"
              aria-label="GitHub">
              
              <GithubIcon size={20} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-muted-foreground transition-colors duration-150 ease-smooth hover:text-foreground"
              aria-label="LinkedIn">
              
              <LinkedinIcon size={20} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex text-muted-foreground transition-colors duration-150 ease-smooth hover:text-foreground"
              aria-label="Email">
              
              <MailIcon size={20} aria-hidden="true" />
            </a>
          </li>
        </ul>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>);

}