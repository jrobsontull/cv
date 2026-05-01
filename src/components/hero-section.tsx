"use client";

import { useEffect, useState } from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { MailIcon, MapPinIcon } from "lucide-react";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Awards", href: "#awards", id: "awards" },
];

export function HeroSection() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the section that's currently most in view (closest to top)
      let mostVisibleSection = activeSection;
      let highestPosition = Infinity;

      for (const entry of entries) {
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect;
          // Find which section is closest to the top of the viewport
          if (rect.top < highestPosition && rect.top >= -rect.height * 0.5) {
            highestPosition = rect.top;
            mostVisibleSection = entry.target.id;
          }
        }
      }

      if (mostVisibleSection !== activeSection) {
        setActiveSection(mostVisibleSection);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "0px 0px -40% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {RESUME_DATA.name}
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
          {RESUME_DATA.about}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-muted-foreground flex items-center gap-2">
          <MapPinIcon className="size-4 text-muted-foreground/70" />
          {RESUME_DATA.location}
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.href}>
                  <a
                    className="group flex items-center py-3"
                    href={item.href}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all ${
                        isActive
                          ? "w-16 bg-foreground"
                          : "w-8 bg-muted-foreground/50 group-hover:w-16 group-hover:bg-foreground"
                      }`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        {RESUME_DATA.contact.email && (
          <li>
            <a
              className="block text-muted-foreground hover:text-foreground transition-colors"
              href={`mailto:${RESUME_DATA.contact.email}`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Email"
            >
              <MailIcon className="size-6" />
            </a>
          </li>
        )}
        <li>
          <a
            className="block text-muted-foreground hover:text-foreground transition-colors"
            href="https://github.com/jrobsontull"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
          >
            <GitHubIcon className="size-6" />
          </a>
        </li>
        <li>
          <a
            className="block text-muted-foreground hover:text-foreground transition-colors"
            href="https://www.linkedin.com/in/jacob-robson-tull/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="size-6" />
          </a>
        </li>
        <li>
          <a
            className="block text-muted-foreground hover:text-foreground transition-colors"
            href="https://x.com/jrobsontull"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="X (Twitter)"
          >
            <XIcon className="size-6" />
          </a>
        </li>
      </ul>
    </header>
  );
}
