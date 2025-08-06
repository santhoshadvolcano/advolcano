
'use client';

import Link from 'next/link';

export default function PayPerCallCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Scale Your Revenue?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join our premium PayPerCall network and start earning with high-converting campaigns. 
            Get access to exclusive offers with industry-leading payouts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/demo" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer shadow-xl">
              Start Earning Today
            </Link>
            <Link href="/payments" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              View Payment Options
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$0</div>
              <div className="text-white/80">Setup Fees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">Weekly</div>
              <div className="text-white/80">Payment Schedule</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
