import type { Language } from "@/lib/language-context";

export const translations = {
  nav: {
    home:    { vi: "TRANG CHỦ", en: "HOME" },
    skill:   { vi: "KỸ NĂNG",   en: "SKILLS" },
    project: { vi: "DỰ ÁN",     en: "PROJECTS" },
  },

  home: {
    title:    { vi: "Fresher Developer", en: "Fresher Developer" },
    aboutTitle: { vi: "Về tôi",          en: "About Me" },
    aboutP1:  {
      vi: "Tôi là Fresher Developer đến từ Cần Thơ, Việt Nam.",
      en: "I am currently a Fresher Developer based in Can Tho, Viet Nam.",
    },
    aboutP2:  {
      vi: "Tôi tập trung vào phát triển web và đã thực hiện nhiều dự án full-stack cá nhân. Tôi yêu thích Java và viết Clean Code, đồng thời luôn khám phá công nghệ mới và các ý tưởng sáng tạo.",
      en: "My main focus is web development, and I have worked on several full-stack personal projects. I deeply love Java and writing Clean Code. I enjoy exploring new technologies and experimenting with creative ideas.",
    },
    contact: {
      vi: "Liên hệ công việc qua email",
      en: "For business inquiries, email me at",
    },
  },

  skills: {
    title:    { vi: "KỸ NĂNG CỦA TÔI", en: "MY SKILLS" },
    backend:  { vi: "BACKEND",  en: "BACKEND" },
    frontend: { vi: "FRONTEND", en: "FRONTEND" },
    database: { vi: "CƠ SỞ DỮ LIỆU", en: "DATABASE" },
    tools:    { vi: "CÔNG CỤ", en: "TOOLS" },
  },

  projects: {
    sectionTitle: { vi: "DỰ ÁN NỔI BẬT", en: "SELECTED PROJECTS" },
    viewProject:  { vi: "Xem dự án", en: "View Project" },
    comingSoon:   { vi: "Sắp ra mắt", en: "Coming Soon" },

    spidernews: {
      name:        { vi: "SpiderNews",       en: "SpiderNews" },
      role:        { vi: "Dự án cá nhân · Python · FastAPI · SQLAlchemy · Playwright · BeautifulSoup", en: "Personal Project · Python · FastAPI · SQLAlchemy · Playwright · BeautifulSoup" },
      description: {
        vi: "Hệ thống thu thập và xử lý tin tức tự động từ nhiều nguồn. Xây dựng REST API với FastAPI, tích hợp AI phục vụ nhận diện khuôn mặt, xử lý hình ảnh và phân tích dữ liệu. Sử dụng APScheduler để lên lịch thu thập tự động với SQLite/PostgreSQL.",
        en: "Automated news aggregation and processing system from multiple sources. Built REST API with FastAPI, integrated AI for face recognition, image processing and data analysis. Used APScheduler for automatic scheduled crawling with SQLite/PostgreSQL.",
      },
    },

    mekong: {
      name:        { vi: "Mekong HighTech Summit", en: "Mekong HighTech Summit" },
      role:        { vi: "Dự án cá nhân · Astro · TailwindCSS", en: "Personal Project · Astro · TailwindCSS" },
      description: {
        vi: "Website đa ngôn ngữ cho sự kiện Mekong HighTech Summit. Thiết kế giao diện responsive tối ưu trên desktop và mobile. Xây dựng các chức năng hiển thị thông tin sự kiện, diễn giả, chương trình và đăng ký tham dự. Tối ưu hiệu năng tải trang và SEO.",
        en: "Multilingual website for the Mekong HighTech Summit event. Responsive design optimized for desktop and mobile. Built features for event info, speakers, program schedule and registration. Optimized page performance and SEO.",
      },
    },

    tuyensinh: {
      name:        { vi: "Landing Page Tuyển Sinh", en: "Enrollment Landing Page" },
      role:        { vi: "Frontend Developer · Astro · TailwindCSS", en: "Frontend Developer · Astro · TailwindCSS" },
      description: {
        vi: "Trang đích tuyển sinh được tối ưu chuyển đổi với form đăng ký thông minh, thông tin ngành học và các chỉ tiêu tuyển sinh. Thiết kế giao diện hiện đại, responsive và tối ưu SEO.",
        en: "Conversion-optimized enrollment landing page with smart registration form, program information and enrollment quotas. Modern, responsive design with SEO optimization.",
      },
    },

    ebooks: {
      name:        { vi: "Nền tảng Thương mại điện tử Sách", en: "Book E-Commerce Platform" },
      role:        { vi: "Team Leader · 6 thành viên · Java · Spring Boot · ReactJS · MySQL", en: "Team Leader · 6 members · Java · Spring Boot · ReactJS · MySQL" },
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
