import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://irrick-portfolio.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          vi: `${baseUrl}/?lang=vi`,
          en: `${baseUrl}/?lang=en`,
        },
      },
    },
  ];
}
