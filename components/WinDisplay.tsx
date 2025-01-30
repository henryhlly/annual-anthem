'use client'
import { Song } from '@/lib/song';
import { useState, useRef } from 'react';
import { Button } from '@/components/Button';

export const WinDisplay = ({ allSongs }: { allSongs: Song[] }) => {
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
			buttonText.current = "View Less"
		}
	}

	return (
		<div className="flex flex-col items-center w-full py-6 gap-8 ">
			{songsToDisplay.map((song, index) => (
				<div key={index} className="flex flex-row w-full bg-stone-700/50 p-5 rounded-lg gap-4">
					<img src={`https://img.youtube.com/vi/${song.youtube_url}/sddefault.jpg`} alt="logo" width={112} height={70}></img>
					<div className="flex flex-col w-full gap-3 item-center pt-2">
						<h1 className="text-center font-semibold">{song.title} - {song.artist}</h1>
						<h2 className="px-1 py-1 w-1/2 rounded-lg bg-sky-600 text-center font-semibold">Wins: {song.wins}</h2>
					</div>
				</div>
			))}
			<Button handleClick={toggleViewAll} text={buttonText.current} />
		</div>
	)
}