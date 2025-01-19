import { getRandomAllSongs } from '@/lib/song';
import { Tournament } from '@/components/Tournament';

export default async function Page({ params }: { params: {id: string}}) {
  const { id } = await params
  const n = 4

  const songList = await getRandomAllSongs({genreId: id, numberOfSongs: n});

  return (
    <main>
      <Tournament songList={songList} songAmount={n} genreId={id}/>
    </main>
  )
}