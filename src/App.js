import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import CarouselPage from '../src/CarouselPage';
import CardPage from '../src/CardPage';
import Home from '../src/Home';

/*import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';*/


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          { <Route path='/home' element={<h1 className="text-center pt-5">Home Pages</h1>}></Route> }
          
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/' element={<CarouselPage/>}></Route>
          <Route path='/' element={<Home/>}></Route>
        <Route path='/card' element={<CardPage/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;

