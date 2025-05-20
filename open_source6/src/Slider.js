import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Slider(){
	// console.log("component in");

	let [device, setDevice]=useState(null);

	let resizeHandler=() => {
		if(window.innerWidth > 1024){
			if(device !== "desktop"){
				// console.log("desktop");

				setDevice("desktop");
			}
		}
		else{
			if(device !== "mobile"){
				// console.log("mobile");

				setDevice("mobile");
			}
		}
	};

	useEffect(() => {
		resizeHandler();

		window.addEventListener("resize", resizeHandler);

		return(() => {
			// console.log("unmount or update");

			window.removeEventListener("resize", resizeHandler);
		});
	});

	if(device === null){
		return(
			<p>Loading ...</p>
		);
	}
	else{
		return(
			device === "mobile" ?
			<Swiper
				slidesPerView={1}
				spaceBetween={20}
				centeredSlides={true}
				initialSlide={2}
				pagination={true}
				breakpoints={{
					640: {
						slidesPerView: 2
					},
					768: {
						slidesPerView: 4
					},
					1024: {
						slidesPerView: 5
					}
				}}
				modules={[Pagination]}
				className="swiper mySwiper"
			>
				<SwiperSlide>Slide1</SwiperSlide>
				<SwiperSlide>Slide2</SwiperSlide>
				<SwiperSlide>Slide3</SwiperSlide>
				<SwiperSlide>Slide4</SwiperSlide>
				<SwiperSlide>Slide5</SwiperSlide>
				<SwiperSlide>Slide6</SwiperSlide>
				<SwiperSlide>Slide7</SwiperSlide>
				<SwiperSlide>Slide8</SwiperSlide>
				<SwiperSlide>Slide9</SwiperSlide>
			</Swiper>
			:
			<div className="swiper mySwiper">
				<div className="swiper-wrapper">
					<div className="swiper-slide">Slide 1</div>
					<div className="swiper-slide">Slide 2</div>
					<div className="swiper-slide">Slide 3</div>
					<div className="swiper-slide">Slide 4</div>
					<div className="swiper-slide">Slide 5</div>
					<div className="swiper-slide">Slide 6</div>
					<div className="swiper-slide">Slide 7</div>
					<div className="swiper-slide">Slide 8</div>
					<div className="swiper-slide">Slide 9</div>
				</div>
			</div>
		);
	}
}

export default Slider;