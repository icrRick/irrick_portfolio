"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { GithubIcon, PhoneIcon, FacebookIcon, DownloadIcon } from "@/components/icons";
import { useLanguage } from "@/lib/language-context";
import { translations, t } from "@/lib/translations";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const navItems = [
    { id: "home",       number: "01", label: t(translations.nav.home,       language) },
    { id: "skills",     number: "02", label: t(translations.nav.skills,     language) },
    { id: "experience", number: "03", label: t(translations.nav.experience, language) },
    { id: "projects",   number: "04", label: t(translations.nav.projects,   language) },
    { id: "education",  number: "05", label: t(translations.nav.education,  language) },
    { id: "contact",    number: "06", label: t(translations.nav.contact,    language) },
  ];

  useEffect(() => {
    const sectionIds = ["home", "skills", "experience", "projects", "education", "contact"];
    const scrollContainer = document.querySelector("main");

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length > 0) {
          const topEntry = intersecting.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );
          if (topEntry.target.id) {
            setActiveSection(topEntry.target.id);
          }
        }
      },
      {
        root: scrollContainer,
        rootMargin: "-15% 0px -35% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ============================================================ */}
      {/* MOBILE TOP HEADER                                            */}
      {/* ============================================================ */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 h-16 px-4 sm:px-6 flex items-center justify-between bg-background/90 backdrop-blur-md border-b border-border/50">
        {/* Brand Logo & Role Pill */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/"
            onClick={(e) => handleClick(e, "home")}
            className="text-sm font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity"
          >
            irrick
          </Link>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            Backend Dev
          </span>
        </div>

        {/* Action Controls: Language + Theme + Hamburger */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <LanguageToggle />
          <ThemeToggle />

          {/* Animated Hamburger Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className="w-8 h-8 rounded-full border border-border/70 bg-background/60 flex flex-col items-center justify-center gap-1 hover:border-foreground/40 transition-colors cursor-pointer"
          >
            <span
              className={`w-3.5 h-[1.5px] bg-foreground transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[5.5px]" : ""
              }`}
            />
            <span
              className={`w-3.5 h-[1.5px] bg-foreground transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-3.5 h-[1.5px] bg-foreground transition-all duration-300 ${
                isOpen ? "-rotate-45 translate-y-[-5.5px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* ============================================================ */}
      {/* MOBILE SLIDING DRAWER OVERLAY                                */}
      {/* ============================================================ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 border-b border-border/40 overflow-y-auto"
          >
            {/* Nav Links */}
            <div className="flex flex-col gap-2.5 pt-2">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 + 0.02 }}
                    className={`flex items-center justify-between py-2.5 border-b border-border/30 transition-colors ${
                      isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-primary">{item.number}</span>
                      <span className="text-base font-light tracking-wider uppercase">{item.label}</span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom Info & Socials inside drawer */}
            <div className="flex flex-col gap-4 pt-6 border-t border-border/30 mt-auto">
              <a
                href="/CV_PhamNguyenTrongTri.pdf"
                download="CV_PhamNguyenTrongTri.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-foreground bg-foreground text-background text-xs font-mono font-medium tracking-widest uppercase hover:bg-transparent hover:text-foreground transition-all duration-200"
              >
                <DownloadIcon className="w-3.5 h-3.5" />
                <span>{t(translations.home.downloadCv, language)}</span>
              </a>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-light">TP.HCM · Sẵn sàng nhận việc</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://github.com/icrRick"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-border/60 hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+84899010230"
                    className="p-2 rounded-full border border-border/60 hover:text-primary transition-colors"
                    aria-label="Phone"
                  >
                    <PhoneIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com/irrickk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-border/60 hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================================ */}
      {/* DESKTOP VERTICAL NAVIGATION (Left side on desktop)          */}
      {/* ============================================================ */}
      <nav className="hidden md:flex fixed left-10 lg:left-12 top-1/2 -translate-y-1/2 z-50 flex-col gap-5 text-xs font-semibold tracking-widest text-muted-foreground uppercase pointer-events-auto">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`transition-colors relative group w-fit py-0.5 ${
                isActive ? "text-foreground font-medium" : "hover:text-foreground"
              }`}
            >
              <span className="font-mono text-[10px] text-muted-foreground/60 mr-2 group-hover:text-primary">
                {item.number}
              </span>
              <span>{item.label}</span>
              {/* Animated Underline */}
              <span
                className={`absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-foreground origin-left transition-transform duration-300 ease-out ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          );
        })}
      </nav>
    </>
  );
}
