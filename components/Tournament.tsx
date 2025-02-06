'use client'

import { useState, useEffect, useRef} from 'react';
import { useRouter } from 'next/navigation';
import { shuffle } from '@/lib/shuffle';
import { getYoutube } from '@/lib/youtube';
import Loading from './Loading';

export default function Tournament({ songList, songAmount, genreId, genreData }: {songList: string[], songAmount: number, genreId: string, genreData: string }) {

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
      router.push(`/result/${genreId}/${videos[0]}`);
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
      <Loading loadingText="LOADING RESULTS" data={genreData} youtubeUrl={videos[0]} />
    )
  }else if (totalRounds === 1) {
    roundLabel = "Grand Final"
  } else if (totalRounds === 2) {
    roundLabel = "Semi-Final "+currentRound.current+"/"+totalRounds
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
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] gap-5 py-6"> {/* height calculation to take into account navbar*/}
        <h1 className="md:text-2xl text-lg">
          Which song is better?
        </h1>
        <div className="md:text-2xl text-lg bg-sky-600 w-1/4 h-12 text-center rounded-lg flex items-center justify-center">
          {roundLabel}
        </div>
        <div className="flex lg:flex-row flex-col gap-20">
          <div className="flex flex-col gap-5 items-center bg-stone-800 p-5 rounded-lg shadow-lg">
            <div className="lg:w-[40vw] lg:h-[50vh] w-[60vw] h-[30vw]">
              {getYoutube({ url: video1, readyAction: enableButtons })}
            </div>
            <button
              disabled={isLoading}
              className="md:text-2xl text-lg bg-sky-600 w-4/5 h-12 text-center rounded-lg flex items-center justify-center hover:scale-105 hover:bg-sky-700 disabled:bg-neutral-700"
              onClick={() => handleClick({ song: currentRound.current })}
            >
              Pick
            </button>
          </div>
          <div className="flex flex-col gap-5 items-center bg-stone-800 p-5 rounded-lg shadow-lg">
            <div className="lg:w-[40vw] lg:h-[50vh] w-[60vw] h-[30vw]">
              {getYoutube({ url: video2, readyAction: enableButtons })}
            </div>
            <button
              disabled={isLoading}
              className="md:text-2xl text-lg bg-sky-600 w-4/5 h-12 text-center rounded-lg flex items-center justify-center hover:scale-105 hover:bg-sky-700 disabled:bg-neutral-700"
              onClick={() => handleClick({ song: currentRound.current - 1 })}
            >
              Pick
            </button>
          </div>
        </div>
    </div>
  )
}