import { useRef, useEffect } from 'react';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import 'swiper/css/bundle';
import 'swiper/swiper-bundle.css';

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

function CarouselCss() {
	const swiperElRef = useRef();
	useEffect(() => {
		// listen for Swiper events using addEventListener
		swiperElRef.current.addEventListener('swiperprogress', (e) => {
			const [swiper, progress] = e.detail;
			console.log({ swiper, progress });
		});

		swiperElRef.current.addEventListener('swiperslidechange', (e) => {
			console.log({ e }, 'slide changed');
		});
	}, []);
	return (
		<swiper-container
			ref={swiperElRef}
			className='max-w-[1200px] mx-auto max-h-[600px]'
			slides-per-view='1'
			speed='500'
			loop='true'
			css-mode='true'
			mousewheel-force-to-axis='true'
			navigation='true'
			pagination='true'
			pagination-clickable='true'
			scrollbar='true'
		>
			{images.map((img, i) => (
				<swiper-slide key={i}>
					<img
						className='swiper-slide w-full'
						key={i + 1}
						id={`slide-${i + 1}`}
						src={img.src}
						alt={img.alt}
					/>
				</swiper-slide>
			))}
		</swiper-container>
	);
}

export default CarouselCss;
