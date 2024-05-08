import React from 'react';
import styles from './CarouselCss.module.css';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'vertical',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

const images = [
	{
		src: 'https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
		alt: '3D rendering of an imaginary orange planet in space',
	},
	{
		src: 'https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
		alt: '3D rendering of an imaginary green planet in space',
	},
	{
		src: 'https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
		alt: '3D rendering of an imaginary blue planet in space',
	},
];

function Images() {
	return (
		<>
			<div className='swiper'>
				{/* <!-- Additional required wrapper --> */}
				<div className='swiper-wrapper'>
					{/* <!-- Slides --> */}
					{[
						images.map((img, i) => (
							<img
								className='swiper-slide'
								key={i + 1}
								id={`slide-${i + 1}`}
								src={img.src}
								alt={img.alt}
							/>
						)),
					]}
				</div>
				{/* <!-- If we need pagination --> */}
				<div className='swiper-pagination'></div>
				{/* <!-- If we need navigation buttons --> */}
				<div className='swiper-button-prev'></div>
				<div className='swiper-button-next'></div>
				{/* <!-- If we need scrollbar --> */}
				<div className='swiper-scrollbar'></div>
			</div>
		</>
	);
}

function CarouselCss() {
	return <Images />;
}

export default CarouselCss;
