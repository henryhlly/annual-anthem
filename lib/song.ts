import { endpoint } from '@/utils/endpoint';
import { shuffle } from '@/lib/shuffle';

export type Song = {
  title: string;
  artist: string;
  youtube_url: string;
}

export async function getRandomAllSongs({ genreId, numberOfSongs }: { genreId: string, numberOfSongs: number}) {
  const data = await fetch(`${endpoint}/bracket/${genreId}`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  const jsonData = await data.json()

  // Check if jsonData.data is defined and is an array
  if (!jsonData.pop_songs || !Array.isArray(jsonData.pop_songs)) {
    throw new Error('Invalid data structure');
  }

  const youtubeUrls: string[] = jsonData.pop_songs.map((song: Song) => song.youtube_url)

  return shuffle({ array: youtubeUrls }).splice(0, numberOfSongs);
}

export async function getSongByUrl({ url }: { url: string }) {
  const data = await fetch(`${endpoint}/result/${url}`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}