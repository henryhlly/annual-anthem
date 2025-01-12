'use client'

import Youtube, { YouTubeProps } from 'react-youtube';
import { PickButton } from '@/components/PickButton';
import { useEffect, useState } from 'react';
import { getRandomAllSongs } from '@/lib/bracket';

function getYoutube({ url }: { url: string }) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '360',
    width: '480'
  }

  return <Youtube videoId={url} opts={opts} onReady={onPlayerReady} />;
}

export default function Page() {
  const [songsLeft, setSongsLeft] = useState<string[]>([]);

  useEffect(() => {
    async function fetchSongs() {
      const songs = await getRandomAllSongs();
      setSongsLeft(songs);
    }
    fetchSongs();
  }, []);

  const song1: string = songsLeft.pop() || ""
  const song2: string = songsLeft.pop() || ""

  const vid1 = getYoutube({ url: song1 })
  const vid2 = getYoutube({ url: song2 })

  return (
    <main>
      <div className="flex flex-col items-center h-[calc(100vh-4rem)] gap-5 py-6"> {/* height calculation to take into account navbar*/}
        <h1 className="text-2xl">
          Which song is better?
        </h1>
        <div className="text-2xl bg-sky-600 w-1/4 h-12 text-center rounded-lg flex items-center justify-center">
          Round 1/32
        </div>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-5 items-center bg-stone-800 p-5 rounded-lg shadow-lg">
            { vid1 }
            <PickButton />
          </div>
          <div className="flex flex-col gap-5 items-center bg-stone-800 p-5 rounded-lg shadow-lg">
            { vid2 }
            <PickButton />
          </div>
        </div>
      </div>
    </main>
  )
}