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
  if (!jsonData.data || !Array.isArray(jsonData.data)) {
    throw new Error('Invalid data structure');
  }

  const youtubeUrls: string[] = jsonData.data.map((song: Song) => song.youtube_url)

  return shuffle({ array: youtubeUrls }).splice(0, numberOfSongs);
}

export async function getSongByUrl({ genreId, url }: { genreId: string, url: string }) {
  const data = await fetch(`${endpoint}/result/${genreId}/${url}`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}