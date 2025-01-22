import type { Metadata } from "next";
import "./globals.css";

import AboutMe from "@/app/(components)/AboutMe";

export const metadata: Metadata = {
  title: "PayPal Fee & Sofi Wists Calculator - ItsMe Prince",
  description: "Effortless PayPal and Sofi Wists Calculator for effortless fee calculations. Simplify your financial and gaming calculations effortlessly.",
  keywords: "PayPal Fee Calculator, Sofi Wists Calculator, financial tools, gaming calculators, educational tools",
  robots: "index, follow",
  icons: {
    icon: "/wist_png.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative flex justify-center items-center bg-gradient-to-b from-black to-black/90">
        {children}
        <AboutMe/>
      </body>
    </html>
  );
}
