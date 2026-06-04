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
        // Use translate3d for hardware-accelerated, zero-lag movement. No scale here.
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
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
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        // Initial state before first mousemove
        transform: "translate3d(-100px, -100px, 0)"
      }}
    >
      <div 
        className={`w-8 h-8 border border-foreground/50 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
          isHovering ? "scale-150 bg-foreground/[0.08]" : "scale-100 bg-transparent"
        }`}
      />
    </div>
  );
}
