"use client";

import { useEffect, useRef, useState } from "react";

export function CircleCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Hide default cursor
    document.body.style.cursor = "none";
    
    // Select all interactive elements
    const addHoverStyle = () => setIsHovering(true);
    const removeHoverStyle = () => setIsHovering(false);

    const attachListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input, select, textarea').forEach(el => {
        el.addEventListener('mouseenter', addHoverStyle);
        el.addEventListener('mouseleave', removeHoverStyle);
      });
    };

    attachListeners();

    // Use MutationObserver to attach listeners to newly added elements
    const observer = new MutationObserver(() => {
      attachListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Use translate3d for hardware-accelerated, zero-lag movement
        cursorRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0) ${isHovering ? "scale(1.3)" : "scale(1)"}`;
      }
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", updatePosition);
      observer.disconnect();
      document.querySelectorAll('a, button, [role="button"], input, select, textarea').forEach(el => {
        el.removeEventListener('mouseenter', addHoverStyle);
        el.removeEventListener('mouseleave', removeHoverStyle);
      });
    };
  }, [isHovering]);

  // Don't render if it's a touch device
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-8 h-8 border border-foreground/50 rounded-full pointer-events-none z-[9999] hidden md:block transition-colors duration-150 ${
        isHovering ? "bg-foreground/[0.08]" : "bg-transparent"
      }`}
      style={{
        // Initial state before first mousemove
        transform: "translate3d(-100px, -100px, 0)"
      }}
    />
  );
}
