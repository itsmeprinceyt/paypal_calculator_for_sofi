"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useCallback } from "react";
import { ChevronDown, ArrowUp, AlertCircle } from "lucide-react";
import PageWrapper from "./(components)/PageWrapper";
import { CalculatorCardProps, NavButtonProps } from "../types/HomePage.type";
import PromotedServers from "./(components)/PromotedServer";

const NavButton = ({ onClick, direction }: NavButtonProps) => (
  <button
    onClick={onClick}
    className="absolute left-1/2 bottom-4 sm:bottom-8 transform -translate-x-1/2 group z-10"
    aria-label={`Scroll ${direction}`}
  >
    <div className="p-1.5 sm:p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
      {direction === "down" ? (
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse hover:animate-none" />
      ) : (
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      )}
    </div>
  </button>
);

const CalculatorCard = ({
  href,
  gradient,
  textColor,
  shadowColor,
  icon,
  title,
  isGif = false,
}: CalculatorCardProps) => (
  <Link
    href={href}
    className="block group w-full xs:w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)]"
  >
    <div
      className={`relative overflow-hidden ${gradient} rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 ${textColor} shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1`}
      style={{ boxShadow: `0 20px 30px -10px ${shadowColor}` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-lg">
          <Image
            src={icon}
            fill
            sizes="(max-width: 640px) 32px, 40px"
            className="object-contain rounded-lg"
            alt={title}
            unoptimized={isGif}
          />
        </div>
        <p className="font-medium text-xs sm:text-sm md:text-base truncate">
          {title}
        </p>
      </div>
    </div>
  </Link>
);

export default function Home() {
  const sections = {
    home: useRef<HTMLDivElement>(null),
    video: useRef<HTMLDivElement>(null),
    disclaimer: useRef<HTMLDivElement>(null),
    thankYou: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = useCallback(
    (ref: React.RefObject<HTMLDivElement | null>) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  const calculatorCards: CalculatorCardProps[] = [
    {
      href: "/paypal-fee",
      gradient: "bg-gradient-to-r from-blue-300 to-blue-400",
      textColor: "text-blue-950",
      shadowColor: "rgba(37, 99, 235, 0.3)",
      icon: "/Paypal.gif",
      title: "PayPal Fee",
      isGif: true,
    },
    {
      href: "/sofi-wist",
      gradient: "bg-gradient-to-r from-pink-300 to-pink-400",
      textColor: "text-pink-950",
      shadowColor: "rgba(219, 39, 119, 0.3)",
      icon: "/sofi-icon.gif",
      title: "Sofi Wists",
      isGif: true,
    },
    {
      href: "/karuta-ticket",
      gradient: "bg-gradient-to-r from-orange-300 to-orange-400",
      textColor: "text-orange-950",
      shadowColor: "rgba(234, 88, 12, 0.3)",
      icon: "/karuta-icon.png",
      title: "Karuta Tickets",
    },
    {
      href: "/mazoku-bloodstone",
      gradient: "bg-gradient-to-r from-yellow-300 to-yellow-400",
      textColor: "text-yellow-950",
      shadowColor: "rgba(202, 138, 4, 0.3)",
      icon: "/mazoku-icon.png",
      title: "Mazoku Bloodstones",
    },
    {
      href: "/nai-jade",
      gradient: "bg-gradient-to-r from-green-300 to-green-400",
      textColor: "text-green-950",
      shadowColor: "rgba(22, 163, 74, 0.3)",
      icon: "/nai-icon.png",
      title: "Nai Jades",
    },
  ];

  return (
    <PageWrapper>
      <main className="select-none">
        {/* Hero Section */}
        <section
          ref={sections.home}
          className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-12"
        >
          <div className="w-full max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight">
                Welcome!
              </h1>
              <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed px-2">
                Effortless Fee Calculations for PayPal, Sofi Wists, Karuta
                Tickets, Mazoku Bloodstones and Nai Jades!!
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-xl mx-auto">
              {calculatorCards.map((card) => (
                <CalculatorCard key={card.href} {...card} />
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 text-white/60 text-[11px] sm:text-xs md:text-sm font-light px-4 text-center">
              <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>
                Default values do not determine the market rates! Please do your
                own study!
              </span>
            </div>
          </div>

          <NavButton
            onClick={() => scrollToSection(sections.disclaimer)}
            direction="down"
          />
        </section>

        {/* Disclaimer Section */}
        <section
          ref={sections.disclaimer}
          className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-12"
        >
          <div className="w-full max-w-xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white border-b border-white/30 pb-3 sm:pb-4 inline-block">
                Disclaimer
              </h2>

              <div className="bg-purple-500/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-purple-500/20">
                <p className="text-purple-300 text-xs sm:text-sm md:text-base leading-relaxed font-light text-left sm:text-center">
                  This website is provided solely for educational and
                  informational purposes. I do not support, promote, or
                  encourage cross-trading in Sofi, Karuta, Mazoku, or any other
                  Discord bot, game, or platform where such activities are
                  prohibited by its official or unofficial rules, guidelines, or
                  community standards. Any actions you choose to take, including
                  cross-trading or related activities, are entirely your own
                  responsibility. I am not affiliated with these bots or their
                  developers and accept no responsibility or liability for any
                  consequences, including warnings, restrictions, suspensions,
                  or bans, resulting from the use of this website or your
                  actions.
                </p>
              </div>

              <PromotedServers />
            </div>
          </div>

          <NavButton
            onClick={() => scrollToSection(sections.video)}
            direction="down"
          />
        </section>

        {/* Video Section */}
        <section
          ref={sections.video}
          className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-12"
        >
          <div className="w-full max-w-7xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-white/80 text-lg xs:text-xl sm:text-2xl font-light border-b border-white/30 pb-3 sm:pb-4 inline-block px-2">
                Watch the project explanation
              </h2>

              <div className="relative aspect-video w-full max-w-6xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <iframe
                  src="https://www.youtube.com/embed/TmGlgE4iUN4?si=0uv-ugOXFzfnhE7_"
                  title="Project Explanation Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              <p className="text-white/50 text-xs sm:text-sm mt-2 px-4">
                Full explanation of all calculators and how to use them
              </p>
            </div>
          </div>

          <NavButton
            onClick={() => scrollToSection(sections.thankYou)}
            direction="down"
          />
        </section>

        {/* Thank You Section */}
        <section
          ref={sections.thankYou}
          className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-12"
        >
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 px-2">
              Thank You For Visiting!
            </h2>

            <button
              onClick={() => scrollToSection(sections.home)}
              className="group relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform" />
              <span>Back to Top</span>
            </button>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
