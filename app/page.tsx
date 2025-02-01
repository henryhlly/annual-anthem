import Image from "next/image";
import Link from "next/link";
import { getAllGenres, Genre} from "@/lib/genre";

export default async function Home() {
  const data = await getAllGenres()

  return (
    <main>
      {/* Description textbox */}
      <div className="fixed top-1/3 left-32 bg-stone-700/50 py-16 px-16 max-w-md rounded-lg flex flex-col gap-5 shadow-lg">
        <h1 className="text-white text-3xl">
          Find your ultimate song of 2024!
        </h1>
        <p className="text-white text-sm">
          Go through a bracket style tournament system where you have the power, and determine your favourite songs of the past year.
        </p>
      </div>

      <div className="flex flex-col ml-96 py-32 min-h-screen items-center justify-center gap-32">
        {data?.map((genre: Genre) => {
          return (
            <Link href={"/bracket/"+genre.id} className="flex flex-col -gap-16" key={genre.id}>
              <h1 className="text-4xl text-center font-medium">
                {genre.name}
              </h1>
              <Image src={"/"+genre.image+".png"} alt="general logo" width={400} height={400} quality={100} />
            </Link>
          )
        })}
      </div>
    </main>
  );
}