import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="fixed top-64 left-32 bg-stone-700 py-10 px-5 max-w-md rounded-lg flex flex-col gap-5">
        <h1 className="text-white text-2xl">
          Find your ultimate song of 2024!
        </h1>
        <p className="text-white text-sm">
          Go through a bracket style tournament system where you have the power, and determine your favourite songs of the past year.
        </p>
      </div>
      <div className="flex flex-col w-full py-40 max-w-screen-sm min-h-screen h-auto m-auto mr-20 items-center gap-16">
        <div>
          <h1 className="text-4xl text-center font-medium">
            Kpop
          </h1>
          <Image src="/kpop-logo.png" alt="kpop logo" width={300} height={300} quality={100} />
        </div>
        <div>
          <h1 className="text-4xl text-center font-medium">
            Kpop
          </h1>
          <Image src="/kpop-logo.png" alt="kpop logo" width={300} height={300} quality={100} />
        </div>
      </div>
    </main>
  );
}
