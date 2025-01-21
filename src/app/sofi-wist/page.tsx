"use client";
import { useState } from "react";
import Link from "next/link";
import { calculateFeeAndRecipientAmount } from "@/utils/calculateFee";

export default function SofiWist() {
    const [wistAmount, setWistAmount] = useState<number>(280); // Default value for Wist Amount
    const [ratio, setRatio] = useState<number>(28); // Default value for Ratio to avoid division by zero
    const [result, setResult] = useState<{ fee: number; recipientAmount: number; paymentToReceive: number } | null>(null);
    const [dollarAmount, setDollarAmount] = useState<number>(0);
    const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false); // New state to manage input disabled status

    const handleWistAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.valueAsNumber;
        if (value >= 0 || event.target.value === "") {
            setWistAmount(value || 0); // Handle empty input
        }
    };

    const handleRatioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.valueAsNumber;
        if (value >= 0 || event.target.value === "") {
            setRatio(value || 1); // Handle empty input, default ratio to 1 to avoid division by 0
        }
    };

    const handleCalculate = () => {
        const calculatedAmount = parseFloat((wistAmount / ratio).toFixed(2)); // Calculate dollar amount with 2 decimal precision
        setDollarAmount(calculatedAmount); // Save the calculated dollar amount
        const calculation = calculateFeeAndRecipientAmount(calculatedAmount);
        setResult(calculation);
        setIsInputDisabled(true); // Disable input after calculation
    };

    const handleReset = () => {
        setWistAmount(280); // Reset to the default Wist amount
        setRatio(28); // Reset to the default ratio
        setResult(null); // Clear the result
        setDollarAmount(0); // Clear the dollar amount
        setIsInputDisabled(false); // Enable the input fields again
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center text-white">
            <h1 className="text-2xl font-semibold mb-4">Sofi-Wist Fee Calculator</h1>

            <label htmlFor="wistAmount" className="mb-2">Enter Wist Amount:</label>
            <input
                id="wistAmount"
                type="number"
                min="1"
                value={wistAmount}
                onChange={handleWistAmountChange}
                placeholder="Enter Wist Amount"
                className="border p-2 rounded mb-4 text-black"
                disabled={isInputDisabled} // Disable input based on state
            />

            <label htmlFor="ratio" className="mb-2">Enter Ratio:</label>
            <input
                id="ratio"
                type="number"
                min="0"
                step="0.01"
                value={ratio}
                onChange={handleRatioChange}
                placeholder="Enter Ratio"
                className="border p-2 rounded mb-4 text-black"
                disabled={isInputDisabled} // Disable input based on state
            />

            <button
                onClick={handleCalculate}
                className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
                disabled={isInputDisabled} // Disable calculate button after calculation
            >
                Calculate
            </button>

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

            <button
                onClick={handleReset}
                className="bg-gray-600 text-white px-4 py-2 rounded mt-4"
            >
                Reset
            </button>

            <Link href="/">
                <div className="bg-red-600 rounded-md p-2 text-white mt-4">Home</div>
            </Link>
        </div>
    );
}
