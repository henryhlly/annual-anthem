"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Mousewheel, EffectFade, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { useState } from "react";
import Image from 'next/image';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Genre } from '@/lib/genre';

export default function Carousel({ slides }: { slides: Genre[] }) {
	const [genreSwiper, setGenreSwiper] = useState(useSwiper())
	const [albumSwiper, setAlbumSwiper] = useState(useSwiper())

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

  return (
		<div className="relative flex flex-row w-1/2 items-center pt-32 gap-2">
			<Swiper
				spaceBetween={20} 
				slidesPerView={1} 
				loop={true} 
				mousewheel={true}
				speed={1000}
				modules={[Mousewheel, Controller]}
				controller={{ control: albumSwiper }}
				direction="vertical"
				onSwiper={setGenreSwiper}
				style={{ height: "500px", zIndex: 0, marginLeft: "auto", marginRight: 0}}
			>
				{slides.map((genre: Genre, index) => (
					<SwiperSlide key={index} className="center">
						<div className="flex flex-col items-center">
							<Image src={"/"+genre.image+".png"} alt={`Slide ${index}`} width={400} height={400} className="h-auto rounded-lg" />
							<h1 className="text-2xl font-semibold">{genre.name}</h1>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			{/* Navigation Buttons */}
			<div className="flex flex-col gap-32 pb-32">
				<button onClick={scrollPrev} className="w-10 z-2">
					<FaArrowUp size={30} />
				</button>
				<button onClick={scrollNext} className="w-10 z-2">
					<FaArrowDown size={30} />
				</button>
			</div>

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
				style={{ height: "500px", zIndex: 0, marginLeft: "auto", marginRight: 0}}
			>
				{slides.map((genre: Genre, index) => (
					<SwiperSlide key={index} className="center">
						<div className="flex flex-col items-center">
							<Image src={"/"+genre.image+"-albums.png"} alt={`Slide ${index}`} width={400} height={400} className="h-auto" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>

		</div>
  );
}
