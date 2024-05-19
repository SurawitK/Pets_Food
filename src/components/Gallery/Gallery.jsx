// import React from "react";
// import styles from './Gallery.module.css';

function Intro() {
	return (
		<h3 className='uppercase font-bold text-center  md:text-3xl my-8 md:my-24'>
			<span className='text-sm  md:text-xl'>Check out our</span> <br />{" "}
			all-natural <span className='font-normal'>products</span>
		</h3>
	);
}

function BigGallery() {
	return (
		<div className='md:grid grid-cols-3 grid-rows-2 gap-4 hidden'>
			<div className='col-span-1 row-span-2'>
				<div className='flex flex-col object-cover overflow-hidden transition-all '>
					<div className='overflow-hidden grow'>
						<img
							className='grow transition-all hover:scale-105'
							src='https://source.unsplash.com/random/400x400/?1'
							alt=''
						/>
					</div>
					<p>01</p>
				</div>
			</div>
			<div className='col-span-1 row-span-2'>
				<div className='flex flex-col object-cover overflow-hidden transition-all'>
					<div className='overflow-hidden grow'>
						<img
							className='grow transition-all hover:scale-105'
							src='https://source.unsplash.com/random/400x400/?2'
							alt=''
						/>
					</div>
					<p>02</p>
				</div>
			</div>
			<div className='col-span-1 row-span-1'>
				<div className='flex flex-col object-cover overflow-hidden transition-all'>
					<div className='overflow-hidden grow'>
						<img
							className='grow transition-all hover:scale-105'
							src='https://source.unsplash.com/random/400x175/?3'
							alt=''
						/>
					</div>
					<p>03</p>
				</div>
			</div>
			<div className='col-span-1 row-span-1 col-start-3'>
				<div className='flex flex-col object-cover overflow-hidden transition-all'>
					<div className='overflow-hidden grow'>
						<img
							className='grow transition-all hover:scale-105'
							src='https://source.unsplash.com/random/400x175/?4'
							alt=''
						/>
					</div>
					<p>04</p>
				</div>
			</div>
		</div>
	);
}

function Gallery() {
	return (
		<section className='container mx-auto my-8 md:my-24'>
			<Intro />
			<div className='grid grid-cols-2 gap-4 auto-rows-fr md:hidden '>
				<div className='col-span-full grid grid-cols-subgrid overflow-hidden '>
					<div className='flex flex-col bg-white col-span-full overflow-hidden'>
						<div className='overflow-hidden'>
							<img
								className='hover:scale-105 object-cover transition-all object-bottom min-[340px]:object-center min-[340px]:pb-[30px]'
								src='https://images.unsplash.com/photo-1604544203292-0daa7f847478?q=100&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt='random pic'
							/>
						</div>
						<p>01</p>
					</div>
				</div>
				<div className='row-start-2 row-span-1'>
					<div className='bg-white transition-all overflow-hidden'>
						<img
							className='overflow-hidden  hover:scale-110 transition-all w-full'
							src='https://source.unsplash.com/random/200x200/?2'
							alt=''
						/>
					</div>
					<p>02</p>
				</div>
				<div className='row-start-2 row-span-1 '>
					<div className='bg-white transition-all overflow-hidden '>
						<img
							className='overflow-hidden  hover:scale-110 transition-all w-full'
							src='https://source.unsplash.com/random/200x200/?3'
							alt=''
						/>
					</div>
					<p>03</p>
				</div>
			</div>
			<BigGallery />
		</section>
	);
}

export default Gallery;
