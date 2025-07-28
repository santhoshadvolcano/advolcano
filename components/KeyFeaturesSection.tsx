'use client';

import Link from 'next/link';

export default function KeyFeaturesSection() {
  const features = [
    {
      emoji: '🧠',
      title: 'Precise Analytics',
      description: 'Real-time insights to optimize every impression.'
    },
    {
      emoji: '🎯',
      title: 'Conversion Tracking',
      description: 'Track user actions with pixel & postback support.'
    },
    {
      emoji: '🛡️',
      title: 'Transparency & Traffic Safety',
      description: 'Get full visibility with built-in fraud protection.'
    },
    {
      emoji: '💸',
      title: 'CPM & CPC Bidding',
      description: 'Bid your way — brand or performance focused.'
    },
    {
      emoji: '📍',
      title: 'Targeting & Retargeting',
      description: 'Target by GEO, OS, device, browser, and more.'
    },
    {
      emoji: '🔁',
      title: 'Frequency Capping',
      description: 'Control user exposure to prevent ad fatigue.'
    },
    {
      emoji: '📈',
      title: 'Bid Modifiers',
      description: 'Boost performance by adjusting bids per segment.'
    },
    {
      emoji: '🚫',
      title: 'Blacklisting / Whitelisting',
      description: 'Manage sources and block low-quality traffic.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900 mb-6">
            Key Features
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Everything You Need to Run High-Performance Ad Campaigns
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors">
              <span className="text-2xl flex-shrink-0">{feature.emoji}</span>
              <div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{feature.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-8">
            <p className="text-2xl font-bold text-stone-900 mb-2">
              🔥 Ready to Scale?
            </p>
            <p className="text-lg text-stone-600">
              Launch smarter campaigns now — with AdVolcano.io.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/campaign" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all shadow-lg whitespace-nowrap cursor-pointer">
              👉 Start Campaign
            </Link>
            <Link href="/demo" className="bg-stone-100 text-stone-700 px-8 py-4 rounded-lg font-semibold hover:bg-stone-200 transition-colors border border-stone-300 whitespace-nowrap cursor-pointer">
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}