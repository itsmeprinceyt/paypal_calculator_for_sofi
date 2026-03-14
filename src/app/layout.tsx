import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

import MadeBy from "./(components)/AboutMe";
import CustomLoader from "./(components)/CustomLoader";

export const metadata: Metadata = {
  title: "Fee Calculator - PayPal, Sofi, Karuta, Nai, Mazoku",
  description:
    "Quick and easy fee calculators for PayPal, Sofi wists, Karuta tickets, Nai Jades and Mazoku bloodstones. Perfect for Discord gamers.",
  keywords:
    "PayPal Fee Calculator, Sofi Wists, Karuta Tickets, Mazoku Bloodstones, Nai Jades, Discord Games",
  authors: [{ name: "ItsMe Prince" }],
  icons: {
    icon: "/logo2.png",
    apple: "/logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Suspense fallback={<CustomLoader />}>
          {children}
          <MadeBy />
        </Suspense>
      </body>
    </html>
  );
}
