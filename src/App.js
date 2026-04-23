import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Hero from "./components/Hero";
import Guide from "./components/Guide";
import Partners from "./components/Partners";
import Faqs from "./components/Faqs";
import Propertyx from "./components/Channelpartners/Propertyx";
import PropertyXGuide from "./components/Explore/PropertyXGuide";
import ComparisonTable from "./components/Explore/ComparisonTable";
import Whitepaper from "./components/Explore/Whitepaper";
import Blog from "./components/Resources/Blog";
import Helpcenter from "./components/Resources/Helpcenter";
import Support from "./components/Resources/Support";
import Contact from "./components/Resources/Contact";
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
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/Propertyx" element={<Propertyx />} />
        <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        <Route path="/PropertyXGuide" element={<PropertyXGuide />} />
        <Route path="/ComparisonTable" element={<ComparisonTable />} />
        <Route path="Whitepaper" element={<Whitepaper />} />
                <Route path="Blog" element={<Blog />} />
                <Route path="Helpcenter" element={<Helpcenter/>}/>
                       <Route path="Support" element={<Support/>}/>
                       <Route path="Contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
