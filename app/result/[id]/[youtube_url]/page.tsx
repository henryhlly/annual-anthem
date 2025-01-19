import { Result } from '@/components/Result';
import { getSongByUrl } from '@/lib/song';
import { Song } from '@/lib/song';
import { Button } from '@/components/Button';

export default async function Page({ params }: { params: { id: string, youtube_url: string } }) {
  const { id, youtube_url } = await params
  const data = await getSongByUrl({ genreId: id, url: youtube_url });

  return (
    <main className="flex flex-col items-center h-[calc(100vh-4rem)] w-full py-6 gap-8">
      <Result song={data.song} />
      <Button href={"/"} text={"Back to Home"} hasArrow={true}/>
    </main>
  )
}