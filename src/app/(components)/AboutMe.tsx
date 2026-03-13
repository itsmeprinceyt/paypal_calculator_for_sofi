import Link from "next/link";

export default function MadeBy() {
  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 text-white text-[10px] flex gap-1">
      Made by
      <Link href={"https://www.youtube.com/@itsmeprinceyt"} target="_blank">
        <span className="animate-pulse">@itsmeprinceyt</span>
      </Link>{" "}
      |
      <Link
        href={"https://github.com/itsmeprinceyt/paypal_calculator_for_sofi"}
        target="_blank"
      >
        <span className="animate-pulse">Github</span>
      </Link>
    </div>
  );
}
