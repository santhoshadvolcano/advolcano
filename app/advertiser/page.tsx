
'use client';

import Header from '@/components/Header';
import Link from 'next/link';

export default function AdvertiserPage() {
  const adFormats = [
    {
      emoji: '📢',
      title: 'Banner Ads',
      description: 'Eye-catching, reliable, and perfect for driving visibility and high CTRs.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      emoji: '🎥',
      title: 'Video Ads',
      description: 'Autoplay, skippable, or pre-roll — tell your brand story with immersive video formats.',
      color: 'from-red-500 to-pink-500'
    },
    {
      emoji: '📸',
      title: 'Native Ads',
      description: 'Blended seamlessly into content, native ads boost user trust and engagement.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      emoji: '🔔',
      title: 'Push Notifications',
      description: 'Deliver timely messages directly to users\' devices — even when they\'re offline.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      emoji: '💥',
      title: 'Pop Ads (Popunders)',
      description: 'Maximum exposure and aggressive reach — ideal for CPA-driven scale campaigns.',
      color: 'from-orange-500 to-red-500'
    },
    {
      emoji: '📲',
      title: 'Interstitial Ads',
      description: 'High-impact, full-screen creatives for apps and mobile web that drive action.',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const features = [
    {
      emoji: '✅',
      title: 'Premium, Fraud-Free Traffic',
      description: 'Our proprietary anti-fraud technology ensures only verified, high-quality users see your ads — maximizing ROI and eliminating wasted spend.'
    },
    {
      emoji: '✅',
      title: 'Massive Supply from Direct Publishers',
      description: 'We partner directly with a broad network of trusted publishers, ensuring volume, transparency, and performance at scale.'
    },
    {
      emoji: '🎯',
      title: 'Smart Targeting Tools',
      description: 'Reach the right audience with pinpoint precision. Target by GEO, device, OS, carrier, browser, and user behavior. Plus, use white- & blacklisting to fine-tune results.'
    },
    {
      emoji: '🛠️',
      title: 'Intuitive Dashboard',
      description: 'Launch and manage your campaigns with ease. Our self-serve platform is designed for speed, simplicity, and full control.'
    },
    {
      emoji: '🤝',
      title: 'Dedicated Support',
      description: 'Our expert team is available around the clock to guide you — from campaign setup to optimization and scaling.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20digital%20marketing%20campaign%20dashboard%20with%20colorful%20charts%20and%20analytics%2C%20modern%20office%20environment%2C%20bright%20and%20energetic%20atmosphere%2C%20premium%20advertising%20technology%20interface%2C%20global%20reach%20visualization%20with%20world%20map%2C%20clean%20minimalist%20design%20with%20orange%20and%20amber%20accents%2C%20high-tech%20marketing%20workspace&width=1200&height=600&seq=advertiser-hero&orientation=landscape"
            alt="AdVolcano Advertiser Platform"
            className="w-full h-full object-cover object-top opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
              Get High-Quality Traffic with{' '}
              <span className="text-amber-700">AdVolcano.io</span>
            </h1>
            <p className="text-xl sm:text-2xl text-stone-700 mb-8 leading-relaxed">
              Target, scale, and convert like never before with global reach across{' '}
              <span className="font-semibold text-amber-700">200+ GEOs</span>. Whether you're running performance or brand campaigns, AdVolcano delivers premium traffic via CPC & CPM bidding models — with full transparency, safety, and control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://ui.advolcano.io" className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 font-semibold text-lg whitespace-nowrap cursor-pointer text-center">
                🚀 Launch Your Campaign Today
              </a>
              <Link href="/publisher" className="bg-white text-amber-700 border-2 border-amber-700 px-8 py-4 rounded-lg hover:bg-amber-50 font-semibold text-lg whitespace-nowrap cursor-pointer text-center">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AdVolcano */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
              💡 Why Advertisers Choose AdVolcano
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-amber-200">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{feature.emoji}</span>
                  <h3 className="text-xl font-semibold text-stone-900">{feature.title}</h3>
                </div>
                <p className="text-stone-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Formats Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
              🎨 Ad Formats That Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adFormats.map((format, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-stone-200">
                <div className={`h-48 bg-gradient-to-br ${format.color} flex items-center justify-center`}>
                  <span className="text-6xl">{format.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">{format.title}</h3>
                  <p className="text-stone-600 leading-relaxed">
                    {format.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">200+</div>
              <div className="text-amber-100 font-medium">Global GEOs</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">10B+</div>
              <div className="text-amber-100 font-medium">Monthly Impressions</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-amber-100 font-medium">Fraud-Free Traffic</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
              <div className="text-amber-100 font-medium">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Targeting Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                Precision Targeting at Scale
              </h2>
              <p className="text-xl text-stone-700 mb-8">
                Reach your ideal audience with advanced targeting capabilities that put you in complete control of your campaigns.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line text-white"></i>
                  </div>
                  <span className="text-stone-700 font-medium">Geographic & Location Targeting</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-smartphone-line text-white"></i>
                  </div>
                  <span className="text-stone-700 font-medium">Device, OS & Browser Targeting</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-line text-white"></i>
                  </div>
                  <span className="text-stone-700 font-medium">Behavioral & Interest Targeting</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-time-line text-white"></i>
                  </div>
                  <span className="text-stone-700 font-medium">Dayparting & Time Zone Optimization</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
              <img 
                src="https://readdy.ai/api/search-image?query=Advanced%20digital%20advertising%20targeting%20dashboard%20with%20world%20map%2C%20demographic%20charts%2C%20device%20icons%2C%20behavioral%20analytics%2C%20modern%20UI%20design%20with%20amber%20and%20orange%20color%20scheme%2C%20professional%20marketing%20interface%2C%20data%20visualization%20with%20graphs%20and%20statistics%2C%20precision%20targeting%20tools&width=600&height=400&seq=targeting-dashboard&orientation=landscape"
                alt="Targeting Dashboard"
                className="w-full h-64 object-cover object-top rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Real-Time Campaign Control</h3>
              <p className="text-stone-700">
                Monitor performance, adjust targeting, and optimize campaigns in real-time with our intuitive dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Ignite Your Traffic?
          </h2>
          <p className="text-xl sm:text-2xl text-amber-100 mb-8">
            Start your campaign with AdVolcano.io and watch performance erupt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://ui.advolcano.io" className="bg-white text-amber-700 px-8 py-4 rounded-lg hover:bg-amber-50 font-semibold text-lg whitespace-nowrap cursor-pointer">
              👉 Launch Campaign Now
            </a>
            <Link href="/publisher" className="bg-amber-700 text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-amber-800 font-semibold text-lg whitespace-nowrap cursor-pointer">
              Become a Publisher
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
                AdVolcano.io
              </h3>
              <p className="text-stone-400">
                Next-gen Ad-Network engineered for scale, speed, and ROI.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Advertisers</h4>
              <ul className="space-y-2 text-stone-400">
                <li><a href="https://ui.advolcano.io" className="hover:text-white cursor-pointer">Launch Campaign</a></li>
                <li><Link href="/ad-formats" className="hover:text-white cursor-pointer">Ad Formats</Link></li>
                <li><Link href="/rtb" className="hover:text-white cursor-pointer">RTB Platform</Link></li>
                <li><Link href="/payments" className="hover:text-white cursor-pointer">Payments</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Publishers</h4>
              <ul className="space-y-2 text-stone-400">
                <li><Link href="/publisher" className="hover:text-white cursor-pointer">Join Network</Link></li>
                <li><a href="https://ui.advolcano.io" className="hover:text-white cursor-pointer">Publisher Dashboard</a></li>
                <li><Link href="/payments" className="hover:text-white cursor-pointer">Payment Methods</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-stone-400">
                <li><a href="mailto:support@advolcano.io" className="hover:text-white cursor-pointer">Contact Support</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Documentation</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">API Reference</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-400">
            <p className="mb-2">
              Powered By Zimzel Engineering Pvt LTD
            </p>
            <p>&copy; 2024 AdVolcano.io. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
