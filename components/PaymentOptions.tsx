
'use client';
import Link from 'next/link';

export default function PaymentOptions() {
  const paymentMethods = [
    { name: 'PayPal', icon: 'ri-paypal-line', description: 'Quick and secure online payments' },
    { name: 'Wire Transfer', icon: 'ri-bank-line', description: 'Traditional bank wire transfers' },
    { name: 'Capitalist', icon: 'ri-wallet-line', description: 'E-wallet payment solution' },
    { name: 'Credit / Debit Card', icon: 'ri-bank-card-line', description: 'Visa, MasterCard, American Express' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            💳 Convenient Payment Options
          </h2>
          <p className="text-xl text-gray-600">
            Choose from multiple secure payment methods for your advertising campaigns
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mx-auto mb-4">
                  <i className={`${method.icon} w-8 h-8 flex items-center justify-center text-red-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.name}</h3>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All payments are processed securely with 256-bit SSL encryption
          </p>
          <Link href="/demo" className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer">
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
}
