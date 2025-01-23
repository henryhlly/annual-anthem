// // filepath: /c:/Users/mrbro/OneDrive/Documents/GitHub/annual-anthem/app/page.tsx

// "use client"

// import Image from "next/image";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { useRef } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// export default function Home() {
//   const carouselRef = useRef<Carousel | null>(null);

//   const handlePrev = () => {
//     if (carouselRef.current) {
//       carouselRef.current.moveTo(carouselRef.current.state.selectedItem - 1);
//     }
//   };

//   const handleNext = () => {
//     if (carouselRef.current) {
//       carouselRef.current.moveTo(carouselRef.current.state.selectedItem + 1);
//     }
//   };

//   return (
//     <main style={{ overflow: 'hidden', height: '100vh' }}>
//       <div className="flex flex-row h-full">
//         {/* Left Side Content */}
//         <div className="flex items-center justify-center w-1/2 relative">
//           <button
//             onClick={handlePrev}
//             className="absolute left-4 bg-gray-800 text-white p-2 rounded-full z-10"
//           >
//             <FaChevronLeft />
//           </button>
//           <Carousel
//             ref={carouselRef}
//             showThumbs={false}
//             showStatus={false}
//             showArrows={false}
//             infiniteLoop={true}
//             autoPlay={false}
//             interval={3000}
//           >
//             <div className="flex items-center justify-center">
//               <Image src="/general-logo.png" alt="General Logo" width={127} height={127} quality={100}/>
//             </div>
//             <div className="flex items-center justify-center">
//               <Image src="/kpop-logo.png" alt="Kpop Logo" width={127} height={127} quality={100}/>
//             </div>
//             {/* Add more logos if needed */}
//           </Carousel>
//           <button
//             onClick={handleNext}
//             className="absolute right-4 bg-gray-800 text-white p-2 rounded-full z-10"
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//         {/* Right Side Content */}
//         <div className="flex flex-col w-1/2 items-center justify-center gap-10">
//           {/* Top Column for Albums */}
//           <Image src="/kpop-albums.png" alt="Kpop Albums" width={800} height={800} quality={100} />
//           {/* Bottom Column for Description Box */}
//           <div className="bg-stone-700/50 py-16 px-16 max-w-2xl rounded-lg flex flex-col gap-5 shadow-lg mt-10">
//             <h1 className="text-white text-3xl">
//               Find your ultimate song of 2024!
//             </h1>
//             <p className="text-white text-sm">
//               Go through a bracket style tournament system where you have the power, and determine your favourite songs of the past year.
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client"

import Image from "next/image";
import { EmblaCarousel } from "./component/EmblaCarousel";

const slides = [
  { src: '/general-logo.png', alt: 'General Logo', width: 500, height: 500, quality: 100 },
  { src: '/kpop-logo.png', alt: 'Kpop Logo', width: 500, height: 500, quality: 100 },
  { src: '/slide3.png', alt: 'Slide 3', width: 500, height: 500, quality: 100 },
];

const options = { loop: true };

export default function Home() {
  return (
    <main style={{ overflow: 'hidden', height: '100vh' }}>
      <div className="flex flex-row h-full">
        {/* Left Side Content */}
        <div className="flex items-center justify-center w-1/2 relative">
        <EmblaCarousel slides={slides} options={options} />
          {/* Add content here */}
        </div>
        {/* Right Side Content */}
        <div className="flex flex-col w-1/2 items-center justify-center gap-10">
          {/* Top Column for Albums */}
          <Image src="/kpop-albums.png" alt="Kpop Albums" width={800} height={800} quality={100} />
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