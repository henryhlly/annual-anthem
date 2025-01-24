"use client"

import Image from "next/image";
import { EmblaCarousel } from "./component/EmblaCarousel";
import { EmblaCarouselAlbums } from "./component/EmblaCarouselAlbums";

export default function Home() {
  return (
    <main style={{ overflow: 'hidden', height: '100vh' }}>
      <div className="flex flex-row h-full">
        {/* Left Side Content */}
        <div className="flex items-center justify-center w-1/2 relative">
        <EmblaCarousel />
          {/* Add content here */}
        </div>
        {/* Right Side Content */}
        <div className="flex flex-col w-1/2 items-center justify-center gap-10">
          {/* Top Column for Albums */}
          <EmblaCarouselAlbums />
          {/* Bottom Column for Description Box */}
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
  );
}