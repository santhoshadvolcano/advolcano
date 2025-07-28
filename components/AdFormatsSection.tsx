
'use client';

export default function AdFormatsSection() {
  const formats = [
    {
      emoji: '🖼️',
      title: 'Banner Ads',
      description: 'Proven, versatile display placements that drive brand visibility and clicks.',
      mockup: 'banner'
    },
    {
      emoji: '🎥',
      title: 'Video Ads',
      description: 'Autoplay, skippable, or pre-roll — capture attention with immersive storytelling.',
      mockup: 'video'
    },
    {
      emoji: '📸',
      title: 'Native Ads',
      description: 'Seamlessly integrated with content, native drives higher engagement and trust.',
      mockup: 'native'
    },
    {
      emoji: '🔔',
      title: 'Push Notifications',
      description: 'Direct-to-device ads that re-engage users even when they\'re offline.',
      mockup: 'push'
    },
    {
      emoji: '💥',
      title: 'Pop Ads (Popunders)',
      description: 'High-traffic format perfect for mass exposure and aggressive CPA campaigns.',
      mockup: 'popup'
    },
    {
      emoji: '📲',
      title: 'Interstitial Ads',
      description: 'Full-screen placements that demand attention during natural app/web transitions.',
      mockup: 'interstitial'
    }
  ];

  const renderMockup = (type: string) => {
    switch (type) {
      case 'banner':
        return (
          <div className="bg-stone-100 rounded-lg p-3 sm:p-4 h-32 sm:h-48">
            <div className="bg-white rounded border-2 border-stone-200 p-2 sm:p-3 h-full">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-500 rounded-full mr-2"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-lime-500 rounded-full"></div>
              </div>
              <div className="bg-stone-50 rounded p-2 h-full flex flex-col">
                <div className="bg-amber-600 text-white text-xs px-2 py-1 rounded mb-2 text-center">
                  BANNER AD
                </div>
                <div className="flex-1 bg-stone-200 rounded mb-2"></div>
                <div className="bg-orange-600 text-white text-xs px-2 py-1 rounded text-center">
                  BANNER AD
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'video':
        return (
          <div className="bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg p-6 sm:p-8 h-32 sm:h-48 flex items-center justify-center relative">
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/20 text-white text-xs px-2 py-1 rounded">
              Ad
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[8px] sm:border-l-[12px] border-l-amber-600 border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          </div>
        );
      
      case 'native':
        return (
          <div className="bg-white rounded-lg p-3 sm:p-4 h-32 sm:h-48 border border-stone-200">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-stone-300 rounded-full mr-2 sm:mr-3"></div>
                <div className="flex-1">
                  <div className="h-2 bg-stone-300 rounded w-16 sm:w-20 mb-1"></div>
                  <div className="h-2 bg-stone-200 rounded w-12 sm:w-16"></div>
                </div>
              </div>
              <div className="h-12 sm:h-20 bg-stone-200 rounded"></div>
              <div className="space-y-1 sm:space-y-2">
                <div className="h-2 bg-stone-300 rounded"></div>
                <div className="h-2 bg-stone-300 rounded w-4/5"></div>
              </div>
              <div className="bg-lime-600 text-white text-xs px-2 py-1 rounded w-fit">
                Sponsored
              </div>
            </div>
          </div>
        );
      
      case 'push':
        return (
          <div className="bg-stone-800 rounded-lg p-3 sm:p-4 h-32 sm:h-48 flex items-center justify-center">
            <div className="bg-white rounded-lg p-3 sm:p-4 max-w-xs shadow-lg">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-yellow-600 rounded mr-2"></div>
                <div className="text-xs sm:text-sm font-medium">AdVolcano</div>
              </div>
              <div className="text-xs sm:text-sm text-stone-600 mb-2">
                New campaign available!
              </div>
              <div className="text-xs text-stone-500">
                Tap to view details
              </div>
            </div>
          </div>
        );
      
      case 'popup':
        return (
          <div className="bg-stone-100 rounded-lg p-3 sm:p-4 h-32 sm:h-48 relative">
            <div className="bg-white rounded border-2 border-stone-200 p-2 h-full opacity-50">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-500 rounded-full mr-2"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-lime-500 rounded-full"></div>
              </div>
              <div className="bg-stone-50 rounded p-2 h-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white border-2 border-emerald-600 rounded-lg p-3 sm:p-4 shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-xs sm:text-sm font-medium">Pop Ad</div>
                  <div className="text-base sm:text-lg cursor-pointer">×</div>
                </div>
                <div className="h-12 sm:h-16 bg-emerald-100 rounded mb-2"></div>
                <div className="bg-emerald-600 text-white text-xs px-2 py-1 rounded text-center">
                  Click Here
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'interstitial':
        return (
          <div className="bg-stone-900 rounded-lg p-3 sm:p-4 h-32 sm:h-48 flex items-center justify-center">
            <div className="bg-white rounded-lg p-4 sm:p-6 max-w-xs text-center">
              <div className="h-12 sm:h-16 bg-teal-600 rounded mb-3 sm:mb-4"></div>
              <div className="text-xs sm:text-sm font-medium mb-2">Full Screen Ad</div>
              <div className="text-xs text-stone-500 mb-3 sm:mb-4">
                Continue in 5 seconds
              </div>
              <div className="bg-stone-200 text-stone-700 text-xs px-2 sm:px-3 py-1 rounded">
                Skip Ad
              </div>
            </div>
          </div>
        );
      
      default:
        return <div className="bg-stone-200 rounded-lg h-32 sm:h-48"></div>;
    }
  };

  return (
    <section id="ad-formats" className="py-12 sm:py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-6">
            🔥 Available Ad Formats
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {formats.map((format, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-stone-200">
              <div className="h-32 sm:h-48 bg-stone-200 overflow-hidden">
                {renderMockup(format.mockup)}
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3">{format.emoji}</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-stone-900">{format.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  {format.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
