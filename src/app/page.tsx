"use client";
import Link from "next/link"
import Image from "next/image"

import { useRef } from 'react';

export default function Home() {
  const SecondPage = useRef<HTMLDivElement | null>(null);
  const ThirdPage = useRef<HTMLDivElement | null>(null);
  const FourthPage = useRef<HTMLDivElement | null>(null);

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
    <div>
      {/* First Page */}
      <div className="relative h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="text-center border-b pb-3 border-white/30">
            <div className="sm:text-8xl text-6xl text-white font-semibold">Welcome!</div>
            <div className="text-white font-extralight w-[300px] sm:w-[500px]">Effortless Fee Calculations for PayPal, Sofi Wists and Karuta Tickets!!</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
            <Link
              href={"/paypal-fee"}
            >
              <div className="bg-blue-200 rounded-md px-3 h-[50px] text-blue-950 shadow-blue-600/30 hover:shadow-blue-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-center items-center">
                <Image
                  src={"/Paypal.gif"}
                  height={50}
                  width={50}
                  alt="PayPal Gif"
                />
                PayPal Fee Calculator

              </div>
            </Link>
            <Link
              href={"/sofi-wist"}
            >
              <div className="bg-pink-200 rounded-md px-3 h-[50px] text-pink-950 shadow-pink-600/30 hover:shadow-pink-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-center items-center">
                <Image
                  src={"/wist_gif.gif"}
                  height={40}
                  width={40}
                  alt="Sofi Wist Gif"
                />
                Sofi Wists Calculator
              </div>
            </Link>
            <Link
              href={"/karuta-ticket"}
            >
              <div className="bg-orange-200 rounded-md px-3 h-[50px] text-orange-950 shadow-orange-600/30 hover:shadow-orange-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-center items-center gap-2">
                <Image
                  src={"/karuta-icon.png"}
                  height={35}
                  width={35}
                  alt="Karuta Logo"
                />
                Karuta Tickets Calculator
              </div>
            </Link>
          </div>
        </div>

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
            <div className="p-3 text-2xl text-white font-extralight w-[400px] sm:w-[600px] border-b border-white/30">This website is intended solely for educational purposes. I do not support or encourage cross-trading in Sofi, as it is against the rules. Any actions you take within Sofi, including cross-trading or related activities, are your responsibility. I am not accountable for any outcomes or issues that may arise from engaging in this playstyle.</div>
            <div className="text-white font-extralight">Discord Servers you can join!!</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
            <Link
              href={"https://discord.gg/HgXNs4p5cx"}
              target="_blank"
            >
              <div className="bg-purple-200 rounded-md px-3 h-[50px] text-purple-950 shadow-purple-600/30 hover:shadow-purple-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-start items-center">
                <Image
                  src={"/Discord.gif"}
                  height={50}
                  width={50}
                  alt="PayPal Gif"
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
                  alt="PayPal Gif"
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
                  alt="PayPal Gif"
                />
                Sofi Corner
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

      {/* FourthPage Page */}
      <div ref={FourthPage} className="relative h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-center flex flex-col gap-2">
            <div className="p-3 text-4xl text-white w-[400px] sm:w-[600px] ">Thank You For Visiting!</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}