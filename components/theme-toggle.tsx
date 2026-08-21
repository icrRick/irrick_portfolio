"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    // Check actual active theme (resolvedTheme handles system dark/light correctly)
    const currentTheme = resolvedTheme || theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  const isDark = mounted ? (resolvedTheme === "dark" || (!resolvedTheme && theme === "dark")) : true;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="group flex items-center justify-center rounded-full border border-border/60 bg-background/50 h-8 w-8 hover:border-foreground/40 hover:bg-background transition-all duration-200 shadow-sm backdrop-blur-sm relative overflow-hidden cursor-pointer"
    >
      {/* Sun — visible in light mode */}
      <Sun
        className={`h-3.5 w-3.5 transition-all duration-300 ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        } text-amber-500 group-hover:text-amber-400`}
      />
      {/* Moon — visible in dark mode */}
      <Moon
        className={`absolute h-3.5 w-3.5 transition-all duration-300 ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        } text-sky-400 group-hover:text-sky-300`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
