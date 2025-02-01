import { getRandomAllSongs } from '@/lib/song';
import Tournament from '@/components/Tournament';
import { getGenreById } from '@/lib/genre';
import { useRouter } from 'next/router';

export default async function Page({ params }: { params: Promise<{id: string}>}) {
  const { id } = await params

  const router = useRouter()
  const { n } = router.query

  const genre = await getGenreById({ genreId: id })
  const songList = await getRandomAllSongs({genreData: genre.data, numberOfSongs: n});

  return (
    <main>
      <Tournament songList={songList} songAmount={n} genreId={genre.id} />
    </main>
  )
}