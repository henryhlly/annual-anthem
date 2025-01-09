import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Description textbox */}
      <div className="fixed top-64 left-32 bg-stone-700/50 py-10 px-5 max-w-md rounded-lg flex flex-col gap-5 shadow-lg">
        <h1 className="text-white text-2xl">
          Find your ultimate song of 2024!
        </h1>
        <p className="text-white text-sm">
          Go through a bracket style tournament system where you have the power, and determine your favourite songs of the past year.
        </p>
      </div>
      <div className="flex flex-col ml-96 py-32 min-h-screen items-center justify-center gap-32">
        <div>
          <h1 className="text-4xl text-center font-medium">
        General
          </h1>
          <Image src="/general-logo.png" alt="general logo" width={300} height={300} quality={100} />
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
