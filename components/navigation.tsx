"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/lib/language-context";
import { translations, t } from "@/lib/translations";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const { language } = useLanguage();

  const navItems = [
    { id: "home",       label: t(translations.nav.home,       language) },
    { id: "experience", label: t(translations.nav.experience, language) },
    { id: "skill",      label: t(translations.nav.skill,      language) },
    { id: "project",    label: t(translations.nav.project,    language) },
  ];

  useEffect(() => {
    const sectionIds = ["home", "experience", "skill", "project"];
    const scrollContainer = document.querySelector("main");

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length > 0) {
          const topEntry = intersecting.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );
          if (topEntry.target.id) {
            setActiveSection(topEntry.target.id);
          }
        }
      },
      {
        root: scrollContainer,
        rootMargin: "-15% 0px -35% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 md:left-12 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-50 flex flex-row md:flex-col gap-6 md:gap-6 text-[10px] md:text-xs font-semibold tracking-widest text-muted-foreground uppercase pointer-events-auto bg-background/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none px-5 py-3 md:px-0 md:py-0 rounded-full md:rounded-none border border-border/50 md:border-none shadow-xl md:shadow-none">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`transition-colors relative group w-fit ${
              isActive ? "text-foreground" : "hover:text-foreground"
            }`}
          >
            {item.label}
            {/* Animated Underline */}
            <span
              className={`absolute -bottom-1 left-0 w-full h-[1px] bg-foreground origin-left transition-transform duration-300 ease-out ${
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </a>
        );
      })}
      
      {/* Theme Toggle + Language Toggle (Mobile Only) */}
      <div className="md:hidden border-l border-border/50 pl-3 ml-auto flex items-center gap-1.5">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </nav>
  );
}
