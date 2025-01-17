import pop_songs from '@/data/pop_songs.json';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { youtube_url: string } }) {
  try {
    const { youtube_url } = await params
    const song = pop_songs.data.find(item => item.youtube_url === youtube_url)

    if (!song) {
      return new NextResponse('not found', { status: 404 })
    }

    return NextResponse.json({song})
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}