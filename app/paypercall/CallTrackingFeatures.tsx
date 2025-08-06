
'use client';

export default function CallTrackingFeatures() {
  const features = [
    {
      icon: 'ri-phone-line',
      title: 'Dynamic Number Insertion',
      description: 'Automatically assign unique tracking numbers for each traffic source and campaign to maximize attribution accuracy.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-record-circle-line',
      title: 'Call Recording & Analysis',
      description: 'Complete call recordings with AI-powered conversation analysis to optimize lead quality and conversion rates.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: 'ri-time-line',
      title: 'Real-Time Call Monitoring',
      description: 'Live call tracking with instant notifications and real-time performance metrics for immediate optimization.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'ri-route-line',
      title: 'Intelligent Call Routing',
      description: 'Smart call distribution based on geographic location, time zones, and advertiser preferences.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Fraud Protection',
      description: 'Advanced fraud detection algorithms to filter out invalid calls and protect advertiser budgets.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: 'ri-bar-chart-box-line',
      title: 'Performance Analytics',
      description: 'Comprehensive reporting dashboard with detailed call metrics, conversion rates, and ROI analysis.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Advanced Call Tracking Technology
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our proprietary call tracking platform combined with Everflow integration delivers 
            unmatched accuracy and performance optimization for your campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={`${feature.icon} w-8 h-8 flex items-center justify-center text-white text-2xl`}></i>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Powered by Industry Leaders
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <i className="ri-global-line w-6 h-6 flex items-center justify-center text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Everflow Integration</h4>
                    <p className="text-slate-600">Industry-standard tracking and attribution platform</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <i className="ri-cpu-line w-6 h-6 flex items-center justify-center text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Proprietary Technology</h4>
                    <p className="text-slate-600">Custom-built call tracking and optimization engine</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20technology%20dashboard%20showing%20call%20tracking%20analytics%20with%20colorful%20charts%20graphs%20and%20real-time%20data%20visualization%20on%20multiple%20screens%2C%20professional%20software%20interface%20with%20blue%20and%20green%20color%20scheme%20representing%20advanced%20telecommunications%20technology&width=600&height=400&seq=tracking-tech&orientation=landscape"
                alt="Call Tracking Technology"
                className="w-full h-80 object-cover object-top rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
