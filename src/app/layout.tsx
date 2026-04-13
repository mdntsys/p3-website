import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "P3 — Corporate Apparel & Garment Decorating",
    template: "%s | P3",
  },
  description:
    "For over 36 years, P3 has been a leader in custom apparel manufacturing and garment decorating for the branded merchandise industry. Based in Valencia, CA.",
  keywords: [
    "custom apparel",
    "garment decorating",
    "screen printing",
    "embroidery",
    "corporate apparel",
    "Valencia CA",
    "P3 Inc",
  ],
  openGraph: {
    title: "P3 — Corporate Apparel & Garment Decorating",
    description:
      "36 years of precision. Custom apparel and decorating for the branded merchandise industry.",
    siteName: "P3 Inc.",
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
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fafafa] text-[#0f0f0f]">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
