import { endpoint } from '@/utils/endpoint';
import { shuffle } from '@/lib/shuffle';

export type Song = {
  title: string;
  artist: string;
  youtube_url: string;
}

export async function getRandomAllSongs({numberOfSongs}: {numberOfSongs: number}) {
  const data = await fetch(`${endpoint}/bracket`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  const jsonData = await data.json()

  // Check if jsonData.data is defined and is an array
  if (!jsonData.pop_songs || !Array.isArray(jsonData.pop_songs)) {
    throw new Error('Invalid data structure');
  }

  const youtubeUrls: string[] = jsonData.pop_songs.map((song: Song) => song.youtube_url)

  return shuffle({ array: youtubeUrls.splice(0, numberOfSongs) });
}