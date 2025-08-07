
'use client';

export default function DetailedAdFormatsSection() {
  const adFormats = [
    {
      icon: 'ri-image-line',
      title: 'Display Advertising',
      description: 'Professional banner advertising solutions with advanced targeting capabilities.',
      features: [
        'Responsive design across all devices',
        'Multiple sizes: 728x90, 300x250, 160x600',
        'Rich media and interactive elements',
        'A/B testing and optimization',
        'Real-time performance analytics'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-play-circle-line',
      title: 'Video Advertising',
      description: 'Engaging video content with comprehensive format support and analytics.',
      features: [
        'VAST/VPAID compliance',
        'In-stream and out-stream options',
        'Autoplay and click-to-play',
        'HD and 4K video support',
        'Completion rate optimization'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: 'ri-layout-line',
      title: 'Native Advertising',
      description: 'Seamlessly integrated content that matches your site\'s design and user experience.',
      features: [
        'Content recommendation widgets',
        'In-feed native placements',
        'Custom styling and branding',
        'High engagement rates',
        'User-friendly experience'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'ri-notification-line',
      title: 'Push Notifications',
      description: 'Direct user engagement through personalized push notification campaigns.',
      features: [
        'Browser and mobile push support',
        'Subscription management',
        'Personalized messaging',
        'Scheduling and automation',
        'Conversion tracking'
      ],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: 'ri-window-line',
      title: 'Interstitial Ads',
      description: 'Full-screen advertising experiences for maximum impact and engagement.',
      features: [
        'Mobile and desktop support',
        'Timed and user-triggered display',
        'Rich media capabilities',
        'Skip button customization',
        'Frequency capping controls'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Advertising',
      description: 'Mobile-optimized advertising solutions designed for touch interfaces.',
      features: [
        'Touch-friendly interactions',
        'App and mobile web support',
        'Location-based targeting',
        'Accelerated mobile pages (AMP)',
        'Mobile-first design approach'
      ],
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Complete <span className="text-blue-600">Ad Format Solutions</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive advertising formats designed to maximize engagement, conversion, and revenue 
            across all devices and platforms.
          </p>
        </div>
      </section>

      {/* Detailed Ad Formats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {adFormats.map((format, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-sm transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${format.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <i className={`${format.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{format.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{format.description}</p>
                    <ul className="space-y-3">
                      {format.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-slate-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industry-standard formats with comprehensive technical support and documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-code-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Integration Support</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• JavaScript SDK</li>
                <li>• RESTful APIs</li>
                <li>• OpenRTB 2.5</li>
                <li>• VAST 4.2</li>
                <li>• Mobile SDKs</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-green-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Quality Assurance</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Ad quality filtering</li>
                <li>• Brand safety controls</li>
                <li>• Fraud detection</li>
                <li>• Content verification</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-settings-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Customization</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Custom styling options</li>
                <li>• Flexible positioning</li>
                <li>• Responsive breakpoints</li>
                <li>• Animation controls</li>
                <li>• User experience settings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Implement These Formats?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Start leveraging our comprehensive ad format solutions to maximize your advertising performance.
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
