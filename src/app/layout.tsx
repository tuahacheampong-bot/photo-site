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
  title: "Your Photography | Capturing Life's Moments",
  description:
    "Professional photography services for weddings, graduations, events, and portraits. Based in the UK, available worldwide.",
  keywords: [
    "photography",
    "wedding photographer",
    "graduation photos",
    "event photography",
    "portrait photographer",
    "UK photographer",
  ],
  openGraph: {
    title: "Your Photography | Capturing Life's Moments",
    description:
      "Professional photography services for weddings, graduations, events, and portraits.",
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
