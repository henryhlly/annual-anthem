import Carousel from '@/components/Carousel'
import { getAllGenres } from '@/lib/genre'

export default async function Page() {
    const data = await getAllGenres()

    return (
        <main>
            <Carousel slides={data} />
        </main>
    )
}