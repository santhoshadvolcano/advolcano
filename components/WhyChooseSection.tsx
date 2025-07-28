
'use client';

export default function WhyChooseSection() {
  const features = [
    {
      icon: 'ri-flashlight-line',
      title: 'Lightning-Fast RTB Engine',
      description: 'Win more bids, pay less, convert faster',
      color: 'bg-amber-100 text-amber-700'
    },
    {
      icon: 'ri-brain-line',
      title: 'AI-Powered Targeting',
      description: 'Reach the right audience at the right time',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'ROI-Driven Optimization',
      description: 'Smart algorithms that scale your success',
      color: 'bg-yellow-100 text-yellow-700'
    },
    {
      icon: 'ri-global-line',
      title: 'Global Reach',
      description: 'Access premium supply across display, push, native, and more',
      color: 'bg-lime-100 text-lime-700'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Advanced Analytics',
      description: 'Track. Optimize. Dominate.',
      color: 'bg-emerald-100 text-emerald-700'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Built in Ad Fraud',
      description: 'Advanced fraud detection and prevention',
      color: 'bg-teal-100 text-teal-700'
    },
    {
      icon: 'ri-links-line',
      title: 'Integrate Sophisticated Attribution',
      description: 'Connect leading MMPs through postback URLs and track multiple actions via server-to-server performance tracking.',
      color: 'bg-cyan-100 text-cyan-700'
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
            ⚡ Why Choose AdVolcano?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-stone-200">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${feature.color} rounded-lg mb-4 sm:mb-6`}>
                <i className={`${feature.icon} text-xl sm:text-2xl`}></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-stone-900 mb-3">
                {index + 1}. {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}