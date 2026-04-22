import React, { useState } from 'react';

const Faqs = () => {
  const [activeTab, setActiveTab] = useState('faqs');

  // FAQ Data
  const faqs = [
    {
      question: "Who will own the property?",
      answer: "The property will be owned by the registered co-owners as per their fractional share."
    },
    {
      question: "What is FRAX?",
      answer: "FRAX is a fractional ownership token representing real estate shares on the platform."
    },
    {
      question: "Will I get to view the due diligence report?",
      answer: "Yes, all investors get access to due diligence reports for transparency."
    }
  ];

  // Market Update Data
  const marketUpdates = [
    {
      title: "Q2 2026 Market Overview",
      date: "April 15, 2026",
      content: "Real estate markets continue to show resilience with fractional ownership platforms gaining significant traction among retail investors."
    },
    {
      title: "New Property Listings",
      date: "April 10, 2026",
      content: "Three new commercial properties have been added to the platform, expanding investment opportunities across prime locations."
    },
    {
      title: "Regulatory Update",
      date: "April 5, 2026",
      content: "New regulations favorable to fractional real estate ownership have been approved, enhancing investor protections."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Knowledge Base
          </h1>
          <p className="text-lg text-gray-600">
            Your comprehensive resource for understanding fractional real estate investment
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('faqs')}
              className={`py-4 px-1 font-medium text-sm border-b-2 transition-colors duration-200 ${
                activeTab === 'faqs'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              FAQs
            </button>

            <button
              onClick={() => setActiveTab('market')}
              className={`py-4 px-1 font-medium text-sm border-b-2 transition-colors duration-200 ${
                activeTab === 'market'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Market Update
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="mt-6">

          {/* FAQs Content */}
          {activeTab === 'faqs' && (
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                >
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Market Update Content */}
          {activeTab === 'market' && (
            <div className="space-y-6">
              {marketUpdates.map((update, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                >
                  <div className="px-6 py-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {update.title}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {update.date}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {update.content}
                    </p>
                  </div>
                </div>
              ))}

              {/* Additional Market Info Card */}
              <div className="mt-8 bg-blue-50 rounded-lg border border-blue-200 p-6">
                <h4 className="text-md font-semibold text-blue-900 mb-2">
                  📈 Market Insights
                </h4>
                <p className="text-blue-800 text-sm">
                  Fractional real estate ownership continues to democratize access to property investments. 
                  Stay updated with our latest market analysis and property offerings.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">
            All investors get access to due diligence reports for complete transparency
          </p>
        </div>

      </div>
    </div>
  );
};

export default Faqs;