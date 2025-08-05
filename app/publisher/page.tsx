
'use client';

import Header from '@/components/Header';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function PublisherPage() {
  const adFormats = [
    {
      icon: 'ri-image-line',
      title: 'Display Ads',
      description: 'Premium banner advertising with intelligent optimization to maximize your revenue potential.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-play-circle-line',
      title: 'Video Ads',
      description: 'High-CPM video monetization with VAST/VPAID support and advanced player integration.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: 'ri-layout-line',
      title: 'Native Ads',
      description: 'Seamless content integration that maintains user experience while driving higher engagement.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'ri-notification-line',
      title: 'Push Notifications',
      description: 'Build sustainable revenue streams through user subscription monetization programs.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: 'ri-window-line',
      title: 'Interstitial Ads',
      description: 'Full-screen monetization opportunities for mobile apps and responsive web properties.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Ads',
      description: 'Optimized mobile advertising solutions designed for superior user experience and revenue.',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const features = [
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Premium Advertiser Demand',
      description: 'Access to high-quality global advertisers ensuring competitive eCPMs and stable revenue streams.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Complete Traffic Protection',
      description: 'Advanced anti-fraud systems ensure brand-safe monetization and protect your inventory value.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'ri-code-line',
      title: 'Flexible Integration',
      description: 'Multiple integration options including JavaScript, SDKs, OpenRTB, and VAST for seamless setup.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Transparent Analytics',
      description: 'Real-time reporting with detailed insights to help optimize your monetization strategy effectively.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Dedicated Support',
      description: 'Personal account managers and technical support team committed to maximizing your success.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-green-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Maximize Revenue with{' '}
                  <span className="text-green-600">Premium Demand</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Join thousands of successful publishers who trust AdVolcano for premium monetization. 
                  Access high-quality advertisers, advanced optimization tools, and transparent analytics.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://ui.advolcano.io" className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 font-semibold text-lg whitespace-nowrap cursor-pointer text-center shadow-sm hover:shadow-md transition-all">
                  Start Monetizing
                </a>
                <Link href="/demo" className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 font-semibold text-lg whitespace-nowrap cursor-pointer text-center transition-all">
                  Request Demo
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20publisher%20revenue%20dashboard%20showing%20monetization%20analytics%2C%20eCPM%20charts%20and%20fill%20rate%20statistics%2C%20clean%20minimalist%20design%20with%20green%20and%20white%20color%20scheme%2C%20professional%20advertising%20technology%20interface%2C%20data%20visualization%20with%20revenue%20graphs%2C%20premium%20publisher%20management%20platform%20with%20modern%20typography&width=600&height=400&seq=publisher-revenue-dashboard&orientation=landscape"
                alt="Publisher Revenue Dashboard"
                className="w-full h-80 object-cover object-top rounded-2xl shadow-2xl border border-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Publishers Trust AdVolcano */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why Publishers Choose AdVolcano
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built for publishers who demand maximum revenue, transparency, and reliable performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-sm transition-shadow border border-slate-200">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Formats Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Monetization Options
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple ad formats designed to maximize revenue while maintaining excellent user experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adFormats.map((format, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${format.color} rounded-lg flex items-center justify-center mb-6`}>
                    <i className={`${format.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{format.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{format.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">200+</div>
              <div className="text-green-100 font-medium">Global Markets</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">50K+</div>
              <div className="text-green-100 font-medium">Active Publishers</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-green-100 font-medium">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
              <div className="text-green-100 font-medium">Publisher Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Maximize Your Revenue?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Join our network of successful publishers and start earning more from your traffic today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://ui.advolcano.io" className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 font-semibold text-lg whitespace-nowrap cursor-pointer shadow-sm hover:shadow-md transition-all">
              Join as Publisher
            </a>
            <Link href="/advertiser" className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 font-semibold text-lg whitespace-nowrap cursor-pointer transition-all">
              For Advertisers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
