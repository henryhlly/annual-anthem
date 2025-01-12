import { endpoint } from '@/utils/endpoint';

export async function getAllGenres() {
  const data = await fetch(`${endpoint}/start`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export async function getGenreById(id : string) {
  const data = await fetch(`${endpoint}/start/${id}`)

  if (!data.ok) {
    throw new Error('failed to fetch data')
  }

  return data.json()
}