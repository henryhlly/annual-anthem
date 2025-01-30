import { connectToCollection } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: Promise<{ data: string, url: string }>}) {
  const { data, url } = await params
  const collection = await connectToCollection({ collectionName: data })
  const result = await collection.find({ youtube_url: url }).toArray();
  return NextResponse.json(result[0]);
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ data: string, url: string }>}) {
  const { data, url } = await params;
  const collection = await connectToCollection({ collectionName: data })
  const song = await collection.find({ youtube_url: url }).toArray();
  const numWins = song[0].wins
  await collection.updateOne({ youtube_url: url }, { $set: { wins: numWins + 1 }})
  console.log(song[0].title + " has " + numWins + " wins")
  return NextResponse.json({ success: true });
}

  