import { connectToCollection } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string }}) {
  const { id } = await params
  const collection = await connectToCollection({ collectionName: "genres" })
  const data = await collection.find({ id: id }).toArray();
  return NextResponse.json(data[0])
}