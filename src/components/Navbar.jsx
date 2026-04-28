import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/NewLogoWhite-B8AvPPTY.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const desktopExploreRef = useRef(null);

  const closeAll = () => {
    setIsOpen(false);
    setExploreOpen(false);
    setMobileExploreOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopExploreRef.current && !desktopExploreRef.current.contains(event.target)) {
        setExploreOpen(false);
      }
    };

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    const initializeGoogleTranslate = () => {
      if (!window.google || !window.google.translate) return;
      if (document.getElementById("google_translate_element")?.childNodes.length) return;

      // eslint-disable-next-line no-new
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    window.googleTranslateElementInit = initializeGoogleTranslate;

    if (window.google && window.google.translate) {
      initializeGoogleTranslate();
      return;
    }

    if (!document.querySelector('script[src*="translate.google.com/translate_a/element.js"]')) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const combo = document.querySelector(".goog-te-combo");
    if (!combo) return;
    combo.value = selectedLanguage;
  }, [selectedLanguage]);

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setSelectedLanguage(lang);

    const applyTranslate = () => {
      const combo = document.querySelector(".goog-te-combo");
      if (!combo) return false;
      combo.value = lang;
      combo.dispatchEvent(new Event("change"));
      return true;
    };

    if (lang === "en") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } else {
      document.cookie = `googtrans=/en/${lang}; path=/;`;
    }

    if (!applyTranslate()) {
      window.setTimeout(applyTranslate, 600);
    }
  };

  const mainLinks = [
    { label: "Channel Partners", to: "/Propertyx" },
    { label: "FAQs", to: "/Faqs" },
  ];

  const exploreLinks = [
    { label: "How It Works", desc: "Platform journey and onboarding", to: "/PropertyXGuide" },
    { label: "Whitepaper", desc: "Model, legal and asset framework", to: "/Whitepaper" },
    { label: "Why PropertyX", desc: "Core value proposition", to: "/Propertyx" },
    { label: "About Us", desc: "Company and operating approach", to: "/ComparisonTable" },
  ];

  const navItemClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition ${
      isActive
        ? "text-[#2c92ad] bg-[#2c92ad]/10"
        : "text-gray-700 hover:text-[#2c92ad] hover:bg-gray-100"
    }`;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200/70 shadow-sm z-50">
        <div id="google_translate_element" className="hidden" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <Link to="/" onClick={closeAll}>
            <img
              src="https://property-x-frontend-rwjk.vercel.app/assets/PropertyX_logo-CxublR5S.png"
              alt="PropertyX"
              className="h-10 md:h-11 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1 relative">
            {mainLinks.map((item) => (
              <NavLink key={item.to} to={item.to} className={navItemClass}>
                {item.label}
              </NavLink>
            ))}

            <div className="relative" ref={desktopExploreRef}>
              <button
                onClick={() => setExploreOpen((prev) => !prev)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  exploreOpen
                    ? "text-[#2c92ad] bg-[#2c92ad]/10"
                    : "text-gray-700 hover:text-[#2c92ad] hover:bg-gray-100"
                }`}
              >
                Explore
              </button>

              {exploreOpen && (
                <div className="absolute top-12 left-0 w-80 bg-white border border-gray-100 rounded-2xl shadow-xl p-2 z-50">
                  {exploreLinks.map((item) => (
                    <Link
                      key={`${item.to}-${item.label}`}
                      to={item.to}
                      onClick={closeAll}
                      className="block rounded-xl px-3 py-3 hover:bg-gray-50 transition"
                    >
                      <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/Login"
              className="text-sm font-semibold text-gray-700 hover:text-[#2c92ad] px-4 py-2 rounded-xl hover:bg-gray-100 transition"
            >
              Login
            </Link>

            <Link
              to="/Signup"
              className="text-sm font-semibold text-white bg-gradient-to-r from-[#2c92ad] to-[#247c92] hover:opacity-90 px-5 py-2 rounded-xl shadow-sm transition"
            >
              Get Started
            </Link>

            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-xl text-sm focus:outline-none"
            >
              <option value="en">EN</option>
              <option value="hi">HI</option>
            </select>
          </div>

          <div className="md:hidden z-50">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-2xl w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-[84%] max-w-sm bg-white z-40 border-l border-gray-200 shadow-2xl transition-transform duration-300 pt-24 px-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-2">
          {mainLinks.map((item) => (
            <NavLink
              key={`mobile-${item.to}`}
              to={item.to}
              onClick={closeAll}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-medium ${
                  isActive ? "bg-[#2c92ad]/10 text-[#2c92ad]" : "text-gray-700 bg-gray-50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="bg-gray-50 rounded-xl p-2">
            <button
              onClick={() => setMobileExploreOpen((prev) => !prev)}
              className="w-full text-left px-2 py-2 text-sm font-semibold text-gray-800"
            >
              Explore
            </button>
            {mobileExploreOpen && (
              <div className="flex flex-col gap-1 mt-1">
                {exploreLinks.map((item) => (
                  <Link
                    key={`mobile-exp-${item.to}-${item.label}`}
                    to={item.to}
                    onClick={closeAll}
                    className="px-2 py-2 text-sm text-gray-600 rounded-lg hover:bg-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <Link
            to="/Login"
            onClick={closeAll}
            className="block text-center border border-gray-300 px-4 py-2 rounded-xl text-sm font-semibold text-gray-700"
          >
            Login
          </Link>
          <Link
            to="/Signup"
            onClick={closeAll}
            className="block text-center text-white bg-gradient-to-r from-[#2c92ad] to-[#247c92] px-4 py-2 rounded-xl text-sm font-semibold"
          >
            Get Started
          </Link>
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-xl text-sm"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
      </div>

      {isOpen && (
        <button
          type="button"
          aria-label="Close menu backdrop"
          onClick={closeAll}
          className="md:hidden fixed inset-0 bg-black/30 z-30"
        />
      )}
    </>
  );
};

export default Navbar;
