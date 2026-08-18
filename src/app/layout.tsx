import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SupportWidget from "@/components/SupportWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShakyaTech Programming Hub",
  description: "Learn. Practice. Grow.",
  icons: "/logo.jpeg", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="max-w-[100vw] overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[100vw] overflow-x-hidden w-full m-0 p-0`}
      >
        <div className="flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden">
          {children}
        </div>
        
        {/* GLOBAL SUPPORT WIDGET */}
        <SupportWidget />
      </body>
    </html>
  );
}