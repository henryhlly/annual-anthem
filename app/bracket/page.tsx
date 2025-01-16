import { getRandomAllSongs } from '@/lib/bracket';
import { Tournament } from '@/components/Tournament';

export default async function Page() {
  const songList = await getRandomAllSongs();

  return (
    <main>
      <Tournament songList={songList} songAmount={16} />
    </main>
  )
}