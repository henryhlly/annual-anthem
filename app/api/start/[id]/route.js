import pop_songs from '@/data/pop_songs.json';
import genres from '@/data/genres.json';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  try {
    const genre = genres.data.find(item => item.id === params.id)

    if (!genre) {
      return new NextResponse('not found', { status: 404 })
    }

    return NextResponse.json({genre})
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}