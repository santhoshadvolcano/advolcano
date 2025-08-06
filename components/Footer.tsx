
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              AdVolcano
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Next-generation ad network platform delivering premium results through advanced technology and data-driven optimization.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <i className="ri-twitter-line text-slate-400 hover:text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <i className="ri-linkedin-line text-slate-400 hover:text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <i className="ri-github-line text-slate-400 hover:text-white"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/advertiser" className="hover:text-white transition-colors cursor-pointer">Advertiser</Link></li>
              <li><Link href="/publisher" className="hover:text-white transition-colors cursor-pointer">Publisher</Link></li>
              <li><a href="https://readdy.link/share/49f97a07ab504eeaa721c3bca041c48c" className="hover:text-white transition-colors cursor-pointer">RTB</a></li>
              <li><Link href="/ad-formats/detailed" className="hover:text-white transition-colors cursor-pointer">Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/payments" className="hover:text-white transition-colors cursor-pointer">Pricing</Link></li>
              <li><Link href="/demo" className="hover:text-white transition-colors cursor-pointer">Request Demo</Link></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">API Reference</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Press</a></li>
              <li><a href="mailto:support@advolcano.io" className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm">
              <p className="mb-2 md:mb-0">
                Powered by Zimzel Engineering Pvt LTD
              </p>
              <p>&copy; 2024 AdVolcano.io. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm text-slate-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
