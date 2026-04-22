import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Guide from "./components/Guide";
import Partners from "./components/Partners";
import Faqs from "./components/Faqs";
import Propertyx from "./components/Channelpartners/Propertyx";
import Section from "./components/Channelpartners/Section";
import PropertyXGuide from "./components/Explore/PropertyXGuide";
import ComparisonTable from "./components/Explore/ComparisonTable";
import Property from "./components/Channelpartners/Property";
import Whitepaper from "./components/Explore/Whitepaper";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Guide />
      <Partners />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />

      {/* Navigation */}
   

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/Propertyx" element={<Propertyx />} />
        <Route path ="/Property" element={<Property/>}/>
        <Route path="/Section" element={<Section/>}/>
          <Route path="/PropertyXGuide" element={<PropertyXGuide/>} />
            <Route path="/ComparisonTable" element={<ComparisonTable/>} />
            <Route path="Whitepaper" element={<Whitepaper/>}/>
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
