import Image from 'next/image';
import { useEffect } from 'react'
import { addSongWin } from '@/lib/song';

export default function Loading ({ loadingText, data, youtubeUrl }: { loadingText: string, data: string, youtubeUrl: string }) {

  useEffect(() => {
    addSongWin({ genreData: data, url: youtubeUrl });
  }, [data, youtubeUrl]);

  return (
    <div className="relative flex flex-col items-center h-[calc(100vh-4rem)] w-full py-32">
      <h1 className="text-2xl">{ loadingText }</h1>
      {/* Loading Icon is provided by Loading.io */}
      <Image src="/loadingIcon.gif" alt="loading gif" width={200} height={200} quality={100} />
    </div>
  )
}