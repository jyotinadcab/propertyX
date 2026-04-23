import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Faqs from "./components/Faqs";
import Propertyx from "./components/Channelpartners/Propertyx";
import PropertyXGuide from "./components/Explore/PropertyXGuide";
import ComparisonTable from "./components/Explore/ComparisonTable";
import Whitepaper from "./components/Explore/Whitepaper";
import Blog from "./components/Resources/Blog";
import Helpcenter from "./components/Resources/Helpcenter";
import Support from "./components/Resources/Support";
import Contact from "./components/Resources/Contact";

const App = () => {
  return (
    <Router>

      <ScrollToTop />

      <Navbar />

      <Routes>

        <Route path="/faqs" element={<Faqs />} />
        <Route path="/propertyx" element={<Propertyx />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/propertyxguide" element={<PropertyXGuide />} />
        <Route path="/comparisontable" element={<ComparisonTable />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/helpcenter" element={<Helpcenter />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;