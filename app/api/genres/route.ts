import { connectToCollection } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
    const collection = await connectToCollection({ collectionName: "genres" })
    const data = await collection.find({}).toArray();
    return NextResponse.json(data);
}