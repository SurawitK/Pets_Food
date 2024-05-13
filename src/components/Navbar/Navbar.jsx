import React from "react";
// import { motion } from 'framer-motion';

function Logo() {
	return (
		<div className='text-wrapper relative text-nowrap'>
			<a
				href='/Pet_Food/index.html'
				className='font-serif text-white text-2xl *:font-lemon'
			>
				<span className='bounce'>P</span>
				<span className='bounce'>e</span>
				<span className='bounce'>t</span>
				<span className='bounce'>&nbsp;</span>
				<span className='bounce'>F</span>
				<span className='bounce'>o</span>
				<span className='bounce'>o</span>
				<span className='bounce'>d</span>
			</a>
		</div>
	);
}

function Navbar() {
	const barRef = React.useRef();
	const navRef = React.useRef();
	const xMarkRef = React.useRef();

	function Hambergur() {
		return (
			<ul className='ml-auto md:hidden'>
				<li>
					<a
						href='#'
						className='text-white toggle-nav'
						ref={barRef}
						onClick={() => {
							console.log("bar click");
							navRef.current.classList.toggle("opacity-0");
							navRef.current.classList.toggle("-translate-x-full");
							navRef.current.classList.toggle("translate-x-0");
							barRef.current.classList.add("hidden");
						}}
					>
						<i className='fa-sharp fa-solid fa-bars'></i>
					</a>
				</li>
			</ul>
		);
	}

	function Destinations() {
		return (
			<>
				<li>
					<a href='#' className='underline underline-offset-4'>
						Home
					</a>
				</li>
				<li>
					<a href='#' className='hover:underline underline-offset-4'>
						Products
					</a>
				</li>
				<li>
					<a href='#' className='hover:underline underline-offset-4'>
						About Us
					</a>
				</li>
				<li>
					<a href='#' className='hover:underline underline-offset-4'>
						Contact
					</a>
				</li>
				<li>
					<a href='#' className='hover:underline underline-offset-4'>
						Sign In
					</a>
				</li>
			</>
		);
	}

	function MobileNav() {
		return (
			<nav
				ref={navRef}
				className={
					"mobile-nav absolute top-0 inset-x-0 flex items-center justify-center h-dvh mx-auto w-full -translate-x-full transition-all duration-[600ms] opacity-0 md:hidden bg-white/50 backdrop-blur"
				}
			>
				<ul className='flex items-center justify-between flex-col gap-4 *:p-4'>
					<div
						className='absolute right-0 top-0 close-xmark'
						ref={xMarkRef}
						onClick={() => {
							console.log("x click");
							navRef.current.classList.toggle("opacity-0");
							navRef.current.classList.toggle("-translate-x-full");
							navRef.current.classList.toggle("translate-x-0");
							barRef.current.classList.remove("hidden");
						}}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='size-8 hover:opacity-50 transition hover:-translate-y-1'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
							/>
						</svg>
					</div>
					<Destinations />
				</ul>
			</nav>
		);
	}

	function MediumNav() {
		return (
			<ul className='hidden md:flex gap-8 md:gap-8 text-white justify-center items-center text-nowrap font-mono text-lg md:text-base ml-auto min-[2560px]:ml-0'>
				<Destinations />
				<li>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='md:w-6 md:h-6 hover:scale-125 transition-all'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
						/>
					</svg>
				</li>
			</ul>
		);
	}

	return (
		<header className='nav-wrapper fixed top-0 left-0 right-0 z-10'>
			{/* <!-- 2xl should become 1 row and span all --> */}
			<nav className='grid grid-cols-2 min-w-[300px] md:grid-cols-[0.5fr_1fr] min-[2560px]:grid-cols-2 px-8 md:px-4 py-4 items-center bg-rose-400 min-[2560px]:px-96 min-[2560px]:justify-items-center md:justify-between md:gap-4 relative z-10'>
				<Logo />
				<Hambergur />
				<MobileNav />
				<MediumNav />
			</nav>
		</header>
	);
}

export default Navbar;
