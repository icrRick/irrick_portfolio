"use client";

import { ProjectShowcase } from "@/components/project-showcase";
import { BlurFade, AnimatedLetters, TypingText, SlideUpStagger } from "@/components/animata";
import { useLanguage } from "@/lib/language-context";
import { translations, t } from "@/lib/translations";

export default function HomePage() {
  const { language } = useLanguage();
  const tr = translations;

  return (
    <div className="w-full flex flex-col pointer-events-auto">
      
      {/* SECTION: HOME */}
      <section id="home" className="w-full min-h-screen flex items-center p-8 pt-40 md:pt-2 md:pl-28 lg:pl-40 xl:pl-56 relative z-10">
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-16 xl:gap-32 items-center md:items-start justify-between">
          
          {/* Left Side: Huge Name & Title */}
          <div className="flex flex-col flex-1 mt-10 md:mt-20">
            <h1 className="font-heading font-extralight text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-[1.1] tracking-wide uppercase transform scale-x-[1.05] scale-y-[0.95] origin-left w-fit flex flex-col">
              <AnimatedLetters text="PHAM NGUYEN" />
              <AnimatedLetters text="TRONG TRI" delay={0.55} />
            </h1>
            <div className="mt-6 md:mt-8 text-lg md:text-xl font-light text-muted-foreground tracking-wide h-[28px]">
              <TypingText text={t(tr.home.title, language)} delay={1.2} />
            </div>

            <BlurFade delay={1.4} className="mt-24 md:mt-40 xl:mt-60">
              <p className="text-sm text-muted-foreground">
                {t(tr.home.contact, language)} <br />
                <a href="mailto:trongtri.1975s@gmail.com" className="text-foreground hover:underline underline-offset-4 transition-all">
                  trongtri.1975s@gmail.com
                </a>
              </p>
            </BlurFade>
          </div>

          {/* Right Side: About Me */}
          <div className="w-full md:w-80 lg:w-96 shrink-0 md:mt-110">
            <SlideUpStagger delay={1.6}>
              <h2 className="text-xl font-normal tracking-widest uppercase mb-6 pb-2 border-b border-border/50 text-muted-foreground">
                {t(tr.home.aboutTitle, language)}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 font-light mb-4">
                {t(tr.home.aboutP1, language)}
              </p>
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 font-light">
                {t(tr.home.aboutP2, language)}
              </p>
            </SlideUpStagger>
          </div>
        </div>
      </section>

      {/* SECTION: SKILL */}
      <section id="skill" className="w-full min-h-screen flex items-center p-8 pt-40 md:pt-8 md:pl-28 lg:pl-40 xl:pl-56 relative z-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col mt-10 md:mt-20">
          <BlurFade>
            <div className="mb-16">
              <h2 className="font-heading font-extralight text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] tracking-tight uppercase mb-6">
                {t(tr.skills.title, language)}
              </h2>
              <div className="w-full h-[2px] bg-border/70"></div>
            </div>
          </BlurFade>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            
            {/* BACKEND */}
            <BlurFade delay={0.2}>
              <h3 className="text-2xl font-heading font-light tracking-wide uppercase mb-6 text-foreground/90">
                {t(tr.skills.backend, language)}
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Java", "Spring Boot", "RESTful API", "JWT", "PHP (Lumen)", "Python", "FastAPI"].map((skill) => (
                  <span key={skill} className="px-4 py-1.5 rounded-full border border-border/60 text-sm font-light text-foreground/80 hover:border-foreground/50 hover:text-foreground transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </BlurFade>

            {/* FRONTEND */}
            <BlurFade delay={0.4}>
              <h3 className="text-2xl font-heading font-light tracking-wide uppercase mb-6 text-foreground/90">
                {t(tr.skills.frontend, language)}
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Astro", "ReactJS", "TailwindCSS", "AntDesign", "i18n", "Next.js"].map((skill) => (
                  <span key={skill} className="px-4 py-1.5 rounded-full border border-border/60 text-sm font-light text-foreground/80 hover:border-foreground/50 hover:text-foreground transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </BlurFade>

            {/* DATABASE */}
            <BlurFade delay={0.6}>
              <h3 className="text-2xl font-heading font-light tracking-wide uppercase mb-6 text-foreground/90">
                {t(tr.skills.database, language)}
              </h3>
              <div className="flex flex-wrap gap-3">
                {["MySQL", "SQL Server", "SQLite", "PostgreSQL", "SQLAlchemy"].map((skill) => (
                  <span key={skill} className="px-4 py-1.5 rounded-full border border-border/60 text-sm font-light text-foreground/80 hover:border-foreground/50 hover:text-foreground transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </BlurFade>

            {/* TOOLS */}
            <BlurFade delay={0.8}>
              <h3 className="text-2xl font-heading font-light tracking-wide uppercase mb-6 text-foreground/90">
                {t(tr.skills.tools, language)}
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Git/GitHub", "Postman", "Swagger", "Playwright", "BeautifulSoup", "APScheduler"].map((skill) => (
                  <span key={skill} className="px-4 py-1.5 rounded-full border border-border/60 text-sm font-light text-foreground/80 hover:border-foreground/50 hover:text-foreground transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </BlurFade>

          </div>
        </div>
      </section>

      {/* SECTION: PROJECT */}
      <section id="project" className="w-full relative z-10 px-8 md:pl-28 lg:pl-40 xl:pl-56">
        <ProjectShowcase />
      </section>

      {/* Spacer to allow scrolling slightly past the last item if needed */}
      <div className="h-32"></div>
    </div>
  );
}
