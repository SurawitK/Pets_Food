import React from 'react';
// import { motion } from 'framer-motion';

function Logo() {
  return (
    <div className='relative text-nowrap text-wrapper'>
      <a
        href='/Pet_Food/index.html'
        className='font-serif text-2xl text-white *:font-lemon'
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
            className='toggle-nav text-white'
            ref={barRef}
            onClick={() => {
              navRef.current.classList.toggle('opacity-0');
              navRef.current.classList.toggle('-translate-x-full');
              navRef.current.classList.toggle('translate-x-0');
              barRef.current.classList.add('hidden');
            }}
          >
            <i className='fa-sharp fa-solid fa-bars' />
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
          <a href='#' className='underline-offset-4 hover:underline'>
            Products
          </a>
        </li>
        <li>
          <a href='#' className='underline-offset-4 hover:underline'>
            About Us
          </a>
        </li>
        <li>
          <a href='#' className='underline-offset-4 hover:underline'>
            Contact
          </a>
        </li>
        <li>
          <a href='#' className='underline-offset-4 hover:underline'>
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
          'mobile-nav -translate-x-full absolute inset-x-0 top-0 mx-auto flex h-dvh w-full items-center justify-center bg-white/50 opacity-0 backdrop-blur transition-all duration-[600ms] md:hidden'
        }
      >
        <ul className='flex flex-col items-center justify-between gap-4 *:p-4'>
          <div
            className='close-xmark absolute top-0 right-0'
            ref={xMarkRef}
            onClick={() => {
              navRef.current.classList.toggle('opacity-0');
              navRef.current.classList.toggle('-translate-x-full');
              navRef.current.classList.toggle('translate-x-0');
              barRef.current.classList.remove('hidden');
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='hover:-translate-y-1 size-8 transition hover:opacity-50'
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
      <ul className='ml-auto hidden items-center justify-center gap-8 text-nowrap font-mono text-lg text-white min-[2560px]:ml-0 md:flex md:gap-8 md:text-base'>
        <Destinations />
        <li>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='transition-all md:h-6 md:w-6 hover:scale-125'
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
    <header className='nav-wrapper fixed top-0 right-0 left-0 z-10'>
      {/* <!-- 2xl should become 1 row and span all --> */}
      <nav className='relative z-10 grid min-w-[300px] grid-cols-2 items-center bg-rose-400 px-8 py-4 md:grid-cols-[0.5fr_1fr] min-[2560px]:grid-cols-2 md:justify-between min-[2560px]:justify-items-center md:gap-4 md:px-4 min-[2560px]:px-96'>
        <Logo />
        <Hambergur />
        <MobileNav />
        <MediumNav />
      </nav>
    </header>
  );
}

export default Navbar;
