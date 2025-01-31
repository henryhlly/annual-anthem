import Carousel from '@/components/Carousel'
import { Button } from '@/components/Button'
import { getAllGenres } from '@/lib/genre'

export default async function Page() {
    const data = await getAllGenres()

    return (
        <main className="flex flex-col h-screen">
            <Carousel slides={data} />
            <Button href={"/"} text={"Start"}/>
        </main>
    )
}