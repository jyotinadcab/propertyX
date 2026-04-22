import React from "react";
import {
  Building2,
  Square,
  TrendingUp,
  Shield,
  Users,
  MapPin,
  BarChart3,
  // Award,
  ChevronRight,
  // Sparkles,
  Landmark,
  Calendar,
} from "lucide-react";

const Whitepaper = () => {
  const assets = [
    {
      icon: <Landmark className="w-5 h-5" />,
      title: "Marriage Halls",
      desc: "High-demand wedding venues with consistent bookings",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Event Lawns",
      desc: "Versatile outdoor spaces for all seasons",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Banquet Facilities",
      desc: "Corporate events & social gatherings hub",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Asset Selection",
      desc: "Premium marriage halls & event lawns are evaluated and onboarded.",
      icon: <Building2 className="w-8 h-8" />,
    },
    {
      step: "02",
      title: "SPV Creation",
      desc: "Each property is held in a dedicated Special Purpose Vehicle.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      step: "03",
      title: "Token Issuance",
      desc: "1 sq.ft = 100 tokens — trade on internal marketplace.",
      icon: <BarChart3 className="w-8 h-8" />,
    },
  ];

  const revenueTypes = [
    { name: "Weddings", value: "85%" },
    { name: "Corporate Events", value: "70%" },
    { name: "Exhibitions", value: "65%" },
    { name: "Cultural Events", value: "75%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

        <div className="relative container mx-auto px-4 py-20 text-center max-w-4xl">
    

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
            Real Estate Fractional <br /> Tokenization Platform
          </h1>

          <p className="text-lg md:text-xl text-indigo-100 mb-8">
            Marriage halls, lawns & diversified real estate
            <span className="block font-semibold text-yellow-200 mt-2">
              1 sq.ft fractional ownership & rental revenue sharing
            </span>
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg">
              Read Whitepaper <ChevronRight className="w-4 h-4" />
            </button>

            <button className="border border-white/40 px-6 py-3 rounded-xl hover:bg-white/20">
              Tokenomics
            </button>
          </div>
        </div>
      </header>

      {/* EXECUTIVE SUMMARY */}
      <section className="py-20 container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold mb-6">1. Executive Summary</h2>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-slate-600 mb-6">
            The platform enables fractional ownership of income-generating real
            estate. Ownership starts at{" "}
            <span className="font-semibold text-indigo-600">
              one square foot
            </span>
            , making it easier for retail investors.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Feature
              icon={<TrendingUp />}
              title="Valuation Link"
              desc="Token value rises with sq.ft price"
            />
            <Feature
              icon={<Square />}
              title="Tokenization"
              desc="1 sq.ft = 100 tokens"
            />
            <Feature
              icon={<Shield />}
              title="Economic Rights"
              desc="Income + capital gains"
            />
            <Feature
              icon={<Building2 />}
              title="SPV Structure"
              desc="Each asset isolated legally"
            />
          </div>
        </div>
      </section>

      {/* CORE ASSETS */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">2. Core Asset Focus</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {assets.map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow">
                <div className="text-indigo-600 mb-2">{item.icon}</div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3 items-start bg-indigo-50 p-4 rounded-xl">
            <MapPin className="text-indigo-600" />
            <p className="text-sm text-slate-600">
              Strategic urban & semi-urban locations with high demand.
            </p>
          </div>
        </div>
      </section>

      {/* TOKENIZATION */}
      <section className="py-20 container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-10">Tokenization Process</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow relative">
              <span className="absolute top-3 right-4 text-indigo-100 text-4xl font-bold">
                {item.step}
              </span>

              <div className="text-indigo-600 mb-4">{item.icon}</div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-black text-white px-6 py-3 rounded-lg inline-block text-sm">
          Example: 100 sq.ft → 10,000 tokens → Trade anytime
        </div>
      </section>

      {/* REVENUE */}
      <section className="py-20 bg-indigo-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Rental Revenue Sharing
        </h2>

        <div className="grid md:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {revenueTypes.map((item, i) => (
            <div key={i} className="bg-white/10 p-4 rounded-xl">
              <div className="text-2xl font-bold text-yellow-300">
                {item.value}
              </div>
              <div className="text-sm">{item.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Start Investing from 1 Sq.Ft
        </h2>

        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 mx-auto">
          View Properties <ChevronRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="flex gap-3 items-start">
    <div className="text-indigo-600">{icon}</div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </div>
);

export default Whitepaper;