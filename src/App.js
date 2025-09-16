
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CaseStudies from './components/CaseStudies';
import ContactUs from './components/ContactUs';


import Home from './components/Home';
import Services from './components/Services';
import Products from './components/Products';
import CaseStudiesDetailSec from './components/CaseStudiesDetailSec';

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<ContactUs/>} />
      <Route path='/case-studies' element={<CaseStudies/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/case-studies-details' element={<CaseStudiesDetailSec/>} />
    </Routes>
   </div>
  );
}

export default App;
