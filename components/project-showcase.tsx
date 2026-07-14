"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import StackedSections from "@/components/ui/stacked-section";
import { useLanguage } from "@/lib/language-context";
import { translations, t } from "@/lib/translations";

// --- Project data structure now uses translation keys ---
const projectKeys = [
  {
    id: "proj-spidernews",
    year: "6/2026 – 7/2026",
    trKey: "spidernews" as const,
    images: ["/images/projects/SpiderNews/sn_1.png"],
    link: "https://github.com/icrRick/SpiderNews_Demo",
  },
  {
    id: "proj-mekong",
    year: "1/2026 – 2/2026",
    trKey: "mekong" as const,
    images: ["/images/projects/MekongHighTech/mekong_1.png"],
    link: "https://mekong-hightech-summit-3.vercel.app/vi/",
  },
  {
    id: "proj-tuyensinh",
    year: "5/2026",
    trKey: "tuyensinh" as const,
    images: [
      "/images/projects/TuyenSinh/ts_1.png",
      "/images/projects/TuyenSinh/ts_2.png",
    ],
    link: "https://demo-dnc.vercel.app/",
  },
  {
    id: "proj-ebooks",
    year: "1/2025 – 4/2025",
    trKey: "ebooks" as const,
    images: ["/images/projects/E_Books/book1.png"],
    link: "https://github.com/icrRick/theBugs_book_ecommerce",
  },
];

// --- Carousel Component ---
function ProjectCarousel({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [images.length, next]);

  if (images.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-secondary/20">
        <span className="text-muted-foreground font-light tracking-widest uppercase text-sm">
          Coming Soon
        </span>
      </div>
    );
  }

  return (
    <>
      {images.map((src, idx) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: idx === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`${name} screenshot ${idx + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={idx === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-10" />

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === current
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}

// --- Main Component ---
export function ProjectShowcase() {
  const { language } = useLanguage();
  const tr = translations.projects;

  return (
    <div className="w-full flex flex-col pt-10 md:pt-20">
      <div className="mb-12 md:mb-20 px-6 md:px-0">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground">
          {t(tr.sectionTitle, language)}
        </h2>
      </div>

      <div className="w-full">
        <StackedSections stackOffset={48} paneGap="gap-6 md:gap-10">
          {projectKeys.map((proj) => {
            const name        = t(tr[proj.trKey].name,        language);
            const role        = t(tr[proj.trKey].role,        language);
            const description = t(tr[proj.trKey].description, language);

            return (
              <div
                key={proj.id}
                id={proj.id}
                className="w-full min-h-[50vh] md:h-[80vh] flex flex-col md:flex-row bg-background border border-border rounded-xs md:rounded-sm shadow-xl overflow-hidden group"
              >
                {/* Image / Carousel Section */}
                <div className="w-full md:w-[60%] h-64 md:h-full bg-secondary/30 relative overflow-hidden border-b md:border-b-0 md:border-r border-border">
                  <ProjectCarousel images={proj.images} name={name} />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-[40%] flex flex-col justify-center p-8 md:p-12 lg:p-16">
                  <span className="text-xs font-mono tracking-wider text-muted-foreground mb-4 md:mb-6">
                    {proj.year}
                  </span>
                  <h3 className="font-heading font-light tracking-tight text-3xl md:text-5xl lg:text-6xl mb-2 md:mb-4 transition-colors group-hover:text-primary">
                    {name}
                  </h3>
                  <span className="text-xs font-light tracking-widest uppercase text-muted-foreground mb-6 md:mb-8">
                    {role}
                  </span>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground font-light leading-relaxed">
                    {description}
                  </p>

                  <div className="mt-8 md:mt-12">
                    {proj.link ? (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex overflow-hidden border-b border-foreground pb-1 hover:border-primary transition-colors duration-300"
                      >
                        <span className="flex items-center gap-1 text-xs font-semibold tracking-widest uppercase transition-transform duration-300 ease-in-out group-hover/btn:-translate-y-full">
                          {t(tr.viewProject, language)} <span>↗</span>
                        </span>
                        <span className="absolute inset-0 flex items-center gap-1 text-xs font-semibold tracking-widest uppercase text-primary translate-y-full transition-transform duration-300 ease-in-out group-hover/btn:translate-y-0">
                          {t(tr.viewProject, language)} <span>↗</span>
                        </span>
                      </a>
                    ) : (
                      <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground border-b border-muted-foreground pb-1">
                        {t(tr.comingSoon, language)}
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
