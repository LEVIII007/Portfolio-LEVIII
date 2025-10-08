import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Contact from "@/components/Footer";
import { BackgroundDecor } from "@/components/background-decor";

const recoleta = localFont({
  src: "../public/Recoleta-Bold.ttf",
  variable: "--font-recoleta",
});

export const metadata: Metadata = {
  title: "Shashank Tyagi",
  description: "Shashank's personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${recoleta.variable}`}>
        <Navbar />
        <BackgroundDecor />
        {children}
        <Toaster />
        <Contact />
      </body>
    </html>
  );
}
