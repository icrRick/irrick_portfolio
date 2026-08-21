import type { Language } from "@/lib/language-context";

export const translations = {
  nav: {
    home:       { vi: "TRANG CHỦ",   en: "HOME" },
    experience: { vi: "KINH NGHIỆM", en: "EXPERIENCE" },
    skill:      { vi: "KỸ NĂNG",     en: "SKILLS" },
    project:    { vi: "DỰ ÁN",       en: "PROJECTS" },
  },

  home: {
    title: { vi: "Backend Developer", en: "Backend Developer" },
    titles: [
      { vi: "Backend Developer",   en: "Backend Developer" },
      { vi: "Full-Stack Engineer", en: "Full-Stack Engineer" },
    ],
    aboutTitle: { vi: "Về tôi", en: "About Me" },
    aboutP1: {
      vi: "Tôi là Backend Developer (với thế mạnh Full-Stack) đến từ Cần Thơ, Việt Nam. Tôi đam mê xây dựng các hệ thống API hiệu năng cao, kiến trúc mở rộng và xử lý các tác vụ bất đồng bộ phức tạp.",
      en: "I am a Backend Developer (with strong Full-Stack capabilities) based in Can Tho, Viet Nam. I am passionate about building high-performance APIs, scalable architectures, and handling complex asynchronous workflows.",
    },
    aboutP2: {
      vi: "Thế mạnh của tôi xoay quanh NestJS, TypeScript, Redis, BullMQ, Spring Boot, FastAPI và cơ sở dữ liệu (MongoDB, PostgreSQL, MySQL). Tôi luôn theo đuổi Clean Code, tối ưu hóa truy vấn và mang lại trải nghiệm hệ thống mượt mà.",
      en: "My core expertise centers around NestJS, TypeScript, Redis, BullMQ, Spring Boot, FastAPI, and databases (MongoDB, PostgreSQL, MySQL). I constantly pursue Clean Code, query optimization, and seamless end-to-end system reliability.",
    },
    contact: {
      vi: "Liên hệ công việc qua email",
      en: "For business inquiries, email me at",
    },
  },

  experience: {
    sectionTitle: { vi: "KINH NGHIỆM LÀM VIỆC", en: "WORK EXPERIENCE" },
    role:         { vi: "IT Team Lead", en: "IT Team Lead" },
    company:      { vi: "Viện Khoa Học Và Kỹ Thuật Cần Thơ", en: "Can Tho Institute of Science & Technology" },
    period:       { vi: "12/2025 – 4/2026", en: "12/2025 – 4/2026" },
    tagline:      {
      vi: "Dẫn dắt đội ngũ IT 5 thành viên · Phân tích nghiệp vụ BRD/SRS · Thiết kế & Triển khai hệ thống",
      en: "Led 5-member IT team · BRD & SRS Business Analysis · System Design & Deployment",
    },
    bullet1: {
      vi: "Dẫn dắt đội ngũ IT (5 thành viên), phối hợp chặt chẽ với bộ phận Kinh doanh để phân tích và chuẩn hóa yêu cầu hệ thống.",
      en: "Led a 5-member IT team, collaborating closely with the Business department to analyze and standardize system requirements.",
    },
    bullet2: {
      vi: "Xây dựng tài liệu nghiệp vụ (BRD) và tài liệu đặc tả hệ thống (SRS) phục vụ phát triển sản phẩm.",
      en: "Authored Business Requirement Documents (BRD) and System Requirement Specifications (SRS) for product development.",
    },
    bullet3: {
      vi: "Phân chia công việc, theo dõi tiến độ sprint và đảm bảo tính đồng bộ kỹ thuật giữa các thành viên.",
      en: "Delegated sprint tasks, tracked milestones, and ensured technical alignment across team members.",
    },
    bullet4: {
      vi: "Hỗ trợ định hướng thiết kế kiến trúc hệ thống, luồng xử lý dữ liệu và hỗ trợ triển khai hệ thống trong môi trường development.",
      en: "Guided system architecture design, data flow modeling, and supported system deployment in development environments.",
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
        vi: "Hệ sinh thái nhà hàng khách sạn toàn diện. Phát triển RESTful API với NestJS & TypeScript; xây dựng Shared Cronjob & Mail Module với BullMQ + Redis Message Queue xử lý gửi email bất đồng bộ; thiết kế cơ chế xác thực JWT quản lý phiên đa nền tảng (giới hạn 1 web, 1 mobile) và SMS OTP rate-limit; phát triển & tối ưu luồng booking khách sạn; thiết kế hàm sinh 1 tỷ mã đơn hàng/năm không trùng lặp; tối ưu MongoDB indexing (Single, Compound, Partial Index).",
        en: "Comprehensive hospitality & restaurant ecosystem. Developed standardized RESTful APIs with NestJS + TypeScript; built Shared Cronjob & Mail Module integrating BullMQ + Redis Message Queue for asynchronous email processing; engineered JWT multi-device session management (1 web, 1 mobile) and rate-limited SMS OTP; optimized hotel booking workflows; created unique order code generator scaling to 1 billion/year; and accelerated MongoDB performance via Single, Compound, and Partial Indexing.",
      },
    },

    spidernews: {
      name: { vi: "SpiderNews", en: "SpiderNews" },
      role: {
        vi: "Dự án cá nhân · Python · FastAPI · SQLAlchemy · Playwright · BeautifulSoup · APScheduler",
        en: "Personal Project · Python · FastAPI · SQLAlchemy · Playwright · BeautifulSoup · APScheduler",
      },
      description: {
        vi: "Hệ thống tự động hóa thu thập và xử lý tin tức từ nhiều nguồn. Xây dựng REST API bằng FastAPI, tích hợp AI phục vụ nhận diện khuôn mặt, xử lý hình ảnh và phân tích dữ liệu. Sử dụng APScheduler để lên lịch thu thập tự động với SQLite/PostgreSQL.",
        en: "Automated news scraping and processing system from multiple sources. Built REST API with FastAPI, integrated AI for face recognition, image processing and data analysis. Used APScheduler for automatic scheduled crawling with SQLite/PostgreSQL storage.",
      },
    },

    mekong: {
      name: { vi: "Mekong HighTech Summit", en: "Mekong HighTech Summit" },
      role: {
        vi: "Dự án cá nhân · Astro · TailwindCSS · i18n",
        en: "Personal Project · Astro · TailwindCSS · i18n",
      },
      description: {
        vi: "Website đa ngôn ngữ cho sự kiện Mekong HighTech Summit. Thiết kế giao diện responsive tối ưu trên desktop và mobile. Xây dựng các chức năng hiển thị thông tin sự kiện, diễn giả, chương trình và đăng ký tham dự. Tối ưu hiệu năng tải trang và SEO.",
        en: "Multilingual website for the Mekong HighTech Summit event. Responsive design optimized for desktop and mobile. Built features for event info, speakers, program schedule, and attendee registration. Optimized page load performance and SEO.",
      },
    },

    tuyensinh: {
      name: { vi: "Landing Page Tuyển Sinh", en: "Enrollment Landing Page" },
      role: {
        vi: "Frontend Developer · Next.js · TailwindCSS · ReactBits · Animata",
        en: "Frontend Developer · Next.js · TailwindCSS · ReactBits · Animata",
      },
      description: {
        vi: "Trang đích tuyển sinh được tối ưu chuyển đổi với form đăng ký thông minh, thông tin ngành học và các chỉ tiêu tuyển sinh. Thiết kế giao diện hiện đại, responsive và tối ưu SEO.",
        en: "Conversion-optimized enrollment landing page with smart registration form, program information and enrollment quotas. Modern, responsive design with SEO optimization.",
      },
    },

    ebooks: {
      name: { vi: "Nền tảng Thương mại điện tử Sách", en: "Book E-Commerce Platform" },
      role: {
        vi: "Team Leader · 6 thành viên · Java · Spring Boot · ReactJS · MySQL",
        en: "Team Leader · 6 members · Java · Spring Boot · ReactJS · MySQL",
      },
      description: {
        vi: "Hệ thống e-commerce cho phép mua/bán sách, tích hợp xác minh người bán (eKYC). Xây dựng RESTful APIs quản lý sản phẩm, đơn hàng, người dùng. Thiết kế cơ sở dữ liệu MySQL, xử lý truy vấn thống kê và báo cáo. Xây dựng logic xác thực JWT, đánh giá sản phẩm, quản lý khuyến mãi.",
        en: "E-commerce system for buying/selling books with seller verification (eKYC). Built RESTful APIs for product, order, and user management. Designed MySQL database with statistical query handling. Implemented JWT auth, product reviews, and promotions.",
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
