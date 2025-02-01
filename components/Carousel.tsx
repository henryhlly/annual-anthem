"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Mousewheel, EffectFade, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { useState, useRef } from "react";
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Genre } from '@/lib/genre';
import Button from '@/components/Button';

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

	const handleSlideChange = (swiper) => {
    carouselIndex.current = (swiper.activeIndex);
		console.log(carouselIndex.current)
  };

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

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
		<div className="flex flex-row p-6 rounded-2xl shadow-lg relative items-center gap-16">

			{/* LEFT SIDE */}
			<div className="w-1/2 flex flex-col items-center pt-2 items-center">
				<div className="flex flex-row pb-10 items-center">
					<button onClick={scrollPrev} className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full shadow-md hover:bg-gray-600 transition mr-10">
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
						style={{ height: "500px", width: "500px", zIndex: 1}}
					>
						{slides.map((genre: Genre, index) => (
							<SwiperSlide key={index} className="flex flex-col items-center">
								<div className="flex flex-col items-center">
									<Image src={"/"+genre.image+".png"} alt={`Slide ${index}`} width={450} height={450} />
									<h1 className="text-2xl font-semibold text-center">{genre.name}</h1>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<button onClick={scrollNext} className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full shadow-md hover:bg-gray-600 transition ml-10">
						<FaArrowRight size={30} />
					</button>
				</div>
				<Dropdown />
				<Button href={{ pathname: `/bracket/${slides[carouselIndex.current].id}`, query: { n: 0 } }} text={"Start"} width={400}/>
				
			</div>

			{/* RIGHT SIDE */}
			<div className="w-1/3 flex flex-col items-center pt-2 items-center gap-4">
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
					className="w-[550px] h-[400px] mt-16"
				>
					{slides.map((genre: Genre, index) => (
						<SwiperSlide key={index} className="flex justify-center items-center">
							<div className="flex flex-col items-center">
								<Image src={"/"+genre.image+"-albums.png"} alt={`Slide ${index}`} width={600} height={600} className="h-auto" quality={100} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Description textbox */}
				<div className="bg-stone-700/50 py-16 px-16 w-auto rounded-lg flex flex-col gap-5 shadow-lg">
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
