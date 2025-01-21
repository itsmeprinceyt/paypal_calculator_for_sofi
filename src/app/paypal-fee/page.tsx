"use client";
import { useState } from "react";
import { calculateFeeAndRecipientAmount } from "@/utils/calculateFee";
import HomeButton from "../(components)/HomeButton";

export default function Home() {
    const [inputAmount, setInputAmount] = useState<number>(100);
    const [result, setResult] = useState<{ fee: number; recipientAmount: number; paymentToReceive: number } | null>(null);
    const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false);
    const [isFlipped, setIsFlipped] = useState(false);

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

    return (
        <div className="h-screen flex flex-col justify-center items-center text-white">
            <HomeButton />
            <div className={`relative w-[600px] h-96 transition-transform duration-500 ${isFlipped ? "rotate-y-180" : ""}`} style={{ perspective: "1000px", transformStyle: "preserve-3d", }}>
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
                        <div className="flex gap-3 w-[400px] text-white">
                            <div className="text-right text-xl flex flex-col gap-5">
                                <p >Entered Amount:</p>
                                <p>Fee:</p>
                                <p>Amount After Fee Deduction:</p>
                                <p>To Receive ${inputAmount}, Ask For:</p>
                            </div>
                            <div className="text-left text-lg font-bold flex flex-col gap-5">
                                <p>${inputAmount}</p>
                                <p>${result.fee}</p>
                                <p>${result.recipientAmount}</p>
                                <p>${result.paymentToReceive}</p>
                            </div>
                        </div>
                    )}
                    <button
                        onClick={handleRestart}
                        className="bg-white rounded-md px-5 h-[50px] text-blue-950 shadow-blue-600/30 hover:shadow-blue-600/50 shadow-xl hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center"
                    >
                        Restart
                    </button>
                </div>
            </div>
        </div>
    );
}