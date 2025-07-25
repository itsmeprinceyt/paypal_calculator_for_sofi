"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { calculateFeeAndRecipientAmount } from "@/utils/calculateFee";
import HomeButton from "../(components)/HomeButton";

export default function SofiWist() {
    const [wistAmount, setWistAmount] = useState<number>(280);
    const [ratio, setRatio] = useState<number>(28);
    const [result, setResult] = useState<{ fee: number; recipientAmount: number; paymentToReceive: number } | null>(null);
    const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false);
    const [dollarAmount, setDollarAmount] = useState<number>(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [popupMessage, setPopupMessage] = useState<string | null>(null);

    const handleWistAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.valueAsNumber;
        if (value >= 0 || event.target.value === "") {
            setWistAmount(Math.floor(value) || 0);
        }
    };

    const handleRatioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.valueAsNumber;
        if (value >= 0 || event.target.value === "") {
            setRatio(value || 0);
        }
    };

    const handleCalculate = () => {
        const calculatedAmount = parseFloat((wistAmount / ratio).toFixed(2));
        setDollarAmount(calculatedAmount);
        const calculation = calculateFeeAndRecipientAmount(calculatedAmount);
        setResult(calculation);
        setIsInputDisabled(true);
        setIsFlipped(true);
    };

    const handleRestart = () => {
        setWistAmount(280);
        setRatio(28);
        setResult(null);
        setIsInputDisabled(false);
        setDollarAmount(0);
        setIsFlipped(false);
    };

    const handleCopy = () => {
        if (result) {
            const textToCopy = `\`\`\`css
Wist Amount: ${wistAmount} Wists
Ratio: ${ratio} : $1
Calculated $ Amount: USD$ ${dollarAmount}
Amount without Tax: USD$ ${result.recipientAmount}
Amount with Tax included: USD$ ${result.paymentToReceive}
\`\`\`
-# Calculated Using: [PayPal | Sofi | Karuta | Mazoku Fee Calculator by ItsMe Prince]( https://paypal-and-sofi-wist-fee-calculator.vercel.app/)`;
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                setPopupMessage("Calculations copied and ready to send!");
            } catch (err) {
                console.error('Unable to copy', err);
            }
            document.body.removeChild(textarea);
            setTimeout(() => setPopupMessage(null), 2000);
        }
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center text-white">
            <HomeButton />
            {popupMessage && (
                <div className="absolute top-5 bg-pink-500 text-white px-4 py-2 rounded-md shadow-lg transition-all ease-in-out duration-1000">
                    {popupMessage}
                </div>
            )}
            <div className={`relative w-[350px] sm:w-[600px] h-96 transition-transform duration-500 ${isFlipped ? "rotate-y-180" : ""}`} style={{ perspective: "1000px", transformStyle: "preserve-3d", }}>

                {/* Front Side */}
                <div
                    className={`absolute w-full h-full bg-gradient-to-r from-pink-900 to-pink-500 rounded-2xl shadow-pink-600/50 shadow-2xl p-5 backface-hidden flex flex-col justify-center items-center gap-5 ${isFlipped ? "hidden" : ""}`}
                    style={{
                        backfaceVisibility: "hidden",
                    }}
                >
                    <h1 className="text-xl font-semibold text-white z-10">Enter Wist Amount ...</h1>
                    <div className="relative flex justify-center items-center shadow-md shadow-pink-600/60 rounded-md">
                        <div className="bg-white h-full flex items-center p-2 rounded-l-md">
                            <Image
                                src={"/wist_gif.gif"}
                                height={40}
                                width={40}
                                alt="Sofi Wist Gif"
                            />
                        </div>
                        <input
                            id="wistAmount"
                            type="number"
                            min="1"
                            step="1"
                            pattern="\d*"
                            inputMode="numeric"
                            value={wistAmount}
                            onChange={handleWistAmountChange}
                            placeholder="Enter Wist Amount"
                            className={`z-10  antialiased text-center text-4xl p-2 rounded-r-md text-black w-[250px] focus:outline-none placeholder:text-2xl ${isInputDisabled ? "bg-white cursor-not-allowed" : ""}`}
                            disabled={isInputDisabled}
                        />
                    </div>
                    <h1 className="text-xl font-semibold text-white z-10">Enter Ratio ...</h1>
                    <div className="relative flex justify-center items-center shadow-md shadow-pink-600/60 rounded-md">
                        <input
                            id="ratio"
                            type="number"
                            min="0"
                            step="0.1"
                            value={ratio}
                            onChange={handleRatioChange}
                            placeholder="Enter Ratio"
                            className={`z-10  antialiased text-center text-4xl  p-2 rounded-l-md text-black w-[150px] focus:outline-none ${isInputDisabled ? "bg-white cursor-not-allowed" : ""}`}
                            disabled={isInputDisabled}
                        />
                        <div className="absolute z-10 top-1 bg-white text-black text-4xl">
                            :
                        </div>
                        <div className="bg-white h-full w-[150px] flex items-center justify-center p-2 rounded-r-md text-black text-4xl select-none">
                            USD$1
                        </div>
                    </div>
                    <div className="flex gap-5 mt-5">
                        <button
                            onClick={handleCalculate}
                            className="z-10 bg-white rounded-md px-5 h-[45px] text-pink-950 shadow-pink-600/80 hover:shadow-pink-600 shadow-xl hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center"
                        >
                            Calculate
                        </button>
                        <Link
                        href={"/sofi-wist-inr"}
                        >
                        <button
                            className="z-10 bg-white rounded-md px-5 h-[45px] text-pink-950 shadow-pink-600/80 hover:shadow-pink-600 shadow-xl hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center"
                        >
                            Switch to INR
                        </button>
                        </Link>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute w-full h-full bg-gradient-to-r from-pink-500 to-pink-900 rounded-2xl shadow-pink-600/50 shadow-2xl p-5 backface-hidden flex flex-col justify-center items-center gap-10"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        zIndex: 20
                    }}
                >
                    {result && (
                        <div className="flex flex-col gap-3 w-10/12 text-white">
                            <div className="text-center text-xl">
                                <p className="font-light">
                                    You are selling
                                    <span className="font-bold text-lg scale-110">&nbsp;
                                        {wistAmount} {wistAmount === 1 ? 'Wist' : 'Wists'}
                                    </span>&nbsp;
                                    at the ratio of
                                    <span className="font-bold text-lg scale-110"> {ratio} : $1 </span> for
                                    <span className="font-bold text-lg scale-110"> ${dollarAmount}</span>, where
                                    <span className="font-bold text-lg scale-110"> ${result.fee}</span> will be charged as fee and
                                    you will receive approximately <span className="font-bold text-lg scale-110"> ${result.recipientAmount}</span>.
                                    To receive <span className="font-bold text-lg scale-110"> ${dollarAmount}</span>, ask them to send
                                    <span className="font-bold text-lg scale-110"> ${result.paymentToReceive}</span> to you.
                                </p>
                            </div>
                        </div>
                    )}
                    <div className="flex gap-4">
                        <button
                            onClick={handleRestart}
                            className="z-10 bg-white rounded-md px-5 h-[45px] text-pink-950 shadow-pink-600/80 hover:shadow-pink-600 shadow-xl hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center"
                        >
                            Restart
                        </button>
                        <button
                            onClick={handleCopy}
                            className="z-10 bg-white rounded-md px-5 h-[45px] text-pink-950 shadow-pink-600/80 hover:shadow-pink-600 shadow-xl hover:scale-105 transition-all ease-in-out  flex justify-center items-center gap-2 active:scale-125"
                        >
                            Copy
                            <Image
                                src={"/copy.png"}
                                height={25}
                                width={25}
                                alt="Copy"
                            />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
