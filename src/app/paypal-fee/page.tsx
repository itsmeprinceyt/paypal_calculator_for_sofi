"use client";
import { useState } from "react";
import { calculateFeeAndRecipientAmount } from "@/utils/calculateFee";
import HomeButton from "../(components)/HomeButton";
import Image from "next/image";

export default function Home() {
    const [inputAmount, setInputAmount] = useState<number>(100); // Default value is 100
    const [result, setResult] = useState<{ fee: number; recipientAmount: number; paymentToReceive: number } | null>(null);
    const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false); // New state to manage input disabled status

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.valueAsNumber;
        if (value >= 0 || event.target.value === "") {
            setInputAmount(value || 0); // Set to 0 if input is empty
        }
    };

    const handleCalculate = () => {
        const amountToCalculate = inputAmount === 0 ? 0 : inputAmount;
        if (amountToCalculate >= 0) {
            const calculation = calculateFeeAndRecipientAmount(amountToCalculate);
            setResult(calculation);
            setIsInputDisabled(true); // Disable input after calculation
        }
    };

    const handleRestart = () => {
        setInputAmount(100); // Reset to the default amount (100)
        setResult(null); // Clear the result
        setIsInputDisabled(false); // Enable the input field again
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center text-white">
            <HomeButton />
            <div> {/* First Card */}
                <h1 className="text-xl font-semibold mb-4">Enter the amount below ...</h1>
                <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-md p-5">
                    <div className="relative flex justify-center items-center">
                        <Image
                            src={"/dollar.gif"}
                            height={25}
                            width={25}
                            alt="Dollar GIF"
                            className="absolute left-2"
                        />
                        <input
                            id="amount"
                            type="number"
                            min="0"
                            step="0.01"
                            value={inputAmount}
                            onChange={handleInputChange}
                            placeholder="Enter amount"
                            className={`pl-10 border p-2 rounded text-black w-full ${isInputDisabled ? 'bg-white cursor-not-allowed' : ''}`}
                            disabled={isInputDisabled}
                        />
                    </div>
                    <div className="">
                        <button
                            onClick={handleCalculate}
                            className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
                        >
                            If sending this...
                        </button>
                        <button
                            onClick={handleRestart}
                            className="bg-gray-600 text-white px-4 py-2 rounded mt-4"
                        >
                            Restart
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {result && (
                    <div className="text-center border p-4 rounded bg-gray-800">
                        <p><strong>Entered Amount:</strong> ${inputAmount}</p>
                        <p><strong>Fee:</strong> ${result.fee}</p>
                        <p><strong>Amount to be Received After Fee Deduction:</strong> ${result.recipientAmount}</p>
                        <p><strong>To Receive ${inputAmount}, You Need to Ask For:</strong> ${result.paymentToReceive}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
