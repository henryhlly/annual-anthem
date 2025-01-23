import { getAllSongs } from '@/lib/song';

export default async function Page() {
  const pop_songs = await getAllSongs({ genreData: "pop_songs" });
  console.log(pop_songs)
  
  return (
    <div>
      Hello
    </div>
  );
}