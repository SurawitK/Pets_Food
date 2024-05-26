import './App.css';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About } from './components/About';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <About/>
      {/* <Footer /> */}
    </>
  );
}

export { App };
