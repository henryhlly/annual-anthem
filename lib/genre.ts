import { endpoint } from '@/utils/endpoint'

export type Genre = {
  id: string;
  name: string;
  data: string;
  image: string;
}

export async function getAllGenres() {
  const data = await fetch(`${endpoint}/genres`)

  if (!data.ok) {
    throw new Error('Failed to fetch all genres')
  }
  return data.json()
}

export async function getGenreById({ genreId }: { genreId: string }) {
  const data = await fetch(`${endpoint}/genres/${genreId}`)

  if (!data.ok) {
    throw new Error('Failed to fetch genre by provided ID')
  }
  return data.json()
}