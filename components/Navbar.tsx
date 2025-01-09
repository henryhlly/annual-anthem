import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="sticky top-0 from-white border-b z-50 border-slate-800 h-16 flex flex-row items-center px-5">
      <Link href="/">
        Annual Anthem (Header)
      </Link>
    </div>
  )
}