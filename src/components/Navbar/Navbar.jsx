import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
	const [count, setCount] = React.useState(1);
	return (
	<header className="nav-wrapper fixed top-0 left-0 right-0 z-10">
      {/* <!-- 2xl should become 1 row and span all --> */}
    <nav
        className="grid grid-cols-2 min-w-[300px] md:grid-cols-[0.5fr_1fr] min-[2560px]:grid-cols-2 px-8 md:px-4 py-4 items-center bg-rose-400 min-[2560px]:px-96 min-[2560px]:justify-items-center md:justify-between md:gap-4 relative z-10">
        <div className="text-wrapper relative text-nowrap">
        <a href="/Pet_Food/index.html" className="lemon text-white text-2xl"
            ><span className="bounce" style="--i: 1">P</span
            ><span className="bounce" style="--i: 2">e</span
            ><span className="bounce" style="--i: 3">t</span
            ><span className="bounce" style="--i: 4">&nbsp;</span
            ><span className="bounce" style="--i: 5">F</span
            ><span className="bounce" style="--i: 6">o</span
            ><span className="bounce" style="--i: 7">o</span
            ><span className="bounce" style="--i: 8">d</span>
        </a>
        </div>
        {/* <!-- Hamburger bar --> */}
        <ul className="ml-auto md:hidden">
        <li>
            <a href="#" className="text-white toggle-nav"
            ><i className="fa-sharp fa-solid fa-bars"></i
            ></a>
        </li>
        </ul>
        {/* <!-- mobile-screen Navbar --> */}
        <nav
        className="mobile-nav absolute top-0 inset-x-0 flex items-center justify-center h-dvh mx-auto w-full -translate-x-full transition-all duration-[600ms] opacity-0 md:hidden bg-white/50 backdrop-blur">
          <ul className="flex items-center justify-between flex-col gap-4 *:p-4">
            <div className="absolute right-0 top-0 close-xmark">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 hover:opacity-50 transition hover:-translate-y-1">
                <path
                stroke-linecap="round"
				stroke-linejoin="round"
				d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
			</svg>
            </div>
            <li>
			<a href="#" className="underline underline-offset-4">Home</a>
            </li>
            <li>
			<a href="#" className="hover:underline underline-offset-4"
                >Products</a
			>
            </li>
            <li>
			<a href="#" className="hover:underline underline-offset-4"
                >About Us</a
			>
            </li>
            <li>
			<a href="#" className="hover:underline underline-offset-4">Contact</a>
            </li>
            <li>
			<a href="#" className="hover:underline underline-offset-4">Sign In</a>
            </li>
		</ul>
        </nav>
        {/* <!-- md-screen Navbar --> */}
        <ul
		className="hidden md:flex gap-8 md:gap-8 text-white justify-center items-center text-nowrap ubuntu-mono-regular text-lg md:text-base ml-auto min-[2560px]:ml-0">
		<li>
            <a href="#" className="underline underline-offset-4">Home</a>
		</li>
		<li>
            <a
			href="../index_og.html"
			className="hover:underline underline-offset-4"
			>Products</a
		>
		</li>
		<li>
            <a href="#" className="hover:underline underline-offset-4">About Us</a>
		</li>
		<li>
            <a href="#" className="hover:underline underline-offset-4">Contact</a>
		</li>
		<li>
            <a href="#" className="hover:underline underline-offset-4">Sign In</a>
		</li>
		<li>
            <svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			className="md:w-6 md:h-6 hover:scale-125 transition-all">
			<path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
		</li>
        </ul>
	</nav>
    </header>
	);
}

export default Navbar;
