import React, { useState } from "react";

const faqs = [
  {
    q: "What is fractional real estate?",
    a: "It allows multiple investors to own a share of a property and earn returns based on rental income and appreciation.",
  },
  {
    q: "How do I start investing?",
    a: "Sign up, complete verification, and explore available properties to invest in instantly.",
  },
  {
    q: "How do I earn returns?",
    a: "You earn through monthly rental income and long-term property value appreciation.",
  },
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-gray-900 font-[Inter]">

      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 py-24 text-center relative">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            How can we help you?
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Find answers, guides, and expert support to make your investment journey smooth and confident.
          </p>

          {/* SEARCH */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search articles, guides, FAQs..."
              className="w-full px-6 py-4 rounded-full bg-white border shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </div>
      </div>

      {/* CATEGORY CARDS */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {[
          {
            title: "Getting Started",
            desc: "Create account and begin your investment journey in minutes.",
            icon: "🧭",
          },
          {
            title: "Investments",
            desc: "Understand fractional ownership and smart real estate investing.",
            icon: "🏢",
          },
          {
            title: "Payments & Withdrawals",
            desc: "Secure transactions, payouts, and wallet management.",
            icon: "💳",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-xl bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-medium text-lg">{faq.q}</span>
                <span className="text-2xl text-gray-400">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-600 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT SECTION */}
<div className="bg-gradient-to-r from-[#2c92ad] to-[#1f6f82] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Still need help?</h2>
          <p className="text-white/80">
            Our support team usually responds within a few hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white text-black p-8 rounded-2xl shadow-xl">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              rows="4"
              placeholder="Describe your issue..."
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
<button
  type="submit"
  className="w-full bg-[#2c92ad] text-white py-3 rounded-lg font-semibold hover:bg-[#237a90] transition"
>
  Send Message
</button>
          </form>
        </div>
      </div>

      {/* FOOTER STRIP */}
      <div className="text-center py-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Support Center. All rights reserved.
      </div>

    </div>
  );
};

export default Support;