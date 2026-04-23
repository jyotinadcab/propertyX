import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/NewLogoWhite-B8AvPPTY.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);

  const closeAll = () => {
    setIsOpen(false);
    setExploreOpen(false);
    setMobileExploreOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white px-6 md:px-8 py-3 flex items-center justify-between shadow-sm z-50">

      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-10 md:h-12 w-auto object-contain" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 text-sm relative">

        <Link to="/Propertyx" className="hover:text-black">
          Channel Partners
        </Link>

        <Link to="/Faqs" className="hover:text-black">
          FAQs
        </Link>

        {/* Explore */}
        <div className="relative">
          <button onClick={() => setExploreOpen(!exploreOpen)}>
            Explore
          </button>

          {exploreOpen && (
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md py-2 w-44 flex flex-col border">

              <Link to="/PropertyXGuide" onClick={closeAll} className="px-4 py-2 hover:bg-gray-100">
                How It Works
              </Link>

              <Link to="/Whitepaper" onClick={closeAll} className="px-4 py-2 hover:bg-gray-100">
                Whitepaper
              </Link>

              <Link to="/PropertyX" onClick={closeAll} className="px-4 py-2 hover:bg-gray-100">
                Why PropertyX
              </Link>

              <Link to="/ComparisonTable" onClick={closeAll} className="px-4 py-2 hover:bg-gray-100">
                About Us
              </Link>

            </div>
          )}
        </div>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">

        {/* Single Auth Button */}
        <Link
          to="/Login"
          className="bg-gradient-to-r from-red-500 to-green-600 hover:opacity-90 text-white px-5 py-2 rounded-lg font-medium transition"
        >
          Login / Signup
        </Link>

        {/* Language */}
        <select className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm focus:outline-none">
          <option>Select Language</option>
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col px-6 py-4 gap-4 md:hidden">

          <Link to="/Propertyx" onClick={closeAll}>Channel Partners</Link>
          <Link to="/Faqs" onClick={closeAll}>FAQs</Link>

          {/* Explore */}
          <button onClick={() => setMobileExploreOpen(!mobileExploreOpen)}>
            Explore
          </button>

          {mobileExploreOpen && (
            <div className="flex flex-col pl-4 gap-2">
              <Link to="/PropertyXGuide" onClick={closeAll}>How It Works</Link>
              <Link to="/Whitepaper" onClick={closeAll}>Whitepaper</Link>
              <Link to="/PropertyX" onClick={closeAll}>Why PropertyX</Link>
              <Link to="/ComparisonTable" onClick={closeAll}>About Us</Link>
            </div>
          )}

          {/* Single Mobile Auth Button */}
          <Link
            to="/Login"
            onClick={closeAll}
            className="bg-gradient-to-r from-red-500 to-green-600 text-white px-4 py-2 rounded text-center"
          >
            Login / Signup
          </Link>

          <select className="w-full border px-3 py-2 rounded">
            <option>Select Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;