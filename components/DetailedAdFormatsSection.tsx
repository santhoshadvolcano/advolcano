
'use client';

import Link from 'next/link';

export default function DetailedAdFormatsSection() {
  const formats = [
    {
      emoji: '🖼️',
      title: 'Banner Ads',
      subtitle: 'Display & Retargeting Excellence',
      description: 'Banner ads are the cornerstone of digital advertising, providing versatile placement options across websites and mobile apps. These rectangular display units come in various standard sizes (728x90, 300x250, 160x600) and offer excellent brand visibility with cost-effective CPM pricing.',
      features: [
        'Multiple IAB standard sizes available',
        'Rich media support with HTML5 animations',
        'Viewability tracking and optimization',
        'Cross-device responsive design',
        'Advanced targeting capabilities'
      ],
      pricing: 'Starting from $0.50 CPM',
      bestFor: 'Brand awareness, retargeting, and lead generation campaigns',
      mockup: 'banner'
    },
    {
      emoji: '🎥',
      title: 'Video Ads',
      subtitle: 'Immersive Storytelling Platform',
      description: 'Video advertisements deliver the highest engagement rates through compelling visual storytelling. Available in pre-roll, mid-roll, and post-roll formats, these ads support autoplay, skippable, and non-skippable options to match your campaign objectives.',
      features: [
        'HD video quality up to 1080p',
        'Interactive elements and CTAs',
        'Completion rate optimization',
        'VAST/VPAID compliance',
        'Mobile-first responsive design'
      ],
      pricing: 'Starting from $2.50 CPM',
      bestFor: 'Brand storytelling, product demonstrations, and high-impact campaigns',
      mockup: 'video'
    },
    {
      emoji: '📸',
      title: 'Native Ads',
      subtitle: 'Seamless Content Integration',
      description: 'Native advertising blends seamlessly with editorial content, providing a non-intrusive user experience that drives higher engagement rates. These ads match the look, feel, and function of the surrounding content while maintaining transparency.',
      features: [
        'Content recommendation widgets',
        'In-feed sponsored content',
        'Promoted listings integration',
        'Editorial-style ad units',
        'Custom styling to match site design'
      ],
      pricing: 'Starting from $1.20 CPM',
      bestFor: 'Content marketing, thought leadership, and engagement-focused campaigns',
      mockup: 'native'
    },
    {
      emoji: '🔔',
      title: 'Push Notifications',
      subtitle: 'Direct User Engagement',
      description: 'Push notification ads deliver messages directly to users\' devices even when they\'re not actively browsing. This format offers exceptional re-engagement opportunities with personalized messaging and immediate call-to-action capabilities.',
      features: [
        'Real-time delivery system',
        'Rich media support with images',
        'Geo-targeting capabilities',
        'Personalization and segmentation',
        'Cross-platform compatibility'
      ],
      pricing: 'Starting from $0.80 per click',
      bestFor: 'App downloads, re-engagement, and time-sensitive offers',
      mockup: 'push'
    },
    {
      emoji: '💥',
      title: 'Pop Ads (Popunders)',
      subtitle: 'High-Impact Visibility',
      description: 'Popunder ads open in a new browser window behind the current window, ensuring 100% viewability without interrupting the user experience. This format is perfect for aggressive campaigns requiring maximum exposure and conversion opportunities.',
      features: [
        'Guaranteed 100% viewability',
        'Frequency capping controls',
        'Advanced anti-fraud protection',
        'Mobile and desktop optimization',
        'Custom landing page integration'
      ],
      pricing: 'Starting from $0.30 per click',
      bestFor: 'Lead generation, affiliate marketing, and high-volume campaigns',
      mockup: 'popup'
    },
    {
      emoji: '📲',
      title: 'Interstitial Ads',
      subtitle: 'Full-Screen Engagement',
      description: 'Interstitial ads appear at natural transition points in apps or websites, commanding full attention with immersive full-screen experiences. These ads are ideal for mobile environments and offer the highest impact for brand messaging.',
      features: [
        'Full-screen responsive design',
        'Rich media and interactive elements',
        'Smart timing optimization',
        'Skip functionality options',
        'Performance analytics dashboard'
      ],
      pricing: 'Starting from $3.00 CPM',
      bestFor: 'App monetization, brand campaigns, and premium placements',
      mockup: 'interstitial'
    }
  ];

  const renderDetailedMockup = (type: string) => {
    switch (type) {
      case 'banner':
        return (
          <div className="bg-white rounded-lg border border-stone-200 p-6 h-96">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <div className="flex-1 bg-stone-100 rounded px-3 py-1 text-sm text-stone-600">
                https://example-website.com
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">Summer Sale 50% OFF</h3>
                    <p className="text-sm opacity-90">Premium Products • Limited Time</p>
                  </div>
                  <div className="bg-white text-orange-600 px-4 py-2 rounded font-semibold">
                    Shop Now
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-stone-200 rounded w-full"></div>
                <div className="h-4 bg-stone-200 rounded w-3/4"></div>
                <div className="h-4 bg-stone-200 rounded w-1/2"></div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Try Our New App</span>
                  <div className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium">
                    Download
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'video':
        return (
          <div className="bg-black rounded-lg overflow-hidden h-96 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50"></div>
            <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
              Ad • 0:15
            </div>
            <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
              Skip in 5s
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Experience the Future</h3>
                <p className="text-sm opacity-90">Revolutionary technology awaits</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <div className="text-sm font-medium">TechCorp Solutions</div>
                  <div className="text-xs opacity-75">Premium Technology</div>
                </div>
                <div className="bg-white text-black px-4 py-2 rounded font-semibold">
                  Sign In
                </div>
              </div>
            </div>
          </div>
        );

      case 'native':
        return (
          <div className="bg-white rounded-lg border border-stone-200 p-6 h-96 overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full mr-3 flex items-center justify-center text-white font-bold">
                  N
                </div>
                <div>
                  <div className="font-semibold">News Portal</div>
                  <div className="text-sm text-stone-500">Latest Updates</div>
                </div>
              </div>

              <article className="border-b border-stone-200 pb-4">
                <h3 className="font-bold text-lg mb-2">Technology Breakthrough Announced</h3>
                <p className="text-stone-600 text-sm mb-3">Scientists have made a significant discovery that could revolutionize the industry...</p>
                <div className="text-xs text-stone-500">2 hours ago • Technology</div>
              </article>

              <article className="border-b border-stone-200 pb-4 bg-blue-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">Sponsored</span>
                </div>
                <div className="flex">
                  <div className="flex-1 pr-4">
                    <h3 className="font-bold text-lg mb-2">Boost Your Business Growth</h3>
                    <p className="text-stone-600 text-sm mb-3">Discover how our platform helped 10,000+ companies achieve their goals. Start your free trial today.</p>
                    <div className="text-xs text-stone-500">BusinessPro • Advertisement</div>
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                    BP
                  </div>
                </div>
              </article>

              <article>
                <h3 className="font-bold text-lg mb-2">Market Analysis Report</h3>
                <p className="text-stone-600 text-sm mb-3">The latest quarterly report shows significant trends in the global market...</p>
                <div className="text-xs text-stone-500">4 hours ago • Business</div>
              </article>
            </div>
          </div>
        );

      case 'push':
        return (
          <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-lg p-6 h-96 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-white/60 text-sm">12:34 PM</div>
            <div className="absolute top-4 right-4 text-white/60 text-sm">📶 🔋</div>

            <div className="absolute inset-x-4 top-16 space-y-3">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-red-600 rounded mr-3 flex items-center justify-center text-white text-xs font-bold">
                    YT
                  </div>
                  <div>
                    <div className="font-semibold text-sm">YouTube</div>
                    <div className="text-xs text-stone-500">2 minutes ago</div>
                  </div>
                </div>
                <div className="text-sm text-stone-700">
                  New video from TechReview: "Best Gadgets 2024"
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-4 shadow-lg text-white">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-white rounded mr-3 flex items-center justify-center">
                    <span className="text-orange-600 text-xs font-bold">🔥</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">AdVolcano</div>
                    <div className="text-xs opacity-90">Sponsored • now</div>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Flash Sale: 70% OFF Premium Tools</div>
                  <div className="text-xs opacity-90 mt-1">Limited time offer ending soon!</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-green-600 rounded mr-3 flex items-center justify-center text-white text-xs font-bold">
                    💬
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Messages</div>
                    <div className="text-xs text-stone-500">5 minutes ago</div>
                  </div>
                </div>
                <div className="text-sm text-stone-700">
                  John: Hey, are you coming to the meeting?
                </div>
              </div>
            </div>
          </div>
        );

      case 'popup':
        return (
          <div className="bg-white rounded-lg border border-stone-200 p-6 h-96 relative overflow-hidden">
            <div className="opacity-30">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <div className="flex-1 bg-stone-100 rounded px-3 py-1 text-sm text-stone-600">
                  https://example-site.com
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-6 bg-stone-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-stone-200 rounded w-full"></div>
                  <div className="h-4 bg-stone-200 rounded w-5/6"></div>
                  <div className="h-4 bg-stone-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="bg-white rounded-xl p-6 max-w-sm mx-4 shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">Special Offer!</h3>
                  <button className="text-stone-400 hover:text-stone-600 text-xl">×</button>
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                    🎯
                  </div>
                  <h4 className="font-bold text-xl mb-2">Get 50% OFF</h4>
                  <p className="text-stone-600 text-sm">
                    Limited time offer on all premium features. Don\'t miss out!
                  </p>
                </div>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-3 rounded-lg">
                    Claim Discount Now
                  </button>
                  <button className="w-full text-stone-500 text-sm underline">
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'interstitial':
        return (
          <div className="bg-black rounded-lg h-96 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-pink-900"></div>
            <div className="absolute top-4 right-4 text-white/60 text-sm">
              Skip in 10s
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center text-white max-w-md">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Ready to Launch?</h2>
                <p className="text-white/90 mb-6 text-sm">
                  Join thousands of successful entrepreneurs who transformed their ideas into reality with our platform.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-white text-purple-900 font-bold py-3 px-6 rounded-lg">
                    Start Your Journey
                  </button>
                  <button className="w-full border border-white/30 text-white py-2 px-6 rounded-lg text-sm">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center justify-center">
                <div className="text-white/60 text-xs">
                  Advertisement • LaunchPad Pro
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div className="bg-stone-200 rounded-lg h-96"></div>;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-stone-900 mb-6">
            Complete Ad Format Guide
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover the full potential of each advertising format with detailed specifications, pricing, and real-world examples.
          </p>
        </div>

        <div className="space-y-16">
          {formats.map((format, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">{format.emoji}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-stone-900">{format.title}</h2>
                      <p className="text-lg text-orange-600 font-medium">{format.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-stone-700 mb-6 leading-relaxed">
                    {format.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-stone-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {format.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span className="text-stone-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                      <div className="text-sm font-medium text-green-800 mb-1">Pricing</div>
                      <div className="text-lg font-bold text-green-900">{format.pricing}</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                      <div className="text-sm font-medium text-blue-800 mb-1">Best For</div>
                      <div className="text-blue-900">{format.bestFor}</div>
                    </div>
                  </div>

                  <Link href="/demo" className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all block text-center">
                    Get Started with {format.title}
                  </Link>
                </div>

                <div className="p-8 lg:p-12 bg-stone-50">
                  <h3 className="text-lg font-semibold text-stone-900 mb-4">Live Preview</h3>
                  {renderDetailedMockup(format.mockup)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Campaign?</h2>
          <p className="text-xl mb-8 opacity-90">
            Choose the perfect ad format for your goals and start reaching your audience today.
          </p>
          <button className="bg-white text-orange-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-stone-100 transition-all">
            Start Your Campaign
          </button>
        </div>
      </div>
    </section>
  );
}
