'use client'

import { getYoutube } from '@/lib/youtube';

export default function Result({ title, artist, youtube_url }: { title: string, artist: string, youtube_url: string }) {
  return (
    <div className="relative center flex flex-col items-center w-full py-8 px-8 gap-8">
        <h1 className="text-4xl font-medium">
          Your Song of 2024 is:
        </h1>
        {getYoutube({ url: youtube_url })}
        <p className="text-2xl font-medium">
          { title } - { artist }
        </p>
      </div>
  )
}