import { endpoint } from '@/utils/endpoint'

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
  const data = await fetch(`${endpoint}/bracket`, { cache: 'no-store' })

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  const jsonData = await data.json()
  console.log(jsonData); // Log the jsonData to inspect its structure

  // Check if jsonData.data is defined and is an array
  if (!jsonData.data || !Array.isArray(jsonData.data)) {
    throw new Error('Invalid data structure');
  }

  const youtubeUrls: string[] = jsonData.pop_songs.map((song: { youtubeUrl: string }) => song.youtubeUrl)

  return shuffle({ array: youtubeUrls });
}