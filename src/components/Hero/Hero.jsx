/* import React from "react";
import styles from "./Hero.module.css"; */

function Hero() {
	return (
		<section className='pt-6 md:pt-0'>
			<div className='relative mt-10 md:mt-12 2xl:-mt-60 min-[2560px]:-mt-48'>
				<img
					className='h-[50dvh] md:h-full w-full mx-auto'
					src='https://images.unsplash.com/photo-1597633611385-17238892d086?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='Dog'
				/>
				<div className='flex flex-col text-center text-slate-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
					<h1 className='mb-1 lemon min-[500px]:text-3xl lg:text-8xl text-center md:text-5xl md:hidden text-nowrap'>
						Adopt a pet
					</h1>
					<h1 className='mb-[2rem] lemon lg:text-8xl text-center md:text-5xl md:block hidden text-nowrap'>
						Adopt a pet
					</h1>
					<h2 className='ml-12 mb-[2rem] ubuntu-mono-regular text-3xl text-gray-800 hidden md:block text-nowrap'>
						Help us find a home for stray cats and dog
					</h2>
					<div className='flex flex-row *:py-1 *:px-3 *:md:py-4 *:md:px-16 text-sm md:text-xl justify-center ubuntu-mono-bold *:font-bold items-center gap-2 md:gap-4 *:rounded-md text-nowrap uppercase *:transition-all *:duration-500'>
						<a
							href='#'
							className='bg-transparent text-rose-400 border-solid border-rose-400 border-2 hover:shadow-[0_0_40px_40px_rgb(190,18,60)_inset] hover:border-rose-700 hover:text-white hidden md:block'
						>
							view more
						</a>
						<a
							href='#'
							className='bg-red-400 text-white border-solid border-rose-400 border-2 hover:bg-rose-700 hover:border-rose-700'
						>
							Adopt now
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
