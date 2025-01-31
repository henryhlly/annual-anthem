import { connectToCollection } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: Promise<{ data: string }>}) {
  const { data } = await params
  const collection = await connectToCollection({ collectionName: data })
  const result = await collection.find({}).toArray();
  return NextResponse.json(result);
}