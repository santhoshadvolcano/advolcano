
'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Smooth multicolor background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-400 via-green-400 to-yellow-400 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 w-full px-4 sm:px-6 py-12 sm:py-20 flex items-center min-h-screen bg-black/20">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
            AdVolcano.io — Ignite Your Ad Performance
          </h1>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed drop-shadow-md">
            Unleash the power of precision targeting, real-time bidding, and explosive results.
            AdVolcano.io is a next-gen Demand-Side Platform (DSP) engineered for scale, speed, and ROI.
          </p>
          <p className="text-sm sm:text-base text-white/90 mb-8 sm:mb-12 leading-relaxed drop-shadow-md">
            Whether you're an agency, affiliate, or brand, our platform delivers high-converting traffic across 200+ GEOs with blazing-fast bidding and full transparency.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12">
            <button className="bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-amber-700 font-semibold text-sm sm:text-base whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
              Start Campaign Now
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-amber-700 font-semibold text-sm sm:text-base whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
              View Demo
            </button>
          </div>
          
          {/* Product buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-white/30 font-semibold text-xs sm:text-sm whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              DSP Platform
            </button>
            <div className="relative">
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/60 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap cursor-not-allowed shadow-lg opacity-75">
                SSP Platform
              </button>
              <div className="absolute -top-2 -right-2 bg-amber-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Coming Soon
              </div>
            </div>
            <div className="relative">
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/60 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap cursor-not-allowed shadow-lg opacity-75">
                RTB Platform
              </button>
              <div className="absolute -top-2 -right-2 bg-amber-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}