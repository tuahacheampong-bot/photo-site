import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shemen Media | Photography & Videography",
  description:
    "At Shemen Photography, we specialize in capturing moments that matter and transforming your vision into breathtaking realities. Portraits, events, weddings, fashion, and more.",
  keywords: [
    "Shemen Media",
    "photography",
    "videography",
    "wedding photographer",
    "graduation photos",
    "event photography",
    "portrait photographer",
    "fashion photography",
    "editorial photography",
    "beauty photography",
    "food photography",
    "product photography",
    "documentary photography",
  ],
  openGraph: {
    title: "Shemen Media | Photography & Videography",
    description:
      "We create timeless memories that reflect creativity, precision, and excellence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
