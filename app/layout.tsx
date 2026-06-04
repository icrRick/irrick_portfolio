import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navigation } from "@/components/navigation";
import { GithubIcon, PhoneIcon, FacebookIcon } from "@/components/icons";
import SplashCursor from "@/components/SplashCursor";
import { CircleCursor } from "@/components/circle-cursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["100", "200", "300", "400"],
});

export const metadata: Metadata = {
  title: "Pham Nguyen Trong Tri | Portfolio",
  description: "Ultra-minimalist portfolio of Pham Nguyen Trong Tri. Fresher Developer specializing in Java, React, and Next.js.",
  keywords: ["Pham Nguyen Trong Tri", "Portfolio", "Fresher Developer", "Java", "Spring Boot", "React", "Next.js", "Web Development", "Software Engineer"],
  authors: [{ name: "Pham Nguyen Trong Tri" }],
  creator: "Pham Nguyen Trong Tri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com", // TODO: Replace with your actual domain
    title: "Pham Nguyen Trong Tri | Portfolio",
    description: "Ultra-minimalist portfolio of Pham Nguyen Trong Tri, a Fresher Developer.",
    siteName: "Pham Nguyen Trong Tri Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pham Nguyen Trong Tri - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pham Nguyen Trong Tri | Portfolio",
    description: "Ultra-minimalist portfolio of Pham Nguyen Trong Tri, a Fresher Developer.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
          <CircleCursor />
          {/* Background Animation */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <SplashCursor
              DENSITY_DISSIPATION={2.5}
              VELOCITY_DISSIPATION={0.2}
              PRESSURE={0.15}
              CURL={6}
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

          {/* Top Right: Theme Toggle */}
          <div className="fixed top-6 right-3 md:top-12 md:left-auto md:right-12 z-50 bg-background/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-1 md:p-0 rounded-full md:rounded-none border border-border/50 md:border-none shadow-lg md:shadow-none hidden md:flex items-center justify-center">
            <ThemeToggle />
          </div>

          {/* Left Side: Navigation Menu */}
          <Navigation />

          {/* Right Side: Social Tab */}
          <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-foreground text-background py-6 px-3 flex flex-col items-center gap-6 shadow-2xl">
            <a href="https://github.com/icrRick" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="tel:+84899010230" className="hover:opacity-70 transition-opacity">
              <PhoneIcon className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/irrickk" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
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
        </ThemeProvider>
      </body>
    </html>
  );
}
