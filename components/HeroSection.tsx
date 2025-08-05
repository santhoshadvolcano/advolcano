
'use client';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Next-Gen Ad Network for{' '}
                <span className="text-blue-600">Premium Results</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Connect advertisers with premium publishers through our intelligent platform. 
                Drive higher ROI with advanced targeting, real-time optimization, and fraud-free traffic.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://ui.advolcano.io" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg whitespace-nowrap cursor-pointer text-center shadow-sm hover:shadow-md transition-all"
              >
                Start Campaign
              </a>
              <a 
                href="/demo" 
                className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 font-semibold text-lg whitespace-nowrap cursor-pointer text-center transition-all"
              >
                Request Demo
              </a>
            </div>

            <div className="flex items-center space-x-8 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>200+ Global GEOs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>10B+ Monthly Impressions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>99.9% Fraud-Free</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">Campaign Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600">$24.8K</div>
                    <div className="text-sm text-green-700">Revenue</div>
                    <div className="text-xs text-green-600">+12.5%</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">1.2M</div>
                    <div className="text-sm text-blue-700">Impressions</div>
                    <div className="text-xs text-blue-600">+8.3%</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">Campaign Performance</span>
                    <span className="text-green-600 text-sm">Live</span>
                  </div>
                  <div className="bg-slate-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full w-3/4"></div>
                  </div>
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>CTR: 2.4%</span>
                    <span>CPC: $0.45</span>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-slate-700 mb-2">Top Performing GEOs</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">🇺🇸 United States</span>
                      <span className="text-slate-900 font-medium">$8.2K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">🇬🇧 United Kingdom</span>
                      <span className="text-slate-900 font-medium">$4.1K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">🇩🇪 Germany</span>
                      <span className="text-slate-900 font-medium">$3.8K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg border border-slate-200 p-4 max-w-48">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <i className="ri-bar-chart-line text-white text-xl"></i>
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">47%</div>
                  <div className="text-sm text-slate-600">Conversion Rate</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg border border-slate-200 p-4 max-w-48">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <i className="ri-trophy-line text-white text-xl"></i>
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">98.5%</div>
                  <div className="text-sm text-slate-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
