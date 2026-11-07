"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import StackedSections from "@/components/ui/stacked-section";
import { useLanguage } from "@/lib/language-context";
import { translations, t } from "@/lib/translations";
import { GithubIcon } from "@/components/icons";

// --- Carousel Component ---
function ProjectCarousel({ images, name }: { images: readonly string[]; name: string }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [images.length, next]);

  if (images.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-secondary/20">
        <span className="text-muted-foreground font-light tracking-widest uppercase text-sm">
          No Preview
        </span>
      </div>
    );
  }

  return (
    <>
      {images.map((src, idx) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center p-4 sm:p-6 md:p-8"
          style={{ opacity: idx === current ? 1 : 0 }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={src}
              alt={`${name} preview ${idx + 1}`}
              fill
              className="object-contain drop-shadow-md rounded-xs md:rounded-sm"
              sizes="(max-width: 768px) 100vw, 55vw"
              priority={idx === 0}
            />
          </div>
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === current
                  ? "w-6 h-1.5 bg-white"
                  : "w-2 h-1.5 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}

// --- Main ProjectShowcase Component ---
export function ProjectShowcase() {
  const { language } = useLanguage();
  const tr = translations.projects;

  return (
    <div className="w-full flex flex-col">
      <div className="mb-10 md:mb-14">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-primary font-mono text-xs uppercase tracking-widest">
            Portfolio
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          <span className="text-xs font-mono tracking-wider text-muted-foreground">
            Institutional &amp; Independent Systems
          </span>
        </div>
        <h2 className="font-heading font-extralight text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight uppercase mb-4 text-foreground">
          {t(tr.sectionTitle, language)}
        </h2>
        <p className="text-sm md:text-base text-muted-foreground font-light max-w-3xl">
          {t(tr.subtitle, language)}
        </p>
        <div className="w-full h-px bg-border/70 mt-6" />
      </div>

      <div className="w-full">
        <StackedSections stackOffset={44} paneGap="gap-6 md:gap-8">
          {tr.items.map((proj) => {
            const name = t(proj.name, language);
            const role = t(proj.role, language);

            return (
              <div
                key={proj.id}
                id={proj.id}
                className="w-full min-h-[550px] md:min-h-[580px] lg:h-[78vh] flex flex-col md:flex-row bg-background border border-border/80 rounded-xs md:rounded-sm shadow-xl overflow-hidden group"
              >
                {/* Image Section */}
                <div className="w-full md:w-[48%] lg:w-[45%] h-64 md:h-auto min-h-[240px] md:min-h-[400px] bg-secondary/25 relative overflow-hidden border-b md:border-b-0 md:border-r border-border/70">
                  <ProjectCarousel images={proj.images} name={name} />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-[52%] lg:w-[55%] flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 overflow-y-auto">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-xs font-mono tracking-wider text-primary font-medium px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                        {proj.period}
                      </span>
                      <span className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase">
                        {role}
                      </span>
                    </div>

                    <h3 className="font-heading font-normal tracking-tight text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-4 text-foreground group-hover:text-primary transition-colors">
                      {name}
                    </h3>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.techTags.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full text-xs font-mono tracking-wide bg-secondary/40 text-foreground/80 border border-border/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Technical Bullets */}
                    <div className="flex flex-col gap-3">
                      {proj.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-primary font-mono text-xs mt-1 shrink-0">
                            0{idx + 1}
                          </span>
                          <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                            {t(bullet, language)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-between">
                    {proj.link ? (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground bg-foreground text-background text-xs font-mono font-medium tracking-wider uppercase hover:bg-transparent hover:text-foreground transition-all duration-200"
                      >
                        {proj.isLiveSite ? (
                          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        ) : (
                          <GithubIcon className="w-3.5 h-3.5" />
                        )}
                        <span>{proj.isLiveSite ? t(tr.viewLive, language) : t(tr.viewProject, language)}</span>
                        <span className="transition-transform group-hover/btn:translate-x-0.5">↗</span>
                      </a>
                    ) : (
                      <span className="text-xs font-mono px-3.5 py-1.5 rounded-full border border-border/70 bg-secondary/30 text-muted-foreground">
                        {t(tr.institutionalBadge, language)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </StackedSections>
      </div>
    </div>
  );
}
