

import React, { useState } from 'react';
import ComparisonTable from "./ComparisonTable";
// Note: Ensure Tailwind CSS is properly configured in your project

const PropertyXGuide = () => {
  const [activeTab, setActiveTab] = useState('ownershipModes');

  const tabs = [
    { id: 'ownershipModes', label: 'Ownership Modes' },
    { id: 'propertyXVsOthers', label: 'PropertyX Vs Other Models' },
    { id: 'process', label: 'Process' },
    { id: 'portfolio', label: 'View Your Digital Assets Portfolio' },
    { id: 'exit', label: 'Exit' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content - Ownership Modes Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ownership Modes at PropertyX
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-5">
              <p>
                PropertyX introduces a pioneering new product that will enable investors the ability to invest in further smaller amounts as well as have much diversified and deeper options to exit from these investments. Our promise hasn't changed and remains the same – <strong className="text-gray-900">you own and control where you invest</strong>. With our new product you get the power of Distributed Ledger Technology – now you have better control, better transparency, and better governance.
              </p>
              
              <p>
                Now, we offer property tokens alongside our well established <strong className="text-gray-900">'Registered Co-ownership' (RCO)</strong> product. The Property Tokens hold a <strong className="text-gray-900">'Right to Registered Co-Ownership'</strong>.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
                <p className="text-gray-700">
                  The Property Tokens offer legally enforceable <strong className="text-gray-900">Secure Direct Rights (SDR)</strong> over the property with an <strong className="text-gray-900">Option To Convert (OTC)</strong> into a proportionate Registered Co-Ownership by exhausting the token. Such right, when exercised by the Token Holder can be executed into Registered Co-Ownership through a deed executed at Sub-Registrar's office.
                </p>
              </div>
              
              <p>
                As investor, you will have full beneficial rights emanating from the property (as a Registered Co-owner would) and such rights and terms are established within the Property Token.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-5 my-6">
                <p className="text-gray-800 font-medium">
                  Best of all, <span className="text-green-700">your rights and obligations are also legally enforceable</span>. PropertyX is a global pioneer in introducing this – so you can feel safe and invest with confidence.
                </p>
              </div>
            </div>

            {/* Registered Co-Ownership Section */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Registered Co-Ownership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                This is the first innovation introduced by PropertyX. This model offers people the chance to invest and have direct rights of co-ownership of the properties and assets that it lists on the platform. These rights are established through registered property deeds at the respective sub-registrar's office.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Better Control</h4>
            <p className="text-sm text-gray-500">Full ownership and control over your investment decisions</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Better Transparency</h4>
            <p className="text-sm text-gray-500">Distributed Ledger Technology ensures complete visibility</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Better Governance</h4>
            <p className="text-sm text-gray-500">Legally enforceable rights and structured processes</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Diversified Options</h4>
            <p className="text-sm text-gray-500">Invest in smaller amounts with multiple exit strategies</p>
          </div>
        </div>
      </div>
      <ComparisonTable/>
    </div>
  );
};

export default PropertyXGuide;