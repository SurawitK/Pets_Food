import React from "react";
import styles from "./About.module.css";

function About() {
	return (
		<section className='bg-slate-100 my-24'>
			<div className='grid grid-cols-2 w-[50%] mx-auto p-20 gap-24'>
				<div className='overflow-hidden rounded-lg'>
					<img
						className='w-[350px] rounded-lg hover:scale-[115%] overflow-hidden transition-all'
						src='https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=2701&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='Cat Face'
					/>
				</div>
				<div className='grid content-center relative'>
					<h3 className='text-2xl font-bold uppercase underline decoration-pink-500 decoration-wavy decoration-2'>
						about us
					</h3>
					<h2 className='text-4xl font-bold uppercase'>
						proudly raised,
						<br />
						grown &amp; produced <br />
						<span className='text-red-700'>in thailand</span>
					</h2>
					<p className='my-8'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
						possimus voluptates debitis eum doloribus totam ut numquam vero
						repellendus ipsam!
					</p>
					<a
						href='#'
						className='text-center text-xl font-bold text-white uppercase bg-rose-400 rounded-md px-10 py-4 w-fit hover:bg-rose-700 hover:border-rose-700 transition-all duration-500'
					>
						Discover who we are
					</a>
					<div className='absolute inset-[0_0_auto_auto] inline-block bg-gray-500 p-4 rounded-full w-fit hover:scale-125 transition-all duration-[300ms]'>
						<svg
							fill='white'
							className='h-[30px]'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
						>
							<path d='M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z' />
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
