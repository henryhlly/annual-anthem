'use client'

import { getYoutube } from '@/lib/youtube';
import { Song } from '@/lib/song';

export const Result = ({ song }: {song: Song}) => {
  console.log(song.title)
  return (
    <div className="relative center flex flex-col items-center w-full py-8 px-8 gap-8">
        <h1 className="text-4xl font-medium">
          Your Song of 2024 is:
        </h1>
        {getYoutube({ url: song.youtube_url })}
        <p className="text-2xl font-medium">
          {song.title} - {song.artist}
        </p>
      </div>
  )
}