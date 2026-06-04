"use client";

import StackedSections from "@/components/ui/stacked-section";

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
  return (
    <div className="w-full flex flex-col pt-10 md:pt-20">
      <div className="mb-12 md:mb-20 px-6 md:px-0">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground">
          SELECTED PROJECTS
        </h2>
      </div>
      
      <div className="w-full">
        <StackedSections stackOffset={48} paneGap="gap-6 md:gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              id={project.id}
              className="w-full min-h-[50vh] md:h-[80vh] flex flex-col md:flex-row bg-background border border-border rounded-xs md:rounded-sm shadow-xl overflow-hidden group"
            >
              {/* Image Section */}
              <div className="w-full md:w-[60%] h-64 md:h-full bg-secondary/30 relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-border">
                <div className="absolute inset-0 bg-secondary/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <span className="text-muted-foreground font-light tracking-widest uppercase z-10 group-hover:text-foreground transition-colors duration-500">
                  Preview Image
                </span>
              </div>
              
              {/* Content Section */}
              <div className="w-full md:w-[40%] flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <span className="text-xs font-mono tracking-wider text-muted-foreground mb-4 md:mb-6">{project.year}</span>
                <h3 className="font-heading font-light tracking-tight text-3xl md:text-5xl lg:text-6xl mb-2 md:mb-4 transition-colors group-hover:text-primary">
                  {project.name}
                </h3>
                <span className="text-xs font-light tracking-widest uppercase text-muted-foreground mb-6 md:mb-8">{project.role}</span>
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground font-light leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-8 md:mt-12">
                  <button className="text-xs font-semibold tracking-widest uppercase border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </StackedSections>
      </div>
    </div>
  );
}
