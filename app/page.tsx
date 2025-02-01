import Carousel from '@/components/Carousel';
import { getAllGenres } from '@/lib/genre';

export default async function Page() {
  const data = await getAllGenres()

  return (
      <main className="flex flex-col h-[calc(100vh-4rem)]">
          <Carousel slides={data} />
      </main>
  ) 
}
