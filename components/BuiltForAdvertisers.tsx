
'use client';

import Link from 'next/link';

export default function BuiltForAdvertisers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900 mb-6">
            💥 Built for Advertisers Who Demand More
          </h2>
          <p className="text-xl text-stone-600 mb-8">
            Start campaigns in minutes. Customize every detail. Dominate every channel.
          </p>
          <p className="text-2xl font-semibold text-amber-700 mb-8">
            Turn up the heat on your ad campaigns. Welcome to AdVolcano.
          </p>
          <Link href="/demo" className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 font-semibold text-lg whitespace-nowrap cursor-pointer">
            Sign Up
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-4">
              <i className="ri-timer-line text-2xl text-orange-700"></i>
            </div>
            <h3 className="text-xl font-semibold text-stone-900 mb-2">Quick Setup</h3>
            <p className="text-stone-600">Launch campaigns in minutes with our intuitive interface</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mx-auto mb-4">
              <i className="ri-settings-3-line text-2xl text-yellow-700"></i>
            </div>
            <h3 className="text-xl font-semibold text-stone-900 mb-2">Full Control</h3>
            <p className="text-stone-600">Customize every aspect of your advertising campaigns</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-lime-100 rounded-full mx-auto mb-4">
              <i className="ri-trophy-line text-2xl text-lime-700"></i>
            </div>
            <h3 className="text-xl font-semibold text-stone-900 mb-2">Dominate</h3>
            <p className="text-stone-600">Outperform competitors across all advertising channels</p>
          </div>
        </div>
      </div>
    </section>
  );
}
