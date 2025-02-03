"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Mousewheel, EffectFade, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Genre } from '@/lib/genre';
import Button from '@/components/Button';

interface SwiperInstance {
	activeIndex: number;
}

const Description = () => {
  return (
    <div className="bg-stone-700/50 py-10 px-6 xl:py-12 xl:px-12 w-full rounded-lg flex flex-col gap-5 shadow-lg h-auto">
      <h1 className="text-white lg:text-2xl text-base">
        Find your ultimate song of 2024!
      </h1>
      <p className="text-white lg:text-base text-xs">
        Go through a bracket style tournament system where you have the power, and determine your favourite songs of the past year.
      </p>
    </div>
  )  
}

export default function Carousel({ slides }: { slides: Genre[] }) {
	const [genreSwiper, setGenreSwiper] = useState(useSwiper())
	const [albumSwiper, setAlbumSwiper] = useState(useSwiper())

	const carouselIndex = useRef(0)
	const [selectedValue, setSelectedValue] = useState('32');

  const scrollPrev = () => {
    if (genreSwiper) {
			genreSwiper.slidePrev();
		}
  };

  const scrollNext = () => {
    if (genreSwiper) {
			genreSwiper.slideNext();
		}
  };

	const handleSlideChange = (swiper: SwiperInstance) => {
		carouselIndex.current = swiper.activeIndex;
		console.log(carouselIndex.current);
	};

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

	const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setScreenWidth(window.innerWidth);
      
      // Set initial width
      setScreenWidth(window.innerWidth);

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
	if (screenWidth) console.log(screenWidth)

	const Dropdown = () => {
		return (
			<div className="pb-5 flex flex-row items-center gap-3">
				<label>How many songs?</label>
				<select
					id="dropdown"
					value={selectedValue}
					onChange={handleChange}
					className="ml-5 px-4 py-2 text-white font-semibold rounded-lg bg-stone-700"
				>
					<option value={64}>64 Songs</option>
					<option value={32}>32 Songs</option>
					<option value={16}>16 Songs</option>
					<option value={8}>8 Songs</option>
				</select>
			</div>
		)
	}

  return (
		<div className="flex flex-col xl:flex-row rounded-2xl relative items-center gap-16 min-h-[calc(100vh-4rem)] h-full">
			<div className="w-auto mx-10 max-w-[80%] xl:hidden">
				<Description />
			</div>
			
			{/* LEFT SIDE */}
			<div className="w-1/2 flex flex-col items-center items-center">
				<div className="flex flex-row pb-10 items-center">
					<button onClick={scrollPrev} className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full shadow-md hover:bg-gray-600 transition xl:mr-5 hidden md:flex">
						<FaArrowLeft size={30} />
					</button>
					<Swiper
						spaceBetween={20}
						slidesPerView={1}
						loop={true}
						mousewheel={true}
						speed={1000}
						modules={[Mousewheel, Controller]}
						controller={{ control: albumSwiper }}
						onSwiper={setGenreSwiper}
						onSlideChange={handleSlideChange}
						style={{ width: "500px", zIndex: 1}}
						className="h-[60vh]"
					>
						{slides.map((genre: Genre, index) => (
							<SwiperSlide key={index} className="flex flex-col items-center">
								<div className="flex flex-col items-center">
									<Image src={"/"+genre.image+".png"} alt={`Slide ${index}`} width={450} height={450} className="w-[50vh] h-auto" />
									<h1 className="text-2xl font-semibold text-center">{genre.name}</h1>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<button onClick={scrollNext} className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full shadow-md hover:bg-gray-600 transition xl:ml-5 hidden md:flex">
						<FaArrowRight size={30} />
					</button>
				</div>
				<div className="pb-32">
					<Dropdown />
					<Button href={`/bracket/${slides[carouselIndex.current].id}/${selectedValue}`} text={"Start"} width={400}/>
				</div>
			</div>

			{/* RIGHT SIDE */}
			<div className="xl:max-h-screen xl:w-1/3 w-2/5 flex flex-col items-center items-center hidden xl:block">
				<Swiper
					spaceBetween={20} 
					slidesPerView={1} 
					loop={true} 
					effect="fade"
					speed={1000}
					modules={[EffectFade, Controller]}
					controller={{ control: genreSwiper }} 
					direction="vertical"
					onSwiper={setAlbumSwiper}
					style={{ zIndex: 0, position: "relative" }}
					className="h-[40vh] max-w-full mt-8"
				>
					{slides.map((genre: Genre, index) => (
						<SwiperSlide key={index} className="flex justify-center items-center">
							<div className="flex flex-col items-center">
								<Image src={"/"+genre.image+"-albums.png"} alt={`Slide ${index}`} width={400} height={400} className="w-[50vh] h-auto" quality={100} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<Description />
			</div>
			
		</div>
  );
}
