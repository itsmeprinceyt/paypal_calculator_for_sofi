import Link from "next/link"
export default function HomeButton() {
    return (
        <div className="absolute left-5 top-1">
        <Link href="/">
            <div className="bg-red-600 rounded-md p-2 text-white mt-4">Home</div>
        </Link>
        </div>
    )
}