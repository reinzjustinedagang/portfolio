import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { cn } from '../utils/cn';
import { profile } from '../data/profile';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
{ label: 'About', href: '#about' },
{ label: 'Skills', href: '#skills' },
{ label: 'Projects', href: '#projects' },
{ label: 'Contact', href: '#contact' }];


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-foreground transition-colors duration-150 ease-smooth hover:text-primary">
          
          {profile.handle}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
          <li key={link.href}>
              <a
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-150 ease-smooth hover:text-foreground">
              
                {link.label}
              </a>
            </li>
          )}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity duration-150 ease-smooth hover:opacity-90">
            
            Hire me
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu">
            
            {isOpen ? <XIcon size={24} aria-hidden="true" /> : <MenuIcon size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-b border-border/60 bg-background transition-[max-height,opacity] duration-200 ease-smooth md:hidden',
          isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        )}>
        
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) =>
          <li key={link.href}>
              <a
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground transition-colors duration-150 ease-smooth hover:text-foreground">
              
                {link.label}
              </a>
            </li>
          )}
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity duration-150 ease-smooth hover:opacity-90">
              
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </header>);

}