import Link from "next/link";
import Image from "next/image";
export default function HomeButton() {
  return (
    <div className="absolute left-1 top-2 scale-50">
      <Link href="/">
        <Image
          src={"/home.png"}
          height={30}
          width={30}
          className="invert"
          alt="Home"
        />
      </Link>
    </div>
  );
}
