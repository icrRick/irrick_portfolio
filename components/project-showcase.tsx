"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import StackedSections from "@/components/ui/stacked-section";

interface Project {
  id: string;
  year: string;
  name: string;
  role: string;
  description: string;
  images: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: "proj-spidernews",
    year: "6/2026",
    name: "SpiderNews",
    role: "Fullstack Developer",
    description:
      "Nền tảng tin tức tổng hợp tự động thu thập và phân loại bài viết từ nhiều nguồn, hỗ trợ đọc nhanh và tìm kiếm thông minh.",
    images: ["/images/projects/SpiderNews/sn_1.png"],
  },
  {
    id: "proj-mekong",
    year: "2/2026",
    name: "Mekong HighTech Summit",
    role: "Frontend Developer",
    description:
      "Website sự kiện hội nghị công nghệ cao khu vực Mekong với thiết kế hiện đại, lịch sự kiện tương tác và đăng ký trực tuyến.",
    images: [
      "/images/projects/MekongHighTech/mekong_1.png",
    ],
  },
  {
    id: "proj-ebooks",
    year: "5/2025",
    name: "Nền tảng thương mại điện tử bán sách",
    role: "Fullstack Developer",
    description:
      "Hệ thống e-commerce chuyên bán sách với tính năng tìm kiếm nâng cao, giỏ hàng, thanh toán trực tuyến và quản lý kho hàng.",
    images: ["/images/projects/E_Books/book1.png"],
  },
  {
    id: "proj-tuyensinh",
    year: "5/2026",
    name: "Landing Page Tuyển Sinh",
    role: "Frontend Developer",
    description:
      "Trang đích tuyển sinh được tối ưu chuyển đổi với form đăng ký thông minh, thông tin ngành học và các chỉ tiêu tuyển sinh.",
    images: [
      "/images/projects/TuyenSinh/ts_1.png",
      "/images/projects/TuyenSinh/ts_2.png",
    ],
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
      {/* Images */}
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

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-10" />

      {/* Dots indicator — chỉ hiện khi có nhiều ảnh */}
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
              {/* Image / Carousel Section */}
              <div className="w-full md:w-[60%] h-64 md:h-full bg-secondary/30 relative overflow-hidden border-b md:border-b-0 md:border-r border-border">
                <ProjectCarousel images={project.images} name={project.name} />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-[40%] flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <span className="text-xs font-mono tracking-wider text-muted-foreground mb-4 md:mb-6">
                  {project.year}
                </span>
                <h3 className="font-heading font-light tracking-tight text-3xl md:text-5xl lg:text-6xl mb-2 md:mb-4 transition-colors group-hover:text-primary">
                  {project.name}
                </h3>
                <span className="text-xs font-light tracking-widest uppercase text-muted-foreground mb-6 md:mb-8">
                  {project.role}
                </span>
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
