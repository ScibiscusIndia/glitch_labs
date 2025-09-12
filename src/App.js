import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import FooterSection from './Components/Footer';
import IntroSection from './Components/Intro';
import WhyChooseUs from './Components/WhyChoseUs';
import ServicesSection from './Components/Services';
import TechnologiesSection from './Components/Tech';
import Landing1 from './Components/Landing1';
import PricingSection from './Components/pricing';
import PortfolioSection from './Components/Portfolio';
import ContactSection from './Components/Contactus';

import About_us from './Components/Pages/About_us/About_us';

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar visible on all pages */}

      <Routes>
        {/* Home (Landing Page) */}
        <Route path="/" element={
          <>
            <IntroSection/>
            <WhyChooseUs/>
            <ServicesSection/>
            <TechnologiesSection/>
            <Landing1/>
            <PricingSection/>
            <PortfolioSection/>
            <ContactSection/>
            <FooterSection/>
          </>
        } />

        {/* About Us Page */}
        <Route path="/about_us" element={<About_us />} />
      </Routes>
    </Router>
  );
}

export default App;
