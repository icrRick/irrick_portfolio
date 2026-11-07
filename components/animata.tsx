"use client";

import { motion, useInView, Variants } from "framer-motion";
import { ReactNode, useRef, Children, isValidElement, useState, useEffect } from "react";

// Blur Fade In (progressively enhanced, visible at rest for a11y & crawlers)
export function BlurFade({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Letter animation (drop down)
export function AnimatedLetters({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => {
        const prevWordsLength = words.slice(0, wordIndex).join(" ").length;
        const startIndex = wordIndex === 0 ? 0 : prevWordsLength + 1;

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                initial={{ opacity: 0, y: -50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                  delay: delay + (startIndex + letterIndex) * 0.05,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </span>
  );
}

// Single Typing Text effect
export function TypingText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const letters = text.split("");

  const container: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "inline",
      transition: { duration: 0 },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span 
          key={index} 
          variants={child}
          style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"
      />
    </motion.span>
  );
}

// Rotating Typing Text (cycles between multiple roles)
export function RotatingTypingText({
  texts,
  className,
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseDuration = 2200,
  "aria-hidden": ariaHidden,
}: {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  "aria-hidden"?: boolean | "true" | "false";
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Typing & deleting effect
  useEffect(() => {
    if (!texts || texts.length === 0) return;
    const currentFullText = texts[index % texts.length] || "";

    if (!isDeleting && subIndex === currentFullText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration]);

  const currentFullText = texts[index % texts.length] || "";
  const displayedText = currentFullText.substring(0, subIndex);

  return (
    <span className={`inline-flex items-center ${className || ""}`} aria-hidden={ariaHidden}>
      <span>{displayedText}</span>
      <span
        className={`inline-block w-[2px] h-[1.1em] bg-primary ml-1 align-middle transition-opacity duration-150 ${
          blink ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}

// Line by Line Slide Up Stagger (visible at rest for a11y & crawlers)
export function SlideUpStagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const container: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: delay },
    },
  };

  const child: Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="visible"
      animate="visible"
    >
      {Children.map(children, (childNode) => {
        if (!isValidElement(childNode)) return null;
        return <motion.div variants={child}>{childNode}</motion.div>;
      })}
    </motion.div>
  );
}
