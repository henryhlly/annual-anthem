"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import Image from 'next/image';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function Carousel({ slides }: { slides: string[] }) {
	const [swiper, setSwiper] = useState(useSwiper())

  const scrollPrev = () => {
    if (swiper) {
			console.log("Go Prev")
			swiper.slidePrev();
		}
  };

  const scrollNext = () => {
    if (swiper) {
			console.log("Go Next")
			swiper.slideNext();
		}
  };

  return (
		<div className="relative flex flex-row w-1/2 items-center pt-32 gap-2">
			<Swiper
				spaceBetween={20} 
				slidesPerView={1} 
				loop={true} 
				mousewheel={true}
				modules={[Mousewheel]} 
				direction="vertical"
				onSwiper={setSwiper}
				style={{ height: "400px", zIndex: 0, marginLeft: "auto", marginRight: 0}}
			>
				{slides.map((src: string, index) => (
					<SwiperSlide key={index} className="center">
						<Image src={src} alt={`Slide ${index}`} width={400} height={400} className="h-auto rounded-lg" />
					</SwiperSlide>
				))}
			</Swiper>
			{/* Navigation Buttons */}
			<div className="flex flex-col gap-32">
				<button onClick={scrollPrev} className="w-10 z-2">
					<FaArrowUp size={30} />
				</button>
				<button onClick={scrollNext} className="w-10 z-2">
					<FaArrowDown size={30} />
				</button>
			</div>
		</div>
    
  );
}
