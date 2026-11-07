export function SeoJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://irrick-portfolio.vercel.app/#person",
        "name": "Phạm Nguyễn Trọng Trí",
        "alternateName": [
          "Pham Nguyen Trong Tri",
          "irrick",
          "icrRick",
          "Trong Tri Pham",
          "Pham Trong Tri"
        ],
        "givenName": "Trọng Trí",
        "familyName": "Phạm Nguyễn",
        "gender": "https://schema.org/Male",
        "url": "https://irrick-portfolio.vercel.app",
        "image": "https://irrick-portfolio.vercel.app/preview_img.png",
        "jobTitle": "Backend Developer (NestJS / FastAPI)",
        "description":
          "Fresher Backend Developer với nền tảng thực chiến về NestJS (TypeScript) và FastAPI (Python). TP.HCM (Sẵn sàng nhận việc ngay).",
        "email": "mailto:trongtri.1975s@gmail.com",
        "telephone": "+84899010230",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "TP. Hồ Chí Minh",
          "addressRegion": "TP. Hồ Chí Minh",
          "addressCountry": "VN"
        },
        "sameAs": [
          "https://github.com/icrRick",
          "https://facebook.com/irrickk",
          "https://irrick-portfolio.vercel.app"
        ],
        "knowsAbout": [
          "NestJS",
          "FastAPI",
          "TypeScript",
          "Python",
          "Redis",
          "BullMQ",
          "Spring Boot",
          "Java",
          "PostgreSQL",
          "MongoDB",
          "MySQL",
          "SQL Server",
          "APScheduler",
          "Playwright",
          "BeautifulSoup",
          "Docker",
          "Git"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Backend Developer",
          "occupationLocation": {
            "@type": "City",
            "name": "Ho Chi Minh City"
          },
          "skills":
            "NestJS, TypeScript, FastAPI, Python, Redis, BullMQ, Spring Boot, MongoDB, PostgreSQL, System Architecture"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://irrick-portfolio.vercel.app/#website",
        "url": "https://irrick-portfolio.vercel.app",
        "name": "Pham Nguyen Trong Tri Portfolio",
        "alternateName": "irrick Portfolio",
        "description":
          "Official Portfolio of Pham Nguyen Trong Tri (irrick) - Backend Developer (NestJS / FastAPI)",
        "publisher": {
          "@id": "https://irrick-portfolio.vercel.app/#person"
        },
        "inLanguage": ["vi-VN", "en-US"]
      },
      {
        "@type": "ProfilePage",
        "@id": "https://irrick-portfolio.vercel.app/#profilepage",
        "url": "https://irrick-portfolio.vercel.app",
        "name": "Pham Nguyen Trong Tri (irrick) | Backend Developer (NestJS / FastAPI)",
        "isPartOf": {
          "@id": "https://irrick-portfolio.vercel.app/#website"
        },
        "mainEntity": {
          "@id": "https://irrick-portfolio.vercel.app/#person"
        },
        "inLanguage": ["vi-VN", "en-US"]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
