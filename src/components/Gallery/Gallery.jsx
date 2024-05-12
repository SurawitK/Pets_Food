import React from 'react';
import styles from './Gallery.module.css';

function Gallery() {
	return (
		<div className='mt-2 grid grid-rows-2 grid-flow-row gap-4 '>
			<div className='col-span-2 overflow-hidden'>
				<div className='bg-white p-2 overflow-hidden'>
					<img
						className='rounded-lg hover:scale-110 transition-all'
						src='https://source.unsplash.com/random/?1'
						alt=''
					/>
				</div>
				<p>01</p>
			</div>
			<div className='row-span-2'>
				<div className='bg-white p-2 transition-all'>
					<img
						className='rounded-lg hover:scale-110 transition-all'
						src='https://source.unsplash.com/random/200x200/?2'
						alt=''
					/>
				</div>
				<p>02</p>
			</div>
			<div className='row-span-2 '>
				<div className='bg-white p-2 transition-all'>
					<img
						className='rounded-lg hover:scale-110 transition-all'
						src='https://source.unsplash.com/random/200x200/?3'
						alt=''
					/>
				</div>
				<p>03</p>
			</div>
		</div>
	);
}

export default Gallery;
