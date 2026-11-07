import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pham Nguyen Trong Tri - Backend Developer Portfolio",
    short_name: "Trong Tri Backend Portfolio",
    description:
      "Portfolio of Pham Nguyen Trong Tri (irrick). Fresher Backend Developer based in TP.HCM (Sẵn sàng nhận việc ngay). Specializing in NestJS, FastAPI, Python, TypeScript, Redis, BullMQ, and scalable backend architectures.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
