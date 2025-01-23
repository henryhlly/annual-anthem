import { endpoint } from '@/utils/endpoint';
import { connectToCollection } from './mongodb';

export type Genre = {
  id: string;
  name: string;
  data: string;
  image: string;
}

export async function getAllGenres() {
  const collection = await connectToCollection({ collectionName: "genres" })
  const data = await collection.find({}).toArray();
  return data;
}

export async function getGenreById({ genreId }: { genreId: string }) {
  const collection = await connectToCollection({ collectionName: "genres" })
  const data = await collection.find({ id: genreId }).toArray();
  return data[0];
}