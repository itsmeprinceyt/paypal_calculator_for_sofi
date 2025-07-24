"use client";
import Link from "next/link"
import Image from "next/image"

import { useRef } from 'react';

export default function Home() {
  const Home = useRef<HTMLDivElement | null>(null);
  const SecondPage = useRef<HTMLDivElement | null>(null);
  const ThirdPage = useRef<HTMLDivElement | null>(null);
  const FourthPage = useRef<HTMLDivElement | null>(null);

  const ScrollToHome = (): void => {
    if (Home.current) {
      Home.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ScrollToSecondPage = (): void => {
    if (SecondPage.current) {
      SecondPage.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ScrollToThirdPage = (): void => {
    if (ThirdPage.current) {
      ThirdPage.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ScrollToFourthPage = (): void => {
    if (FourthPage.current) {
      FourthPage.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="select-none">
      {/* First Page */}
      <div ref={Home} className="relative h-screen flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="text-center border-b pb-3 border-white/30">
            <div className="sm:text-8xl text-6xl text-white font-semibold">Welcome!</div>
            <div className="text-white font-extralight w-[300px] sm:w-[600px]">Effortless Fee Calculations for PayPal, Sofi Wists, Karuta Tickets and Mazoku Bloodstones!!</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-5">
            <Link
              href={"/paypal-fee"}
            >
              <div className="bg-gradient-to-r from-blue-300 to-blue-400 rounded-md px-1 h-[50px] text-blue-950 shadow-blue-600/30 hover:shadow-blue-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-start items-center gap-2">
                <Image
                  src={"/Paypal.gif"}
                  height={50}
                  width={50}
                  alt="PayPal Gif"
                />
                <div className="ml-1">
                  PayPal Fee
                </div>
              </div>
            </Link>
            <Link
              href={"/sofi-wist"}
            >
              <div className="bg-gradient-to-r from-pink-300 to-pink-400 rounded-md px-3 h-[50px] text-pink-950 shadow-pink-600/30 hover:shadow-pink-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-start items-center gap-2">
                <Image
                  src={"/sofi-icon.gif"}
                  height={40}
                  width={40}
                  alt="Sofi Wist Gif"
                  className="rounded-lg"
                />
                <div className="ml-2">
                  Sofi Wists
                </div>
              </div>
            </Link>
            <Link
              href={"/karuta-ticket"}
            >
              <div className="bg-gradient-to-r from-orange-300 to-orange-400 rounded-md px-3 h-[50px] text-orange-950 shadow-orange-600/30 hover:shadow-orange-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-start items-center gap-2">
                <Image
                  src={"/karuta-icon.png"}
                  height={35}
                  width={35}
                  alt="Karuta Logo"
                  className="rounded-lg"
                />
                <div className="ml-3">Karuta Tickets</div>
                
              </div>
            </Link>
            <Link
              href={"/mazoku-bloodstone"}
            >
              <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-md px-3 h-[50px] text-yellow-950 shadow-yellow-600/30 hover:shadow-yellow-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-start items-center gap-2">
                <Image
                  src={"/mazoku-icon.png"}
                  height={35}
                  width={35}
                  alt="Mazoku Logo"
                  className="rounded-lg"
                />
                <div className="ml-3">Mazoku Bloodstones</div>
                
              </div>
            </Link>
          </div>
        </div>
        <div className="text-white text-xs animate-pulse font-extralight text-center w-[250px] sm:w-[600px]">Default values do not determine the market rates! Please do your own study!</div>
        <button onClick={ScrollToSecondPage}>
          <Image
            className="absolute left-1/2 bottom-[30px] transform -translate-x-1/2 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out"
            src="/down-arrow_white.png"
            height={50}
            width={50}
            alt="arrow"
          />
        </button>
      </div>

      {/* Second Page */}
      <div ref={SecondPage} className="relative h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-center flex flex-col gap-2">
            <div className="p-3 text-xl text-white font-extralight w-[400px] sm:w-[600px] border-b border-white/30">You can watch the video in which I&apos;ve explained about this project!</div>
            <div className="responsive-video">
              <iframe
                src="https://www.youtube.com/embed/TmGlgE4iUN4?si=0uv-ugOXFzfnhE7_"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <button onClick={ScrollToThirdPage}>
          <Image
            className="absolute left-1/2 bottom-[30px] transform -translate-x-1/2 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out"
            src="/down-arrow_white.png"
            height={50}
            width={50}
            alt="arrow"
          />
        </button>

      </div>

      {/* Third Page */}
      <div ref={ThirdPage} className="relative h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-center flex flex-col gap-2">
            <div className="pb-4 text-white text-4xl border-b border-white/30">Disclaimer</div>
            <div className="p-3 pb-4 text-xl text-purple-500 font-extralight w-[400px] sm:w-[600px] border-b border-white/30">This website is intended solely for educational purposes. I do not support or encourage cross-trading in Sofi, Karuta, or Mazoku, as it is against the rules. Any actions you take within Sofi, Karuta, or Mazoku, including cross-trading or related activities, are your responsibility. I am not accountable for any outcomes or issues that may arise from engaging in this playstyle. Please note that all transactions and outcomes are your responsibility.</div>
            <div className="text-white font-extralight">Discord Servers you can join!!</div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-10">
            <Link
              href={"https://discord.gg/HgXNs4p5cx"}
              target="_blank"
            >
              <div className="bg-purple-200 rounded-md px-3 h-[50px] text-purple-950 shadow-purple-600/30 hover:shadow-purple-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-start items-center">
                <Image
                  src={"/Discord.gif"}
                  height={50}
                  width={50}
                  alt="Discord Gif"
                />
                ItsMe Prince
              </div>
            </Link>
            <Link
              href={"https://discord.gg/sofi"}
              target="_blank"
            >
              <div className="bg-purple-200 rounded-md px-3 h-[50px] text-purple-950 shadow-purple-600/30 hover:shadow-purple-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-start items-center">
                <Image
                  src={"/Discord.gif"}
                  height={50}
                  width={50}
                  alt="Discord Gif"
                />
                Sofi Cafe
              </div>
            </Link>
            <Link
              href={"https://discord.gg/soficorner"}
              target="_blank"
            >
              <div className="bg-purple-200 rounded-md px-3 h-[50px] text-purple-950 shadow-purple-600/30 hover:shadow-purple-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-start items-center">
                <Image
                  src={"/Discord.gif"}
                  height={50}
                  width={50}
                  alt="Discord Gif"
                />
                The Corner
              </div>
            </Link>
            <Link
              href={"https://discord.gg/karuta"}
              target="_blank"
            >
              <div className="bg-purple-200 rounded-md px-3 h-[50px] text-purple-950 shadow-purple-600/30 hover:shadow-purple-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-start items-center">
                <Image
                  src={"/Discord.gif"}
                  height={50}
                  width={50}
                  alt="Discord Gif"
                />
                Karuta Hub

              </div>
            </Link>
            <Link
              href={"https://discord.gg/cove"}
              target="_blank"
            >
              <div className="bg-purple-200 rounded-md px-3 h-[50px] text-purple-950 shadow-purple-600/30 hover:shadow-purple-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-start items-center">
                <Image
                  src={"/Discord.gif"}
                  height={50}
                  width={50}
                  alt="Discord Gif"
                />
                Egg Cove

              </div>
            </Link>
            <Link
              href={"https://discord.gg/mazoku"}
              target="_blank"
            >
              <div className="bg-purple-200 rounded-md px-3 h-[50px] text-purple-950 shadow-purple-600/30 hover:shadow-purple-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-start items-center">
                <Image
                  src={"/Discord.gif"}
                  height={50}
                  width={50}
                  alt="Discord Gif"
                />
                Mazoku Legacy

              </div>
            </Link>
          </div>
        </div>
        <button onClick={ScrollToFourthPage}>
          <Image
            className="absolute left-1/2 bottom-[30px] transform -translate-x-1/2 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out"
            src="/down-arrow_white.png"
            height={50}
            width={50}
            alt="arrow"
          />
        </button>
      </div>

      {/* Fourth Page */}
      <div ref={FourthPage} className="relative h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-center flex flex-col gap-2">
            <div className="p-3 text-4xl text-white w-[400px] sm:w-[600px] ">Thank You For Visiting!</div>
          </div>
        </div>

        <div className="absolute left-1/2 bottom-[30px] transform -translate-x-1/2 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out ">
          <button onClick={ScrollToHome}
            className="button-3d w-[50px] h-[50px] hover:h-[40px] rounded-full border-none font-semibold flex items-center justify-center cursor-pointer duration-300 overflow-hidden relative hover:w-[140px] hover:rounded-full hover:items-center hover:bg-white hover:text-black "
          >
            <Image
              className="arrow-tooltip duration-300"
              src="/down-arrow_white.png"
              height={50}
              width={50}
              alt="arrow"
            />
          </button>
        </div>
      </div>

    </div>
  )
}
