import pop_songs from '@/data/pop_songs.json';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ pop_songs: pop_songs.data})
}