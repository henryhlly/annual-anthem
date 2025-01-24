import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { useCallback } from 'react';
import './embla.css'; // Import the CSS file

export function EmblaCarousel() {
  // EmblaRef and Api for the genre carousel
  const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true });
  // EmblaRef and Api for the album carousel
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi1) emblaApi1.scrollPrev();
    if (emblaApi2) emblaApi2.scrollPrev();
  }, [emblaApi1, emblaApi2]);

  const scrollNext = useCallback(() => {
    if (emblaApi1) emblaApi1.scrollNext();
    if (emblaApi2) emblaApi2.scrollNext();
  }, [emblaApi1, emblaApi2]);

  const genreCarousel = () => {
    return (
      <div className="flex flex-col items-center justify-center w-1/2 relative">
        <div className="embla" ref={emblaRef1}>
          <div className="embla__container">
            <div className="embla__slide">
              <Image src="/general-logo.png" alt="general logo" width={800} height={800} quality={100} />
            </div>
            <div className="embla__slide">
              <Image src="/kpop-logo.png" alt="kpop logo" width={800} height={800} quality={100} />
            </div>
            <div className="embla__slide">Slide 3</div>
            </div>
          </div>
          <div className="embla__buttons">
            <button className="embla__button embla__prev" onClick={scrollPrev}>
              <svg className="embla__button__svg" viewBox="0 0 532 532">
                <path
                  fill="currentColor"
                  d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                />
              </svg>
            </button>
            <button className="embla__button embla__next" onClick={scrollNext}>
            <svg className="embla__button__svg" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  const albumCarousel = () => {
    return (
      <div className="embla" ref={emblaRef2}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image src="/2024-albums.png" alt="general albums" width={800} height={800} quality={100} />
          </div>
          <div className="embla__slide">
            <Image src="/kpop-albums.png" alt="kpop albums" width={800} height={800} quality={100} />
          </div>
          <div className="embla__slide">Slide 3</div>
          </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-row h-full">
      {/* Left Side Content */}
      {genreCarousel()}
      {/* Right Side Content */}
      <div className="flex flex-col w-1/2 items-center justify-center gap-10">
        {/* Top Column for Albums */}
        {albumCarousel()}
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
  );
}