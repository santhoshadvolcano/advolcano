
'use client';

import Header from '@/components/Header';

export default function RTBPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-400 via-green-400 to-yellow-400 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60"></div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-8xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
            Coming Soon
          </h1>
          <p className="text-2xl text-white font-semibold drop-shadow-lg mb-4">
            RTB Platform
          </p>
          <p className="text-lg text-white/90 drop-shadow-md max-w-2xl mx-auto mb-8">
            Our Real-Time Bidding platform is being crafted to deliver lightning-fast auctions and maximum revenue optimization.
          </p>
          
          <div className="mt-8">
            <a 
              href="https://www.adzim.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-semibold hover:bg-white/30 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-external-link-line w-5 h-5 flex items-center justify-center mr-2"></i>
              Visit www.adzim.net
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
