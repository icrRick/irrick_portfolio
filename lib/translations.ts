import type { Language } from "@/lib/language-context";

export const translations = {
  nav: {
    home:       { vi: "TRANG CHỦ",   en: "HOME" },
    experience: { vi: "KINH NGHIỆM", en: "EXPERIENCE" },
    skill:      { vi: "KỸ NĂNG",     en: "SKILLS" },
    project:    { vi: "DỰ ÁN",       en: "PROJECTS" },
  },

  home: {
    title: { vi: "Full-Stack Developer", en: "Full-Stack Developer" },
    titles: [
      { vi: "Full-Stack Developer", en: "Full-Stack Developer" },
      { vi: "Backend Specialist",  en: "Backend Specialist" },
    ],
    aboutTitle: { vi: "Về tôi", en: "About Me" },
    aboutP1: {
      vi: "Tôi là Full-Stack Developer với thế mạnh chuyên sâu về Backend đến từ Cần Thơ, Việt Nam. Tôi tập trung xây dựng sản phẩm web toàn diện từ giao diện tối ưu đến hệ thống API hiệu năng cao, kiến trúc mở rộng và xử lý bất đồng bộ phức tạp.",
      en: "I am a Full-Stack Developer with deep expertise in Backend systems based in Can Tho, Vietnam. I specialize in building end-to-end web applications, resilient high-throughput APIs, and scalable asynchronous workflows.",
    },
    aboutP2: {
      vi: "Công nghệ nòng cốt gồm NestJS, TypeScript, Next.js, Redis, BullMQ, Spring Boot, FastAPI cùng các hệ CSDL (PostgreSQL, MongoDB, MySQL). Tôi luôn chú trọng Clean Code, tối ưu truy vấn và bảo đảm độ ổn định hệ thống.",
      en: "Core stack includes NestJS, TypeScript, Next.js, Redis, BullMQ, Spring Boot, FastAPI, and databases (PostgreSQL, MongoDB, MySQL). Focused on Clean Code, query optimization, and robust system reliability.",
    },
    contact: {
      vi: "Liên hệ công việc qua email",
      en: "For business inquiries, email me at",
    },
    downloadCv: {
      vi: "Tải CV",
      en: "Download CV",
    },
  },

  experience: {
    sectionTitle: { vi: "KINH NGHIỆM LÀM VIỆC", en: "WORK EXPERIENCE" },
    role:         { vi: "IT Team Lead", en: "IT Team Lead" },
    company:      { vi: "Viện Khoa Học Và Kỹ Thuật Cần Thơ", en: "Can Tho Institute of Science & Technology" },
    period:       { vi: "12/2025 - 4/2026", en: "12/2025 - 4/2026" },
    tagline:      {
      vi: "Dẫn dắt đội ngũ IT 5 thành viên · Phân tích BRD/SRS · Thiết kế & Triển khai hệ thống",
      en: "Led 5-member IT team · BRD & SRS Analysis · Architecture & Deployment",
    },
    bullet1: {
      vi: "Dẫn dắt đội ngũ IT 5 thành viên, làm việc chặt chẽ cùng các bên liên quan để chuẩn hóa yêu cầu sản phẩm.",
      en: "Led a 5-member engineering team, collaborating with stakeholders to translate business needs into technical requirements.",
    },
    bullet2: {
      vi: "Soạn thảo tài liệu đặc tả nghiệp vụ (BRD) và kỹ thuật hệ thống (SRS) làm kim chỉ nam phát triển.",
      en: "Authored comprehensive BRD and SRS specifications ensuring seamless execution across sprints.",
    },
    bullet3: {
      vi: "Lập kế hoạch sprint, phân bổ nguồn lực và kiểm soát chất lượng kỹ thuật trong toàn đội ngũ.",
      en: "Planned sprints, delegated tasks, and maintained consistent technical quality standards.",
    },
    bullet4: {
      vi: "Định hình kiến trúc hệ thống, chuẩn hóa luồng luân chuyển dữ liệu và giám sát triển khai trên môi trường phát triển.",
      en: "Architected system topology, standardized data pipelines, and oversaw dev-environment deployments.",
    },
  },

  skills: {
    title:        { vi: "KỸ NĂNG CỦA TÔI", en: "MY SKILLS" },
    backend:      { vi: "BACKEND & ARCHITECTURE", en: "BACKEND & ARCHITECTURE" },
    cachingQueue: { vi: "CACHING & ASYNC QUEUE",  en: "CACHING & ASYNC QUEUE" },
    database:     { vi: "CƠ SỞ DỮ LIỆU",          en: "DATABASES" },
    frontend:     { vi: "FRONTEND & UI",          en: "FRONTEND & UI" },
    tools:        { vi: "AUTOMATION & TOOLS",     en: "AUTOMATION & TOOLS" },
  },

  projects: {
    sectionTitle: { vi: "DỰ ÁN NỔI BẬT", en: "SELECTED PROJECTS" },
    viewProject:  { vi: "Xem dự án",     en: "View Project" },
    comingSoon:   { vi: "Sắp ra mắt",    en: "Coming Soon" },

    onemekong: {
      name: { vi: "One Mekong", en: "One Mekong" },
      role: {
        vi: "Backend Developer · 6 thành viên · NestJS · TypeScript · Redis · BullMQ · MongoDB · JWT",
        en: "Backend Developer · 6 members · NestJS · TypeScript · Redis · BullMQ · MongoDB · JWT",
      },
      description: {
        vi: "Hệ sinh thái dịch vụ nhà hàng - khách sạn. Xây dựng RESTful API chuẩn hóa với NestJS & TypeScript, tích hợp hàng đợi Redis & BullMQ xử lý email và cronjob bất đồng bộ. Thiết kế xác thực JWT đa thiết bị, chống spam SMS OTP, tối ưu đặt phòng và thuật toán sinh mã đơn hàng không trùng lặp (1 tỷ mã/năm), kèm tối ưu MongoDB Indexing chuyên sâu.",
        en: "Hospitality & restaurant ecosystem. Built standardized RESTful APIs with NestJS & TypeScript, integrated Redis + BullMQ for async mail queues and cronjobs. Designed multi-device JWT auth, SMS OTP rate-limiting, hotel booking workflows, high-concurrency order code generator (1B/yr), and optimized MongoDB indexing.",
      },
    },

    spidernews: {
      name: { vi: "SpiderNews", en: "SpiderNews" },
      role: {
        vi: "Dự án cá nhân · Python · FastAPI · SQLAlchemy · Playwright · BeautifulSoup · APScheduler",
        en: "Personal Project · Python · FastAPI · SQLAlchemy · Playwright · BeautifulSoup · APScheduler",
      },
      description: {
        vi: "Hệ thống tự động hóa thu thập và trích xuất dữ liệu tin tức đa nguồn. Xây dựng backend REST API với FastAPI, tích hợp mô hình AI nhận diện khuôn mặt và xử lý hình ảnh. Vận hành tác vụ crawl tự động định kỳ bằng APScheduler và lưu trữ trên PostgreSQL.",
        en: "Automated multi-source news aggregation and extraction system. Developed FastAPI backend integrated with AI models for facial recognition and image processing. Scheduled automated crawling via APScheduler with PostgreSQL storage.",
      },
    },

    mekong: {
      name: { vi: "Mekong HighTech Summit", en: "Mekong HighTech Summit" },
      role: {
        vi: "Dự án cá nhân · Astro · TailwindCSS · i18n",
        en: "Personal Project · Astro · TailwindCSS · i18n",
      },
      description: {
        vi: "Cổng thông tin đa ngôn ngữ sự kiện công nghệ Mekong HighTech Summit. Xây dựng trên nền tảng Astro & Tailwind CSS, tối ưu giao diện responsive, quản lý lịch trình diễn giả, luồng đăng ký tham dự trực tuyến và đạt điểm SEO/Performance cao.",
        en: "Multilingual event platform for Mekong HighTech Summit. Built with Astro & Tailwind CSS, featuring responsive design, speaker schedule management, attendee registration, and top-tier SEO/performance scores.",
      },
    },

    tuyensinh: {
      name: { vi: "Landing Page Tuyển Sinh", en: "Enrollment Landing Page" },
      role: {
        vi: "Frontend Developer · Next.js · TailwindCSS · ReactBits · Animata",
        en: "Frontend Developer · Next.js · TailwindCSS · ReactBits · Animata",
      },
      description: {
        vi: "Trang đích tuyển sinh tối ưu tỷ lệ chuyển đổi với biểu mẫu đăng ký thông minh, tra cứu ngành học và chỉ tiêu. Giao diện hiện đại, tương thích đa thiết bị và chuẩn SEO.",
        en: "Conversion-focused enrollment landing page with smart registration form, program directory, and quotas. Responsive design with full SEO optimization.",
      },
    },

    ebooks: {
      name: { vi: "Nền tảng Thương mại điện tử Sách", en: "Book E-Commerce Platform" },
      role: {
        vi: "Team Leader · 6 thành viên · Java · Spring Boot · ReactJS · MySQL",
        en: "Team Leader · 6 members · Java · Spring Boot · ReactJS · MySQL",
      },
      description: {
        vi: "Nền tảng thương mại điện tử mua bán sách tích hợp xác minh định danh người bán (eKYC). Phát triển hệ thống backend Java Spring Boot & ReactJS, quản lý danh mục, đơn hàng, bảo mật JWT, xử lý khuyến mãi và tối ưu truy vấn thống kê trên MySQL.",
        en: "Book e-commerce platform featuring seller eKYC verification. Developed Java Spring Boot backend and ReactJS frontend, handling catalogs, orders, JWT security, promotion logic, and complex analytical MySQL queries.",
      },
    },
  },
} as const;

export function t(
  key: { vi: string; en: string },
  language: Language
): string {
  return key[language];
}
