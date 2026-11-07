"use client";

import { useEffect, useRef } from "react";

export function CircleCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const enableCustomCursor = () => {
      document.documentElement.classList.add("custom-cursor-enabled");
      document.body.style.cursor = "none";
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
    };

    const disableCustomCursor = () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      document.body.style.cursor = "auto";
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
      if (ringRef.current) {
        ringRef.current.classList.remove("scale-150", "scale-75", "bg-white/20");
        ringRef.current.classList.add("scale-100", "bg-transparent");
      }
    };

    enableCustomCursor();

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

      if (!document.documentElement.classList.contains("custom-cursor-enabled")) {
        enableCustomCursor();
      }

      if (!rafId) {
        rafId = requestAnimationFrame(render);
      }
    };

    // Event delegation for interactive elements
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

    const handleMouseDown = () => {
      if (ringRef.current) {
        ringRef.current.classList.add("scale-75");
      }
    };

    const handleMouseUp = () => {
      if (ringRef.current) {
        ringRef.current.classList.remove("scale-75");
      }
    };

    // Handle window blur (clicking mailto:, tel:, new tabs, or OS dialogs)
    const handleWindowBlur = () => {
      disableCustomCursor();
    };

    // Handle mouse leaving/entering the window
    const handleMouseLeave = () => {
      disableCustomCursor();
    };

    const handleMouseEnter = () => {
      enableCustomCursor();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    window.addEventListener("blur", handleWindowBlur);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      disableCustomCursor();
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("blur", handleWindowBlur);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference will-change-transform transition-opacity duration-150"
      style={{
        transform: "translate3d(-100px, -100px, 0)",
      }}
    >
      {/* Outer interactive ring */}
      <div
        ref={ringRef}
        className="w-8 h-8 border border-white rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-100 bg-transparent transition-transform duration-200 ease-out will-change-transform"
      />
    </div>
  );
}
