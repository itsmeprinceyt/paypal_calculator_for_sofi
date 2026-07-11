"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "paypal_calculator:disclaimer_acknowledged_until";
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

export default function DisclaimerModal() {
  const [isVisible, setIsVisible] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const storedUntil = localStorage.getItem(STORAGE_KEY);

      if (!storedUntil) {
        setIsVisible(true);
        return;
      }

      const expiryTimestamp = parseInt(storedUntil, 10);

      if (Number.isNaN(expiryTimestamp) || Date.now() > expiryTimestamp) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleAcknowledge = () => {
    try {
      const expiryTimestamp = Date.now() + SEVEN_DAYS_MS;
      localStorage.setItem(STORAGE_KEY, expiryTimestamp.toString());
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[999] flex items-center justify-center px-4 py-8 overflow-y-auto">
      <div className="max-w-xl mx-auto text-center space-y-8 my-auto">
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-white border-b border-white/30 pb-4 inline-block">
            Disclaimer
          </h2>

          <div className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-red-500/20">
            <p className="text-red-300 text-sm sm:text-base leading-relaxed font-light">
              This website is provided solely for educational and informational
              purposes. I do not support, promote, or encourage cross-trading in
              Sofi, Karuta, Mazoku, or any other Discord bot, game, or platform
              where such activities are prohibited by its official or unofficial
              rules, guidelines, or community standards. Any actions you choose
              to take, including cross-trading or related activities, are
              entirely your own responsibility. I am not affiliated with these
              bots or their developers and accept no responsibility or liability
              for any consequences, including warnings, restrictions,
              suspensions, or bans, resulting from the use of this website or
              your actions.
            </p>
          </div>

          <button
            onClick={handleAcknowledge}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all  hover:scale-105 shadow-xl animate-pulse duration-700"
          >
            I ACKNOWLEDGE
          </button>
        </div>
      </div>
    </div>
  );
}
