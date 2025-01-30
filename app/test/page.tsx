// Use as a test page

import { addSongWin, getAllSongs, getHighestWin } from "@/lib/song";
import { WinDisplay } from "@/components/WinDisplay";

export default async function Page() {

  const songData = await getHighestWin({ genreData: "pop_songs"})

  return (
    <div className="relative right-1/4 flex flex-col items-center w-full py-32">
      <WinDisplay allSongs={songData} />
    </div>
  )
}