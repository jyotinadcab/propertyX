import React, { useEffect } from 'react';
import Section from "./Section";

const Propertyx = () => {

  // Scroll to top on load (optional)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Button click pe scroll to top
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12 px-4 md:px-8 font-sans">
      
      {/* Main Card Container */}
      <div className="max-w-6xl mx-auto w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 px-6 py-12 md:px-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Partner with PropertyX
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-6">
            Unlock New Earning Opportunities
          </p>

          <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Join India's leading real estate investment platform and offer your clients access to premium fractional
            ownership opportunities while earning attractive commissions
          </p>

          <button 
            onClick={handleScrollTop}
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg transform hover:scale-105"
          >
            Sign Up As Channel Partner →
          </button>
        </div>

        {/* Why Partner Section */}
        <div className="px-6 py-12 md:px-12 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3">
            Why Partner with PropertyX?
          </h2>

          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Discover the advantages of joining our growing network of trusted advisors and partners.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Attractive Commission Structure
              </h3>
              <p className="text-gray-500 text-sm">
                Earn industry-leading commissions on every investment closed
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                High-Quality Investment Products
              </h3>
              <p className="text-gray-500 text-sm">
                Access Grade-A commercial real estate assets
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Marketing & Sales Support
              </h3>
              <p className="text-gray-500 text-sm">
                We provide everything you need to succeed
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Real-Time Dashboard Access
              </h3>
              <p className="text-gray-500 text-sm">
                Track leads, conversions, and commissions easily
              </p>
            </div>
          </div>
        </div>

        <Section />

      </div>
    </div>
  );
};

export default Propertyx;