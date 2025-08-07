'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PaymentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: ''
  });

  // Current USD to INR exchange rate (you might want to fetch this from an API)
  const USD_TO_INR_RATE = 87.65;

  const paymentMethods = [
    {
      icon: 'ri-wallet-line',
      title: 'Capitalist',
      description: 'E-wallet payment solution',
      logo: 'https://readdy.ai/api/search-image?query=Capitalist%20logo%20fintech%20payment%20wallet%20brand%20identity%20modern%20clean%20design%20white%20background%20professional%20financial%20services&width=120&height=60&seq=capitalist-logo-001&orientation=landscape'
    },
    {
      icon: 'ri-paypal-line',
      title: 'PayPal',
      description: 'Secure PayPal payments',
      logo: 'https://readdy.ai/api/search-image?query=PayPal%20official%20logo%20brand%20identity%20payment%20service%20blue%20white%20background%20clean%20modern%20design&width=120&height=60&seq=paypal-logo-001&orientation=landscape'
    },
    {
      icon: 'ri-bank-card-line',
      title: 'Credit/Debit Card',
      description: 'Visa, Mastercard, American Express',
      logo: 'https://readdy.ai/api/search-image?query=Credit%20card%20payment%20logos%20Visa%20Mastercard%20American%20Express%20brand%20identity%20white%20background%20modern%20clean%20design&width=120&height=60&seq=creditcard-logo-001&orientation=landscape',
      hasModal: true
    },
    {
      icon: 'ri-bank-line',
      title: 'Wire Transfer',
      description: 'Bank wire transfers and ACH',
      logo: 'https://readdy.ai/api/search-image?query=Bank%20wire%20transfer%20payment%20logo%20banking%20financial%20services%20modern%20clean%20design%20white%20background%20professional&width=120&height=60&seq=wiretransfer-logo-001&orientation=landscape'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'USDT TRC20',
      description: 'Tether cryptocurrency payments',
      logo: 'https://readdy.ai/api/search-image?query=USDT%20Tether%20cryptocurrency%20logo%20TRC20%20blockchain%20payment%20green%20white%20background%20modern%20clean%20design%20digital%20currency&width=120&height=60&seq=usdt-logo-001&orientation=landscape'
    }
  ];

  const handleCardClick = (method: any) => {
    if (method.hasModal) {
      setIsModalOpen(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.amount) {
      alert('Please fill in all required fields');
      return;
    }

    if (parseFloat(formData.amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add payment processing logic here
    alert('Payment form submitted successfully!');
    setIsModalOpen(false);
    setFormData({ name: '', email: '', amount: '' });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', email: '', amount: '' });
  };

  // Calculate commission and total
  const commission = formData.amount ? (parseFloat(formData.amount) * 0.03) : 0;
  const totalAmount = formData.amount ? (parseFloat(formData.amount) + commission) : 0;
  const convertedAmount = formData.amount ? (parseFloat(formData.amount) * USD_TO_INR_RATE).toFixed(2) : '0.00';
  const totalAmountINR = totalAmount ? (totalAmount * USD_TO_INR_RATE).toFixed(2) : '0.00';

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
            Multiple payment options for both advertisers and publishers.
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
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-8 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-shadow ${method.hasModal ? 'cursor-pointer hover:border-blue-300' : ''
                    }`}
                  onClick={() => handleCardClick(method)}
                >
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
                  <div className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    Instant deposits available
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Publishers */}
          <div className="mb-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">For Publishers</h3>
              <p className="text-lg text-slate-600">Receive your earnings through multiple payout options</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-8 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-shadow ${method.hasModal ? 'cursor-pointer hover:border-green-300' : ''
                    }`}
                  onClick={() => handleCardClick(method)}
                >
                  {/* <div className="mb-6">
                    <img 
                      src={method.logo} 
                      alt={`${method.title} logo`} 
                      className="w-24 h-12 mx-auto object-contain mb-4"
                    />
                  </div> */}
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className={`${method.icon} text-green-600 text-2xl`}></i>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">{method.title}</h4>
                  <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                  <div className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    Monthly payouts
                  </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">For Publishers</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span>Monthly payments by the 15th</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span>30-day payment terms</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span>Minimum payout: $50-$500</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span>No setup or maintenance fees</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200">
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
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span>Unused budget refunds</span>
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
            Join thousands of advertisers and publishers who trust AdVolcano for secure payments.
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

      {/* Credit Card Payment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="ri-bank-card-line text-blue-600 text-xl"></i>
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">Credit Card/Debit Card Payment</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <i className="ri-close-line text-slate-600 text-xl"></i>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6 sm:space-y-4">
              {/* Name & Email Fields (side by side on md+) */}
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-base"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-base"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Amount Field */}
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-slate-700 mb-2">
                  Amount (USD) *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 font-medium">$</span>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    min="1"
                    step="0.01"
                    className="w-full pl-8 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-base"
                    placeholder="0.00"
                  />
                </div>
              </div>

              {/* Summary Field */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Summary
                </label>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Amount (USD):</span>
                      <span className="font-medium text-slate-900">
                        ${formData.amount || '0.00'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Commission (3%):</span>
                      <span className="font-medium text-orange-600">
                        ${commission.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Exchange Rate:</span>
                      <span className="text-sm text-slate-600">1 USD = ₹{USD_TO_INR_RATE}</span>
                    </div>
                    <hr className="border-slate-200" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700">Amount (INR):</span>
                      <span className="font-semibold text-green-600 text-lg">
                        ₹{convertedAmount}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-900">Total Amount (USD):</span>
                      <span className="font-bold text-blue-700 text-lg">
                        ${totalAmount.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-900">Total Amount (INR):</span>
                      <span className="font-bold text-blue-700 text-lg">
                        ₹{totalAmountINR}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}