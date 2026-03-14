"use client";
import { useState, useEffect, useRef } from "react";
import { Copy, RotateCcw, ArrowRight } from "lucide-react";
import Link from "next/link";
import HomeButton from "../(components)/HomeButton";
import PageWrapper from "../(components)/PageWrapper";

export default function KarutaTicketINR() {
  const [ticketAmount, setTicketAmount] = useState<number>(120);
  const [ratio, setRatio] = useState<number>(4.5);
  const [inrAmount, setInrAmount] = useState<number>(0);
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [focusedTicket, setFocusedTicket] = useState(false);
  const [focusedRatio, setFocusedRatio] = useState(false);
  const ticketInputRef = useRef<HTMLInputElement>(null);
  const ratioInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 2200);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const handleTicketAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      setTicketAmount(0);
      return;
    }

    let processedValue = inputValue;
    if (
      inputValue.length > 1 &&
      inputValue.startsWith("0") &&
      !inputValue.startsWith("0.")
    ) {
      processedValue = inputValue.replace(/^0+/, "");
    }

    const numericValue = parseInt(processedValue);

    if (!isNaN(numericValue) && numericValue >= 0) {
      setTicketAmount(numericValue);
    }
  };

  const handleRatioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      setRatio(0);
      return;
    }

    let processedValue = inputValue;
    if (
      inputValue.length > 1 &&
      inputValue.startsWith("0") &&
      !inputValue.startsWith("0.")
    ) {
      processedValue = inputValue.replace(/^0+/, "");
    }

    const numericValue = parseFloat(processedValue);

    if (!isNaN(numericValue) && numericValue >= 0) {
      setRatio(numericValue);
    }
  };

  const handleCalculate = () => {
    if (ticketAmount > 0 && ratio > 0) {
      const calculatedAmount = ticketAmount * ratio;
      const formattedAmount = parseFloat(calculatedAmount.toFixed(2));
      setInrAmount(formattedAmount);
      setIsInputDisabled(true);
      setIsFlipped(true);
    }
  };

  const handleRestart = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setTicketAmount(120);
      setRatio(4.5);
      setInrAmount(0);
      setIsInputDisabled(false);
      setTimeout(() => ticketInputRef.current?.focus(), 50);
    }, 400);
  };

  const handleCopy = async () => {
    if (!inrAmount) return;
    const text = `\`\`\`css
Ticket Amount:       ${ticketAmount} ${
      ticketAmount === 1 ? "Ticket" : "Tickets"
    }
Ratio:               ₹${ratio.toFixed(2)} per ticket
Calculated ₹ Amount: ₹${inrAmount.toFixed(2)}
\`\`\`
-# Calculated Using: [PayPal | Sofi | Karuta | Mazoku Fee Calculator by ItsMe Prince](https://paypal-and-sofi-wist-fee-calculator.vercel.app/)`;

    try {
      await navigator.clipboard.writeText(text);
      setToast("Copied to clipboard");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.cssText = "position:absolute;left:-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setToast("Copied to clipboard");
      } catch (err) {
        console.error("Copy failed", err);
      }
      document.body.removeChild(ta);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (
      e.key === "Enter" &&
      !isInputDisabled &&
      ticketAmount > 0 &&
      ratio > 0
    ) {
      handleCalculate();
    }
  };

  const breakdownRows = inrAmount
    ? [
        {
          label: "Ticket Amount",
          value: `${ticketAmount} ${ticketAmount === 1 ? "Ticket" : "Tickets"}`,
          colorClass: "text-white",
        },
        {
          label: "Ratio",
          value: `₹${ratio.toFixed(2)}/ticket`,
          colorClass: "text-white",
        },
        {
          label: "You receive",
          value: `₹${inrAmount.toFixed(2)}`,
          colorClass: "text-green-400",
        },
      ]
    : [];

  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center p-4">
        <HomeButton />

        {/* USD Calculator Button */}
        <Link
          href="/karuta-ticket"
          className="fixed top-5 right-5 z-50 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 font-mono text-sm text-white/80 hover:text-white transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
        >
          <span className="text-blue-400">$</span>
          USD Calculator
        </Link>

        <div
          className={`fixed top-5 left-1/2 -translate-x-1/2 bg-white text-[#0a0a0f] font-mono text-[12px] tracking-[0.06em] px-[22px] py-[10px] rounded-full z-50 pointer-events-none whitespace-nowrap ${
            toast ? "translate-y-0" : "-translate-y-20"
          }`}
          style={{
            transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {toast}
        </div>

        {/* 3D Card Scene */}
        <div
          className="w-full max-w-[580px] h-[400px] sm:h-[440px] md:h-[480px]"
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 0.75s cubic-bezier(0.77, 0, 0.175, 1)",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* ─── FRONT ─── */}
            <div
              className="absolute inset-0 rounded-3xl bg-[#0000003b] border border-white/[0.07] p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-7"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {/* Label */}
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-white/30">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316] shrink-0" />
                Karuta · Ticket Calculator (INR)
              </div>

              {/* Ticket Amount Input */}
              <div className="w-full">
                <div
                  className={`flex items-center rounded-[14px] bg-white/[0.04] border transition-colors duration-200 ${
                    focusedTicket ? "border-orange-500/60" : "border-white/10"
                  }`}
                >
                  <span className="px-5 h-16 flex items-center font-mono text-[13px] font-medium text-white/30 border-r border-white/[0.08] bg-black/20 select-none whitespace-nowrap shrink-0">
                    Tickets
                  </span>
                  <input
                    ref={ticketInputRef}
                    type="number"
                    min="0"
                    step="1"
                    value={ticketAmount}
                    onChange={handleTicketAmountChange}
                    onKeyPress={handleKeyPress}
                    onFocus={() => setFocusedTicket(true)}
                    onBlur={() => setFocusedTicket(false)}
                    disabled={isInputDisabled}
                    placeholder="0"
                    className={`flex-1 min-w-0 h-16 bg-transparent border-none outline-none font-sans text-[32px] font-bold text-left px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                      isInputDisabled
                        ? "text-white/30 cursor-not-allowed"
                        : "text-white cursor-text"
                    }`}
                  />
                </div>
              </div>

              {/* Ratio Input */}
              <div className="w-full">
                <div
                  className={`flex items-center rounded-[14px] bg-white/[0.04] border transition-colors duration-200 ${
                    focusedRatio ? "border-orange-500/60" : "border-white/10"
                  }`}
                >
                  <span className="px-5 h-16 flex items-center font-mono text-[13px] font-medium text-white/30 border-r border-white/[0.08] bg-black/20 select-none whitespace-nowrap shrink-0">
                    Rate
                  </span>
                  <input
                    ref={ratioInputRef}
                    type="number"
                    min="0"
                    step="0.1"
                    value={ratio}
                    onChange={handleRatioChange}
                    onKeyPress={handleKeyPress}
                    onFocus={() => setFocusedRatio(true)}
                    onBlur={() => setFocusedRatio(false)}
                    disabled={isInputDisabled}
                    placeholder="0"
                    className={`flex-1 min-w-0 h-16 bg-transparent border-none outline-none font-sans text-[32px] font-bold text-left px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                      isInputDisabled
                        ? "text-white/30 cursor-not-allowed"
                        : "text-white cursor-text"
                    }`}
                  />
                  <span className="px-5 h-16 flex items-center font-mono text-[13px] font-medium text-white/30 border-l border-white/[0.08] bg-black/20 select-none whitespace-nowrap shrink-0">
                    ₹/ticket
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleCalculate}
                disabled={ticketAmount === 0 || ratio === 0}
                className="w-full h-[52px] bg-orange-500 rounded-xl font-sans text-[15px] font-bold tracking-[0.02em] text-white cursor-pointer flex items-center justify-center gap-2.5 transition-all duration-150 hover:opacity-85 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50 disabled:active:scale-100"
              >
                Calculate
                <ArrowRight size={16} />
              </button>

              <span className="font-mono text-[11px] text-white/20 tracking-[0.06em]">
                ₹{ratio.toFixed(2)} per ticket · INR Calculator
              </span>
            </div>

            {/* ─── BACK ─── */}
            <div
              className="absolute inset-0 rounded-3xl bg-[#0000005e] border border-white/[0.07] px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              {inrAmount > 0 && (
                <>
                  {/* Summary */}
                  <p className="font-mono text-center w-full text-[13px] text-white/45 leading-[1.8] italic">
                    You are selling{" "}
                    <strong className="text-orange-400 not-italic">
                      {ticketAmount} {ticketAmount === 1 ? "Ticket" : "Tickets"}
                    </strong>{" "}
                    at{" "}
                    <strong className="text-white not-italic">
                      ₹{ratio.toFixed(2)} per ticket
                    </strong>{" "}
                    for{" "}
                    <strong className="text-white not-italic">
                      ₹{inrAmount.toFixed(2)}
                    </strong>
                    .
                  </p>

                  {/* Breakdown */}
                  <div className="w-full rounded-[14px] border border-white/[0.07] overflow-hidden">
                    {breakdownRows.map((row, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center px-[18px] py-3"
                      >
                        <span className="font-mono text-[12px] text-white/35 tracking-[0.04em]">
                          {row.label}
                        </span>
                        <span
                          className={`font-mono text-[14px] font-medium ${row.colorClass}`}
                        >
                          {row.value}
                        </span>
                      </div>
                    ))}

                    {/* Highlighted row */}
                    <div className="flex justify-between items-center px-[18px] py-[14px] bg-white border-t border-orange-500/[0.15]">
                      <span className="font-mono text-[12px] text-black tracking-[0.04em]">
                        Total value
                      </span>
                      <span className="font-sans text-[18px] font-extrabold text-black tracking-[-0.01em]">
                        ₹{inrAmount.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2.5 w-full">
                    <button
                      onClick={handleRestart}
                      className="flex-1 h-11 bg-transparent border border-white/10 rounded-[10px] font-mono text-[13px] font-semibold text-white/50 cursor-pointer flex items-center justify-center gap-2 transition-all duration-150 hover:bg-white/[0.06] hover:text-white"
                    >
                      <RotateCcw size={13} />
                      Reset
                    </button>
                    <button
                      onClick={handleCopy}
                      className="flex-[2] h-11 bg-white rounded-[10px] font-mono text-[13px] text-[#0a0a0f] cursor-pointer flex items-center justify-center gap-2 transition-all duration-150 hover:opacity-[0.88] active:scale-[0.97]"
                    >
                      <Copy size={13} />
                      Copy for Discord
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
