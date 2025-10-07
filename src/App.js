import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import FooterSection from './Components/Footer';
import IntroSection from './Components/Intro';
import WhyChooseUs from './Components/WhyChoseUs';
import ServicesSection from './Components/Services';
import TechnologiesSection from './Components/Tech';
import PricingSection from './Components/pricing';
import PortfolioSection from './Components/Portfolio';
import ContactSection from './Components/Contactus';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Landing2 from './Components/Landing2';

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
            <Landing2/>
            <PricingSection/>
            <PortfolioSection/>
            <ContactSection/>
            <FooterSection/>
          </>
        } />

        {/* About Us Page */}
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
