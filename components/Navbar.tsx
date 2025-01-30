import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="sticky top-0 border-b z-50 border-white h-16 flex flex-row items-center px-5 bg-[#6E6E6E]">
      <Link href="/">
        Annual Anthem (Header)
      </Link>
    </div>
  )
}