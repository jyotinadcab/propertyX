import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logo from "../images/NewLogoWhite-B8AvPPTY.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-5 gap-10">

        {/* BRAND */}
        <div className="md:col-span-2">
          <img src={logo} alt="PropertyX" className="h-10 mb-5" />

          <p className="text-sm leading-relaxed text-gray-500 mb-6 max-w-md">
            Propx (PropertyX) is a modern fractional ownership platform enabling
            investors to participate in premium real estate with SPV-backed
            assets, passive rental income, and seamless marketplace liquidity.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3">
            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white shadow-sm border hover:bg-blue-600 hover:text-white transition cursor-pointer"
                >
                  <Icon size={14} />
                </div>
              )
            )}
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            {["How it works", "Whitepaper", "FAQs", "Partners"].map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-sm">
            {["Blog", "Help Center", "Support", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">
            Subscribe Newsletter
          </h3>

          <p className="text-sm text-gray-500 mb-4">
            Get updates on new properties and investment opportunities.
          </p>

          <div className="flex items-center border rounded-lg overflow-hidden bg-white shadow-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 text-sm outline-none"
            />
            <button className="bg-white-600 text-white px-4 py-2 hover:bg-white-700 transition">
              <MdEmail />
            </button>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200"></div>

      {/* DISCLAIMER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 text-xs text-gray-500 leading-relaxed">
        <h4 className="font-semibold text-gray-700 mb-3">
          Safe Harbor & Disclaimer
        </h4>
        <p>
          Propx / PropertyX provides a platform for co-ownership of property
          assets. Investments may carry risk, including potential loss of
          capital. Information provided is based on reasonable scenarios but
          does not guarantee returns. Investors are advised to seek professional
          financial advice before investing.
        </p>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 PropertyX. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-blue-600 cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;