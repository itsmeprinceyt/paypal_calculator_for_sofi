import type { Metadata } from "next";
import "./globals.css";

import AboutMe from "@/app/(components)/AboutMe";

export const metadata: Metadata = {
  title: "PayPal, Sofi, Karuta, Nai, Mazoku Fee Calculator - ItsMe Prince",
  description:
    "Comprehensive calculators for PayPal fees, Sofi wists, Karuta tickets, Nai Jades and Mazoku bloodstones. Simplify financial and gaming calculations with ease.",
  keywords:
    "PayPal Fee Calculator, Sofi Wists Fee Calculator, Karuta Tickets Calculator, Mazoku Bloodstones Calculator, Nai Jades Calculator, Discord Game GNS Paypal Calculator, financial tools, gaming tools, calculation tools",
  robots: "index, follow",
  icons: {
    icon: "/logo2.png",
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
        <AboutMe />
      </body>
    </html>
  );
}
