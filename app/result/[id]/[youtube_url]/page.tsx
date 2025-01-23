import { Result } from '@/components/Result';
import { getSongByUrl } from '@/lib/song';
import { Button } from '@/components/Button';
import { getGenreById } from '@/lib/genre';

export default async function Page({ params }: { params: { id: string, youtube_url: string } }) {
  const { id, youtube_url } = await params

  const genre = await getGenreById({ genreId: id })
  const song = await getSongByUrl({ genreData: genre.data, url: youtube_url });

  return (
    <main className="flex flex-col items-center h-[calc(100vh-4rem)] w-full py-6 gap-8">
      <Result title={song.title} artist={song.artist} youtube_url={song.youtube_url} />
      <Button href={"/"} text={"Back to Home"} hasArrow={true}/>
    </main>
  )
}