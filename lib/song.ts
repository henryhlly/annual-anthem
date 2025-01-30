import { shuffle } from '@/lib/shuffle';
import { endpoint } from '@/utils/endpoint';

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


export async function getHighestWin({ genreData }: {genreData: string}) {
  const data = await fetch(`${endpoint}/result/${genreData}`)

  if (!data.ok) {
    throw new Error('Failed to fetch all songs')
  }
  return data.json()
}

export async function addSongWin({ genreData, url }: {genreData: string, url: string}) {
  await fetch(`/api/songs/${genreData}/${url}`, { method: 'POST' });
}

// import { connectToCollection } from './mongodb';

// export async function getAllSongs({ genreData }: {genreData: string}) {
//   const collection = await connectToCollection({ collectionName: genreData })
//   const data = await collection.find({}, { projection: { _id: 0 } }).toArray();
//   return data;
// }

// export async function getRandomAllSongs({ genreData, numberOfSongs }: { genreData: string, numberOfSongs: number}) {
//   const collection = await connectToCollection({ collectionName: genreData })
//   const data = await collection.find({}, { projection: { _id: 0 } }).toArray();
//   const youtubeUrls: string[] = data.map((song) => (song).youtube_url);
//   return shuffle({ array: youtubeUrls }).splice(0, numberOfSongs);
// }

// export async function getSongByUrl({ genreData, url }: { genreData: string, url: string }) {
//   const collection = await connectToCollection({ collectionName: genreData })
//   const data = await collection.find({ youtube_url: url }, { projection: { _id: 0 } }).toArray();
//   return data[0];
// }

// export async function getHighestWin({ genreData }: {genreData: string}) {
//     const collection = await connectToCollection({ collectionName: genreData })
//     const result = await collection.find({}, { projection: { _id: 0 } }).sort({ wins: -1 }).toArray();
//     const data: Song[] = result.map((song) => ({
//         title: song.title,
//         artist: song.artist,
//         youtube_url: song.youtube_url,
//         wins: song.wins
//     }));
//     return data;
// }

// export async function addSongWin({ genreData, url }: {genreData: string, url: string}) {
//   const collection = await connectToCollection({ collectionName: genreData })
//   const song = await collection.find({ youtube_url: url }, { projection: { _id: 0 } }).toArray();
//   const numWins = song[0].wins
//   collection.updateOne({ youtube_url: url }, { $set: { wins: numWins + 1 }})
// }