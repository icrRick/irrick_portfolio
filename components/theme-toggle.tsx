"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="group flex items-center justify-center rounded-full border border-border/60 bg-background/50 h-[30px] w-[30px] hover:border-foreground/40 hover:bg-background transition-all duration-200 shadow-sm backdrop-blur-sm relative overflow-hidden"
    >
      {/* Sun — visible in light mode */}
      <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-amber-500 group-hover:text-amber-400" />
      {/* Moon — visible in dark mode */}
      <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-sky-400 group-hover:text-sky-300" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
