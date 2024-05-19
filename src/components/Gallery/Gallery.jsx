// import React from "react";
// import styles from './Gallery.module.css';

function Intro() {
	return (
		<h3 className='uppercase font-bold text-center  md:text-3xl my-8 md:my-24'>
			<span className='text-sm  md:text-xl'>Meet </span> <br />{" "}
			our <span className='font-normal'>animals</span>
		</h3>
	);
}

function Gallery() {
	return (
		<section className='container mx-auto my-8 md:my-24'>
			<Intro />
			<div className='grid grid-cols-2 gap-4 auto-rows-fr md:hidden'>
				<div className='col-span-full grid grid-cols-subgrid overflow-hidden'>
					<div className='bg-white col-span-full overflow-hidden rounded-lg'>
						<img
							className='rounded-lg hover:scale-105 overflow-hidden transition-all w-full'
							src='https://source.unsplash.com/random/?1'
							alt=''
						/>
					</div>
					{/* <p>Dog Toys</p>
        <p className="">$9.99</p> */}
				</div>
				<div className="row-start-2 row-span-1">
        <div className="bg-white transition-all overflow-hidden rounded-lg">
          <img
            className="overflow-hidden rounded-lg hover:scale-110 transition-all w-full"
            src="https://source.unsplash.com/random/200x200/?2"
            alt=""
          />
        </div>
        <p>02</p>
      </div>
      <div className="row-start-2 row-span-1 ">
        <div className="bg-white transition-all overflow-hidden rounded-lg">
          <img
            className="overflow-hidden rounded-lg hover:scale-110 transition-all w-full"
            src="https://source.unsplash.com/random/200x200/?3"
            alt=""
          />
        </div>
        <p>03</p>
      </div>
			</div>

		<div className="md:grid grid-cols-3 grid-rows-2 gap-4 hidden">
			<div className="col-span-1 row-span-2">
				<div className="flex">
					<div className="flex flex-col object-cover">
						<img className="grow" src="https://source.unsplash.com/random/400x400/?1" alt="" />
						<p>01</p>
					</div>
				</div>
			</div>
			<div className="col-span-1 row-span-2 object-cover">
				<div className="flex">
					<div className="flex flex-col">
						<img src="https://source.unsplash.com/random/400x400/?2" alt="" />
						<p>02</p>
					</div>
				</div>
			</div>
			<div className="col-span-1 row-span-1">
				<div className="flex">
					<div className="flex flex-col object-cover">
						<img src="https://source.unsplash.com/random/400x175/?3" alt="" />
						<p>03</p>
					</div>
				</div>
			</div>
			<div className="col-span-1 row-span-1 col-start-3">
				<div className="flex">
					<div className="flex flex-col object-cover">
						<img src="https://source.unsplash.com/random/400x175/?4" alt="" />
						<p>04</p>
					</div>
				</div>
			</div>
		</div>

		</section>
	);
}

export default Gallery;
