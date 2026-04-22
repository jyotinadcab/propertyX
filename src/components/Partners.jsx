import React from "react";

// Images
import banner1 from "../images/banner1-CBCqbxWc.png";
import banner2 from "../images/banner2-Ca2Tp9ho.png";
import banner3 from "../images/banner3-D5xZKp-5.png";
import banner4 from "../images/banner2-Ca2Tp9ho.png";
import banner6 from "../images/banner6-CWsRksmr.jpg";
import banner9 from "../images/banner9-D82E3-KQ.png";

import partner1 from "../images/PartnerImg3-F9RkVcaZ.webp";
import partner2 from "../images/PartnerImg4-BtXmlwsd.webp";
import partner3 from "../images/PartnerImg6-DIFAwhMO.webp";
import partner4 from "../images/download.png";
import partner5 from "../images/download.webp";
import partner6 from "../images/download3.png";

const topLogos = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner6,
  banner9,
];

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
];

const Partners = () => {
  return (
    <section className="relative bg-[#ffffff] py-24 text-gray-900 overflow-hidden">

      {/* 🔵 Light Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/40 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/40 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Property<span className="text-blue-500">X</span> in News
        </h2>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Trusted and featured across top platforms
        </p>
      </div>

      {/* 🔥 Smooth Infinite Marquee */}
      <div className="relative mb-20">
        <div className="flex w-max animate-marquee gap-20 items-center">
          {[...topLogos, ...topLogos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="media"
              className="h-12 opacity-60 hover:opacity-100 hover:scale-110 transition duration-300"
            />
          ))}
        </div>

        {/* Gradient Fade */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent"></div>
      </div>

      {/* Partners Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-14 relative z-10">
        Our <span className="text-blue-500">Partners</span>
      </h2>

      {/* 💎 Premium Card Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-6 relative z-10">
        {partners.map((logo, index) => (
          <div
            key={index}
            className="
              group relative p-[1px] rounded-xl 
              bg-gradient-to-br from-gray-200 to-gray-100
              hover:from-blue-400/40 hover:to-purple-400/40
              transition duration-500
            "
          >
            <div
              className="
                bg-white 
                rounded-xl p-6 flex items-center justify-center
                h-20
                shadow-sm
                group-hover:bg-gray-50
                transition duration-300
              "
            >
              <img
                src={logo}
                alt="partner"
                className="h-10 object-contain opacity-70 group-hover:opacity-100 transition"
              />
            </div>
          </div>
        ))}
      </div>

      {/* ✨ Bottom Glow Line */}
      <div className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
    </section>
  );
};

export default Partners;