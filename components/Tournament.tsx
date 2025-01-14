'use client'

import Youtube, { YouTubeProps } from 'react-youtube';
import { PickButton } from '@/components/PickButton';
import { getRandomAllSongs } from '@/lib/bracket';
import { useState, useEffect} from 'react';

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


export const Tournament = ({ songList }: {songList : string[]}) => {

  useEffect(() => {
    console.log('Tournament component rendered');
  });

  const [ roundNum, setRoundNum] = useState(1)
  const [ videos, setVideos] = useState(songList)
  const video1 = videos[0]
  const video2 = videos[1]

  console.log(videos.length)
  console.log(videos)

  function handleClick() {
    setRoundNum(roundNum + 1)
    setVideos(videos.slice(2))
  }

  return (
    <div className="flex flex-col items-center h-[calc(100vh-4rem)] gap-5 py-6"> {/* height calculation to take into account navbar*/}
        <h1 className="text-2xl">
          Which song is better?
        </h1>
        <div className="text-2xl bg-sky-600 w-1/4 h-12 text-center rounded-lg flex items-center justify-center">
          Round {roundNum}/{songList.length/2}
        </div>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-5 items-center bg-stone-800 p-5 rounded-lg shadow-lg">
            {getYoutube({url: video1})}
            <PickButton />
          </div>
          <div className="flex flex-col gap-5 items-center bg-stone-800 p-5 rounded-lg shadow-lg">
            {getYoutube({url: video2})}
            <PickButton />
          </div>
        </div>
        <button className="text-2xl mt-8 bg-sky-600 w-2/5 h-12 text-center rounded-lg flex items-center justify-center hover:scale-105 hover:bg-sky-700" onClick={handleClick}>
          Next Matchup
        </button>
    </div>
  )
}