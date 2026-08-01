import type { Metadata } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const siteUrl = "https://dhavalkakkad.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dhaval Kakkad — Mechanical Engineer & CFD Researcher",
    template: "%s — Dhaval Kakkad",
  },
  description:
    "Dhaval Kakkad is a mechanical engineer and researcher specializing in computational fluid dynamics, EV battery thermal management, and simulation-driven product design.",
  keywords: [
    "Dhaval Kakkad",
    "Mechanical Engineer",
    "CFD Engineer",
    "CFD Researcher",
    "EV Battery Thermal Management",
    "Thermal Engineering",
    "CAD CAM",
    "Simulation Engineer",
    "Medical Device Engineering",
  ],
  authors: [{ name: "Dhaval Kakkad" }],
  creator: "Dhaval Kakkad",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Dhaval Kakkad — Mechanical Engineer & CFD Researcher",
    description:
      "Mechanical engineer and researcher specializing in computational fluid dynamics, EV battery thermal management, and simulation-driven product design.",
    siteName: "Dhaval Kakkad",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhaval Kakkad — Mechanical Engineer & CFD Researcher",
    description:
      "Mechanical engineer and researcher specializing in computational fluid dynamics, EV battery thermal management, and simulation-driven product design.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
