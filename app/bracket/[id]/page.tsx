import { getRandomAllSongs } from '@/lib/song';
import { Tournament } from '@/components/Tournament';
import { Loading } from '@/components/Loading';

export default async function Page({ params }: { params: {id: string}}) {
  const { id } = await params
  const n = 8

  const songList = await getRandomAllSongs({genreId: id, numberOfSongs: n});

  return (
    <main>
      <Tournament songList={songList} songAmount={n} genreId={id}/>
    </main>
  )
}