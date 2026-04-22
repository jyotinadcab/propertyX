import React from "react";
import logo from "../images/NewLogoWhite-B8AvPPTY.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-6 md:px-20 py-12">
      
      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-10 border-b border-gray-300 pb-10">
        
        {/* Left - Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            
            {/* 🔥 Increased Logo Size */}
            <img
              src={logo}
              alt="PropertyX"
              className="w-16 md:w-20 object-contain"
            />
  
          </div>

          <p className="text-sm leading-relaxed text-gray-600">
            Propx (PropertyX) – fractional ownership from 1 sq ft in marriage halls,
            event lawns, and diversified real estate. SPV-backed assets, rental revenue
            sharing, and a roadmap to internal marketplace liquidity.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-black font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">How it works</li>
            <li className="hover:text-black cursor-pointer">Whitepaper</li>
            <li className="hover:text-black cursor-pointer">FAQs</li>
            <li className="hover:text-black cursor-pointer">Partners</li>
          </ul>
        </div>

        {/* Connect + Social */}
        <div>
          <h3 className="text-black font-semibold mb-4">Connect Us</h3>
          <p className="text-sm mb-4 text-gray-600">Netreats.in</p>

          <h3 className="text-black font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-3">
            <div className="bg-blue-600 text-white p-2 rounded cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-blue-500 text-white p-2 rounded cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="bg-pink-500 text-white p-2 rounded cursor-pointer">
              <FaInstagram />
            </div>
            <div className="bg-black text-white p-2 rounded cursor-pointer">
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-10 border-b border-gray-300 pb-6">
        <h4 className="text-black mb-3">Safe Harbor and Disclaimer</h4>
        <p className="text-sm leading-relaxed text-gray-600">
          Propx / PropertyX merely provides a platform for legal co-ownership of property assets.
          Such co-ownership is offered solely for financial investment and returns from property investing.
          Investment opportunities may carry substantial risk and investors should seek advice before investing.
          Information regarding returns may be based on reasonable growth scenarios provided by the seller.
          These investments do not carry any government or regulatory protection and investors must be willing
          to sustain the risk of loss of capital, including total loss.
        </p>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © 2026 PropertyX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;