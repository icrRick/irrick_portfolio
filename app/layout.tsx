import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { LanguageProvider } from "@/lib/language-context";
import { Navigation } from "@/components/navigation";
import { GithubIcon, PhoneIcon, FacebookIcon, DownloadIcon } from "@/components/icons";
import SplashCursor from "@/components/SplashCursor";
import { CircleCursor } from "@/components/circle-cursor";
import { SeoJsonLd } from "@/components/seo-json-ld";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irrick-portfolio.vercel.app"),
  title: {
    default: "Pham Nguyen Trong Tri | Backend Developer (NestJS / FastAPI)",
    template: "%s | Pham Nguyen Trong Tri",
  },
  description:
    "Portfolio of Pham Nguyen Trong Tri (irrick). Fresher/Junior Backend Developer based in TP.HCM (Sẵn sàng nhận việc ngay). Specializing in NestJS, FastAPI, Python, TypeScript, Redis, BullMQ, PostgreSQL, MongoDB, and high-performance backend systems.",
  applicationName: "Pham Nguyen Trong Tri Portfolio",
  authors: [{ name: "Pham Nguyen Trong Tri (irrick)", url: "https://irrick-portfolio.vercel.app" }],
  generator: "Next.js",
  keywords: [
    "Phạm Nguyễn Trọng Trí",
    "Pham Nguyen Trong Tri",
    "irrick",
    "icrRick",
    "Trọng Trí",
    "Trong Tri Pham",
    "Pham Trong Tri",
    "Backend Developer TP.HCM",
    "Lập trình viên Backend TP.HCM",
    "Kỹ sư Backend",
    "Junior Backend Developer",
    "Fresher Backend Developer",
    "NestJS Developer",
    "FastAPI Python Developer",
    "Spring Boot Developer",
    "Redis BullMQ Message Queue",
    "Database Optimization",
    "System Architecture",
    "Portfolio Developer",
    "Software Engineer Portfolio",
  ],
  creator: "Pham Nguyen Trong Tri",
  publisher: "Pham Nguyen Trong Tri",
  alternates: {
    canonical: "https://irrick-portfolio.vercel.app",
    languages: {
      "vi-VN": "https://irrick-portfolio.vercel.app/?lang=vi",
      "en-US": "https://irrick-portfolio.vercel.app/?lang=en",
    },
  },
  category: "technology",
  openGraph: {
    type: "profile",
    firstName: "Trong Tri",
    lastName: "Pham Nguyen",
    username: "irrick",
    gender: "male",
    locale: "vi_VN",
    alternateLocale: ["en_US"],
    url: "https://irrick-portfolio.vercel.app",
    title: "Pham Nguyen Trong Tri | Backend Developer (NestJS / FastAPI)",
    description:
      "Portfolio of Pham Nguyen Trong Tri (irrick). Fresher/Junior Backend Developer based in TP.HCM (Sẵn sàng nhận việc ngay). Specializing in NestJS, FastAPI, Python, TypeScript, Redis, BullMQ, and scalable backend architectures.",
    siteName: "Pham Nguyen Trong Tri Portfolio",
    images: [
      {
        url: "/preview_img.png",
        width: 1200,
        height: 630,
        alt: "Pham Nguyen Trong Tri (irrick) - Backend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pham Nguyen Trong Tri | Backend Developer (NestJS / FastAPI)",
    description:
      "Portfolio of Pham Nguyen Trong Tri (irrick). Fresher/Junior Backend Developer based in TP.HCM (Sẵn sàng nhận việc ngay). Specializing in NestJS, FastAPI, Python, TypeScript, Redis, BullMQ, and scalable backend architectures.",
    images: ["/preview_img.png"],
    creator: "@icrRick",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${montserrat.variable} antialiased`}
    >
      <head>
        <SeoJsonLd />
      </head>
      <body 
        className="h-screen w-screen overflow-hidden flex flex-col bg-background text-foreground font-sans tracking-wide selection:bg-foreground selection:text-background"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <CircleCursor />
            {/* Background Animation */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <SplashCursor
                SIM_RESOLUTION={64}
                DYE_RESOLUTION={512}
                PRESSURE_ITERATIONS={8}
                DENSITY_DISSIPATION={2.5}
                VELOCITY_DISSIPATION={0.2}
                PRESSURE={0.15}
                CURL={4}
                SPLAT_RADIUS={0.1}
                SPLAT_FORCE={1000}
                COLOR_UPDATE_SPEED={11}
                SHADING={true}
                RAINBOW_MODE={false}
                COLOR="#A855F7"
              />
            </div>

            {/* Top Left: Username */}
            <div className="fixed top-6 left-3 md:top-12 md:left-12 z-50 pointer-events-none bg-background/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none px-2 py-1 md:p-0 rounded-md md:rounded-none border-none shadow-none hidden md:block">
              <Link href="/" className="text-sm font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity pointer-events-auto">
                irrick
              </Link>
            </div>

            {/* Top Right: Language + Theme Toggle + CV Download */}
            <div className="fixed top-6 right-3 md:top-12 md:left-auto md:right-12 z-50 hidden md:flex items-center gap-2">
              <a
                href="/CV_PhamNguyenTrongTri.pdf"
                download="CV_PhamNguyenTrongTri_BackendDeveloper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 px-3 rounded-full border border-border/70 hover:border-foreground/80 bg-background/50 hover:bg-foreground hover:text-background text-muted-foreground transition-all duration-200 flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase cursor-pointer"
                title="Download CV"
                aria-label="Download CV"
              >
                <DownloadIcon className="w-3.5 h-3.5" />
                <span>CV</span>
              </a>
              <LanguageToggle />
              <ThemeToggle />
            </div>

            {/* Left Side: Navigation Menu */}
            <Navigation />

            {/* Right Side: Social Tab (Desktop only) */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-foreground text-background py-6 px-3 hidden md:flex flex-col items-center gap-6 shadow-2xl">
              <a href="https://github.com/icrRick" target="_blank" rel="me noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="GitHub Profile">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="tel:+84899010230" className="hover:opacity-70 transition-opacity" aria-label="Phone Call">
                <PhoneIcon className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/irrickk" target="_blank" rel="me noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="Facebook Profile">
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Bottom Left: Copyright */}
            <div className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 text-[10px] text-muted-foreground tracking-widest uppercase hidden md:block">
              © Pham Nguyen Trong Tri
            </div>

            {/* Main Content Area */}
            <main className="flex-1 w-full h-full relative z-0 overflow-y-auto">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

