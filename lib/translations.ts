import type { Language } from "@/lib/language-context";

export const translations = {
  nav: {
    home:       { vi: "TRANG CHỦ",   en: "HOME" },
    skills:     { vi: "KỸ NĂNG",     en: "SKILLS" },
    experience: { vi: "KINH NGHIỆM", en: "EXPERIENCE" },
    projects:   { vi: "DỰ ÁN",       en: "PROJECTS" },
    education:  { vi: "HỌC VẤN",     en: "EDUCATION" },
    contact:    { vi: "LIÊN HỆ",     en: "CONTACT" },
  },

  home: {
    role: {
      vi: "Backend Developer (NestJS / FastAPI)",
      en: "Backend Developer (NestJS / FastAPI)",
    },
    titles: [
      { vi: "Backend Developer (NestJS / FastAPI)", en: "Backend Developer (NestJS / FastAPI)" },
      { vi: "Junior Backend Engineer",              en: "Junior Backend Engineer" },
    ],
    location: {
      vi: "TP.HCM (Sẵn sàng nhận việc ngay)",
      en: "Ho Chi Minh City (Available immediately)",
    },
    summaryTitle: {
      vi: "Định vị chuyên môn",
      en: "Professional Summary",
    },
    summary: {
      vi: "Fresher/Junior Backend Developer với nền tảng thực chiến về NestJS (TypeScript) và FastAPI (Python). Có kinh nghiệm xây dựng RESTful API, xử lý tác vụ bất đồng bộ với Redis / BullMQ và tối ưu hóa truy vấn cơ sở dữ liệu trong môi trường dự án thực tế. Hướng tới phát triển các hệ thống Backend chịu tải tốt, cấu trúc sạch và giàu tính nghiệp vụ.",
      en: "Fresher/Junior Backend Developer with hands-on experience in NestJS (TypeScript) and FastAPI (Python). Proven experience in building RESTful APIs, handling asynchronous tasks with Redis / BullMQ, and optimizing database queries in production environments. Aiming to build resilient, clean-architecture, and high-throughput backend systems.",
    },
    contactQuick: {
      vi: "Liên hệ nhanh",
      en: "Quick Inquiries",
    },
    downloadCv: {
      vi: "Xem / Tải CV",
      en: "View / Download CV",
    },
    github: {
      vi: "GitHub",
      en: "GitHub",
    },
  },

  skills: {
    title: { vi: "KỸ NĂNG CHUYÊN MÔN", en: "TECHNICAL SKILLS" },
    subtitle: {
      vi: "Bộ kỹ năng thực chiến được phân loại và tối ưu cho vị trí Backend Developer",
      en: "Categorized production-ready stack optimized for Backend Developer roles",
    },
    categories: {
      languages: {
        title: { vi: "Languages", en: "Languages" },
        tag: "Core",
        skills: ["TypeScript", "Python", "JavaScript", "SQL", "Java"],
      },
      backendCore: {
        title: { vi: "Backend Core", en: "Backend Core" },
        tag: "Primary Focus",
        skills: ["NestJS", "FastAPI", "Spring Boot"],
      },
      databases: {
        title: { vi: "Databases & Caching", en: "Databases & Caching" },
        tag: "Storage & Cache",
        skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Redis"],
      },
      queuesTools: {
        title: { vi: "Queues, Automation & Tools", en: "Queues, Automation & Tools" },
        tag: "Async & DevOps",
        skills: ["BullMQ", "Playwright", "BeautifulSoup", "APScheduler", "Git", "Docker"],
      },
      frontend: {
        title: { vi: "Frontend (Familiar)", en: "Frontend (Familiar)" },
        tag: "UI Integration",
        skills: ["Astro", "ReactJS", "NextJS", "Tailwind CSS"],
      },
    },
  },

  experience: {
    sectionTitle: { vi: "KINH NGHIỆM LÀM VIỆC", en: "WORK EXPERIENCE" },
    subtitle: {
      vi: "Các dự án và hệ thống backend đã trực tiếp tham gia thiết kế, triển khai",
      en: "Commercial systems and institutional platforms engineered and deployed",
    },
    positions: [
      {
        id: "exp-onemekong",
        role: { vi: "Backend Developer", en: "Backend Developer" },
        company: {
          vi: "Dự án Hệ sinh thái Nhà hàng - Khách sạn One Mekong (Team size: 6)",
          en: "One Mekong Hospitality & Restaurant Ecosystem (Team size: 6)",
        },
        period: { vi: "07/2026 – Hiện tại", en: "07/2026 – Present" },
        badge: { vi: "Dự án thực tế", en: "Production Project" },
        techTags: ["NestJS", "TypeScript", "MongoDB", "Redis", "BullMQ", "JWT"],
        bullets: [
          {
            vi: "Thiết kế cơ chế sinh mã định danh đơn hàng (Unique Order ID) đảm bảo tính duy nhất và chống xung đột dữ liệu (collision) khi xử lý các request đặt phòng đồng thời.",
            en: "Designed a high-concurrency Unique Order ID generation mechanism ensuring strict uniqueness and zero data collisions during simultaneous booking requests.",
          },
          {
            vi: "Triển khai hàng đợi tin nhắn (BullMQ + Redis) xử lý bất đồng bộ luồng gửi email xác nhận, tách biệt tác vụ nặng khỏi luồng request chính.",
            en: "Implemented message queues (BullMQ + Redis) for asynchronous email confirmation pipelines, decoupling heavy compute jobs from main HTTP request cycles.",
          },
          {
            vi: "Xây dựng cơ chế xác thực JWT kết hợp kiểm soát và giới hạn phiên đăng nhập đồng thời trên đa thiết bị (tối đa 1 phiên Web và 1 phiên Mobile).",
            en: "Architected multi-device JWT authentication with strict concurrent session management (capped at 1 Web session and 1 Mobile session concurrently).",
          },
          {
            vi: "Áp dụng Rate Limiting cho dịch vụ gửi SMS OTP nhằm ngăn chặn spam request và tối ưu chi phí dịch vụ bên thứ ba.",
            en: "Enforced Rate Limiting policies on SMS OTP verification endpoints to mitigate spam abuse and curb third-party API expense.",
          },
          {
            vi: "Phân tích truy vấn chậm (slow queries) và thiết lập chiến lược đánh Index (Compound & Partial Index) cho MongoDB, giúp giảm thời gian phản hồi cho các API tìm kiếm và lọc phòng trống.",
            en: "Analyzed slow database queries and executed strategic Compound & Partial Indexing on MongoDB, notably reducing query latency across vacancy search APIs.",
          },
        ],
      },
      {
        id: "exp-ctise",
        role: { vi: "Junior Fullstack Developer", en: "Junior Fullstack Developer" },
        company: {
          vi: "Viện Khoa Học Và Kỹ Thuật Cần Thơ (CTISE)",
          en: "Can Tho Institute of Science & Technology (CTISE)",
        },
        period: { vi: "12/2025 – 04/2026", en: "12/2025 – 04/2026" },
        badge: { vi: "Viện Nghiên cứu", en: "Institute" },
        techTags: ["Astro", "Tailwind CSS", "Database Design", "SRS"],
        bullets: [
          {
            vi: "Tham gia phân tích yêu cầu nghiệp vụ, viết tài liệu đặc tả kỹ thuật (SRS) và thiết kế cấu trúc cơ sở dữ liệu cho các hệ thống nội bộ của Viện.",
            en: "Participated in business requirement analysis, authored System Requirement Specifications (SRS), and designed relational database schemas for internal systems.",
          },
          {
            vi: "Trực tiếp phát triển và triển khai website sự kiện đa ngôn ngữ Mekong HighTech Summit (sử dụng Astro, Tailwind CSS, i18n), tối ưu hóa tốc độ tải trang (Core Web Vitals) và chuẩn SEO phục vụ đăng ký tham dự trực tuyến.",
            en: "Directly engineered and deployed the multilingual Mekong HighTech Summit portal (Astro, Tailwind CSS, i18n), optimizing Core Web Vitals and SEO metrics for online event registration.",
          },
          {
            vi: "Phối hợp review code, xử lý các vấn đề kỹ thuật phát sinh và triển khai hệ thống lên môi trường Development.",
            en: "Engaged in collaborative code reviews, resolved technical bottlenecks, and maintained smooth deployments across development environments.",
          },
        ],
      },
    ],
  },

  projects: {
    sectionTitle: { vi: "DỰ ÁN CÁ NHÂN", en: "PERSONAL PROJECTS" },
    subtitle: {
      vi: "Các dự án xây dựng độc lập làm nổi bật kỹ năng Backend, Automation và thiết kế cơ sở dữ liệu",
      en: "Independent projects highlighting Backend engineering, automated scraping pipelines, and database optimization",
    },
    viewProject:  { vi: "Xem Source Code", en: "View Source Code" },
    items: [
      {
        id: "proj-spidernews",
        name: {
          vi: "SpiderNews – Hệ thống Tự động hóa Thu thập & Xử lý Tin tức",
          en: "SpiderNews – Automated News Scraping & Processing System",
        },
        period: "06/2026 – 07/2026",
        role: {
          vi: "Personal Project · Backend & Automation",
          en: "Personal Project · Backend & Automation",
        },
        techTags: [
          "FastAPI",
          "Python",
          "SQLAlchemy",
          "Playwright",
          "BeautifulSoup",
          "APScheduler",
          "Face Recognition (AI)",
        ],
        images: ["/images/projects/SpiderNews/sn_1.png"],
        link: "https://github.com/icrRick/SpiderNews_Demo",
        bullets: [
          {
            vi: "Xây dựng hệ thống Backend với FastAPI (Python) và SQLAlchemy phục vụ quản lý và lưu trữ luồng dữ liệu tin tức tự động.",
            en: "Built backend service using FastAPI (Python) and SQLAlchemy to orchestrate, manage, and persist automated news data pipelines.",
          },
          {
            vi: "Phát triển trình thu thập dữ liệu tự động (Crawler/Scraper) bằng Playwright và BeautifulSoup, kết hợp APScheduler lập lịch chạy ngầm định kỳ mà không gây nghẽn tiến trình chính (main thread).",
            en: "Developed automated web scrapers using Playwright and BeautifulSoup, paired with APScheduler for non-blocking periodic background cron execution.",
          },
          {
            vi: "Tích hợp mô hình AI nhận diện khuôn mặt (Face Recognition) để tự động lọc hình ảnh và chuẩn hóa nội dung bài viết trước khi xuất bản.",
            en: "Integrated Face Recognition AI pipelines to identify and filter relevant facial images while standardizing article contents prior to publishing.",
          },
        ],
      },
      {
        id: "proj-ebooks",
        name: {
          vi: "theBugs Book – Nền tảng Thương mại điện tử Sách",
          en: "theBugs Book – Book E-Commerce Platform",
        },
        period: "01/2025 – 04/2025",
        role: {
          vi: "Personal / Team Project · Backend Core",
          en: "Personal / Team Project · Backend Core",
        },
        techTags: ["Java", "Spring Boot", "ReactJS", "MySQL", "JWT"],
        images: ["/images/projects/E_Books/book1.png"],
        link: "https://github.com/icrRick/theBugs_book_ecommerce",
        bullets: [
          {
            vi: "Xây dựng hệ thống Backend RESTful API với Java Spring Boot, tích hợp xác thực phân quyền JWT và luồng nghiệp vụ xác minh định danh người bán (eKYC).",
            en: "Built modular RESTful backend services using Java Spring Boot, integrating JWT role-based security and seller identity verification (eKYC) workflows.",
          },
          {
            vi: "Thiết kế mô hình cơ sở dữ liệu và tối ưu hóa các câu truy vấn phức tạp trên MySQL phục vụ quản lý danh mục sách, giỏ hàng, đơn hàng và báo cáo thống kê doanh thu.",
            en: "Designed relational database schemas and optimized complex MySQL queries for catalog management, shopping carts, transactions, and sales analytics.",
          },
          {
            vi: "Xử lý logic khuyến mãi, giảm giá và kiểm soát tính toàn vẹn của dữ liệu giao dịch trong môi trường nhiều tác vụ đồng thời.",
            en: "Engineered discount calculation logic and maintained transactional integrity under concurrent checkout operations.",
          },
        ],
      },
    ],
  },

  education: {
    sectionTitle: { vi: "HỌC VẤN & BẰNG CẤP", en: "EDUCATION & CREDENTIALS" },
    subtitle: {
      vi: "Nền tảng đào tạo chính quy với thành tích học tập xuất sắc",
      en: "Formal computer science training with high academic distinction",
    },
    school: { vi: "Cao đẳng FPT Polytechnic", en: "FPT Polytechnic College" },
    period: "2023 – 2025",
    major: {
      vi: "Kỹ thuật phần mềm (Software Engineering)",
      en: "Software Engineering",
    },
    gpa: "GPA: 3.51/4.0 (8.5/10)",
    degreeBadge: {
      vi: "Tốt nghiệp loại Giỏi",
      en: "Graduated with Distinction (Giỏi)",
    },
    details: [
      {
        vi: "Tốt nghiệp loại Giỏi chuyên ngành Kỹ thuật phần mềm với GPA tích lũy 3.51/4.0.",
        en: "Graduated with Distinction in Software Engineering with a cumulative GPA of 3.51/4.0.",
      },
      {
        vi: "Nắm vững nguyên lý Cấu trúc dữ liệu & Giải thuật, Phân tích thiết kế hệ thống, Lập trình hướng đối tượng (OOP) và Quản trị cơ sở dữ liệu quan hệ/phi quan hệ.",
        en: "Solid grasp of Data Structures & Algorithms, System Analysis & Design, Object-Oriented Programming (OOP), and Relational/NoSQL Database Management.",
      },
      {
        vi: "Rèn luyện tư duy Clean Architecture, viết mã nguồn có tài liệu rõ ràng, chuẩn phong cách phát triển phần mềm doanh nghiệp.",
        en: "Cultivated Clean Architecture mindset, standardized documentation, and production-grade software development practices.",
      },
    ],
  },

  contact: {
    sectionTitle: { vi: "LIÊN HỆ & THÔNG TIN TUYỂN DỤNG", en: "CONTACT & AVAILABILITY" },
    readyBadge: {
      vi: "SẴN SÀNG NHẬN VIỆC NGAY TẠI TP.HCM",
      en: "AVAILABLE IMMEDIATELY IN HO CHI MINH CITY",
    },
    heading: {
      vi: "Sẵn sàng gia nhập đội ngũ Backend Developer",
      en: "Ready to Join as a Backend Developer",
    },
    subtext: {
      vi: "Tôi đang tích cực tìm kiếm cơ hội vị trí Fresher / Junior Backend Developer (NestJS, FastAPI, Python, TypeScript) tại TP. Hồ Chí Minh. Rất mong được trao đổi trực tiếp cùng Quý Nhà tuyển dụng.",
      en: "Actively seeking Fresher / Junior Backend Developer opportunities (NestJS, FastAPI, Python, TypeScript) in Ho Chi Minh City. Looking forward to discussing how I can add immediate value to your engineering team.",
    },
    info: {
      locationLabel: { vi: "Địa điểm làm việc:", en: "Work Location:" },
      locationValue: { vi: "TP. Hồ Chí Minh (Onsite / Hybrid / Sẵn sàng nhận việc ngay)", en: "Ho Chi Minh City (Onsite / Hybrid / Ready immediately)" },
      emailLabel:    { vi: "Email:", en: "Email:" },
      emailValue:    "trongtri.1975s@gmail.com",
      phoneLabel:    { vi: "Điện thoại:", en: "Phone:" },
      phoneValue:    "+84899010230",
      githubLabel:   { vi: "GitHub:", en: "GitHub:" },
      githubValue:   "https://github.com/icrRick",
      cvLabel:       { vi: "Bản CV chi tiết:", en: "Full CV PDF:" },
    },
    actions: {
      sendEmail: { vi: "Gửi Email", en: "Send Email" },
      callPhone: { vi: "Gọi điện", en: "Call Phone" },
      viewGithub: { vi: "GitHub Profile", en: "GitHub Profile" },
      downloadCv: { vi: "Tải CV PDF", en: "Download CV PDF" },
    },
    copyright: "© Pham Nguyen Trong Tri · Backend Developer. All rights reserved.",
  },
} as const;

export function t(
  key: { vi: string; en: string },
  language: Language
): string {
  return key[language];
}
