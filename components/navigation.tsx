"use client";

import { useEffect, useState } from "react";

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
    <nav className="fixed left-8 md:left-12 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6 text-xs font-semibold tracking-widest text-muted-foreground uppercase pointer-events-auto">
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
    </nav>
  );
}
