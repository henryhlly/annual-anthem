import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

config({ path: './mongodb.env' });

const uri = process.env.MONGODB_CONNECTION_STRING;

if (!uri) {
  throw new Error('MONGODB_CONNECTION_STRING is not defined');
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri)

export async function connectToCollection({ collectionName }: { collectionName: string }) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    const db = client.db('annual-anthem');
    const collection = db.collection(collectionName);
    return (collection)
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
}