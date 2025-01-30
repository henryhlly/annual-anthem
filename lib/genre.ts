export type Genre = {
  id: string;
  name: string;
  data: string;
  image: string;
}

// export async function getAllGenres() {
//   const data = await fetch(`${endpoint}/genres`)

//   if (!data.ok) {
//     throw new Error('Failed to fetch all genres')
//   }
//   return data.json()
// }

// export async function getGenreById({ genreId }: { genreId: string }) {
//   const data = await fetch(`${endpoint}/genres/${genreId}`)

//   if (!data.ok) {
//     throw new Error('Failed to fetch genre by provided ID')
//   }
//   return data.json()
// }

import { connectToCollection } from './mongodb';

export async function getAllGenres() {
  const collection = await connectToCollection({ collectionName: "genres" })
  const data = await collection.find({}, { projection: { _id: 0 } }).toArray();
  return data;
}

export async function getGenreById({ genreId }: { genreId: string }) {
  const collection = await connectToCollection({ collectionName: "genres" })
  const data = await collection.find({ id: genreId }, { projection: { _id: 0 } }).toArray();
  return data[0];
}