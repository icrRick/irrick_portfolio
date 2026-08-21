"use client";

import { useEffect, useRef } from "react";

export function CircleCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Hide default cursor on desktop
    document.body.style.cursor = "none";

    // Direct hardware-accelerated position update without React state
    let rafId: number | null = null;
    let targetX = -100;
    let targetY = -100;

    const render = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(render);
      }
    };

    // Event delegation: Zero DOM queries, zero MutationObservers
    const interactiveSelector = 'a, button, [role="button"], input, select, textarea, [data-cursor-hover]';

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest(interactiveSelector)) {
        if (ringRef.current) {
          ringRef.current.classList.add("scale-150", "bg-white/20");
          ringRef.current.classList.remove("scale-100", "bg-transparent");
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest(interactiveSelector)) {
        if (ringRef.current) {
          ringRef.current.classList.remove("scale-150", "bg-white/20");
          ringRef.current.classList.add("scale-100", "bg-transparent");
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block mix-blend-difference will-change-transform"
      style={{
        transform: "translate3d(-100px, -100px, 0)",
        zIndex: 9999,
      }}
    >
      <div
        ref={ringRef}
        className="w-8 h-8 border border-white rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-100 bg-transparent transition-transform duration-200 ease-out will-change-transform"
      />
    </div>
  );
}
