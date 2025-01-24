import { addSongWin } from "@/lib/song";

export default function Page() {

  addSongWin({ genreData: "kpop_songs", url: "Q3K0TOvTOno" })

  return (
    <div className="relative right-1/4 flex flex-col items-center h-[calc(100vh-4rem)] w-full py-32">
      Add Win
    </div>
  )
}