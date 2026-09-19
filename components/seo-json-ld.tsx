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
        "jobTitle": "Full-Stack Developer (Backend Focus)",
        "description":
          "Full-Stack Developer with strong Backend expertise based in Can Tho, Vietnam. Specializing in NestJS, TypeScript, Next.js, Redis, BullMQ, Spring Boot, FastAPI, and scalable system architectures.",
        "email": "mailto:trongtri.1975s@gmail.com",
        "telephone": "+84899010230",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Trần Nam Phú",
          "addressLocality": "Cần Thơ",
          "addressRegion": "Cần Thơ",
          "addressCountry": "VN"
        },
        "sameAs": [
          "https://github.com/icrRick",
          "https://facebook.com/irrickk",
          "https://irrick-portfolio.vercel.app"
        ],
        "knowsAbout": [
          "NestJS",
          "TypeScript",
          "Redis",
          "BullMQ",
          "FastAPI",
          "Python",
          "Spring Boot",
          "Java",
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "SQL Server",
          "SQLite",
          "System Architecture",
          "Microservices",
          "RESTful API",
          "Message Queue",
          "Clean Code",
          "Next.js",
          "React",
          "Astro"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Full-Stack Developer",
          "occupationLocation": {
            "@type": "City",
            "name": "Can Tho"
          },
          "skills":
            "NestJS, TypeScript, Next.js, Redis, BullMQ, Spring Boot, FastAPI, MongoDB, PostgreSQL, System Architecture"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://irrick-portfolio.vercel.app/#website",
        "url": "https://irrick-portfolio.vercel.app",
        "name": "Pham Nguyen Trong Tri Portfolio",
        "alternateName": "irrick Portfolio",
        "description":
          "Official Portfolio of Pham Nguyen Trong Tri (irrick) - Full-Stack Developer",
        "publisher": {
          "@id": "https://irrick-portfolio.vercel.app/#person"
        },
        "inLanguage": ["vi-VN", "en-US"]
      },
      {
        "@type": "ProfilePage",
        "@id": "https://irrick-portfolio.vercel.app/#profilepage",
        "url": "https://irrick-portfolio.vercel.app",
        "name": "Pham Nguyen Trong Tri (irrick) | Full-Stack Developer",
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
