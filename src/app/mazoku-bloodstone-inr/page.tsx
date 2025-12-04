"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import HomeButton from "../(components)/HomeButton";

export default function MazokuBloodstoneINR() {
  const [bloodstoneAmount, setBloodstoneAmount] = useState<number>(180);
  const [ratio, setRatio] = useState<number>(160);
  const [inrAmount, setInrAmount] = useState<number>(0);
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const handleBloodstoneAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.valueAsNumber;
    if (value >= 0 || event.target.value === "") {
      setBloodstoneAmount(Math.floor(value) || 0);
    }
  };

  const handleRatioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    if (value >= 0 || event.target.value === "") {
      setRatio(value || 0);
    }
  };

  const handleCalculate = () => {
    const calculatedAmount = bloodstoneAmount / ratio;
    const formattedAmount = parseFloat(calculatedAmount.toFixed(2));
    setInrAmount(formattedAmount);
    setIsInputDisabled(true);
    setIsFlipped(true);
  };

  const handleRestart = () => {
    setBloodstoneAmount(180);
    setRatio(160);
    setInrAmount(0);
    setIsInputDisabled(false);
    setIsFlipped(false);
  };

  const handleCopy = () => {
    const textToCopy = `\`\`\`css
Bloodstone Amount: ${bloodstoneAmount} BS
Ratio: ${ratio} BS per ₹1
Calculated ₹ Amount: ₹${inrAmount}
\`\`\`
-# Calculated Using: [PayPal | Sofi | Karuta | Mazoku Fee Calculator by ItsMe Prince]( https://paypal-and-sofi-wist-fee-calculator.vercel.app/)`;
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      setPopupMessage("Calculations copied and ready to send!");
    } catch (err) {
      console.error("Unable to copy", err);
    }
    document.body.removeChild(textarea);
    setTimeout(() => setPopupMessage(null), 2000);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-white">
      <HomeButton />
      {popupMessage && (
        <div className="absolute top-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-all ease-in-out duration-1000">
          {popupMessage}
        </div>
      )}
      <div
        className={`relative w-[350px] sm:w-[600px] h-96 transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className={`absolute w-full h-full bg-gradient-to-r from-green-900 to-green-500 rounded-2xl shadow-green-600/50 shadow-2xl p-5 backface-hidden flex flex-col justify-center items-center gap-5 ${
            isFlipped ? "hidden" : ""
          }`}
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <h1 className="text-xl font-semibold text-white z-10">
            Enter Bloodstone Amount ...
          </h1>
          <div className="relative flex justify-center items-center shadow-md shadow-green-600/60 rounded-md">
            <div className="bg-white h-full flex items-center p-2 rounded-l-md">
              <Image
                src={"/bloodstone.png"}
                height={40}
                width={40}
                alt="Bloodstone Icon"
              />
            </div>
            <input
              id="bloodstoneAmount"
              type="number"
              min="1"
              step="1"
              pattern="\d*"
              inputMode="numeric"
              value={bloodstoneAmount}
              onChange={handleBloodstoneAmountChange}
              placeholder="Enter Bloodstone Amount"
              className={`z-10 antialiased text-center text-4xl p-2 rounded-r-md text-black w-[250px] focus:outline-none placeholder:text-2xl ${
                isInputDisabled ? "bg-white cursor-not-allowed" : ""
              }`}
              disabled={isInputDisabled}
            />
          </div>
          <h1 className="text-xl font-semibold text-white z-10">
            Enter Ratio ...
          </h1>
          <div className="relative flex justify-center items-center shadow-md shadow-green-600/60 rounded-md">
            <input
              id="ratio"
              type="number"
              min="0"
              step="0.1"
              value={ratio}
              onChange={handleRatioChange}
              placeholder="Enter Ratio"
              className={`z-10 antialiased text-center text-4xl  p-2 rounded-l-md text-black w-[150px] focus:outline-none ${
                isInputDisabled ? "bg-white cursor-not-allowed" : ""
              }`}
              disabled={isInputDisabled}
            />
            <div className="absolute z-10 top-1 bg-white text-black text-4xl">
              :
            </div>
            <div className="bg-white h-full w-[150px] flex items-center justify-center p-2 rounded-r-md text-black text-4xl  ">
              ₹1
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <button
              onClick={handleCalculate}
              className="z-10 bg-white rounded-md px-5 h-[45px] text-green-950 shadow-green-600/80 hover:shadow-green-600 shadow-xl hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center"
            >
              Calculate
            </button>
            <Link href={"/mazoku-bloodstone"}>
              <button className="z-10 bg-white rounded-md px-5 h-[45px] text-green-950 shadow-green-600/80 hover:shadow-green-600 shadow-xl hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center">
                Switch to USD
              </button>
            </Link>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-gradient-to-r from-green-500 to-green-900 rounded-2xl shadow-green-600/50 shadow-2xl p-5 backface-hidden flex flex-col justify-center items-center gap-10"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            zIndex: 20,
          }}
        >
          <div className="flex flex-col gap-3 w-10/12 text-white">
            <div className="text-center text-xl">
              <p className="font-light">
                You are selling
                <span className="font-bold text-lg scale-110">
                  &nbsp;
                  {bloodstoneAmount}{" "}
                  {bloodstoneAmount === 1 ? "Bloodstone" : "Bloodstones"}
                </span>
                &nbsp; at the ratio of
                <span className="font-bold text-lg scale-110">
                  {" "}
                  {ratio} Bloodstone per ₹1{" "}
                </span>{" "}
                for
                <span className="font-bold text-lg scale-110">
                  {" "}
                  ₹{inrAmount}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleRestart}
              className="z-10 bg-white rounded-md px-5 h-[45px] text-green-950 shadow-green-600/80 hover:shadow-green-600 shadow-xl hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center"
            >
              Restart
            </button>
            <button
              onClick={handleCopy}
              className="z-10 bg-white rounded-md px-5 h-[45px] text-green-950 shadow-green-600/80 hover:shadow-green-600 shadow-xl hover:scale-105 transition-all ease-in-out  flex justify-center items-center gap-2 active:scale-125"
            >
              Copy
              <Image src={"/copy.png"} height={25} width={25} alt="Copy" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
