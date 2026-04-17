import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pihudrive.lol"),
  title: {
    default: "Engineered Moments by Kishore | Professional Photography",
    template: "%s | Engineered Moments by Kishore",
  },
  description:
    "Professional photography by Kishore – capturing birthdays, weddings, pregnancy, newborn, family, and portrait sessions. Where precision meets emotion.",
  keywords: [
    "photography", "Kishore Gunda", "wedding photography",
    "birthday photography", "newborn photography", "portrait photography",
    "Regensburg photographer", "family photography", "professional photographer Germany",
  ],
  authors: [{ name: "Kishore Gunda" }],
  creator: "Kishore Gunda",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pihudrive.lol",
    siteName: "Engineered Moments by Kishore",
    title: "Engineered Moments by Kishore | Professional Photography",
    description: "Professional photography capturing life's most precious moments.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Engineered Moments by Kishore" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0a] text-[#f5f0eb] min-h-screen">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
