"use client";

import { ProjectShowcase } from "@/components/project-showcase";
import { BlurFade, AnimatedLetters, RotatingTypingText, SlideUpStagger } from "@/components/animata";
import { useLanguage } from "@/lib/language-context";
import { translations, t } from "@/lib/translations";

export default function HomePage() {
  const { language } = useLanguage();
  const tr = translations;

  const roleTitles = [
    t(tr.home.titles[0], language),
    t(tr.home.titles[1], language),
  ];

  return (
    <div className="w-full flex flex-col pointer-events-auto">
      
      {/* SECTION: HOME */}
      <section id="home" className="w-full min-h-[100dvh] flex items-center p-8 pt-40 md:pt-4 md:pl-28 lg:pl-40 xl:pl-56 relative z-10">
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-16 xl:gap-28 items-center md:items-start justify-between">
          
          {/* Left Side: Huge Name & Rotating Title */}
          <div className="flex flex-col flex-1 mt-6 md:mt-16">
            <h1 className="font-heading font-extralight text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.08] tracking-wide uppercase transform scale-x-[1.05] scale-y-[0.95] origin-left w-fit flex flex-col">
              <AnimatedLetters text="PHAM NGUYEN" />
              <AnimatedLetters text="TRONG TRI" delay={0.55} />
            </h1>
            <div className="mt-6 md:mt-8 text-lg md:text-2xl font-light text-muted-foreground tracking-wide h-[32px] flex items-center">
              <RotatingTypingText texts={roleTitles} />
            </div>

            <BlurFade delay={1.4} className="mt-20 md:mt-32 xl:mt-48">
              <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                <p>
                  {t(tr.home.contact, language)}{" "}
                  <a href="mailto:trongtri.1975s@gmail.com" className="text-foreground hover:underline underline-offset-4 transition-all">
                    trongtri.1975s@gmail.com
                  </a>
                </p>
                <p className="text-xs text-muted-foreground/80 font-mono tracking-wider mt-1">
                  +84899010230 · Trần Nam Phú, Cần Thơ
                </p>
              </div>
            </BlurFade>
          </div>

          {/* Right Side: About Me */}
          <div className="w-full md:w-80 lg:w-96 shrink-0 md:mt-96">
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

      {/* SECTION: EXPERIENCE */}
      <section id="experience" className="w-full min-h-[90dvh] flex items-center p-8 pt-32 md:pt-12 md:pl-28 lg:pl-40 xl:pl-56 relative z-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col">
          <BlurFade>
            <div className="mb-12">
              <h2 className="font-heading font-extralight text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] tracking-tight uppercase mb-6">
                {t(tr.experience.sectionTitle, language)}
              </h2>
              <div className="w-full h-[1px] bg-border/70"></div>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="w-full bg-secondary/15 hover:bg-secondary/25 transition-all duration-300 border border-border/70 rounded-xs md:rounded-sm p-8 md:p-12 lg:p-14 flex flex-col gap-8 shadow-sm">
              
              {/* Header: Role, Period, Company */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/40">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-foreground">
                      {t(tr.experience.role, language)}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-primary/10 text-primary border border-primary/20">
                      Leadership
                    </span>
                  </div>
                  <p className="text-base md:text-lg text-foreground/80 font-light">
                    {t(tr.experience.company, language)}
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="font-mono text-sm md:text-base text-muted-foreground tracking-widest px-4 py-1.5 rounded-full border border-border/60 bg-background/50">
                    {t(tr.experience.period, language)}
                  </span>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-sm md:text-base font-light text-foreground/90 italic">
                {t(tr.experience.tagline, language)}
              </p>

              {/* Key Deliverables & Responsibilities */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-mono text-sm mt-0.5">01</span>
                  <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                    {t(tr.experience.bullet1, language)}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-mono text-sm mt-0.5">02</span>
                  <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                    {t(tr.experience.bullet2, language)}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-mono text-sm mt-0.5">03</span>
                  <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                    {t(tr.experience.bullet3, language)}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-mono text-sm mt-0.5">04</span>
                  <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                    {t(tr.experience.bullet4, language)}
                  </p>
                </div>
              </div>

              {/* Tech & Competency Badges */}
              <div className="pt-4 flex flex-wrap gap-2.5">
                {[
                  "Team Leadership (5 Members)",
                  "BRD & SRS Specifications",
                  "System Architecture",
                  "Workflow Design",
                  "Cross-Functional Alignment",
                  "Dev Environment Deployment",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full border border-border/60 bg-background/40 text-xs font-light text-foreground/75"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          </BlurFade>
        </div>
      </section>

      {/* SECTION: SKILL */}
      <section id="skill" className="w-full min-h-[100dvh] flex items-center p-8 pt-32 md:pt-12 md:pl-28 lg:pl-40 xl:pl-56 relative z-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col">
          <BlurFade>
            <div className="mb-14">
              <h2 className="font-heading font-extralight text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] tracking-tight uppercase mb-6">
                {t(tr.skills.title, language)}
              </h2>
              <div className="w-full h-[1px] bg-border/70"></div>
            </div>
          </BlurFade>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* BACKEND & ARCHITECTURE */}
            <BlurFade delay={0.15}>
              <div className="p-6 rounded-xs md:rounded-sm border border-border/60 bg-secondary/10 hover:border-foreground/40 transition-colors h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-heading font-medium tracking-wider uppercase mb-5 text-foreground/90 flex items-center justify-between">
                    <span>{t(tr.skills.backend, language)}</span>
                    <span className="text-xs font-mono text-primary">Core</span>
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["NestJS", "TypeScript", "Spring Boot", "FastAPI", "Python", "Java", "RESTful API", "JWT", "Async/Await"].map((skill) => (
                      <span key={skill} className="px-3.5 py-1.5 rounded-full border border-border/70 text-xs font-light text-foreground/80 hover:border-foreground hover:text-foreground transition-colors cursor-default bg-background/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* CACHING & ASYNC QUEUE */}
            <BlurFade delay={0.25}>
              <div className="p-6 rounded-xs md:rounded-sm border border-border/60 bg-secondary/10 hover:border-foreground/40 transition-colors h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-heading font-medium tracking-wider uppercase mb-5 text-foreground/90 flex items-center justify-between">
                    <span>{t(tr.skills.cachingQueue, language)}</span>
                    <span className="text-xs font-mono text-primary">Queue</span>
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Redis", "BullMQ", "APScheduler", "Message Queue", "Rate Limiting", "Cronjobs"].map((skill) => (
                      <span key={skill} className="px-3.5 py-1.5 rounded-full border border-border/70 text-xs font-light text-foreground/80 hover:border-foreground hover:text-foreground transition-colors cursor-default bg-background/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* DATABASE */}
            <BlurFade delay={0.35}>
              <div className="p-6 rounded-xs md:rounded-sm border border-border/60 bg-secondary/10 hover:border-foreground/40 transition-colors h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-heading font-medium tracking-wider uppercase mb-5 text-foreground/90 flex items-center justify-between">
                    <span>{t(tr.skills.database, language)}</span>
                    <span className="text-xs font-mono text-primary">Data</span>
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["MongoDB", "MySQL", "SQL Server", "PostgreSQL", "SQLite", "SQLAlchemy", "Index Optimization"].map((skill) => (
                      <span key={skill} className="px-3.5 py-1.5 rounded-full border border-border/70 text-xs font-light text-foreground/80 hover:border-foreground hover:text-foreground transition-colors cursor-default bg-background/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* FRONTEND & UI */}
            <BlurFade delay={0.45}>
              <div className="p-6 rounded-xs md:rounded-sm border border-border/60 bg-secondary/10 hover:border-foreground/40 transition-colors h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-heading font-medium tracking-wider uppercase mb-5 text-foreground/90 flex items-center justify-between">
                    <span>{t(tr.skills.frontend, language)}</span>
                    <span className="text-xs font-mono text-primary">UI/UX</span>
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Astro", "ReactJS", "Next.js", "Tailwind CSS", "i18n", "AntDesign"].map((skill) => (
                      <span key={skill} className="px-3.5 py-1.5 rounded-full border border-border/70 text-xs font-light text-foreground/80 hover:border-foreground hover:text-foreground transition-colors cursor-default bg-background/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* AUTOMATION & TOOLS */}
            <BlurFade delay={0.55}>
              <div className="p-6 rounded-xs md:rounded-sm border border-border/60 bg-secondary/10 hover:border-foreground/40 transition-colors h-full flex flex-col justify-between md:col-span-2 lg:col-span-2">
                <div>
                  <h3 className="text-lg font-heading font-medium tracking-wider uppercase mb-5 text-foreground/90 flex items-center justify-between">
                    <span>{t(tr.skills.tools, language)}</span>
                    <span className="text-xs font-mono text-primary">DevOps &amp; Tools</span>
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Playwright",
                      "BeautifulSoup",
                      "AI Facial Recognition",
                      "Git/GitHub",
                      "Postman",
                      "Swagger / OpenAPI",
                      "Clean Code",
                      "Problem Solving",
                      "Technical English",
                    ].map((skill) => (
                      <span key={skill} className="px-3.5 py-1.5 rounded-full border border-border/70 text-xs font-light text-foreground/80 hover:border-foreground hover:text-foreground transition-colors cursor-default bg-background/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
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
