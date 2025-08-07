
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              AdVolcano
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Next-generation ad network platform delivering premium results through advanced technology and data-driven optimization.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">About</Link></li>
              <li><a href="#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
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
