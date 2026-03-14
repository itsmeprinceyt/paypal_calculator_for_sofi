"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useCallback } from "react";
import { ChevronDown, ArrowUp, ExternalLink, AlertCircle } from "lucide-react";
import PageWrapper from "./(components)/PageWrapper";

interface NavButtonProps {
  onClick: () => void;
  direction: "down" | "up";
}

interface CalculatorCardProps {
  href: string;
  gradient: string;
  textColor: string;
  shadowColor: string;
  icon: string;
  title: string;
  iconSize?: number;
  isGif?: boolean;
}

interface DiscordLinkProps {
  href: string;
  name: string;
}

const NavButton = ({ onClick, direction }: NavButtonProps) => (
  <button
    onClick={onClick}
    className="absolute left-1/2 bottom-8 transform -translate-x-1/2 group"
    aria-label={`Scroll ${direction}`}
  >
    <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
      {direction === "down" ? (
        <ChevronDown className="w-6 h-6 text-white animate-pulse hover:animate-none" />
      ) : (
        <ArrowUp className="w-6 h-6 text-white" />
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
  <Link href={href} className="block group">
    <div
      className={`relative overflow-hidden ${gradient} rounded-xl px-2 py-2 ${textColor} shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1`}
      style={{ boxShadow: `0 20px 30px -10px ${shadowColor}` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 flex-shrink-0 rounded-lg">
          <Image
            src={icon}
            fill
            sizes="40px"
            className={`object-contain rounded-lg`}
            alt={title}
            unoptimized={isGif}
          />
        </div>
        <p className="font-medium text-sm sm:text-base">{title}</p>
      </div>
    </div>
  </Link>
);

const DiscordLink = ({ href, name }: DiscordLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block group"
  >
    <div className="bg-purple-200/90 hover:bg-purple-200 rounded-xl px-2 py-1 text-purple-950 shadow-lg hover:shadow-purple-600/30 transition-all duration-300 group-hover:scale-105 flex items-center gap-3">
      <div className="relative w-10 h-10 flex-shrink-0">
        <Image
          src="/Discord.gif"
          fill
          sizes="32px"
          className="object-contain"
          alt="Discord"
          unoptimized
        />
      </div>
      <span className="flex-1 text-sm font-medium">{name}</span>
      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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

  const discordLinks: DiscordLinkProps[] = [
    { href: "https://discord.gg/HgXNs4p5cx", name: "ItsMe Prince" },
    { href: "https://discord.gg/sofi", name: "Sofi Cafe" },
    { href: "https://discord.gg/soficorner", name: "The Corner" },
    { href: "https://discord.gg/karuta", name: "Karuta Hub" },
    { href: "https://discord.gg/cove", name: "Egg Cove" },
    { href: "https://discord.gg/mazoku", name: "Mazoku Legacy" },
    { href: "https://discord.gg/nai", name: "Nairi's Basement" },
    { href: "https://discord.gg/jsWxmgBFDB", name: "Juice Box" },
    { href: "https://discord.gg/RrewX8Sw5P", name: "The Hangout" },
  ];

  return (
    <PageWrapper>
      <main className="select-none">
        {/* Hero Section */}
        <section
          ref={sections.home}
          className="relative min-h-screen flex flex-col justify-center items-center px-4 py-12"
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight">
                Welcome!
              </h1>
              <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
                Effortless Fee Calculations for PayPal, Sofi Wists, Karuta
                Tickets, Mazoku Bloodstones and Nai Jades!!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              {calculatorCards.map((card) => (
                <CalculatorCard key={card.href} {...card} />
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 text-white/60 text-xs sm:text-sm font-light">
              <AlertCircle className="w-4 h-4" />
              <span>
                Default values do not determine the market rates! Please do your
                own study!
              </span>
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
          className="relative min-h-screen flex flex-col justify-center items-center px-4 py-12"
        >
          <div className="w-full max-w-7xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-white/80 text-xl sm:text-2xl font-light border-b border-white/30 pb-4 inline-block">
                Watch the project explanation
              </h2>

              {/* Bigger video container - using full width with max-w-6xl */}
              <div className="relative aspect-video w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <iframe
                  src="https://www.youtube.com/embed/TmGlgE4iUN4?si=0uv-ugOXFzfnhE7_"
                  title="Project Explanation Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Optional: Add a subtle caption */}
              <p className="text-white/50 text-sm mt-2">
                Full explanation of all calculators and how to use them
              </p>
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
          className="relative min-h-screen flex flex-col justify-center items-center px-4 py-12"
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-white border-b border-white/30 pb-4 inline-block">
                Disclaimer
              </h2>

              <div className="bg-purple-500/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/20">
                <p className="text-purple-300 text-sm sm:text-base leading-relaxed font-light">
                  This website is intended solely for educational purposes. I do
                  not support or encourage cross-trading in Sofi, Karuta, or
                  Mazoku, as it is against the rules. Any actions you take
                  within these games, including cross-trading or related
                  activities, are your responsibility. I am not accountable for
                  any outcomes or issues that may arise from engaging in this
                  playstyle.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-white/80 text-lg sm:text-xl font-light flex items-center justify-center gap-2">
                  Discord Servers you can join!
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto pb-14">
                  {discordLinks.map((link) => (
                    <DiscordLink key={link.href} {...link} />
                  ))}
                </div>
              </div>
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
          className="relative min-h-screen flex flex-col justify-center items-center px-4 py-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              Thank You For Visiting!
            </h2>

            <button
              onClick={() => scrollToSection(sections.home)}
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/20 transition-all duration-300 hover:scale-105"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              <span>Back to Top</span>
            </button>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
