import genres from '@/data/genres.json';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string, youtube_url: string } }) {
  try {
    const { id, youtube_url } = await params
    const genre = genres.data.find(item => item.id === id)

    if (!genre) {
      return new NextResponse('genre not found', { status: 404 });
    }

    const jsonData = await import(`@/data/${genre.data}.json`)
    const song = jsonData.data.find(item => item.youtube_url === youtube_url)

    if (!song) {
      return new NextResponse('song not found', { status: 404 })
    }

    return NextResponse.json({song})
  } catch (error) {
    console.error(error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

