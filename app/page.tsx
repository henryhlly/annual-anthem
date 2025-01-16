import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home () {
  return (
    <main style = {{ overflow: 'hidden', height: '100vh'}}>
      <div className = "flex flew-row h-full">
        {/* Left side Content */}
        <div className="flex items-center jusitfy-center w-1/2">
        <Image src="/kpop-logo.png" alt="kpop logo" width={600} height={600} quality={100} className="mx-auto" />
        </div>
        {/* Right Side Content */}
        <div className="flex flex-col w-1/2 items-center justify-center gap-10">
          {/* Top Column for Right side */}
          <Image src="/kpop-albums.png" alt="Kpop Albums" width={800} height={800} quality={100} />
        {/* Bottom Column for Description textbox */}
            <div className="bg-stone-700/50 py-16 px-16 max-w-2xl rounded-lg flex flex-col gap-5 shadow-lg mt-10">
              <h1 className="text-white text-3xl">
                Find your ultimate song of 2024!
              </h1>
              <p className="text-white text-sm">
                Go through a bracket style tournament system where you have the power, and determine your favourite songs of the past year.
              </p>
            </div>
          </div>
        </div>
    </main>
  )

  
}
