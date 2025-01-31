"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

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
		<div className="relative">
			<Swiper
				spaceBetween={20} 
				slidesPerView={1} 
				loop={true} 
				mousewheel={true}
				modules={[Mousewheel]} 
				direction="vertical"
				onSwiper={(swiper) => setSwiper(swiper)}
				style={{ height: "500px", zIndex: 0}} // Set height to prevent collapsing
			>
				{slides.map((src, index) => (
					<SwiperSlide key={index}>
						<img src={src} alt={`Slide ${index}`} className="w-1/4 h-auto rounded-lg" />
					</SwiperSlide>
				))}
			</Swiper>
			{/* Navigation Buttons */}
      <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 z-2">Prev</button>
      <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-2">Next</button>
		</div>
    
  );
}
