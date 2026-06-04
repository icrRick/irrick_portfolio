"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    id: "proj-1",
    year: "2024",
    name: "E-Commerce",
    role: "fullstack",
    description: "Next.js Storefront with React & Prisma.",
  },
  {
    id: "proj-2",
    year: "2024",
    name: "Chat App",
    role: "backend",
    description: "Real-time messaging with Socket.io & MongoDB.",
  },
  {
    id: "proj-3",
    year: "2023",
    name: "Task CLI",
    role: "java",
    description: "Terminal-based task manager built in Java.",
  },
];

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projects.findIndex((p) => p.id === entry.target.id);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: document.querySelector("main"), // Use the scrolling main container
        rootMargin: "-40% 0px -40% 0px", // Trigger when the item is in the middle 20% of the screen
        threshold: 0,
      }
    );

    projects.forEach((p) => {
      const el = document.getElementById(p.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex flex-col-reverse md:flex-row relative gap-8 md:gap-0">
      
      {/* LEFT SIDE: Scrolling Projects */}
      <div className="w-full md:w-[60%] flex flex-col gap-10 md:gap-0">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            id={project.id}
            className="w-full min-h-[50vh] md:min-h-screen flex flex-col justify-center py-4 md:py-20"
          >
            {/* Project Card Image Placeholder */}
            <div className="w-full aspect-[4/3] md:aspect-[16/10] bg-secondary/30 border border-border/50 relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-secondary/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              <span className="text-muted-foreground font-light tracking-widest uppercase z-10 group-hover:text-foreground transition-colors duration-500">
                Preview Image
              </span>
            </div>
            
            {/* Project Details (Mobile mostly, since nav is sticky on desktop) */}
            <div className="mt-6 md:hidden">
              <h3 className="font-semibold text-xl">{project.name}</h3>
              <p className="text-sm text-muted-foreground font-light mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE: Sticky Navigation */}
      <div className="w-full md:w-[40%] md:sticky md:top-0 h-auto md:h-screen flex flex-col justify-center pt-10 md:pt-0 pb-0 md:py-0 z-20 md:pl-24">
        <h2 className="text-xs font-semibold tracking-widest uppercase mb-2 md:mb-12 text-foreground">
          SELECTED PROJECTS
        </h2>
        
        <div className="hidden md:flex flex-col gap-4">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={project.id} 
                className={`flex items-baseline gap-4 cursor-pointer transition-all duration-500 ease-out ${isActive ? "opacity-100 translate-x-4" : "opacity-40 hover:opacity-70"}`}
                onClick={() => {
                  document.getElementById(project.id)?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                <span className="text-xs font-mono tracking-wider">{project.year}</span>
                <h3 className={`font-heading font-light tracking-tight transition-all duration-500 ${isActive ? "text-5xl md:text-6xl text-foreground" : "text-3xl md:text-4xl text-muted-foreground"}`}>
                  {project.name}
                </h3>
                <span className="text-xs font-light tracking-widest uppercase hidden sm:block">{project.role}</span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
