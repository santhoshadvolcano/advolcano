'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold cursor-pointer text-slate-900" style={{ fontFamily: 'Pacifico, serif' }}>
              AdVolcano
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`font-medium whitespace-nowrap cursor-pointer transition-colors ${pathname === '/' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>
              Platform
            </Link>
            <Link href="/advertiser" className={`font-medium whitespace-nowrap cursor-pointer transition-colors ${pathname === '/advertiser' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>
              Advertiser
            </Link>
            <Link href="/ad-formats/detailed" className={`font-medium whitespace-nowrap cursor-pointer transition-colors ${pathname === '/ad-formats' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>
              Ad Formats
            </Link>
            <Link href="/payments" className={`font-medium whitespace-nowrap cursor-pointer transition-colors ${pathname === '/payments' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>
              Payments
            </Link>
            <Link href="/contact" className={`font-medium whitespace-nowrap cursor-pointer transition-colors ${pathname === '/contact' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>
              Contact Us
            </Link>
          </nav>
          
          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://ui.advolcano.io/login" className="text-slate-600 hover:text-slate-900 font-medium whitespace-nowrap cursor-pointer transition-colors">
              Sign In
            </a>
            <a href="https://ui.advolcano.io/registration" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 font-medium whitespace-nowrap cursor-pointer transition-colors">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-700 hover:text-slate-900 cursor-pointer rounded-lg hover:bg-slate-50"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-slate-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className={`font-medium whitespace-nowrap cursor-pointer ${pathname === '/' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>
                Platform
              </Link>
              <Link href="/advertiser" className={`font-medium whitespace-nowrap cursor-pointer ${pathname === '/advertiser' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>
                Advertiser
              </Link>
              <Link href="/ad-formats/detailed" className={`font-medium whitespace-nowrap cursor-pointer ${pathname === '/ad-formats' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>
                Ad Formats
              </Link>
              <Link href="/payments" className={`font-medium whitespace-nowrap cursor-pointer ${pathname === '/payments' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>
                Payments
              </Link>
              <Link href="/contact" className={`font-medium whitespace-nowrap cursor-pointer ${pathname === '/contact' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}>
                Contact Us
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-slate-100">
                <a href="https://ui.advolcano.io/login" className="text-slate-600 hover:text-slate-900 font-medium whitespace-nowrap cursor-pointer">
                  Sign In
                </a>
                <a href="https://ui.advolcano.io/registration" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 font-medium whitespace-nowrap cursor-pointer text-center">
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}