import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="sticky top-0 from-white border-b z-50 border-slate-800">
      <Link href="/">
        Annual Anthem
      </Link>
    </div>
  )
}