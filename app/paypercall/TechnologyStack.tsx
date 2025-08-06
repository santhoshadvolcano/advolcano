
'use client';

export default function TechnologyStack() {
  const technologies = [
    {
      name: 'Everflow Tracker',
      description: 'Industry-leading attribution platform for precise tracking and performance optimization',
      icon: 'ri-global-line',
      features: ['Real-time Attribution', 'Cross-device Tracking', 'Fraud Detection', 'Custom Events'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Proprietary Call Platform',
      description: 'Custom-built call tracking system designed for maximum performance and reliability',
      icon: 'ri-cpu-line',
      features: ['Dynamic Number Insertion', 'Call Recording', 'AI Analysis', 'Smart Routing'],
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const integrations = [
    { name: 'Twilio', icon: 'ri-phone-line', desc: 'Voice & SMS API' },
    { name: 'Google Analytics', icon: 'ri-bar-chart-line', desc: 'Web Analytics' },
    { name: 'Facebook Pixel', icon: 'ri-facebook-line', desc: 'Social Tracking' },
    { name: 'CallRail', icon: 'ri-record-circle-line', desc: 'Call Intelligence' },
    { name: 'Zapier', icon: 'ri-links-line', desc: 'Automation Hub' },
    { name: 'Salesforce', icon: 'ri-cloud-line', desc: 'CRM Integration' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powered by Advanced Technology
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our technology stack combines industry-standard tools with proprietary innovations 
            to deliver unmatched performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6`}>
                <i className={`${tech.icon} w-10 h-10 flex items-center justify-center text-white text-3xl`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{tech.name}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{tech.description}</p>
              
              <div className="grid grid-cols-2 gap-3">
                {tech.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <i className="ri-check-line w-4 h-4 flex items-center justify-center text-emerald-400"></i>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Seamless Integrations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <i className={`${integration.icon} w-8 h-8 flex items-center justify-center text-white text-2xl`}></i>
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{integration.name}</h4>
                <p className="text-slate-400 text-xs">{integration.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-white mb-6">
                Enterprise-Grade Infrastructure
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-shield-check-line w-6 h-6 flex items-center justify-center text-emerald-400"></i>
                  <span className="text-slate-300">99.9% Uptime Guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-lock-line w-6 h-6 flex items-center justify-center text-emerald-400"></i>
                  <span className="text-slate-300">SOC 2 Compliant Security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-speed-line w-6 h-6 flex items-center justify-center text-emerald-400"></i>
                  <span className="text-slate-300">Real-time Data Processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-global-line w-6 h-6 flex items-center justify-center text-emerald-400"></i>
                  <span className="text-slate-300">Global CDN Network</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://readdy.ai/api/search-image?query=High-tech%20server%20room%20with%20blue%20LED%20lighting%20showing%20modern%20data%20center%20infrastructure%2C%20fiber%20optic%20cables%20and%20networking%20equipment%2C%20representing%20enterprise-grade%20technology%20and%20reliability%20in%20telecommunications%20industry&width=600&height=400&seq=enterprise-tech&orientation=landscape"
                alt="Enterprise Infrastructure"
                className="w-full h-80 object-cover object-top rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
