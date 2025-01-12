import genres from '@/data/genres.json';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ genres: genres.data})
}