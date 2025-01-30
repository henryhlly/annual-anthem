import { getAllGenres } from '@/lib/genre';

export default async function Page() {
    const data = await getAllGenres()

    return (
        <div>
            Hello
        </div>
    )
}