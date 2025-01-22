import Link from "next/link"
import Image from "next/image"
export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="text-center ">
          <div className="sm:text-8xl text-6xl text-white font-semibold">Welcome!</div>
          <div className="text-white font-extralight">Effortless Fee Calculations for PayPal & Sofi Wists!</div>
        </div>
        <div className="flex gap-10">
          <Link
            href={"/paypal-fee"}
          >
            <div className="bg-blue-200 rounded-md px-3 h-[50px] text-blue-950 shadow-blue-600/30 hover:shadow-blue-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-center items-center">
            <Image
            src={"/Paypal.gif"}
            height={50}
            width={50}
            alt="PayPal Gif"
            />
            PayPal Fee Calculator
            
            </div>
          </Link>
          <Link
            href={"/sofi-wist"}
          >
            <div className="bg-pink-200 rounded-md px-3 h-[50px] text-pink-950 shadow-pink-600/30 hover:shadow-pink-600/50 shadow-xl hover:scale-110 transition-all ease-in-out duration-500 flex justify-center items-center">
            <Image
            src={"/wist_gif.gif"}
            height={40}
            width={40}
            alt="Sofi Wist Gif"
            />
            Sofi Wists Calculator
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}