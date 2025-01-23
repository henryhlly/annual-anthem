require('dotenv').config({ path: './mongodb.env' });

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${username}:${password}@annual-anthem.rdcdd.mongodb.net/?retryWrites=true&w=majority&appName=Annual-Anthem`;

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