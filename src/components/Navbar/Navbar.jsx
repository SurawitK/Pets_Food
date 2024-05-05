import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
	const [count, setCount] = React.useState(1);
	return (
		<div
			className='text-7xl text-orange-500'
			onMouseEnter={() => setCount(count + 1)}
		>
			Navbar {count}
		</div>
	);
}

export default Navbar;
