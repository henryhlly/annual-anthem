import { shuffle } from '@/lib/shuffle';
import { connectToCollection } from './mongodb';

export type Song = {
  title: string;
  artist: string;
  youtube_url: string;
  wins: number;
}

export async function getAllSongs({ genreData }: {genreData: string}) {
  const collection = await connectToCollection({ collectionName: genreData })
  const data = await collection.find({}).toArray();
  return data;
}

export async function getRandomAllSongs({ genreData, numberOfSongs }: { genreData: string, numberOfSongs: number}) {
  const collection = await connectToCollection({ collectionName: genreData })
  const data = await collection.find({}).toArray();
  const youtubeUrls: string[] = data.map((song: Song) => song.youtube_url)
  return shuffle({ array: youtubeUrls }).splice(0, numberOfSongs);
}

export async function getSongByUrl({ genreData, url }: { genreData: string, url: string }) {
  const collection = await connectToCollection({ collectionName: genreData })
  const data = await collection.find({ youtube_url: url }).toArray();
  return data[0];
}

export async function addSongWin({ genreData, url }: {genreData: string, url: string}) {
  const collection = await connectToCollection({ collectionName: genreData })
  const song = await collection.find({ youtube_url: url }).toArray();
  const numWins = song[0].wins

  await console.log(numWins)

  await collection.updateOne({ youtube_url: url }, { $set: { wins: numWins + 1 }})
}