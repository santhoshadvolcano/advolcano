
'use client';

export default function KeyFeaturesSection() {
  const features = [
    {
      title: 'Advanced Targeting',
      description: 'Precise audience targeting with demographic, behavioral, and contextual options.',
      items: ['Geographic Targeting', 'Device & OS Targeting', 'Behavioral Targeting', 'Contextual Targeting']
    },
    {
      title: 'Campaign Management',
      description: 'Comprehensive tools for campaign creation, optimization, and performance tracking.',
      items: ['Campaign Builder', 'A/B Testing', 'Budget Management', 'Performance Analytics']
    },
    {
      title: 'Publisher Tools',
      description: 'Everything publishers need to maximize revenue from their digital properties.',
      items: ['Revenue Optimization', 'Ad Quality Control', 'Real-time Reporting', 'Multiple Payment Options']
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Powerful Features for Success
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Enterprise-grade tools and features designed to maximize your advertising performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
