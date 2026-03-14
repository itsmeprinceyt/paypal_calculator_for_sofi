import Link from "next/link";
import Image from "next/image";
export default function TopRightMenu({
  currency,
  href,
  onlyHome = false,
}: {
  currency: "inr" | "usd";
  href: string;
  onlyHome?: boolean;
}) {
  if (onlyHome) {
    return (
      <div className="fixed top-5 right-5 flex gap-4">
        <div className="z-50 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-2 font-mono text-sm text-white/80 hover:text-white transition-all duration-200 flex items-center gap-2 backdrop-blur-sm cursor-pointer">
          <Link href={"/"}>
            <Image
              src={"/home.png"}
              height={20}
              width={20}
              className="invert scale-75"
              alt="Home"
            />
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="fixed top-5 right-5 flex gap-4">
      {/* INR Route Button */}
      <Link
        href={href}
        className=" z-50 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 font-mono text-sm text-white/80 hover:text-white transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
      >
        <span
          className={`${
            currency === "inr" ? "text-green-400" : "text-blue-400"
          }`}
        >
          {currency === "inr" ? "₹" : "$"}
        </span>
        {currency === "inr" ? "Switch to INR " : "Switch to USD"}
      </Link>
      <div className="z-50 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-2 font-mono text-sm text-white/80 hover:text-white transition-all duration-200 flex items-center gap-2 backdrop-blur-sm cursor-pointer">
        <Link href={"/"}>
          <Image
            src={"/home.png"}
            height={20}
            width={20}
            className="invert scale-75"
            alt="Home"
          />
        </Link>
      </div>
    </div>
  );
}
