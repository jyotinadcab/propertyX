import React from "react";
import {
  Users,
  ArrowRight,
  // Sparkles,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const Property = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* HERO */}
      <section className="relative py-24 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white blur-[120px] rounded-full" />

        <div className="relative max-w-4xl mx-auto">
 

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Turn Your Network Into{" "}
            <span className="text-gray-700">Recurring Income</span>
          </h1>

          <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
            Partner with us and help investors access premium real estate
            opportunities — while you earn effortlessly.
          </p>

          <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-xl flex items-center gap-2 mx-auto transition hover:bg-gray-800 hover:scale-105 shadow-md">
            Become Partner <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-md transition">
            <TrendingUp className="mx-auto text-gray-700 mb-4" size={32} />
            <h3 className="text-xl font-semibold">High Earnings</h3>
            <p className="text-gray-500 mt-2">
              Earn consistent commissions on every deal
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-md transition">
            <ShieldCheck className="mx-auto text-gray-700 mb-4" size={32} />
            <h3 className="text-xl font-semibold">Secure Platform</h3>
            <p className="text-gray-500 mt-2">
              Trusted & transparent transactions
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-md transition">
            <Users className="mx-auto text-gray-700 mb-4" size={32} />
            <h3 className="text-xl font-semibold">Full Support</h3>
            <p className="text-gray-500 mt-2">
              Dedicated team to help you grow
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Property;