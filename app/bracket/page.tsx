import { getRandomAllSongs } from '@/lib/bracket';

export default async function Page() {
  const song_list = await getRandomAllSongs();

  return (
    <main>
      <ul>
        {song_list?.map((song: string, index: number) => {
          return (
            <li key={index}>
              {song}
            </li>
          )
        })}
      </ul>
    </main>
  )
}