
'use client';

import Link from 'next/link';

export default function PayPerCallHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.85), rgba(16, 185, 129, 0.75)), url('https://readdy.ai/api/search-image?query=Modern%20business%20professional%20using%20smartphone%20in%20bright%20office%20environment%20with%20charts%20and%20call%20center%20technology%20visible%20in%20background%2C%20clean%20minimal%20workspace%20with%20blue%20and%20green%20accent%20lighting%2C%20professional%20atmosphere%20conveying%20success%20in%20telecommunications%20marketing%20industry&width=1920&height=1080&seq=paypercall-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-emerald-600/90"></div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 text-white mb-6">
            <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-2"></i>
            <span className="font-medium">Premium Call Marketing Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            PayPerCall Network
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Connect with high-intent phone leads through our advanced call tracking platform. 
            Powered by Everflow and proprietary technology for maximum performance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Link href="/demo" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer shadow-xl">
            Start Earning Today
          </Link>
          <Link href="#campaigns" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
            View High Payout Campaigns
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-phone-fill w-8 h-8 flex items-center justify-center text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">High Quality Leads</h3>
            <p className="text-white/80">Pre-qualified prospects ready to convert</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-money-dollar-circle-fill w-8 h-8 flex items-center justify-center text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Premium Payouts</h3>
            <p className="text-white/80">Industry-leading commission rates</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-line-chart-fill w-8 h-8 flex items-center justify-center text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Advanced Tracking</h3>
            <p className="text-white/80">Real-time analytics and optimization</p>
          </div>
        </div>
      </div>
    </section>
  );
}
