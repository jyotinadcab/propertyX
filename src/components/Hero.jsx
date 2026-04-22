import React from "react";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import building from "../images/youtubeImg3-ClQnfoZh.webp";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden font-[Inter]">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between">

        {/* LEFT CONTENT */}
        <div className="max-w-xl z-10">

          {/* TOP TAG */}
          <span className="inline-block px-4 py-1 text-xs tracking-widest bg-[#e6f4f7] text-[#2c92ad] rounded-full mb-4">
            FUTURE OF REAL ESTATE
          </span>

          {/* MAIN HEADING */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            PROPERTY
            <span className="bg-gradient-to-r from-[#2c92ad] to-[#247c92] bg-clip-text text-transparent">
              X
            </span>
          </h1>

          {/* SUB HEADING */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mt-4 text-gray-800">
            Fractional Real Estate <br />
            for India’s{" "}
            <span className="text-[#2c92ad] font-bold">
              Wedding & Event Economy
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-600 text-base leading-relaxed">
            PropX tokenizes income-generating assets like marriage halls,
            lawns, and event spaces — enabling transparent revenue sharing,
            SPV-backed ownership, and a seamless internal marketplace.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8 flex-wrap">

            <button className="bg-gradient-to-r from-[#2c92ad] to-[#247c92] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">
              Start Investing
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition">
              Read Whitepaper
            </button>

            <button className="text-[#2c92ad] font-medium text-sm hover:underline">
              How it works →
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mt-12 lg:mt-0">
          <div className="absolute -inset-4 bg-[#2c92ad] blur-2xl opacity-20 rounded-xl"></div>

          <img
            src={building}
            alt="building"
            className="relative w-[350px] md:w-[450px] lg:w-[520px] rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="backdrop-blur-lg bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <img src={icon1} alt="" className="w-14 mb-4" />
          <h3 className="font-semibold text-lg text-gray-800">
            Measurable Ownership
          </h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Start from 1 sq.ft with asset-backed units secured through SPV structures.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="backdrop-blur-lg bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <img src={icon2} alt="" className="w-14 mb-4" />
          <h3 className="font-semibold text-lg text-gray-800">
            Event Real Estate
          </h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Invest in marriage halls, lawns & banquet spaces with recurring booking income.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="backdrop-blur-lg bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <img src={icon3} alt="" className="w-14 mb-4" />
          <h3 className="font-semibold text-lg text-gray-800">
            Tokens & Income
          </h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Convert sq.ft into tokens for liquidity and earn from rental distributions.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Hero;