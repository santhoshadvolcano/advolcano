
'use client';

export default function AdNetworkDiagram() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How AdVolcano.io Connects the Ad Ecosystem
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the relationship between Demand-Side Platforms (DSP), Supply-Side Platforms (SSP), and Real-Time Bidding (RTB)
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-8 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400"></div>
          </div>

          <div className="relative z-10">
            {/* Mobile Flow - Vertical */}
            <div className="block lg:hidden space-y-6">
              {/* Advertisers */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-4 rounded-xl shadow-lg text-center">
                <div className="w-6 h-6 flex items-center justify-center mx-auto mb-2">
                  <i className="ri-building-line text-xl"></i>
                </div>
                <h3 className="text-base font-bold mb-1">Advertisers</h3>
                <p className="text-xs text-blue-100">Brands, Agencies, Affiliates</p>
              </div>

              <div className="w-6 h-6 flex items-center justify-center mx-auto">
                <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
              </div>

              {/* DSP */}
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-4 rounded-xl shadow-lg text-center">
                <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2 bg-white/20 rounded-full">
                  <i className="ri-dashboard-line text-lg"></i>
                </div>
                <h3 className="text-base font-bold mb-1">DSP (AdVolcano.io)</h3>
                <p className="text-xs text-purple-100 mb-2">Demand-Side Platform</p>
                <div className="text-xs text-purple-100 space-y-1">
                  <div>• Campaign Management</div>
                  <div>• Audience Targeting</div>
                  <div>• Bid Optimization</div>
                </div>
              </div>

              {/* RTB */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 rounded-lg shadow-lg text-center">
                <div className="w-6 h-6 flex items-center justify-center mx-auto mb-2">
                  <i className="ri-speed-line text-lg"></i>
                </div>
                <h4 className="font-bold text-sm">RTB</h4>
                <p className="text-xs text-amber-100">Real-Time Bidding</p>
                <p className="text-xs text-amber-100">~100ms</p>
              </div>

              <div className="w-6 h-6 flex items-center justify-center mx-auto">
                <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
              </div>

              {/* SSP */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-4 rounded-xl shadow-lg text-center">
                <div className="w-6 h-6 flex items-center justify-center mx-auto mb-2">
                  <i className="ri-server-line text-lg"></i>
                </div>
                <h3 className="text-base font-bold mb-1">SSP</h3>
                <p className="text-xs text-green-100 mb-2">Supply-Side Platform</p>
                <div className="text-xs text-green-100 space-y-1">
                  <div>• Inventory Management</div>
                  <div>• Yield Optimization</div>
                </div>
              </div>

              <div className="w-6 h-6 flex items-center justify-center mx-auto">
                <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
              </div>

              {/* Publishers */}
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-4 rounded-xl shadow-lg text-center">
                <div className="w-6 h-6 flex items-center justify-center mx-auto mb-2">
                  <i className="ri-global-line text-lg"></i>
                </div>
                <h3 className="text-base font-bold mb-1">Publishers</h3>
                <p className="text-xs text-teal-100">Websites, Apps, Media</p>
              </div>
            </div>

            {/* Desktop Flow - Horizontal */}
            <div className="hidden lg:flex items-center justify-between mb-12">
              {/* Advertisers */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-6 rounded-xl shadow-lg text-center w-48">
                <div className="w-8 h-8 flex items-center justify-center mx-auto mb-3">
                  <i className="ri-building-line text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2">Advertisers</h3>
                <p className="text-sm text-blue-100">Brands, Agencies, Affiliates</p>
              </div>

              {/* Arrow Right */}
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-arrow-right-line text-3xl text-gray-400"></i>
              </div>

              {/* DSP */}
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-6 rounded-xl shadow-lg text-center w-56">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-white/20 rounded-full">
                  <i className="ri-dashboard-line text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">DSP (AdVolcano.io)</h3>
                <p className="text-sm text-purple-100 mb-2">Demand-Side Platform</p>
                <div className="text-xs text-purple-100 space-y-1">
                  <div>• Campaign Management</div>
                  <div>• Audience Targeting</div>
                  <div>• Bid Optimization</div>
                </div>
              </div>

              {/* RTB Connection */}
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 rounded-lg shadow-lg text-center w-32">
                  <div className="w-6 h-6 flex items-center justify-center mx-auto mb-2">
                    <i className="ri-speed-line text-lg"></i>
                  </div>
                  <h4 className="font-bold text-sm">RTB</h4>
                  <p className="text-xs text-amber-100">Real-Time Bidding</p>
                  <p className="text-xs text-amber-100">~100ms</p>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-arrow-left-line text-lg text-gray-400"></i>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-arrow-right-line text-lg text-gray-400"></i>
                  </div>
                </div>
              </div>

              {/* SSP */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-6 rounded-xl shadow-lg text-center w-48">
                <div className="w-8 h-8 flex items-center justify-center mx-auto mb-3">
                  <i className="ri-server-line text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2">SSP</h3>
                <p className="text-sm text-green-100 mb-2">Supply-Side Platform</p>
                <div className="text-xs text-green-100 space-y-1">
                  <div>• Inventory Management</div>
                  <div>• Yield Optimization</div>
                </div>
              </div>

              {/* Arrow Right */}
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-arrow-right-line text-3xl text-gray-400"></i>
              </div>

              {/* Publishers */}
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-6 rounded-xl shadow-lg text-center w-48">
                <div className="w-8 h-8 flex items-center justify-center mx-auto mb-3">
                  <i className="ri-global-line text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2">Publishers</h3>
                <p className="text-sm text-teal-100">Websites, Apps, Media</p>
              </div>
            </div>

            {/* Process Flow */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 sm:p-6 mt-8">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4 text-center">How It Works in Real-Time</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                  <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2 bg-blue-100 rounded-full">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">User Visits</h5>
                  <p className="text-xs text-gray-600">Publisher website/app</p>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                  <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2 bg-green-100 rounded-full">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">Bid Request</h5>
                  <p className="text-xs text-gray-600">SSP sends to DSPs</p>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                  <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2 bg-purple-100 rounded-full">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">DSP Bids</h5>
                  <p className="text-xs text-gray-600">AdVolcano analyzes & bids</p>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                  <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2 bg-amber-100 rounded-full">
                    <span className="text-amber-600 font-bold text-sm">4</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">Ad Served</h5>
                  <p className="text-xs text-gray-600">Winning ad displays</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}