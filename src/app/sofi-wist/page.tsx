"use client";
import { useState } from "react";
import Image from "next/image";

import { calculateFeeAndRecipientAmount } from "@/utils/calculateFee";
import HomeButton from "../(components)/HomeButton";

export default function SofiWist() {
    const [wistAmount, setWistAmount] = useState<number>(280);
    const [ratio, setRatio] = useState<number>(28);
    const [result, setResult] = useState<{ fee: number; recipientAmount: number; paymentToReceive: number } | null>(null);
    const [dollarAmount, setDollarAmount] = useState<number>(0);
    const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [popupMessage, setPopupMessage] = useState<string | null>(null);

    const handleWistAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.valueAsNumber;
        if (value >= 0 || event.target.value === "") {
            setWistAmount(value || 0);
        }
    };

    const handleRatioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.valueAsNumber;
        if (value >= 0 || event.target.value === "") {
            setRatio(value || 1);
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
        setDollarAmount(0);
        setIsInputDisabled(false);
        setIsFlipped(false);
    };

    const handleCopy = () => {
        if (result) {
            const textToCopy = `\`\`\`css
Wist Amount: ${wistAmount} Wists
Ratio: ${ratio} : $1
Calculated $ Amount: $${dollarAmount}
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
                    className="absolute w-full h-full bg-gradient-to-r from-pink-900 to-pink-500 rounded-2xl shadow-pink-600/50 shadow-2xl p-5 backface-hidden flex flex-col justify-center items-center "
                    style={{
                        backfaceVisibility: "hidden",
                    }}
                >
                    <h1 className="text-2xl font-semibold ">Sofi-Wist Fee Calculator</h1>
                    <label htmlFor="wistAmount" className="">Enter Wist Amount:</label>
                    <input
                        id="wistAmount"
                        type="number"
                        min="1"
                        value={wistAmount}
                        onChange={handleWistAmountChange}
                        placeholder="Enter Wist Amount"
                        className="border p-2 rounded  text-black"
                        disabled={isInputDisabled} // Disable input based on state
                    />

                    <label htmlFor="ratio" className="">Enter Ratio:</label>
                    <input
                        id="ratio"
                        type="number"
                        min="0"
                        step="0.01"
                        value={ratio}
                        onChange={handleRatioChange}
                        placeholder="Enter Ratio"
                        className="border p-2 rounded  text-black"
                        disabled={isInputDisabled} // Disable input based on state
                    />
                    <div className="flex gap-10">
                        <button
                            onClick={handleCalculate}
                            className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
                            disabled={isInputDisabled} // Disable calculate button after calculation
                        >
                            Calculate
                        </button>
                        <button
                            onClick={handleCalculate}
                            className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
                            disabled={isInputDisabled} // Disable calculate button after calculation
                        >
                            Switch to INR
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
                        <div className="text-center border p-4 rounded bg-gray-800">
                            <p><strong>Entered Wist Amount:</strong> ${wistAmount}</p>
                            <p><strong>Ratio:</strong> {ratio}</p>
                            <p><strong>Calculated Dollar Amount:</strong> ${dollarAmount}</p>
                            <p><strong>Fee:</strong> ${result.fee}</p>
                            <p><strong>Amount to be Received After Fee Deduction:</strong> ${result.recipientAmount}</p>
                            <p><strong>To Receive ${dollarAmount}, You Need to Ask For:</strong> ${result.paymentToReceive}</p>
                        </div>
                    )}

                    <div className="flex gap-4">
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
