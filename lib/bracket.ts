import { endpoint } from '@/utils/endpoint'

export type Song = {
  title: string;
  artist: string;
  youtube_url: string;
}

function shuffle({array}: {array: string[]}) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

export async function getRandomAllSongs() {
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

  return shuffle({ array: youtubeUrls });
}