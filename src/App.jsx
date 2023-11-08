import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Testimonials/>
      <Features />
      <Footer />
    </>
  );
}

export default App;
