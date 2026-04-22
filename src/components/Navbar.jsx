import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/NewLogoWhite-B8AvPPTY.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);

  // Close all menus
  const closeAll = () => {
    setIsOpen(false);
    setExploreOpen(false);
    setMobileExploreOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white px-6 md:px-8 py-3 flex items-center justify-between shadow-sm z-50">

      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="h-10 md:h-12 w-auto object-contain"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 text-sm relative">

        <Link to="#" className="hover:text-black transition">
          Developers
        </Link>

        <Link to="/Propertyx" className="hover:text-black transition">
          Channel Partners
        </Link>

        <Link to="/Faqs" className="hover:text-black transition">
          FAQs
        </Link>

        {/* Explore Dropdown */}
        <div className="relative">
          <button
            onClick={() => setExploreOpen(!exploreOpen)}
            className="hover:text-black transition"
          >
            Explore
          </button>

          {exploreOpen && (
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md py-2 w-44 flex flex-col z-50 border">
              
              <Link
                to="/PropertyXGuide"
                onClick={closeAll}
                className="px-4 py-2 hover:bg-gray-100"
              >
                How It Works
              </Link>

              <Link
                to="/Whitepaper"
                onClick={closeAll}
                className="px-4 py-2 hover:bg-gray-100"
              >
                Whitepaper (PropX)
              </Link>

              <Link
                to="/PropertyX"
                onClick={closeAll}
                className="px-4 py-2 hover:bg-gray-100"
              >
                Why PropertyX
              </Link>

              <Link
                to="/ComparisonTable"
                onClick={closeAll}
                className="px-4 py-2 hover:bg-gray-100"
              >
                About Us
              </Link>

            </div>
          )}
        </div>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium transition">
          Login / Signup
        </button>

        <select className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm focus:outline-none">
          <option>Select Language</option>
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col px-6 py-4 gap-4 md:hidden z-50">

          <Link to="#" onClick={closeAll} className="text-gray-700 hover:text-black">
            Developers
          </Link>

          <Link to="/Propertyx" onClick={closeAll} className="text-gray-700 hover:text-black">
            Channel Partners
          </Link>

          <Link to="/Faqs" onClick={closeAll} className="text-gray-700 hover:text-black">
            FAQs
          </Link>

          {/* Mobile Explore */}
          <button
            onClick={() => setMobileExploreOpen(!mobileExploreOpen)}
            className="text-gray-700 text-left"
          >
            Explore
          </button>

          {mobileExploreOpen && (
            <div className="flex flex-col pl-4 gap-2">

              <Link to="/PropertyXGuide" onClick={closeAll} className="px-4 py-2 hover:bg-gray-100">
                How It Works
              </Link>

              <Link to="/Whitepaper" onClick={closeAll} className="px-4 py-2 hover:bg-gray-100">
                Whitepaper (PropX)
              </Link>

              <Link to="/PropertyX" onClick={closeAll} className="px-4 py-2 hover:bg-gray-100">
                Why PropertyX
              </Link>

              <Link to="/ComparisonTable" onClick={closeAll} className="px-4 py-2 hover:bg-gray-100">
                About Us
              </Link>

            </div>
          )}

          <button className="w-full bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium transition">
            Login / Signup
          </button>

          <select className="w-full bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm focus:outline-none">
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