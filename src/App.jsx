import "./App.css";
import Navbar from "./components//Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Gallery />
			{/* <About/> */}
			{/* <Footer /> */}
		</>
	);
}

export default App;
