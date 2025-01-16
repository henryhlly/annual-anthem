import { getYoutube } from "@/lib/youtube";
import { Song } from "@/lib/bracket";
import Image from 'next/image';


export default async function Page() {
  const video_id = "kMW2oz7FJps"
  const albumImageUrl = `http://img.youtube.com/vi/${video_id}/hqdefault.jpg`

  return (
    <main>
      <div className="relative right-1/4 flex flex-col items-center h-[calc(100vh-4rem)] w-full py-32">
        <h1 className="text-4xl font-medium">
          Your Song of 2024 is:
        </h1>
        <Image
            src={albumImageUrl}
            alt="Album Art"
            width={480}
            height={480}
          />
      </div>
    </main>
  )
}