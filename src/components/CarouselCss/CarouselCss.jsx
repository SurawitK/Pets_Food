// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
	return (
		<Swiper
			className='max-w-[1200px] max-h-[600px] my-8 mx-auto'
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={0}
			slidesPerView={2}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{images.map((img, i) => (
				<SwiperSlide key={i}>
					<img
						className='swiper-slide w-full'
						key={i + 1}
						id={`slide-${i + 1}`}
						src={img.src}
						alt={img.alt}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default CarouselCss;
