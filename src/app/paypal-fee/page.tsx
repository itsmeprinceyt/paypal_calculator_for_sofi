"use client";
import { useState } from "react";
import Image from "next/image";

import { calculateFeeAndRecipientAmount } from "@/utils/calculateFee";
import HomeButton from "../(components)/HomeButton";

export default function Home() {
    const [inputAmount, setInputAmount] = useState<number>(100);
    const [result, setResult] = useState<{ fee: number; recipientAmount: number; paymentToReceive: number } | null>(null);
    const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [popupMessage, setPopupMessage] = useState<string | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.valueAsNumber;
        if (value >= 0 || event.target.value === "") {
            setInputAmount(value || 0);
        }
    };

    const handleCalculate = () => {
        const amountToCalculate = inputAmount === 0 ? 0 : inputAmount;
        if (amountToCalculate >= 0) {
            const calculation = calculateFeeAndRecipientAmount(amountToCalculate);
            setResult(calculation);
            setIsInputDisabled(true);
            setIsFlipped(true);
        }
    };

    const handleRestart = () => {
        setInputAmount(100);
        setResult(null);
        setIsInputDisabled(false);
        setIsFlipped(false);
    };

    const handleCopy = () => {
        if (result) {
            const textToCopy = `\`\`\`css
Amount: $${inputAmount}
Amount without Tax: $${result.recipientAmount}
Amount with Tax included: $${result.paymentToReceive}
\`\`\``;
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
                <div className="absolute top-5 bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg transition-all ease-in-out duration-1000">
                    {popupMessage}
                </div>
            )}
            <div className={`relative w-[600px] h-80 transition-transform duration-400 ${isFlipped ? "rotate-y-180" : ""}`} style={{ perspective: "1000px", transformStyle: "preserve-3d", }}>
                {/* Front Side */}
                <div
                    className="absolute w-full h-full bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl shadow-blue-600/50 shadow-2xl p-5 backface-hidden flex flex-col justify-center items-center gap-5"
                    style={{
                        backfaceVisibility: "hidden",
                    }}
                >
                    <h1 className="text-xl font-semibold text-white z-10">Enter the amount below ...</h1>
                    <div className="relative flex justify-center items-center">
                        <div className=" bg-white antialiased text-center text-4xl border p-2 rounded-l-md text-black shadow-blue-600/20 shadow-md z-10 px-4">$</div>
                        <input
                            id="amount"
                            type="number"
                            min="0"
                            step="0.01"
                            value={inputAmount}
                            onChange={handleInputChange}
                            placeholder="Enter amount"
                            className={`z-10 shadow-blue-600/20 shadow-md antialiased text-center text-4xl border p-2 rounded-r-md text-black w-full focus:outline-none ${isInputDisabled ? "bg-white cursor-not-allowed" : ""
                                }`}
                            disabled={isInputDisabled}
                        />
                    </div>
                    <div className="">
                        <button
                            onClick={handleCalculate}
                            className="z-10 bg-white rounded-md px-5 h-[50px] text-blue-950 shadow-blue-600/30 hover:shadow-blue-600/50 shadow-xl hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center"
                        >
                            If sending this . . .
                        </button>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute w-full h-full bg-gradient-to-r from-blue-600 to-blue-900 rounded-2xl shadow-blue-600/50 shadow-2xl p-5 backface-hidden flex flex-col justify-center items-center gap-5"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    {result && (
                        <div className="flex flex-col gap-3 w-10/12 text-white">
                            <div className="text-center text-xl">
                                <p className="font-light">
                                    If you&apos;re sending <span className="font-semibold text-lg scale-110">${inputAmount}</span>, then you will be charged
                                    <span className="font-semibold text-lg scale-110"> ${result.fee}</span> as fee and you will receive
                                    <span className="font-semibold text-lg scale-110"> ${result.recipientAmount}</span>. To receive
                                    <span className="font-semibold text-lg scale-110"> ${inputAmount}</span>, ask them to send
                                    <span className="font-semibold text-lg scale-110"> ${result.paymentToReceive}</span> to you.
                                </p>
                            </div>


                        </div>
                    )}
                    <div className="flex gap-5">
                        <button
                            onClick={handleRestart}
                            className="bg-white rounded-md px-5 h-[50px] text-blue-950 shadow-blue-600/90 hover:shadow-blue-600 shadow-xl hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center"
                        >
                            Restart
                        </button>
                        <button
                            onClick={handleCopy}
                            className="bg-white rounded-md px-5 h-[50px] text-blue-950 shadow-blue-600/90 hover:shadow-blue-600 shadow-xl hover:scale-105 transition-all ease-in-out  flex justify-center items-center gap-2 active:scale-125"
                        >Copy
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