import { addSongWin } from "@/lib/song";
import { useEffect, useState } from "react";

export function Loading ({ loadingText, data, youtubeUrl }: {loadingText: string, data: string, youtubeUrl: string}) {

  useEffect(() => {
    addSongWin({ genreData: data, url: youtubeUrl });
  }, []);

  return (
    <div className="relative flex flex-col items-center h-[calc(100vh-4rem)] w-full py-32">
      <h1 className="text-2xl">{ loadingText }</h1>
      {/* Loading Icon is provided by Loading.io */}
      <img src="/loadingIcon.gif">
      </img>
    </div>
  )
}