
'use client';

import Header from '@/components/Header';
import Link from 'next/link';

export default function PublisherPage() {
  const adFormats = [
    {
      emoji: '📢',
      title: 'Banner Ads',
      description: 'Classic and effective — reliable monetization for desktop and mobile web.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      emoji: '🎥',
      title: 'Video Ads',
      description: 'In-stream, out-stream, VAST/VPAID — monetize every video view with high-CPM demand.',
      color: 'from-red-500 to-pink-500'
    },
    {
      emoji: '📸',
      title: 'Native Ads',
      description: 'Non-intrusive, high-engagement placements that match your site\'s look and feel.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      emoji: '🔔',
      title: 'Push Notifications',
      description: 'Generate long-term revenue by building and monetizing user subscriptions.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      emoji: '💥',
      title: 'Pop Ads (Popunders)',
      description: 'High-volume and aggressive — ideal for driving maximum earnings.',
      color: 'from-orange-500 to-red-500'
    },
    {
      emoji: '📲',
      title: 'Interstitial Ads',
      description: 'Full-screen units that deliver high impact and excellent monetization in apps and mobile web.',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const features = [
    {
      emoji: '✅',
      title: 'Top-Tier Advertiser Demand',
      description: 'Gain instant access to high-quality global advertisers across 200+ GEOs. Our network runs on CPC & CPM models, giving you competitive rates and stable income.'
    },
    {
      emoji: '✅',
      title: 'Full Traffic Protection',
      description: 'Our built-in anti-fraud platform safeguards your inventory, ensuring clean, compliant, and brand-safe monetization.'
    },
    {
      emoji: '💼',
      title: 'Flexible Integration Options',
      description: 'Monetize however you like — use JavaScript, iframe tags, OpenRTB, XML feeds, SDKs, or VAST/VPAID for video. We support all popular ad formats and protocols.'
    },
    {
      emoji: '📊',
      title: 'Transparent Analytics',
      description: 'Real-time reporting and deep insights help you track performance and optimize yield easily — right from your intuitive dashboard.'
    },
    {
      emoji: '🤝',
      title: 'Human Support, Always',
      description: 'Your success is our priority. Our experienced publisher managers work with you directly to optimize setup, fill rates, and eCPMs.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20publisher%20monetization%20dashboard%20with%20revenue%20analytics%20charts%2C%20website%20traffic%20graphs%2C%20modern%20office%20environment%2C%20bright%20and%20clean%20atmosphere%2C%20premium%20ad%20network%20interface%2C%20global%20publisher%20network%20visualization%2C%20clean%20minimalist%20design%20with%20green%20and%20emerald%20accents%2C%20high-tech%20monetization%20workspace%20with%20multiple%20screens%20showing%20performance%20metrics&width=1200&height=600&seq=publisher-hero&orientation=landscape"
            alt="AdVolcano Publisher Platform"
            className="w-full h-full object-cover object-top opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
              Monetize Your Traffic with{' '}
              <span className="text-emerald-700">AdVolcano.io</span>
            </h1>
            <p className="text-xl sm:text-2xl text-stone-700 mb-8 leading-relaxed">
              Join a powerful monetization platform trusted by thousands of publishers worldwide. Whether you run a blog, mobile app, or media network — AdVolcano helps you maximize your revenue with premium demand, smart optimization, and full transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://ui.advolcano.io" className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 font-semibold text-lg whitespace-nowrap cursor-pointer text-center">
                🚀 Start Earning Today
              </a>
              <Link href="/advertiser" className="bg-white text-emerald-700 border-2 border-emerald-700 px-8 py-4 rounded-lg hover:bg-emerald-50 font-semibold text-lg whitespace-nowrap cursor-pointer text-center">
                For Advertisers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Publishers Trust AdVolcano */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
              🌟 Why Publishers Trust AdVolcano
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-emerald-200">
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
      <section className="py-20 bg-gradient-to-br from-stone-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
              🧩 Ad Formats That Work for You
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">200+</div>
              <div className="text-emerald-100 font-medium">Global GEOs</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">50K+</div>
              <div className="text-emerald-100 font-medium">Active Publishers</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-emerald-100 font-medium">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
              <div className="text-emerald-100 font-medium">Publisher Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                Flexible Integration Options
              </h2>
              <p className="text-xl text-stone-700 mb-8">
                Monetize however you like with our comprehensive suite of integration methods designed for every type of publisher.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-code-line text-white"></i>
                  </div>
                  <span className="text-stone-700 font-medium">JavaScript & iframe Tags</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-server-line text-white"></i>
                  </div>
                  <span className="text-stone-700 font-medium">OpenRTB & XML Feeds</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-smartphone-line text-white"></i>
                  </div>
                  <span className="text-stone-700 font-medium">Mobile SDKs (iOS & Android)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-play-line text-white"></i>
                  </div>
                  <span className="text-stone-700 font-medium">VAST/VPAID for Video</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
              <img 
                src="https://readdy.ai/api/search-image?query=Publisher%20integration%20dashboard%20showing%20multiple%20code%20integration%20methods%2C%20JavaScript%20tags%2C%20mobile%20SDK%20setup%2C%20OpenRTB%20configuration%2C%20modern%20developer%20interface%20with%20emerald%20and%20green%20color%20scheme%2C%20technical%20documentation%20screens%2C%20code%20snippets%20and%20API%20endpoints%2C%20professional%20developer%20workspace&width=600&height=400&seq=integration-dashboard&orientation=landscape"
                alt="Integration Dashboard"
                className="w-full h-64 object-cover object-top rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Easy Setup & Management</h3>
              <p className="text-stone-700">
                Get started in minutes with our intuitive dashboard and comprehensive documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Analytics */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-stone-200">
              <img 
                src="https://readdy.ai/api/search-image?query=Real-time%20analytics%20dashboard%20with%20revenue%20charts%2C%20eCPM%20graphs%2C%20fill%20rate%20statistics%2C%20impression%20tracking%2C%20modern%20analytics%20interface%20with%20emerald%20and%20green%20color%20scheme%2C%20publisher%20performance%20metrics%2C%20data%20visualization%20with%20charts%20and%20graphs%2C%20professional%20monetization%20dashboard&width=600&height=400&seq=analytics-dashboard&orientation=landscape"
                alt="Analytics Dashboard"
                className="w-full h-64 object-cover object-top rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Real-Time Performance Tracking</h3>
              <p className="text-stone-700">
                Monitor your revenue, eCPMs, and fill rates in real-time with detailed analytics.
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                Transparent Analytics & Reporting
              </h2>
              <p className="text-xl text-stone-700 mb-8">
                Make data-driven decisions with comprehensive reporting and insights that help you optimize your monetization strategy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-bar-chart-line text-white"></i>
                  </div>
                  <span className="text-stone-700 font-medium">Real-Time Revenue Tracking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-pie-chart-line text-white"></i>
                  </div>
                  <span className="text-stone-700 font-medium">eCPM & Fill Rate Analytics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-line-chart-line text-white"></i>
                  </div>
                  <span className="text-stone-700 font-medium">Performance Optimization Insights</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-download-line text-white"></i>
                  </div>
                  <span className="text-stone-700 font-medium">Detailed Reporting & Exports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Maximize Your Inventory?
          </h2>
          <p className="text-xl sm:text-2xl text-emerald-100 mb-8">
            Partner with AdVolcano.io and turn every impression into real profit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://ui.advolcano.io" className="bg-white text-emerald-700 px-8 py-4 rounded-lg hover:bg-emerald-50 font-semibold text-lg whitespace-nowrap cursor-pointer">
              👉 Join as a Publisher
            </a>
            <Link href="/advertiser" className="bg-emerald-700 text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-emerald-800 font-semibold text-lg whitespace-nowrap cursor-pointer">
              For Advertisers
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
              <h4 className="font-semibold mb-4">For Publishers</h4>
              <ul className="space-y-2 text-stone-400">
                <li><a href="https://ui.advolcano.io" className="hover:text-white cursor-pointer">Join Network</a></li>
                <li><a href="https://ui.advolcano.io" className="hover:text-white cursor-pointer">Publisher Dashboard</a></li>
                <li><Link href="/payments" className="hover:text-white cursor-pointer">Payment Methods</Link></li>
                <li><Link href="/ad-formats" className="hover:text-white cursor-pointer">Ad Formats</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Advertisers</h4>
              <ul className="space-y-2 text-stone-400">
                <li><Link href="/advertiser" className="hover:text-white cursor-pointer">Launch Campaign</Link></li>
                <li><Link href="/rtb" className="hover:text-white cursor-pointer">RTB Platform</Link></li>
                <li><Link href="/ad-formats" className="hover:text-white cursor-pointer">Ad Formats</Link></li>
                <li><Link href="/payments" className="hover:text-white cursor-pointer">Payments</Link></li>
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
