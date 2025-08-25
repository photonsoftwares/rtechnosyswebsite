import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChoose from './components/WhyChoose';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatWeOffer from './components/WhatWeOffer';
import Footer from './components/Footer';
import TechnologiesSection from './components/TechnologiesSection';
import InsightsGuides from './components/Insights/InsightGuides';
import ContactForm from './components/contactForm/ContactForm';
import TechnologiesDashboard from './components/technologiesDashboard/TechnologiesDashboard';
import HireDevelopers from './components/hireDevelopers/HireDevelopers';
import ServicesDashboard from './components/servicesDashboard/ServicesDashboard';

function App() {
  return (
    <Router>
      <Header/>
      <div className=""> {/* To push content below navbar */}
        <Routes>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/blogs" element={<InsightsGuides/>} />
          <Route path="/services" element={<ServicesDashboard/>} />
          <Route path="/technologies" element={<TechnologiesDashboard/>} />
           <Route path="/hiredevelopers" element={<HireDevelopers/>} />
            <Route path="/contact" element={<ContactForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
