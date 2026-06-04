"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { id: "home", label: "HOME" },
  { id: "skill", label: "SKILL" },
  { id: "project", label: "PROJECT" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const scrollContainer = document.querySelector('main');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const containerHeight = scrollContainer.clientHeight;

      // Find the active section (the one that occupies the middle of the screen)
      let currentActive = "home";

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;

          // Check if the middle of the screen is within this section
          if (
            scrollTop + containerHeight / 2 >= offsetTop &&
            scrollTop + containerHeight / 2 < offsetTop + offsetHeight
          ) {
            currentActive = item.id;
            break; // Found the active section
          }
        }
      }

      setActiveSection(currentActive);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    // Initial calculation
    // Timeout ensures DOM layout is fully complete before checking offsets
    setTimeout(handleScroll, 100);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
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
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 md:left-12 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-50 flex flex-row md:flex-col gap-8 md:gap-6 text-[10px] md:text-xs font-semibold tracking-widest text-muted-foreground uppercase pointer-events-auto bg-background/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none px-6 py-4 md:px-0 md:py-0 rounded-full md:rounded-none border border-border/50 md:border-none shadow-xl md:shadow-none">
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
      
      {/* Theme Toggle (Mobile Only) */}
      <div className="md:hidden border-l border-border/50 pl-4 ml-auto flex items-center justify-center">
        <ThemeToggle />
      </div>
    </nav>
  );
}
