import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="sticky top-0 border-b z-50 border-white h-16 w-full flex flex-row items-center px-5 bg-[#434343]">
      <Link href="/" className="text-xl text-white font-bold tracking-widest hover:text-gray-300 transition-all duration-500 hover:scale-110 pl-2">
        Annual Anthem
      </Link>
    </div>
  )
}