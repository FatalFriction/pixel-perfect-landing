import type { Metadata } from "next";
import { Urbanist, Oswald } from "next/font/google";
import "./globals.css";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pixel Perfect",
  description: "Elevate Your Game with Pro Coaching Tailored for Ranked Play",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${oswald.variable} antialiased bg-black text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
