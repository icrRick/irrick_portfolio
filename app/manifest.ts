import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pham Nguyen Trong Tri - Portfolio",
    short_name: "Trong Tri Portfolio",
    description:
      "Portfolio of Pham Nguyen Trong Tri (irrick). Backend & Full-Stack Developer specializing in NestJS, TypeScript, Redis, BullMQ, Spring Boot, FastAPI, and scalable system architectures.",
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
    ],
  };
}
