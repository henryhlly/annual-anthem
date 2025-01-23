import { connectToDatabase } from '@/lib/mongodb.js';

export default async function Page() {
  const pop_songs = await connectToDatabase();

  await console.log(pop_songs)
  
  return (
    <div>
      Hello
    </div>
  );
}