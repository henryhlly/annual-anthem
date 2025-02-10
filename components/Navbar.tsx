import Link from 'next/link'
import { Genre, getAllGenres } from '@/lib/genre'

export default async function Navbar() {

  const rawData = await getAllGenres();
  const data = rawData.map(item => ({
    id: item.id,
    name: item.name,
    data: item.data,
    image: item.image
  }))
  
  return (
    <div className="sticky top-0 border-b z-50 border-white h-16 w-full flex flex-row items-center px-5 bg-[#434343]">
      <Link href="/" className="text-xl text-white font-bold tracking-widest hover:text-gray-300 transition-all duration-500 hover:scale-110 pl-2">
        Annual Anthem
      </Link>
      {data.map((genre: Genre) => {
        return (
          <p>{genre.name}</p>
        )
      })}
    </div>
  )
}