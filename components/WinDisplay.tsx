'use client'
import { Song } from '@/lib/song';
import { useState, useRef } from 'react';
import Button from '@/components/Button';
import Image from 'next/image';

export default function WinDisplay({ allSongs }: { allSongs: Song[] }) {
	const [numToDisplay, setNumToDisplay] = useState(3)
	const buttonText = useRef("View All")
	const songsToDisplay = allSongs.slice(0, numToDisplay)

	function toggleViewAll() {
		console.log("Toggle")
		if (numToDisplay > 3) {
			setNumToDisplay(3)
			buttonText.current = "View All"
		} else {
			setNumToDisplay(allSongs.length)
			buttonText.current = "Hide"
		}
	}

	return (
		<div className="flex flex-col items-center w-full py-8 gap-5 ">
			{songsToDisplay.map((song: Song, index: number) => (
				<div key={index} className="flex flex-row w-full bg-stone-700/50 p-2 rounded-lg">
					<Image src={`https://img.youtube.com/vi/${song.youtube_url}/sddefault.jpg`} alt="logo" width={120} height={80}/>
					<div className="flex flex-col w-full gap-3 items-center pt-2">
						<h1 className="text-center font-semibold">{song.title} - {song.artist}</h1>
						<h2 className="px-1 py-1 w-1/4 rounded-lg bg-sky-600/50 text-center font-semibold text-sm">Wins: {song.wins}</h2>
					</div>
				</div>
			))}
			<Button handleClick={toggleViewAll} text={buttonText.current} />
		</div>
	)
}