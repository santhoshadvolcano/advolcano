
'use client';

import Link from 'next/link';

export default function AdFormatsSection() {
  const adFormats = [
    {
      title: 'Display Ads',
      description: 'Traditional banner advertising with modern targeting and optimization capabilities.',
      icon: 'ri-image-line',
      color: 'from-blue-500 to-cyan-500',
      sizes: ['728x90', '300x250', '160x600'],
      image: 'https://readdy.ai/api/search-image?query=modern%20display%20banner%20advertisement%20mockup%20with%20clean%20professional%20design%2C%20showing%20rectangular%20banner%20ads%20on%20website%20layout%2C%20blue%20and%20white%20color%20scheme%2C%20simple%20background%2C%20high%20quality%20digital%20marketing%20visualization&width=400&height=300&seq=display-ads-1&orientation=landscape'
    },
    {
      title: 'Video Ads',
      description: 'Engaging video content with VAST/VPAID support for maximum impact and reach.',
      icon: 'ri-play-circle-line',
      color: 'from-red-500 to-pink-500',
      sizes: ['In-stream', 'Out-stream', 'Rewarded'],
      image: 'https://readdy.ai/api/search-image?query=video%20advertising%20player%20interface%20mockup%20with%20play%20button%20and%20video%20controls%2C%20modern%20streaming%20platform%20design%2C%20red%20and%20pink%20gradient%20colors%2C%20professional%20video%20marketing%20visualization%2C%20clean%20background&width=400&height=300&seq=video-ads-1&orientation=landscape'
    },
    {
      title: 'Native Ads',
      description: 'Seamlessly integrated content that matches the look and feel of surrounding content.',
      icon: 'ri-layout-line',
      color: 'from-green-500 to-emerald-500',
      sizes: ['In-feed', 'Content', 'Recommendation'],
      image: 'https://readdy.ai/api/search-image?query=native%20advertising%20content%20integration%20mockup%20showing%20sponsored%20content%20seamlessly%20blended%20with%20editorial%20content%2C%20green%20gradient%20colors%2C%20modern%20web%20layout%20design%2C%20professional%20content%20marketing%20visualization&width=400&height=300&seq=native-ads-1&orientation=landscape'
    },
    {
      title: 'Mobile Ads',
      description: 'Optimized for mobile devices with responsive design and touch-friendly interactions.',
      icon: 'ri-smartphone-line',
      color: 'from-purple-500 to-indigo-500',
      sizes: ['Banner', 'Interstitial', 'Rewarded'],
      image: 'https://readdy.ai/api/search-image?query=mobile%20advertising%20interface%20mockup%20on%20smartphone%20screen%20showing%20various%20mobile%20ad%20formats%2C%20purple%20and%20indigo%20gradient%20colors%2C%20modern%20mobile%20app%20design%2C%20touch-friendly%20interface%2C%20professional%20mobile%20marketing%20visualization&width=400&height=300&seq=mobile-ads-1&orientation=landscape'
    },
    {
      title: 'Pop Ads',
      description: 'High-impact popup advertising with advanced frequency capping and user experience optimization.',
      icon: 'ri-window-line',
      color: 'from-orange-500 to-amber-500',
      sizes: ['Popunder', 'Popup', 'Exit Intent'],
      image: 'https://readdy.ai/api/search-image?query=popup%20advertisement%20window%20interface%20mockup%20with%20modern%20browser%20design%2C%20orange%20and%20amber%20gradient%20colors%2C%20professional%20popup%20advertising%20visualization%2C%20clean%20background%20with%20browser%20elements&width=400&height=300&seq=pop-ads-1&orientation=landscape'
    },
    {
      title: 'Push Ads',
      description: 'Direct browser notifications delivering personalized messages with high engagement rates.',
      icon: 'ri-notification-line',
      color: 'from-teal-500 to-cyan-500',
      sizes: ['Desktop', 'Mobile', 'Web Push'],
      image: 'https://readdy.ai/api/search-image?query=push%20notification%20interface%20mockup%20showing%20browser%20notification%20popup%20with%20teal%20and%20cyan%20gradient%20colors%2C%20modern%20notification%20design%2C%20professional%20push%20advertising%20visualization%2C%20simple%20background&width=400&height=300&seq=push-ads-1&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Comprehensive <span className="text-blue-600">Ad Formats</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Support for all major ad formats with advanced targeting and optimization features designed to maximize your advertising performance.
          </p>
        </div>
      </section>

      {/* Visual Ad Formats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {adFormats.map((format, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300">
                {/* Format Image */}
                <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200">
                  <img 
                    src={format.image} 
                    alt={`${format.title} visualization`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${format.color} rounded-lg flex items-center justify-center shadow-sm`}>
                      <i className={`${format.icon} text-white text-xl`}></i>
                    </div>
                  </div>
                </div>

                {/* Format Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{format.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{format.description}</p>
                  
                  {/* Common Sizes */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">Popular Formats:</h4>
                    <div className="flex flex-wrap gap-2">
                      {format.sizes.map((size, sizeIndex) => (
                        <span key={sizeIndex} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border border-slate-200">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900">
                        {index === 0 ? '2.3%' : index === 1 ? '8.7%' : index === 2 ? '4.2%' : index === 3 ? '6.1%' : index === 4 ? '12.5%' : '9.8%'}
                      </div>
                      <div className="text-xs text-slate-500">Avg CTR</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900">
                        {index === 0 ? '89%' : index === 1 ? '94%' : index === 2 ? '91%' : index === 3 ? '87%' : index === 4 ? '95%' : '92%'}
                      </div>
                      <div className="text-xs text-slate-500">Viewability</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              See Ad Formats in Action
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Interactive previews of how different ad formats appear across various devices and platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Display Ad Preview */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Display Banner</h3>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-4 text-white text-center">
                  <div className="text-sm font-medium">Your Brand Here</div>
                  <div className="text-xs opacity-90 mt-1">728x90 Leaderboard</div>
                </div>
              </div>
              <div className="text-sm text-slate-600">
                Perfect for header placements with high visibility and brand awareness campaigns.
              </div>
            </div>

            {/* Video Ad Preview */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Video Player</h3>
                <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-lg aspect-video flex items-center justify-center text-white">
                  <div className="text-center">
                    <i className="ri-play-circle-line text-4xl mb-2"></i>
                    <div className="text-sm font-medium">Video Ad</div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-slate-600">
                Engaging video content with autoplay and click-to-play options for maximum engagement.
              </div>
            </div>

            {/* Native Ad Preview */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Native Content</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex-shrink-0"></div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Sponsored Content</div>
                      <div className="text-xs text-slate-600">Seamlessly integrated with your content</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-slate-600">
                Blends naturally with editorial content for higher engagement and user experience.
              </div>
            </div>

            {/* Pop Ad Preview */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Pop Advertisement</h3>
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg p-4 text-white relative">
                  <div className="absolute top-2 right-2">
                    <i className="ri-close-line text-xs"></i>
                  </div>
                  <div className="text-center">
                    <i className="ri-window-line text-2xl mb-2"></i>
                    <div className="text-sm font-medium">Pop Ad</div>
                    <div className="text-xs opacity-90 mt-1">High Impact</div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-slate-600">
                High-impact popups with smart timing and frequency controls for maximum conversions.
              </div>
            </div>

            {/* Push Ad Preview */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Push Notification</h3>
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg p-4 text-white">
                  <div className="flex items-center space-x-3">
                    <i className="ri-notification-line text-xl"></i>
                    <div>
                      <div className="text-sm font-medium">New Offer Available!</div>
                      <div className="text-xs opacity-90">Click to view details</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-slate-600">
                Direct browser notifications with personalized messaging for instant user engagement.
              </div>
            </div>

            {/* Mobile Ad Preview */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Mobile Format</h3>
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-4 text-white">
                  <div className="text-center">
                    <i className="ri-smartphone-line text-2xl mb-2"></i>
                    <div className="text-sm font-medium">Mobile Ad</div>
                    <div className="text-xs opacity-90 mt-1">Touch Optimized</div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-slate-600">
                Mobile-optimized formats with touch-friendly interactions and responsive design.
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/ad-formats/detailed" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg whitespace-nowrap cursor-pointer shadow-sm hover:shadow-md transition-all">
              View Detailed Technical Specs
            </Link>
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Format Performance Comparison
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Data-driven insights to help you choose the most effective ad formats for your campaigns.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-6 font-semibold text-slate-900">Format</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-900">Avg CTR</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-900">Viewability</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-900">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <i className="ri-image-line text-white text-sm"></i>
                        </div>
                        <span className="font-medium text-slate-900">Display Ads</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6 text-slate-700">2.3%</td>
                    <td className="text-center py-4 px-6 text-slate-700">89%</td>
                    <td className="text-center py-4 px-6 text-slate-700">Brand Awareness</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <i className="ri-play-circle-line text-white text-sm"></i>
                        </div>
                        <span className="font-medium text-slate-900">Video Ads</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6 text-slate-700">8.7%</td>
                    <td className="text-center py-4 px-6 text-slate-700">94%</td>
                    <td className="text-center py-4 px-6 text-slate-700">Engagement</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                          <i className="ri-layout-line text-white text-sm"></i>
                        </div>
                        <span className="font-medium text-slate-900">Native Ads</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6 text-slate-700">4.2%</td>
                    <td className="text-center py-4 px-6 text-slate-700">91%</td>
                    <td className="text-center py-4 px-6 text-slate-700">Content Marketing</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                          <i className="ri-smartphone-line text-white text-sm"></i>
                        </div>
                        <span className="font-medium text-slate-900">Mobile Ads</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6 text-slate-700">6.1%</td>
                    <td className="text-center py-4 px-6 text-slate-700">87%</td>
                    <td className="text-center py-4 px-6 text-slate-700">Mobile Users</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                          <i className="ri-window-line text-white text-sm"></i>
                        </div>
                        <span className="font-medium text-slate-900">Pop Ads</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6 text-slate-700">12.5%</td>
                    <td className="text-center py-4 px-6 text-slate-700">95%</td>
                    <td className="text-center py-4 px-6 text-slate-700">High Impact</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <i className="ri-notification-line text-white text-sm"></i>
                        </div>
                        <span className="font-medium text-slate-900">Push Ads</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6 text-slate-700">9.8%</td>
                    <td className="text-center py-4 px-6 text-slate-700">92%</td>
                    <td className="text-center py-4 px-6 text-slate-700">Direct Marketing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Using These Formats?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Choose the perfect ad formats for your campaigns and start maximizing your advertising performance today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://ui.advolcano.io" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-slate-50 font-semibold text-lg whitespace-nowrap cursor-pointer shadow-sm hover:shadow-md transition-all">
              Get Started Now
            </a>
            <a href="/demo" className="border border-blue-300 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg whitespace-nowrap cursor-pointer transition-all">
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
