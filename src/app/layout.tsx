import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmartBackground from "@/components/SmartBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedshoieb96.github.io"),
  title: "Ahmed Shoieb | Full-Stack Developer Portfolio (Next.js, Vue, PostgreSQL, MongoDB)",
  description:
    "Explore the personal portfolio of Ahmed Shoieb, a Full-Stack Developer specializing in Next.js 15, React, Vue.js, TypeScript, PostgreSQL, MongoDB, and Supabase.",
  keywords: [
    "Ahmed Shoieb",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Vue.js Developer",
    "PostgreSQL",
    "MongoDB",
    "Supabase",
    "Portfolio",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer Cairo",
  ],
  authors: [{ name: "Ahmed Shoieb" }],
  icons: {
    icon: "/images/as_logo.png",
  },
  openGraph: {
    title: "Ahmed Shoieb | Full-Stack Developer Portfolio",
    description:
      "Crafting pixel-perfect, high-performance web applications and scalable database-driven backend solutions.",
    url: "https://ahmedshoieb96.github.io",
    siteName: "Ahmed Shoieb Portfolio",
    images: [
      {
        url: "/images/profile_photo.jpg",
        width: 800,
        height: 600,
        alt: "Ahmed Shoieb",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#030712] text-[#f3f4f6] min-h-screen antialiased selection:bg-indigo-600 selection:text-white`}
      >
        <SmartBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
