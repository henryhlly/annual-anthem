import Link from "next/link";

export const PickButton = () => {
  return (
    <Link href="/bracket" className="text-2xl bg-sky-600 w-4/5 h-12 text-center rounded-lg flex items-center justify-center">
      Pick This
    </Link>
  )
}