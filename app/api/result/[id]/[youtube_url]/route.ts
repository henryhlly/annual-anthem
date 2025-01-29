import { NextResponse } from 'next/server';
import { addSongWin } from '@/lib/song';
import { getGenreById } from '@/lib/genre';

export async function POST(request: Request) {
  const { id, youtube_url } = await request.json();
  const genre = await getGenreById({ genreId: id });
  await addSongWin({ genreData: genre.data, url: youtube_url });
  return NextResponse.json({ success: true });
}
