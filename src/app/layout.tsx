import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Ye line naye widget ko import karne ke liye add ki hai 👇
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
    /* html par overflow-x-hidden lagaya hai taaki base level par hi horizontal scroll block ho jaye */
    <html lang="en" suppressHydrationWarning className="max-w-[100vw] overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[100vw] overflow-x-hidden w-full m-0 p-0`}
      >
        {/* THE MASTER WRAPPER: Yeh div poori website ke har page ko frame ke andar lock karke rakhega */}
        <div className="flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden">
          {children}
        </div>

        {/* GLOBAL SUPPORT WIDGET: Yeh poori website par bottom-right mein floating dikhega */}
        <SupportWidget />
      </body>
    </html>
  );
}