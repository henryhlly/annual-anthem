'use client'

import { useState, useEffect, useRef} from 'react';
import { useRouter } from 'next/navigation';
import { shuffle } from '@/lib/shuffle';
import { getYoutube } from '@/lib/youtube';
import { Loading } from './Loading';
import { Genre } from '@/lib/genre';

export const Tournament = ({ songList, songAmount, genre }: {songList: string[], songAmount: number, genre: Genre }) => {

  const router = useRouter()
  const currentRound = useRef(1)
  const rotationNum = useRef(1)
  const [ videos, setVideos] = useState(songList)
  const [isLoading, setIsLoading] = useState(true)

  const video1 = videos[currentRound.current-1]
  const video2 = videos[currentRound.current]
  const totalRounds = songAmount / Math.pow(2, rotationNum.current)
  let roundLabel = ""

  // Tournament End
  useEffect(() => {
    if (totalRounds === 0.5) {
      router.push(`/result/${genre.id}/${videos[0]}`);
      totalRounds = currentRound.current
      console.log('Tournament Finished');
    }
  })

  // Trigger new rotation of songs
  if (currentRound.current > totalRounds && totalRounds >= 1) {
    rotationNum.current = rotationNum.current + 1;
    currentRound.current = 1;
    setVideos(shuffle({ array: videos }));
  }

  // Edit round label to appropriate round
  if (totalRounds < 1) {
    return (
      <Loading loadingText="LOADING RESULTS" data={genre.data} youtubeUrl={videos[0]} />
    )
  }else if (totalRounds === 1) {
    roundLabel = "Grand Final"
  } else if (totalRounds === 2) {
    roundLabel = "Semi-final "+currentRound.current+"/"+totalRounds
  } else {
    roundLabel = "Round "+currentRound.current+"/"+totalRounds
  }

  // Turn buttons back on
  function enableButtons() {
    setIsLoading(false)
  }

  // When buttons are clicked
  function handleClick({ song }: { song: number}) {
    setIsLoading(true)
    currentRound.current = (currentRound.current + 1)
    const updatedVideos = [...videos];
    updatedVideos.splice(song, 1);
    setVideos(updatedVideos);
  }

  return (
    <div className="flex flex-col items-center h-[calc(100vh-4rem)] gap-5 py-6"> {/* height calculation to take into account navbar*/}
        <h1 className="text-2xl">
          Which song is better?
        </h1>
        <div className="text-2xl bg-sky-600 w-1/4 h-12 text-center rounded-lg flex items-center justify-center">
          {roundLabel}
        </div>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-5 items-center bg-stone-800 p-5 rounded-lg shadow-lg">
            {getYoutube({ url: video1, action: enableButtons })}
            <button
              disabled={isLoading}
              className="text-2xl bg-sky-600 w-4/5 h-12 text-center rounded-lg flex items-center justify-center hover:scale-105 hover:bg-sky-700 disabled:bg-neutral-700"
              onClick={() => handleClick({ song: currentRound.current })}
            >
              Pick
            </button>
          </div>
          <div className="flex flex-col gap-5 items-center bg-stone-800 p-5 rounded-lg shadow-lg">
            {getYoutube({ url: video2, action: enableButtons })}
            <button
              disabled={isLoading}
              className="text-2xl bg-sky-600 w-4/5 h-12 text-center rounded-lg flex items-center justify-center hover:scale-105 hover:bg-sky-700 disabled:bg-neutral-700"
              onClick={() => handleClick({ song: currentRound.current - 1 })}
            >
              Pick
            </button>
          </div>
        </div>
    </div>
  )
}