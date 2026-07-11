import Link from "next/link";

export default function MadeBy() {
  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 text-stone-500 text-[10px] flex gap-1 z-[9999] pointer-events-auto">
      Made by
      <Link href={"https://www.itsmeprince.com"} target="_blank">
        @itsmeprinceyt
      </Link>{" "}
      |
      <Link
        href={"https://github.com/itsmeprinceyt/paypal_calculator_for_sofi"}
        target="_blank"
      >
        Github
      </Link>
    </div>
  );
}
