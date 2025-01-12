import Image from 'next/image';
import Link from 'next/link';
import { TbArrowBigRightFilled } from 'react-icons/tb';
import { getGenreById } from '@/lib/genre';

export default async function Page({ params }: { params: any }) {
  const { genre } = await getGenreById(params.id)

  return (
    <div className="relative right-1/4 flex flex-col items-center h-[calc(100vh-4rem)] w-full py-32">
        <h1 className="text-4xl font-medium">
          {genre.name}
        </h1>
      <Image src={"/"+genre.image+".png"} alt="general logo" width={300} height={300} quality={100} />
      <p className="max-w-xs pb-8">
        Out of all the {genre.name} songs of 2024, determine your absolute favourite.
      </p>
      <Link href="/start" className="flex items-center justify-center gap-8 px-5 py-5 rounded-lg bg-sky-600 hover:bg-sky-700">
      Find My SOTY
      <TbArrowBigRightFilled className="text-lg" />
      </Link>
    </div>
  )
}