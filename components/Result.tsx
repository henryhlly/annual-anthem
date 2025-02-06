'use client'

import { getYoutube } from '@/lib/youtube';

export default function Result({ title, artist, youtube_url }: { title: string, artist: string, youtube_url: string }) {
  return (
    <div className="relative justify-center flex flex-col items-center w-full py-8 px-8 gap-8">
        <h1 className="lg:text-4xl text-2xl text-center font-medium">
          Your Song of 2024 is:
        </h1>
        <div className="lg:w-[40vw] lg:h-[50vh] w-[60vw] h-[30vw]">
          {getYoutube({ url: youtube_url })}
        </div>
        <p className="lg:text-2xl text-base font-medium">
          { title } - { artist }
        </p>
      </div>
  )
}