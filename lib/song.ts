import { shuffle } from '@/lib/shuffle';
import { connectToCollection } from './mongodb';
import { endpoint } from '@/utils/endpoint'

export type Song = {
  title: string;
  artist: string;
  youtube_url: string;
  wins: number;
}

export async function getAllSongs({ genreData }: {genreData: string}) {
  const data = await fetch(`${endpoint}/songs/${genreData}`)

  if (!data.ok) {
    throw new Error('Failed to fetch all songs')
  }
  return data.json()
}

export async function getRandomAllSongs({ genreData, numberOfSongs }: { genreData: string, numberOfSongs: number}) {
  const data = await getAllSongs({ genreData: genreData })
  const youtubeUrls: string[] = data.map((song: Song) => song.youtube_url)
  return shuffle({ array: youtubeUrls }).splice(0, numberOfSongs);
}

export async function getSongByUrl({ genreData, url }: { genreData: string, url: string }) {
  const data = await fetch(`${endpoint}/songs/${genreData}/${url}`)

  if (!data.ok) {
    throw new Error('Failed to fetch song by provided URL')
  }
  return data.json()
}

export async function addSongWin({ genreData, url }: {genreData: string, url: string}) {
  await fetch(`/api/songs/${genreData}/${url}`, { method: 'POST' });
}