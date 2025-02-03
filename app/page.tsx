import Carousel from '@/components/Carousel';
import { getAllGenres } from '@/lib/genre';

export default async function Page() {
  const rawData = await getAllGenres()
  const data = rawData.map(item => ({
    id: item.id,
    name: item.name,
    data: item.data,
    image: item.image
  }))
  
  return (
      <main className="h-full">
        <Carousel slides={data} />
      </main>
  ) 
}
