
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PaymentsPage() {
  const advertiserPaymentMethods = [
    {
      icon: 'ri-wallet-line',
      title: 'Capitalist',
      description: 'E-wallet payment solution',
      logo: 'https://readdy.ai/api/search-image?query=Capitalist%20logo%20fintech%20payment%20wallet%20brand%20identity%20modern%20clean%20design%20white%20background%20professional%20financial%20services&width=120&height=60&seq=capitalist-logo-001&orientation=landscape'
    },
    {
      icon: 'ri-bank-card-line',
      title: 'Credit / Debit Card',
      description: 'Visa, Mastercard, American Express',
      logo: 'https://readdy.ai/api/search-image?query=Credit%20card%20payment%20logos%20Visa%20Mastercard%20American%20Express%20brand%20identity%20white%20background%20modern%20clean%20design&width=120&height=60&seq=creditcard-logo-001&orientation=landscape'
    },
    {
      icon: 'ri-bank-line',
      title: 'Wire Transfer',
      description: 'Bank wire transfers and ACH',
      logo: 'https://readdy.ai/api/search-image?query=Bank%20wire%20transfer%20payment%20logo%20banking%20financial%20services%20modern%20clean%20design%20white%20background%20professional&width=120&height=60&seq=wiretransfer-logo-001&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Secure Payment <span className="text-blue-600">Methods</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Multiple payment options for advertisers. 
            Choose the method that works best for you with secure processing.
          </p>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Available Payment Methods</h2>
            <p className="text-xl text-slate-600">Flexible payment options tailored for your needs</p>
          </div>

          {/* For Advertisers */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">For Advertisers</h3>
              <p className="text-lg text-slate-600">Fund your campaigns with convenient payment options</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advertiserPaymentMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                  <div className="mb-6">
                    <img 
                      src={method.logo} 
                      alt={`${method.title} logo`} 
                      className="w-24 h-12 mx-auto object-contain mb-4"
                    />
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className={`${method.icon} text-blue-600 text-2xl`}></i>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">{method.title}</h4>
                  <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Payment Features</h2>
            <p className="text-xl text-slate-600">Why choose our payment system</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Secure Processing</h3>
              <p className="text-slate-600">256-bit SSL encryption and fraud protection for all transactions</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Fast Processing</h3>
              <p className="text-slate-600">Quick payment processing with real-time transaction updates</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-2-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">24/7 Support</h3>
              <p className="text-slate-600">Round-the-clock payment support for any issues or questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Payment Schedule & Terms</h2>
          </div>

          <div className="flex justify-center">
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200 max-w-md">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">For Advertisers</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span>Prepaid campaign model</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span>Real-time budget tracking</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span>Auto-reload available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of advertisers who trust AdVolcano for secure payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://ui.advolcano.io" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-slate-50 font-semibold text-lg whitespace-nowrap cursor-pointer shadow-sm hover:shadow-md transition-all">
              Start Now
            </a>
            <a href="/demo" className="border border-blue-300 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg whitespace-nowrap cursor-pointer transition-all">
              Request Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
