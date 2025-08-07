
'use client';

export default function WhyChooseSection() {
  const features = [
    {
      icon: 'ri-shield-check-line',
      title: 'Fraud-Free Traffic',
      description: 'Advanced anti-fraud technology ensures 99.9% clean traffic with real-time monitoring and verification.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'ri-global-line',
      title: 'Global Reach',
      description: 'Access premium inventory across 200+ countries with localized targeting and optimization.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-brain-line',
      title: 'AI-Powered Optimization',
      description: 'Machine learning algorithms automatically optimize campaigns for maximum performance and ROI.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'ri-time-line',
      title: 'Real-Time Analytics',
      description: 'Comprehensive dashboards with instant reporting and actionable insights for data-driven decisions.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'ri-customer-service-line',
      title: '24/7 Support',
      description: 'Dedicated account managers and technical support team available around the clock.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Fast Integration',
      description: 'Quick setup with comprehensive APIs, SDKs, and detailed documentation for seamless integration.',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Why Choose AdVolcano
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built on cutting-edge technology with enterprise-grade security and performance at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
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
  );
}
