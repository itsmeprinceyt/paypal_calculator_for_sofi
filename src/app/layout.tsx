import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

import MadeBy from "./(components)/AboutMe";
import CustomLoader from "./(components)/CustomLoader";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://paypal-and-sofi-wist-fee-calculator.vercel.app"
  ),
  title: {
    default:
      "Fee Calculator - PayPal, Sofi, Karuta, Nai, Mazoku | ItsMe Prince",
    template: "%s | ItsMe Prince Fee Calculator",
  },
  description:
    "Quick and easy fee calculators for PayPal, Sofi wists, Karuta tickets, Nai Jades and Mazoku bloodstones. Perfect for Discord gamers.",
  keywords: [
    "PayPal Fee Calculator",
    "Sofi Wists",
    "Karuta Tickets",
    "Mazoku Bloodstones",
    "Nai Jades",
    "Discord Games",
  ],
  authors: [{ name: "ItsMe Prince", url: "https://www.itsmeprince.com" }],
  creator: "ItsMe Prince",
  publisher: "ItsMe Prince",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo2.png",
    apple: "/logo2.png",
  },
  alternates: {
    canonical: "/",
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
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  );
}
