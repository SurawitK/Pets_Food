import './App.css';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      {/* <Footer /> */}
    </>
  );
}

export { App };
