import React, { useState } from 'react';

const PropertyXGuide = () => {
  const [activeTab, setActiveTab] = useState('ownershipModes');

  const tabs = [
    { id: 'ownershipModes', label: 'Ownership Modes' },
    { id: 'propertyXVsOthers', label: 'PropertyX Vs Other Models' },
    { id: 'process', label: 'Process' },
    { id: 'portfolio', label: 'View Your Digital Assets Portfolio' },
    { id: 'exit', label: 'Exit' }
  ];

  // Comparison data from the image
  const comparisonRows = [
    { parameter: 'Digital Asset', tokenisation: 'Digital Asset', rco: 'Not a Digital Asset' },
    { parameter: 'Representation in Sale Deed', tokenisation: 'Token Trust Acts as sole Co-Owner in Sale Deed', rco: 'Co-Owners\' name directly included in Sale deed' },
    { parameter: 'Ownership Right', tokenisation: 'Beneficial Co-Ownership right in property', rco: 'Direct Co-Ownership right in property' },
    { parameter: 'Transfer Registration', tokenisation: 'Transfer does not require registration (Even as per property laws)', rco: 'Transfer requires registration' },
    { parameter: 'Taxation', tokenisation: 'Property based taxes applicable (Crypto tax does not apply)', rco: 'Property based taxes applicable' },
    { parameter: 'Stamp Duty', tokenisation: 'Stamp Duty not applicable (on Token sale)', rco: 'Stamp duty applicable on sale' },
    { parameter: 'Liquidity', tokenisation: 'Easier to Sell/Transfer', rco: 'Difficult to Sell/Transfer' },
    { parameter: 'KYC Requirement', tokenisation: 'Token Holder KYC mandatory (Even if bought in secondary)', rco: 'KYC mandatory for all RCO investors' },
    { parameter: 'Investor Eligibility', tokenisation: 'Can be held by Indians as well as foreigners', rco: 'Only Indians can become co-owner by RCO' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    Tokenisation vs Registered Co-Ownership (RCO)</h2>
<p>Complete feature comparison based on legal and operational framework</p>
          

        </div>

        {/* Tokenisation vs RCO Comparison Table - From Image */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10">
          <div className="bg-gradient-to-r from-blue-50 to-white px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Tokenisation vs Registered Co-Ownership (RCO)</h2>
            <p className="text-sm text-gray-500 mt-1">Complete feature comparison based on legal and operational framework</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 border-r border-gray-200">Parameter</th>
                  <th className="px-4 py-3 text-left font-semibold text-blue-700 bg-blue-50/50">Tokenisation</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 bg-gray-50">Registered Co-ownership (RCO)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-800 border-r border-gray-100">{row.parameter}</td>
                    <td className="px-4 py-3 text-gray-700">{row.tokenisation}</td>
                    <td className="px-4 py-3 text-gray-700">{row.rco}</td>
                  </tr>
                ))}
                {/* Custody & Rights Row - Special highlight */}
                <tr className="bg-gray-50/60 border-t-2 border-gray-200">
                  <td className="px-4 py-3 font-semibold text-gray-800 border-r border-gray-200">Custody & Rights</td>
                  <td className="px-4 py-3 text-gray-800 font-medium">Custody as well as all Rights & Obligations rest with Token Holders <span className="text-gray-600 font-normal">(as Beneficial Owners)</span></td>
                  <td className="px-4 py-3 text-gray-800 font-medium">Custody as well as all Rights & Obligations rest with Token Holders <span className="text-gray-600 font-normal">(as Co-Owners of the Token)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-50 px-4 py-2 text-right text-xs text-gray-400 border-t border-gray-200">
            Legally enforceable framework | Secure Direct Rights (SDR) with Option To Convert (OTC)
          </div>
        </div>

        {/* Main Content - Changes based on active tab */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 lg:p-10">

             <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeTab === tab.id
              ? 'bg-blue-600 text-white shadow'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>

            
            {/* Ownership Modes Tab Content */}
            {activeTab === 'ownershipModes' && (
              <>
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

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    Registered Co-Ownership
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    This is the first innovation introduced by PropertyX. This model offers people the chance to invest and have direct rights of co-ownership of the properties and assets that it lists on the platform. These rights are established through registered property deeds at the respective sub-registrar's office.
                  </p>
                </div>
              </>
            )}

            {/* PropertyX Vs Other Models Tab */}
            {activeTab === 'propertyXVsOthers' && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">PropertyX Vs Other Investment Models</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Unlike traditional real estate investments that require large capital and involve complex legal processes, PropertyX offers:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-gray-900">Lower entry barriers</strong> – Invest with smaller amounts</li>
                    <li><strong className="text-gray-900">Enhanced liquidity</strong> – Tokenised assets can be traded easily</li>
                    <li><strong className="text-gray-900">Better transparency</strong> – DLT-powered ownership tracking</li>
                    <li><strong className="text-gray-900">Legal enforceability</strong> – Rights backed by proper deeds</li>
                    <li><strong className="text-gray-900">Diversification</strong> – Spread investment across multiple properties</li>
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                    <p className="text-amber-800 text-sm">✨ Compared to REITs, PropertyX provides direct ownership rights and better control over your investment decisions.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Process Tab */}
            {activeTab === 'process' && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Investment Process</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 shrink-0">1</div>
                    <div><strong className="text-gray-900">Sign Up & KYC</strong><p className="text-gray-500 text-sm">Complete your verification to start investing</p></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 shrink-0">2</div>
                    <div><strong className="text-gray-900">Browse Properties</strong><p className="text-gray-500 text-sm">Explore available tokenised properties and RCO opportunities</p></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 shrink-0">3</div>
                    <div><strong className="text-gray-900">Invest</strong><p className="text-gray-500 text-sm">Purchase property tokens or RCO shares securely</p></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 shrink-0">4</div>
                    <div><strong className="text-gray-900">Earn & Manage</strong><p className="text-gray-500 text-sm">Receive rental income, track appreciation, manage portfolio</p></div>
                  </div>
                </div>
              </div>
            )}

            {/* Portfolio Tab */}
            {activeTab === 'portfolio' && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">View Your Digital Assets Portfolio</h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-gray-500 text-sm">Total Investment</p>
                      <p className="text-2xl font-bold text-gray-900">--</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-gray-500 text-sm">Active Tokens</p>
                      <p className="text-2xl font-bold text-gray-900">--</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-gray-500 text-sm">RCO Holdings</p>
                      <p className="text-2xl font-bold text-gray-900">--</p>
                    </div>
                  </div>
                  <p className="text-center text-gray-500 mt-6 text-sm">Connect your wallet to view your digital asset portfolio</p>
                </div>
              </div>
            )}

            {/* Exit Tab */}
            {activeTab === 'exit' && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Exit Strategies</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">Tokenised Assets</h3>
                    <p className="text-gray-600 text-sm mt-1">Sell your property tokens on the secondary market with ease. No stamp duty, faster settlement.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">RCO Investments</h3>
                    <p className="text-gray-600 text-sm mt-1">Transfer through registered deed at sub-registrar's office. Exit through property sale or finding a buyer for your co-ownership share.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">Option To Convert (OTC)</h3>
                    <p className="text-gray-600 text-sm mt-1">Token holders can convert to Registered Co-Ownership by exercising their right through a deed at Sub-Registrar's office.</p>
                  </div>
                </div>
              </div>
            )}

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
    </div>
  );
};

export default PropertyXGuide;