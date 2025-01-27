import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="sticky top-0 border-b z-50 border-white h-16 flex flex-row items-center px-5 bg-stone-500">
      <Link href="/">
        Annual Anthem (Header)
      </Link>
    </div>
  )
}