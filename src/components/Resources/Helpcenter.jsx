import React, { useState } from "react";

const faqsData = [
  {
    question: "What is PropertyX?",
    answer:
      "PropertyX is a fractional real estate platform that allows users to invest in event-based properties like marriage halls and banquet spaces.",
  },
  {
    question: "How can I start investing?",
    answer:
      "You can start investing by signing up, completing KYC, and choosing a property listed on the platform.",
  },
  {
    question: "What is fractional ownership?",
    answer:
      "Fractional ownership allows multiple investors to own a portion of a property and earn returns proportionally.",
  },
  {
    question: "How do I earn returns?",
    answer:
      "Returns are generated from rental income and event bookings from the property.",
  },
];

const Helpcenter = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-[Inter]">

      {/* HEADER */}
      <div className="bg-white py-16 text-center shadow-sm">
        <h1 className="text-4xl font-bold">Help Center</h1>
        <p className="text-gray-600 mt-3">
          Find answers, guides, and support for PropX
        </p>

        {/* SEARCH */}
        <div className="mt-6 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full px-5 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#2c92ad]"
          />
        </div>
      </div>

      {/* HELP CATEGORIES */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">

        {["Getting Started", "Investments", "Account & Security"].map(
          (item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Learn more about {item.toLowerCase()} with detailed guides.
              </p>
            </div>
          )
        )}
      </div>

      {/* FAQ SECTION */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-5 shadow-sm"
            >
              <button
                className="w-full text-left font-medium flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT SUPPORT */}
      <div className="bg-[#2c92ad] text-white py-16 text-center">
        <h2 className="text-2xl font-semibold">
          Still need help?
        </h2>
        <p className="mt-2 text-sm opacity-90">
          Our support team is here to assist you
        </p>

        <button className="mt-6 bg-white text-[#2c92ad] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default Helpcenter;