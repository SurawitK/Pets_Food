import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import CarouselCss from './components/CarouselCss';


function App() {
	return (
		<>
			<Navbar />
			<Hero />
			{/* <Carousel/> */}
			<CarouselCss/>
		</>
	);
}

export default App;
