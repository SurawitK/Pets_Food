/* import React from "react";
import styles from "./Hero.module.css"; */

function Hero() {
  return (
    <section className='pt-6 md:pt-0'>
      <div className='2xl:-mt-60 min-[2560px]:-mt-48 relative mt-10 md:mt-12'>
        {/* img removed h-[50dvh] temp. */}
        <img
          className='mx-auto w-full md:h-full'
          src='https://images.unsplash.com/photo-1597633611385-17238892d086?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Dog'
        />
        <div className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 flex flex-col text-center text-slate-800'>
          <h1 className='lemon mb-1 text-nowrap text-center md:hidden lg:text-8xl md:text-5xl min-[500px]:text-3xl'>
            Cats and Dogs Food
          </h1>
          <h1 className='lemon mb-[2rem] hidden text-nowrap text-center md:block lg:text-8xl md:text-5xl'>
            Cats and <br />
            Dogs Food
          </h1>
          <h2 className='ubuntu-mono-regular mb-[2rem] ml-12 hidden text-nowrap text-3xl text-gray-800 md:block'>
            Good for Pet, Good for Owner
          </h2>
          <div className='ubuntu-mono-bold flex flex-row items-center justify-center gap-2 text-nowrap text-sm uppercase md:gap-4 *:rounded-md *:md:px-16 *:px-3 *:md:py-4 *:py-1 *:font-bold md:text-xl *:transition-all *:duration-500'>
            <a
              href='/'
              className='hidden border-2 border-rose-400 border-solid bg-transparent text-rose-400 md:block hover:border-rose-700 hover:text-white hover:shadow-[0_0_40px_40px_rgb(190,18,60)_inset]'
            >
              view more
            </a>
            <a
              href='/'
              className='border-2 border-rose-400 border-solid bg-red-400 text-white hover:border-rose-700 hover:bg-rose-700'
            >
              register
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
