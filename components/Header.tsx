
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-amber-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold cursor-pointer" style={{ fontFamily: 'Pacifico, serif' }}>
              Advolcano.io
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className={`font-medium whitespace-nowrap cursor-pointer ${pathname === '/' ? 'text-amber-700 border-b-2 border-amber-700' : 'text-stone-700 hover:text-amber-700'}`}>
              Home
            </Link>
            <Link href="/advertiser" className={`font-medium whitespace-nowrap cursor-pointer ${pathname === '/advertiser' ? 'text-amber-700 border-b-2 border-amber-700' : 'text-stone-700 hover:text-amber-700'}`}>
              Advertiser
            </Link>
            <Link href="/publisher" className={`font-medium whitespace-nowrap cursor-pointer ${pathname === '/publisher' ? 'text-amber-700 border-b-2 border-amber-700' : 'text-stone-700 hover:text-amber-700'}`}>
              Publisher
            </Link>
            <a href="https://readdy.link/share/49f97a07ab504eeaa721c3bca041c48c" className={`font-medium whitespace-nowrap cursor-pointer ${pathname === '/rtb' ? 'text-amber-700 border-b-2 border-amber-700' : 'text-stone-700 hover:text-amber-700'}`}>
              RTB
            </a>
            <Link href="/ad-formats/detailed" className={`font-medium whitespace-nowrap cursor-pointer ${pathname === '/ad-formats' ? 'text-amber-700 border-b-2 border-amber-700' : 'text-stone-700 hover:text-amber-700'}`}>
              Ad Formats
            </Link>
            <Link href="/payments" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 font-medium whitespace-nowrap cursor-pointer">
              Payments
            </Link>
          </nav>
          
          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/signin" className="text-stone-700 hover:text-amber-700 font-medium whitespace-nowrap cursor-pointer">
              Sign In
            </Link>
            <a href="https://ui.advolcano.io" className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 font-medium whitespace-nowrap cursor-pointer">
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-8 h-8 flex items-center justify-center text-stone-700 hover:text-amber-700 cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-amber-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className={`font-medium whitespace-nowrap cursor-pointer ${pathname === '/' ? 'text-amber-700' : 'text-stone-700 hover:text-amber-700'}`}>
                Home
              </Link>
              <Link href="/advertiser" className={`font-medium whitespace-nowrap cursor-pointer ${pathname === '/advertiser' ? 'text-amber-700' : 'text-stone-700 hover:text-amber-700'}`}>
                Advertiser
              </Link>
              <Link href="/publisher" className={`font-medium whitespace-nowrap cursor-pointer ${pathname === '/publisher' ? 'text-amber-700' : 'text-stone-700 hover:text-amber-700'}`}>
                Publisher
              </Link>
              <a href="https://readdy.link/share/49f97a07ab504eeaa721c3bca041c48c" className={`font-medium whitespace-nowrap cursor-pointer ${pathname === '/rtb' ? 'text-amber-700' : 'text-stone-700 hover:text-amber-700'}`}>
                RTB
              </a>
              <Link href="/ad-formats/detailed" className={`font-medium whitespace-nowrap cursor-pointer ${pathname === '/ad-formats' ? 'text-amber-700' : 'text-stone-700 hover:text-amber-700'}`}>
                Ad Formats
              </Link>
              <Link href="/payments" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 font-medium whitespace-nowrap cursor-pointer text-center">
                Payments
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-amber-200">
                <Link href="/signin" className="text-stone-700 hover:text-amber-700 font-medium whitespace-nowrap cursor-pointer">
                  Sign In
                </Link>
                <a href="https://ui.advolcano.io" className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 font-medium whitespace-nowrap cursor-pointer text-center">
                  Sign Up
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
