'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Publisher() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">Coming Soon</h1>
          <p className="text-xl text-gray-600 mb-8">
            Our Publisher portal is under development
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-md mx-auto">
            We're working hard to bring you the best tools for publishers. 
            Stay tuned for updates!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
