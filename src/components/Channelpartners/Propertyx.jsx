import React, { useEffect } from "react";
import {
  Users,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const PropertyPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Trusted Network",
      description: "Leverage your existing relationships with investors and buyers.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "New Revenue Stream",
      description: "Unlock powerful earning potential through partnerships.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Opportunities",
      description: "Access premium real estate deals worldwide.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">

      {/* ================= HERO (TOP) ================= */}
      <div className="bg-gradient-to-r from-[#2789a6] to-[#1f6f86] px-6 py-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Partner with PropertyX
        </h1>
        <p className="text-xl md:text-2xl mb-4">
          Unlock New Earning Opportunities
        </p>
        <p className="max-w-2xl mx-auto text-white/80 mb-8">
          Join India's leading real estate platform and earn commissions
          through fractional property investments.
        </p>

        <button
          onClick={handleScrollTop}
          className="bg-[#f59e0b] hover:bg-[#d97706] text-gray-900 font-semibold py-3 px-8 rounded-lg transition hover:scale-105"
        >
          Sign Up As Channel Partner →
        </button>
      </div>

      {/* ================= WHY PARTNER ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Partner with PropertyX?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Attractive Commission Structure",
            "High-Quality Investment Products",
            "Marketing & Sales Support",
            "Real-Time Dashboard Access",
          ].map((title, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md">
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm">
                Grow your income with our premium ecosystem. 
              </p>
         
            </div>
          ))}
        </div>
      </div>

      {/* ================= WHO CAN JOIN ================= */}
      <div className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Who Can Become a{" "}
          <span className="text-[#2789a6]">Channel Partner?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Anyone with a strong network of investors or buyers can start earning.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <div className="mb-4">{b.icon}</div>
              <h3 className="font-semibold text-lg">{b.title}</h3>
              <p className="text-gray-500 mt-2">{b.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SECOND HERO ================= */}
      <div className="py-24 text-center bg-white">
        <h2 className="text-5xl font-bold">
          Turn Your Network Into{" "}
          <span className="text-gray-600">Recurring Income</span>
        </h2>

        <p className="text-gray-500 mt-6 max-w-xl mx-auto">
          Help investors access premium opportunities while you earn effortlessly.
        </p>

        <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-xl flex items-center gap-2 mx-auto hover:scale-105">
          Become Partner <ArrowRight size={18} />
        </button>
      </div>

      {/* ================= FINAL BENEFITS ================= */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div className="bg-white p-8 rounded-2xl shadow">
            <TrendingUp className="mx-auto mb-4" size={32} />
            <h3 className="text-xl font-semibold">High Earnings</h3>
            <p className="text-gray-500 mt-2">
              Earn commissions on every deal
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <ShieldCheck className="mx-auto mb-4" size={32} />
            <h3 className="text-xl font-semibold">Secure Platform</h3>
            <p className="text-gray-500 mt-2">
              Safe & transparent system
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <Users className="mx-auto mb-4" size={32} />
            <h3 className="text-xl font-semibold">Full Support</h3>
            <p className="text-gray-500 mt-2">
              Dedicated growth team
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PropertyPage;