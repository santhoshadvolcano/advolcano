
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-amber-500 mb-4 block cursor-pointer" style={{ fontFamily: 'Pacifico, serif' }}>
              Advolcano.io
            </Link>
            <p className="text-stone-400 leading-relaxed">
              Next-gen Ad-Network engineered for scale, speed, and ROI.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="/advertiser" className="text-stone-400 hover:text-amber-400 cursor-pointer">Advertiser</Link></li>
              <li><Link href="/publisher" className="text-stone-400 hover:text-amber-400 cursor-pointer">Publisher</Link></li>
              <li><Link href="/rtb" className="text-stone-400 hover:text-amber-400 cursor-pointer">RTB</Link></li>
              <li><Link href="/payments" className="text-stone-400 hover:text-amber-400 cursor-pointer">Payments</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/docs" className="text-stone-400 hover:text-amber-400 cursor-pointer">Documentation</Link></li>
              <li><Link href="/support" className="text-stone-400 hover:text-amber-400 cursor-pointer">Support</Link></li>
              <li><Link href="/blog" className="text-stone-400 hover:text-amber-400 cursor-pointer">Blog</Link></li>
              <li><Link href="/api" className="text-stone-400 hover:text-amber-400 cursor-pointer">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-stone-400 hover:text-amber-400 cursor-pointer">About</Link></li>
              <li><Link href="/careers" className="text-stone-400 hover:text-amber-400 cursor-pointer">Careers</Link></li>
              <li><Link href="/contact" className="text-stone-400 hover:text-amber-400 cursor-pointer">Contact</Link></li>
              <li><Link href="/prohibited-use" className="text-stone-400 hover:text-amber-400 cursor-pointer">Prohibited Use</Link></li>
              <li><Link href="/privacy-policy" className="text-stone-400 hover:text-amber-400 cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="text-stone-400 hover:text-amber-400 cursor-pointer">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-center">
          <p className="text-stone-400 mb-2">
            Powered By Zimzel Engineering Pvt LTD
          </p>
          <p className="text-stone-400">
            2024 AdVolcano.io. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
