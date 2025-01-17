import { getRandomAllSongs } from '@/lib/song';
import { Tournament } from '@/components/Tournament';

export default async function Page() {
  const n = 4

  const songList = await getRandomAllSongs({numberOfSongs: n});

  return (
    <main>
      <Tournament songList={songList} songAmount={n} />
    </main>
  )
}