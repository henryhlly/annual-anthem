import { getRandomAllSongs } from '@/lib/bracket';
import { Tournament } from '@/components/Tournament';

export default async function Page() {
  const n = 16

  const songList = await getRandomAllSongs({numberOfSongs: n});

  return (
    <main>
      <Tournament songList={songList} songAmount={n} />
    </main>
  )
}