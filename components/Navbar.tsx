import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="sticky top-0 border-b z-50 border-white h-16 flex flex-row items-center px-5 bg-[#434343]">
      <Link href="/">
        Annual Anthem
      </Link>
    </div>
  )
}