import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-full max-w-screen-md m-auto">
        <div className="flex flex-row">
          <div className="bg-gray-600 py-32 px-5">
            Find your ultimate song of 2024!
          </div>
          <Image src="/kpop-logo.png" alt="kpop logo" width={450} height={450}/>
        </div>
      </div>
    </main>
  );
}
