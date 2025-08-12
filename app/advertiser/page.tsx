
'use client';

import Header from '@/components/Header';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function AdvertiserPage() {
  const adFormats = [
    {
      icon: 'ri-image-line',
      title: 'Display Ads',
      description: 'Professional banner advertising with advanced targeting and real-time optimization for maximum ROI.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-play-circle-line',
      title: 'Video Ads',
      description: 'Engaging video content with VAST/VPAID support, autoplay options, and comprehensive analytics.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: 'ri-layout-line',
      title: 'Native Ads',
      description: 'Seamlessly integrated content that matches your audience\'s browsing experience perfectly.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'ri-notification-line',
      title: 'Push Notifications',
      description: 'Direct engagement with users through timely, personalized notifications that drive action.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: 'ri-window-line',
      title: 'Interstitial Ads',
      description: 'Full-screen advertising experiences that capture attention and maximize conversion rates.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Ads',
      description: 'Optimized mobile advertising solutions with responsive design and touch-friendly interactions.',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const features = [
    {
      icon: 'ri-shield-check-line',
      title: 'Premium Quality Traffic',
      description: 'Access verified, fraud-free traffic from trusted publishers with advanced anti-fraud protection and real-time monitoring.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-global-line',
      title: 'Global Publisher Network',
      description: 'Reach audiences worldwide through our extensive network of premium publishers across 200+ countries and regions.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'ri-target-line',
      title: 'Advanced Targeting',
      description: 'Precision targeting with demographic, geographic, behavioral, and contextual options for optimal campaign performance.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'ri-dashboard-line',
      title: 'Intuitive Dashboard',
      description: 'User-friendly campaign management interface with real-time analytics and comprehensive reporting tools.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'ri-customer-service-line',
      title: '24/7 Expert Support',
      description: 'Dedicated account managers and technical support available around the clock to ensure your success.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Scale Your Campaigns with{' '}
                  <span className="text-blue-600">Premium Traffic</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Connect with high-quality audiences across 200+ global markets. Drive performance with advanced targeting, 
                  real-time optimization, and fraud-free traffic through our intelligent advertising platform.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://ui.advolcano.io" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg whitespace-nowrap cursor-pointer text-center shadow-sm hover:shadow-md transition-all">
                  Launch Campaign
                </a>
                <Link href="/demo" className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 font-semibold text-lg whitespace-nowrap cursor-pointer text-center transition-all">
                  Request Demo
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20advertising%20campaign%20dashboard%20interface%20showing%20performance%20metrics%2C%20charts%20and%20analytics%2C%20clean%20minimalist%20design%20with%20blue%20and%20white%20color%20scheme%2C%20professional%20marketing%20technology%20platform%2C%20data%20visualization%20with%20graphs%20and%20statistics%2C%20premium%20business%20software%20interface%20with%20modern%20typography%20and%20spacing&width=600&height=400&seq=advertiser-dashboard&orientation=landscape"
                alt="Advertiser Dashboard"
                className="w-full h-80 object-cover object-top rounded-2xl shadow-2xl border border-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AdVolcano */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why Advertisers Choose AdVolcano
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built for performance marketers who demand results, transparency, and scale.
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
              Comprehensive Ad Format Support
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our extensive range of ad formats designed for maximum engagement and conversion.
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
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">200+</div>
              <div className="text-blue-100 font-medium">Global Markets</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">10B+</div>
              <div className="text-blue-100 font-medium">Monthly Impressions</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100 font-medium">Fraud-Free Traffic</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100 font-medium">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Scale Your Advertising?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Join thousands of successful advertisers who trust AdVolcano for their campaign success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://ui.advolcano.io" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg whitespace-nowrap cursor-pointer shadow-sm hover:shadow-md transition-all">
              Start Campaign Now
            </a>
            <Link href="/publisher" className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 font-semibold text-lg whitespace-nowrap cursor-pointer transition-all">
              Become a Publisher
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
