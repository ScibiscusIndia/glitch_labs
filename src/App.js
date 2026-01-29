import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import FooterSection from './Components/Footer';
import IntroSection from './Components/Intro';
import TechnologiesSection from './Components/Tech';
import PricingSection from './Components/pricing';
import PortfolioSection from './Components/Portfolio';
import ContactSection from './Components/Contactus';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import WhyChooseUs from './Components/WhyChooseUs/WhyChoseUs';
import ServicesSection from './Components/Services/Services';
import Testimonial from './Components/Testimonial';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import PortfolioSectionExt from './Components/ExplorePortfolio/ExplorePort';
import InternshipCard from './Components/Career/CareerPage';
import MoreProject from './Components/MoreProjects/AppServices';

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
            <PricingSection/>
            <PortfolioSection/>
            <Testimonial/>
            <ContactSection/>
            <FooterSection/>
          </>
        } />

        {/* privacy policy page */}
        <Route path='/privacypolicy' element={<PrivacyPolicy/>} />

        {/* About Us Page */}
        <Route path="/aboutUs" element={<AboutUs />} />

        {/* explore more projects */}
        <Route path='/AppServices' element={<MoreProject/>}/>

        {/* explore more portfolio */}
        <Route path='/PorfolioSync' element={<PortfolioSectionExt/>}/>

        {/* career page */}
        <Route path='/CareerPage' element={<InternshipCard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
