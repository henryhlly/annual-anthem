import { getRandomAllSongs } from '@/lib/song';
import { Tournament } from '@/components/Tournament';
import { getGenreById } from '@/lib/genre';

export default async function Page({ params }: { params: {id: string}}) {
  const { id } = await params
  const n = 32
  const genre = await getGenreById({ genreId: id })

  const songList = await getRandomAllSongs({genreData: genre.data, numberOfSongs: n});

  return (
    <main>
      <Tournament songList={songList} songAmount={n} genreId={id}/>
    </main>
  )
}