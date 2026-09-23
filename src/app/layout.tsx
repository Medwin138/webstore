import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Edwin Laguna | WebStore",
    template: "%s | WebStore",
  },
  description:
    "Aplicaciones útiles, herramientas y soluciones digitales desarrolladas por Edwin Laguna. WebStore profesional con aplicaciones para Android, Windows y Linux.",
  keywords: [
    "apps",
    "aplicaciones",
    "software",
    "android",
    "windows",
    "linux",
    "desarrollo",
    "QA",
    "Edwin Laguna",
  ],
  openGraph: {
    title: "Edwin Laguna | WebStore",
    description:
      "Aplicaciones útiles, herramientas y soluciones digitales desarrolladas por Edwin Laguna.",
    type: "website",
    locale: "es_ES",
    siteName: "WebStore",
  },
};

const themeScript = `
try {
  var stored = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored === 'dark' || (!stored && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
} catch (e) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}