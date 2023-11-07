import Slider from 'react-slick';
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Slider/>
    <Features/>
    <Footer/>
    </>
  );
}

export default App;
