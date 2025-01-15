'use client'

import Youtube, { YouTubeProps } from 'react-youtube';
import { PickButton } from '@/components/PickButton';
import { getRandomAllSongs } from '@/lib/bracket';
import { useState, useEffect, useRef} from 'react';
import { useRouter } from 'next/navigation';

function getYoutube({ url }: { url: any }) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '360',
    width: '480'
  }

  return <Youtube videoId={url} opts={opts} onReady={onPlayerReady} />;
}

export const Tournament = ({ songList, totalRounds }: {songList: string[], totalRounds: number }) => {
  const router = useRouter()

  useEffect(() => {
    console.log('Tournament component rendered');
  }, []);

  const [ currentRound, setCurrentRound] = useState(1)
  const [ rotationNum, setRotationNum ] = useState(1)
  const [ videos, setVideos] = useState(songList)

  const video1 = videos[currentRound-1]
  const video2 = videos[currentRound]
  let roundNum = totalRounds / Math.pow(2,rotationNum)

  useEffect(() => {
    if (roundNum < 1) {
      roundNum = currentRound
      console.log('Tournament Finished');
      router.push('/');
    }
  }, [roundNum, router]);

  if (currentRound > roundNum) {
    setRotationNum(rotationNum + 1);
    setCurrentRound(1);
    console.log(rotationNum);
  }
  
  

  function handleClick({ removeSong }: { removeSong: number}) {
    setCurrentRound(currentRound + 1)
    const updatedVideos = [...videos];
    updatedVideos.splice(removeSong, 1);
    setVideos(updatedVideos);
  }

  return (
    <div className="flex flex-col items-center h-[calc(100vh-4rem)] gap-5 py-6"> {/* height calculation to take into account navbar*/}
        <h1 className="text-2xl">
          Which song is better?
        </h1>
        <div className="text-2xl bg-sky-600 w-1/4 h-12 text-center rounded-lg flex items-center justify-center">
          Round {currentRound}/{roundNum}
        </div>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-5 items-center bg-stone-800 p-5 rounded-lg shadow-lg">
            {getYoutube({url: video1})}
            <button 
              className="text-2xl bg-sky-600 w-4/5 h-12 text-center rounded-lg flex items-center justify-center hover:scale-105 hover:bg-sky-700"
              onClick={() => handleClick({ removeSong: currentRound })}
            >
              Pick Left
            </button>
          </div>
          <div className="flex flex-col gap-5 items-center bg-stone-800 p-5 rounded-lg shadow-lg">
            {getYoutube({url: video2})}
            <button 
              className="text-2xl bg-sky-600 w-4/5 h-12 text-center rounded-lg flex items-center justify-center hover:scale-105 hover:bg-sky-700" 
              onClick={() => handleClick({ removeSong: currentRound - 1 })}
            >
              Pick Right
            </button>
          </div>
        </div>
        <button 
          className="text-2xl bg-sky-600 w-4/5 h-12 text-center rounded-lg flex items-center justify-center hover:scale-105 hover:bg-sky-700" 
          onClick={() => {router.push('/')}}
        >
          PRESS
        </button>
    </div>
  )
}