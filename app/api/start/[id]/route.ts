import genres from '@/data/genres.json';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const genre = genres.data.find(item => item.id === id)

    if (!genre) {
      return new NextResponse('not found', { status: 404 })
    }

    return NextResponse.json({genre})
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}