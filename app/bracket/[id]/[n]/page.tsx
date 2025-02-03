import { getRandomAllSongs } from '@/lib/song';
import Tournament from '@/components/Tournament';
import { getGenreById } from '@/lib/genre';

export default async function Page({ params }: { params: Promise<{id: string, n: number}>}) {
  const { id, n } = await params

  const genre = await getGenreById({ genreId: id })
  const songList = await getRandomAllSongs({genreData: genre.data, numberOfSongs: n});

  return (
    <main className="h-full">
      <Tournament songList={songList} songAmount={n} genreId={genre.id} genreData={genre.data} />
    </main>
  )
}