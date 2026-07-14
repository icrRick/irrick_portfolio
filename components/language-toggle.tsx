"use client";

import { useLanguage } from "@/lib/language-context";

function VietnamFlag() {
  return (
    <svg
      viewBox="0 0 30 20"
      className="w-5 h-3.5 rounded-[2px] shadow-sm overflow-hidden"
      aria-hidden="true"
    >
      <rect width="30" height="20" fill="#DA251D" />
      <polygon
        points="15,3.5 16.76,8.9 22.4,8.9 17.8,12.1 19.56,17.5 15,14.3 10.44,17.5 12.2,12.1 7.6,8.9 13.24,8.9"
        fill="#FFCD00"
      />
    </svg>
  );
}

function USAFlag() {
  return (
    <svg
      viewBox="0 0 30 20"
      className="w-5 h-3.5 rounded-[2px] shadow-sm overflow-hidden"
      aria-hidden="true"
    >
      {/* Red base */}
      <rect width="30" height="20" fill="#B22234" />
      {/* White stripes */}
      {[1, 3, 5, 7, 9, 11].map((i) => (
        <rect key={i} y={i * (20 / 13)} width="30" height={20 / 13} fill="white" />
      ))}
      {/* Blue canton */}
      <rect width="12" height={20 * (7 / 13)} fill="#3C3B6E" />
      {/* Stars (simplified dots) */}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4, ...(row % 2 === 0 ? [5] : [])].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={1.2 + col * (row % 2 === 0 ? 1.8 : 1.8) + (row % 2 !== 0 ? 0.9 : 0)}
            cy={1.2 + row * 1.5}
            r={0.45}
            fill="white"
          />
        ))
      )}
    </svg>
  );
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const isVi = language === "vi";

  return (
    <button
      onClick={() => setLanguage(isVi ? "en" : "vi")}
      aria-label={isVi ? "Switch to English" : "Chuyển sang Tiếng Việt"}
      className="group flex items-center gap-1.5 rounded-full border border-border/60 bg-background/50 px-2.5 py-1 text-xs font-semibold tracking-wider uppercase hover:border-foreground/40 hover:bg-background transition-all duration-200 shadow-sm backdrop-blur-sm"
    >
      <span className="transition-transform duration-200 group-hover:scale-110">
        {isVi ? <VietnamFlag /> : <USAFlag />}
      </span>
      <span className="text-foreground/80 group-hover:text-foreground transition-colors">
        {isVi ? "VI" : "EN"}
      </span>
    </button>
  );
}
