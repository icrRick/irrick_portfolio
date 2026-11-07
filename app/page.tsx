"use client";

import { ProjectShowcase } from "@/components/project-showcase";
import { BlurFade, AnimatedLetters, RotatingTypingText, SlideUpStagger } from "@/components/animata";
import { useLanguage } from "@/lib/language-context";
import { translations, t } from "@/lib/translations";
import { DownloadIcon, GithubIcon, PhoneIcon } from "@/components/icons";

export default function HomePage() {
  const { language } = useLanguage();
  const tr = translations;

  const roleTitles = [
    t(tr.home.titles[0], language),
    t(tr.home.titles[1], language),
  ];

  return (
    <div className="w-full flex flex-col pointer-events-auto">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION (Intro + Objective/Summary + Links)          */}
      {/* ============================================================ */}
      <section id="home" className="w-full min-h-dvh flex items-center px-6 py-12 pt-24 md:p-8 md:pt-4 md:pl-28 lg:pl-44 xl:pl-60 relative z-10">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto gap-10 md:gap-14 xl:gap-20 items-start justify-between">
          
          {/* Left Side: Name, Role, Location Status, CTA Links */}
          <div className="flex flex-col flex-1 mt-2 md:mt-10 w-full">
            
            {/* Immediate Availability Badge */}
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-wider w-fit mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                </span>
                <span>{t(tr.home.location, language)}</span>
              </div>
            </BlurFade>

            {/* Name */}
            <h1
              aria-label="PHAM NGUYEN TRONG TRI"
              className="font-heading font-extralight text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] leading-[1.06] tracking-wide uppercase transform scale-x-[1.03] scale-y-[0.97] origin-left w-fit flex flex-col text-balance"
            >
              <AnimatedLetters text="PHAM NGUYEN" />
              <AnimatedLetters text="TRONG TRI" delay={0.45} />
            </h1>

            {/* Rotating Role Headline */}
            <div className="mt-4 md:mt-6 text-base sm:text-lg md:text-2xl font-light text-primary tracking-wide h-8 flex items-center">
              <span className="sr-only">{t(tr.home.role, language)}</span>
              <RotatingTypingText texts={roleTitles} aria-hidden="true" />
            </div>

            {/* CTA & Social Quick Links */}
            <BlurFade delay={1.1} className="mt-8 md:mt-12 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3">
                {/* Download / View CV Button */}
                <a
                  href="/CV_PhamNguyenTrongTri.pdf"
                  download="CV_PhamNguyenTrongTri_BackendDeveloper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground bg-foreground text-background text-xs font-mono font-medium tracking-wider uppercase hover:bg-background hover:text-foreground transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
                >
                  <DownloadIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  <span>{t(tr.home.downloadCv, language)}</span>
                </a>

                {/* GitHub Link */}
                <a
                  href="https://github.com/icrRick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/80 bg-background/60 hover:border-foreground/80 hover:bg-secondary/40 text-xs font-mono tracking-wider transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <span>github.com/icrRick</span>
                </a>
              </div>

              {/* Fast Contact info */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-muted-foreground font-light">
                <a
                  href="mailto:trongtri.1975s@gmail.com"
                  className="hover:text-foreground underline underline-offset-4 transition-colors flex items-center gap-1.5"
                >
                  <span className="font-mono text-primary text-xs">✉</span> trongtri.1975s@gmail.com
                </a>
                <a
                  href="tel:+84899010230"
                  className="hover:text-foreground transition-colors font-mono flex items-center gap-1.5"
                >
                  <PhoneIcon className="w-3.5 h-3.5 text-primary" /> +84 899 010 230
                </a>
              </div>
            </BlurFade>
          </div>

          {/* Right Side: Professional Summary Card (Funnel scan in 3-5 seconds) */}
          <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 mt-6 lg:mt-16">
            <SlideUpStagger delay={1.2}>
              <div className="p-6 md:p-8 rounded-xs md:rounded-sm border border-border/80 bg-secondary/15 backdrop-blur-sm shadow-sm flex flex-col gap-5">
                <div className="flex items-center justify-between pb-3 border-b border-border/50">
                  <h2 className="text-xs font-mono font-medium tracking-widest uppercase text-primary text-balance">
                    {t(tr.home.summaryTitle, language)}
                  </h2>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Fresher / Entry-level
                  </span>
                </div>
                
                <p className="text-sm md:text-base leading-relaxed text-foreground/90 font-light text-pretty">
                  {t(tr.home.summary, language)}
                </p>

                {/* 3 Quick Scan Metrics / Highlights */}
                <div className="pt-3 border-t border-border/40 flex flex-col gap-2.5 font-mono text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1.5 border-b border-border/20">
                    <span className="text-muted-foreground uppercase text-[11px]">
                      {t(tr.home.metrics.coreStackLabel, language)}:
                    </span>
                    <span className="text-foreground font-medium sm:text-right">
                      {tr.home.metrics.coreStackVal}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1.5 border-b border-border/20">
                    <span className="text-muted-foreground uppercase text-[11px]">
                      {t(tr.home.metrics.dbQueueLabel, language)}:
                    </span>
                    <span className="text-foreground font-medium sm:text-right">
                      {tr.home.metrics.dbQueueVal}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-muted-foreground uppercase text-[11px]">
                      {t(tr.home.metrics.educationLabel, language)}:
                    </span>
                    <span className="text-emerald-400 font-medium sm:text-right">
                      {t(tr.home.metrics.educationVal, language)}
                    </span>
                  </div>
                </div>
              </div>
            </SlideUpStagger>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. TECHNICAL SKILLS SECTION (Directly under Hero)            */}
      {/* ============================================================ */}
      <section id="skills" className="w-full min-h-dvh flex items-center px-6 py-16 pt-20 md:p-8 md:pt-16 md:pl-28 lg:pl-44 xl:pl-60 relative z-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col">
          <BlurFade>
            <div className="mb-10 md:mb-14">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary font-mono text-xs uppercase tracking-widest">
                  Competency
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <span className="text-xs font-mono tracking-wider text-muted-foreground">
                  Core Stack First
                </span>
              </div>
              <h2 className="font-heading font-extralight text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight uppercase mb-4 text-foreground text-balance">
                {t(tr.skills.title, language)}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground font-light max-w-2xl text-pretty">
                {t(tr.skills.subtitle, language)}
              </p>
              <div className="w-full h-px bg-border/70 mt-6" />
            </div>
          </BlurFade>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            
            {/* BACKEND CORE (Priority 1 - Featured) */}
            <BlurFade delay={0.15}>
              <div className="p-6 md:p-7 rounded-xs md:rounded-sm border border-primary/40 bg-primary/[0.04] hover:border-primary transition-all duration-300 h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-mono font-semibold tracking-wider uppercase text-foreground text-balance">
                      {t(tr.skills.categories.backendCore.title, language)}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium tracking-wider bg-primary/15 text-primary border border-primary/30 uppercase">
                      {tr.skills.categories.backendCore.tag}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {tr.skills.categories.backendCore.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full border border-primary/30 text-xs font-mono font-medium text-foreground bg-background/80 hover:border-primary transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40 text-[11px] font-mono text-muted-foreground">
                  RESTful Architecture · Clean Controller-Service-Repository
                </div>
              </div>
            </BlurFade>

            {/* LANGUAGES */}
            <BlurFade delay={0.25}>
              <div className="p-6 md:p-7 rounded-xs md:rounded-sm border border-border/70 bg-secondary/15 hover:border-foreground/40 transition-colors h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-mono font-semibold tracking-wider uppercase text-foreground/90 text-balance">
                      {t(tr.skills.categories.languages.title, language)}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wider bg-secondary/50 text-muted-foreground border border-border/60">
                      {tr.skills.categories.languages.tag}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {tr.skills.categories.languages.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full border border-border/80 text-xs font-mono text-foreground/85 bg-background/60 hover:border-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40 text-[11px] font-mono text-muted-foreground">
                  Strong typing · OOP &amp; Async patterns
                </div>
              </div>
            </BlurFade>

            {/* DATABASES & CACHING */}
            <BlurFade delay={0.35}>
              <div className="p-6 md:p-7 rounded-xs md:rounded-sm border border-border/70 bg-secondary/15 hover:border-foreground/40 transition-colors h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-mono font-semibold tracking-wider uppercase text-foreground/90 text-balance">
                      {t(tr.skills.categories.databases.title, language)}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wider bg-secondary/50 text-muted-foreground border border-border/60">
                      {tr.skills.categories.databases.tag}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {tr.skills.categories.databases.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full border border-border/80 text-xs font-mono text-foreground/85 bg-background/60 hover:border-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40 text-[11px] font-mono text-muted-foreground">
                  Index Optimization · Schema Design · In-Memory Caching
                </div>
              </div>
            </BlurFade>

            {/* QUEUES, AUTOMATION & TOOLS */}
            <BlurFade delay={0.45}>
              <div className="p-6 md:p-7 rounded-xs md:rounded-sm border border-border/70 bg-secondary/15 hover:border-foreground/40 transition-colors h-full flex flex-col justify-between md:col-span-2 lg:col-span-2">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-mono font-semibold tracking-wider uppercase text-foreground/90 text-balance">
                      {t(tr.skills.categories.queuesTools.title, language)}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wider bg-secondary/50 text-muted-foreground border border-border/60">
                      {tr.skills.categories.queuesTools.tag}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {tr.skills.categories.queuesTools.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full border border-border/80 text-xs font-mono text-foreground/85 bg-background/60 hover:border-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40 text-[11px] font-mono text-muted-foreground">
                  Asynchronous Job Processing · Web Scraping · Containerization &amp; Version Control
                </div>
              </div>
            </BlurFade>

            {/* FRONTEND (FAMILIAR) */}
            <BlurFade delay={0.55}>
              <div className="p-6 md:p-7 rounded-xs md:rounded-sm border border-border/70 bg-secondary/15 hover:border-foreground/40 transition-colors h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-mono font-semibold tracking-wider uppercase text-foreground/90 text-balance">
                      {t(tr.skills.categories.frontend.title, language)}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wider bg-secondary/50 text-muted-foreground border border-border/60">
                      {tr.skills.categories.frontend.tag}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {tr.skills.categories.frontend.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full border border-border/80 text-xs font-mono text-foreground/85 bg-background/60 hover:border-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40 text-[11px] font-mono text-muted-foreground">
                  Seamless Backend-Frontend Integration
                </div>
              </div>
            </BlurFade>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. WORK EXPERIENCE SECTION (Newest -> Oldest)                */}
      {/* ============================================================ */}
      <section id="experience" className="w-full min-h-dvh flex items-center px-6 py-16 pt-20 md:p-8 md:pt-16 md:pl-28 lg:pl-44 xl:pl-60 relative z-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col">
          <BlurFade>
            <div className="mb-10 md:mb-14">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary font-mono text-xs uppercase tracking-widest">
                  Track Record
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <span className="text-xs font-mono tracking-wider text-muted-foreground">
                  Chronological
                </span>
              </div>
              <h2 className="font-heading font-extralight text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight uppercase mb-4 text-foreground text-balance">
                {t(tr.experience.sectionTitle, language)}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground font-light max-w-2xl text-pretty">
                {t(tr.experience.subtitle, language)}
              </p>
              <div className="w-full h-px bg-border/70 mt-6" />
            </div>
          </BlurFade>

          <div className="flex flex-col gap-10 md:gap-12">
            {tr.experience.positions.map((pos, posIdx) => (
              <BlurFade key={pos.id} delay={0.2 + posIdx * 0.15}>
                <div className="w-full bg-secondary/15 hover:bg-secondary/25 transition-all duration-300 border border-border/80 rounded-xs md:rounded-sm p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col gap-6 shadow-sm">
                  
                  {/* Position Header: Role, Period, Company */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/50">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-heading text-2xl sm:text-3xl md:text-3xl font-light tracking-wide text-foreground text-balance">
                          {t(pos.role, language)}
                        </h3>
                        <span className="px-3 py-0.5 rounded-full text-xs font-mono tracking-wider bg-primary/10 text-primary border border-primary/25">
                          {t(pos.badge, language)}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-foreground/80 font-light text-pretty">
                        {t(pos.company, language)}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <span className="font-mono text-xs md:text-sm text-muted-foreground tracking-wider px-4 py-1.5 rounded-full border border-border/70 bg-background/50">
                        {t(pos.period, language)}
                      </span>
                    </div>
                  </div>

                  {/* Technical Bullet Points */}
                  <div className="flex flex-col gap-3.5">
                    {pos.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3.5">
                        <span className="text-primary font-mono text-xs mt-1 shrink-0">
                          0{bIdx + 1}
                        </span>
                        <p className="text-xs sm:text-sm md:text-base font-light text-muted-foreground leading-relaxed text-pretty">
                          {t(bullet, language)}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-4 border-t border-border/40 flex flex-wrap gap-2">
                    {pos.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-border/70 bg-background/50 text-xs font-mono text-foreground/85"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PERSONAL PROJECTS SECTION (SpiderNews & theBugs Book)      */}
      {/* ============================================================ */}
      <section id="projects" className="w-full relative z-10 px-6 py-16 pt-16 md:p-8 md:pt-20 md:pl-28 lg:pl-44 xl:pl-60">
        <ProjectShowcase />
      </section>

      {/* ============================================================ */}
      {/* 5. EDUCATION SECTION (GPA 3.51/4.0 & Distinction)            */}
      {/* ============================================================ */}
      <section id="education" className="w-full min-h-[60dvh] flex items-center px-6 py-16 pt-20 md:p-8 md:pt-16 md:pl-28 lg:pl-44 xl:pl-60 relative z-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col">
          <BlurFade>
            <div className="mb-10 md:mb-12">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary font-mono text-xs uppercase tracking-widest">
                  Academic
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <span className="text-xs font-mono tracking-wider text-muted-foreground">
                  Foundation
                </span>
              </div>
              <h2 className="font-heading font-extralight text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight uppercase mb-4 text-foreground text-balance">
                {t(tr.education.sectionTitle, language)}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground font-light max-w-2xl text-pretty">
                {t(tr.education.subtitle, language)}
              </p>
              <div className="w-full h-px bg-border/70 mt-6" />
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="w-full bg-secondary/15 hover:bg-secondary/20 transition-all duration-300 border border-border/80 rounded-xs md:rounded-sm p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col gap-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/50">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-heading text-2xl sm:text-3xl font-light tracking-wide text-foreground text-balance">
                      {t(tr.education.school, language)}
                    </h3>
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      ★ {t(tr.education.degreeBadge, language)}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-foreground/80 font-light text-pretty">
                    {t(tr.education.major, language)}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-primary/10 text-primary border border-primary/20">
                    {tr.education.gpa}
                  </span>
                  <span className="font-mono text-xs md:text-sm text-muted-foreground tracking-wider px-3.5 py-1 rounded-full border border-border/70 bg-background/50">
                    {tr.education.period}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {tr.education.details.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-mono text-xs mt-1 shrink-0">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm md:text-base font-light text-muted-foreground leading-relaxed text-pretty">
                      {t(item, language)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CONTACT & FOOTER SECTION                                  */}
      {/* ============================================================ */}
      <section id="contact" className="w-full px-6 py-16 pt-20 md:p-8 md:pt-16 md:pl-28 lg:pl-44 xl:pl-60 relative z-10 pb-20">
        <div className="w-full max-w-7xl mx-auto flex flex-col">
          <BlurFade>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary font-mono text-xs uppercase tracking-widest">
                  Connect
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <span className="text-xs font-mono tracking-wider text-muted-foreground">
                  Immediate Availability
                </span>
              </div>
              <h2 className="font-heading font-extralight text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight uppercase mb-4 text-foreground text-balance">
                {t(tr.contact.sectionTitle, language)}
              </h2>
              <div className="w-full h-px bg-border/70 mt-6" />
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="w-full bg-secondary/15 border border-border/80 rounded-xs md:rounded-sm p-6 sm:p-8 md:p-12 flex flex-col gap-8 shadow-sm">
              
              {/* Ready Badge & Headline */}
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  {t(tr.contact.readyBadge, language)}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-light tracking-tight text-foreground mb-3 text-balance">
                  {t(tr.contact.heading, language)}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-light max-w-3xl leading-relaxed text-pretty">
                  {t(tr.contact.subtext, language)}
                </p>
              </div>

              {/* Contact Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                
                {/* Location */}
                <div className="p-4 rounded-xs border border-border/60 bg-background/50 flex flex-col gap-1">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase">
                    {t(tr.contact.info.locationLabel, language)}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {t(tr.contact.info.locationValue, language)}
                  </span>
                </div>

                {/* Email */}
                <div className="p-4 rounded-xs border border-border/60 bg-background/50 flex flex-col gap-1">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase">
                    {t(tr.contact.info.emailLabel, language)}
                  </span>
                  <a
                    href="mailto:trongtri.1975s@gmail.com"
                    className="text-sm font-mono text-foreground hover:text-primary transition-colors hover:underline"
                  >
                    trongtri.1975s@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xs border border-border/60 bg-background/50 flex flex-col gap-1">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase">
                    {t(tr.contact.info.phoneLabel, language)}
                  </span>
                  <a
                    href="tel:+84899010230"
                    className="text-sm font-mono text-foreground hover:text-primary transition-colors"
                  >
                    +84 899 010 230
                  </a>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-border/40 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:trongtri.1975s@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground bg-foreground text-background text-xs font-mono font-medium tracking-wider uppercase hover:bg-transparent hover:text-foreground transition-all duration-200"
                >
                  <span>✉</span>
                  <span>{t(tr.contact.actions.sendEmail, language)}</span>
                </a>

                <a
                  href="tel:+84899010230"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/80 bg-background/60 hover:border-foreground/80 text-xs font-mono tracking-wider transition-all duration-200"
                >
                  <PhoneIcon className="w-3.5 h-3.5" />
                  <span>{t(tr.contact.actions.callPhone, language)}</span>
                </a>

                <a
                  href="https://github.com/icrRick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/80 bg-background/60 hover:border-foreground/80 text-xs font-mono tracking-wider transition-all duration-200"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>{t(tr.contact.actions.viewGithub, language)}</span>
                </a>

                <a
                  href="/CV_PhamNguyenTrongTri.pdf"
                  download="CV_PhamNguyenTrongTri_BackendDeveloper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/80 bg-background/60 hover:border-foreground/80 text-xs font-mono tracking-wider transition-all duration-200"
                >
                  <DownloadIcon className="w-3.5 h-3.5" />
                  <span>{t(tr.contact.actions.downloadCv, language)}</span>
                </a>
              </div>

              {/* Copyright */}
              <div className="pt-4 border-t border-border/30 text-xs font-mono text-muted-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <span>{tr.contact.copyright}</span>
                <span className="text-[11px] text-muted-foreground">
                  Built with Next.js, TypeScript &amp; Tailwind CSS
                </span>
              </div>

            </div>
          </BlurFade>
        </div>
      </section>

      {/* Spacer to allow clean ending */}
      <div className="h-16" />
    </div>
  );
}
