import './App.css';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

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

export { App };
