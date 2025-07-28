
'use client';

import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-lime-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-6">
            📞 Contact Us
          </h2>
          <p className="text-lg sm:text-xl text-stone-600">
            Ready to ignite your ad performance? Get in touch with our team
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-stone-200">
            <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Company</label>
                <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Your Company" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Subject</label>
                <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="How can we help?" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Tell us about your advertising needs..."></textarea>
              </div>
              
              <Link href="/demo" className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors whitespace-nowrap cursor-pointer block text-center">
                Send Message
              </Link>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full">
                  <i className="ri-mail-line w-6 h-6 flex items-center justify-center text-amber-700"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">Email</h4>
                  <p className="text-sm sm:text-base text-stone-600">support@advolcano.io</p>
                  <p className="text-sm sm:text-base text-stone-600">finance@advolcano.io</p>
                  <p className="text-sm sm:text-base text-stone-600">sales@advolcano.io</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full">
                  <i className="ri-phone-line w-6 h-6 flex items-center justify-center text-orange-700"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">Phone</h4>
                  <p className="text-sm sm:text-base text-stone-600">Mobile: +91 9035655632</p>
                  <p className="text-sm sm:text-base text-stone-600">Mobile: +91 9995609444</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
                  <i className="ri-map-pin-line w-6 h-6 flex items-center justify-center text-yellow-700"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">Address</h4>
                  <p className="text-sm sm:text-base text-stone-600">Powered By : ZIMZEL ENGINEERING PVT LTD</p>
                  <p className="text-sm sm:text-base text-stone-600">Novel Tech Park, 46/4, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, H.S.R Extension, Bengaluru, Karnataka – 560068</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 mb-6 sm:mb-8">Connect With Us</h3>
          <div className="flex justify-center flex-wrap gap-4">
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors cursor-pointer">
              <i className="ri-whatsapp-line w-6 h-6 flex items-center justify-center"></i>
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
              <i className="ri-telegram-line w-6 h-6 flex items-center justify-center"></i>
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors cursor-pointer">
              <i className="ri-twitter-line w-6 h-6 flex items-center justify-center"></i>
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors cursor-pointer">
              <i className="ri-linkedin-line w-6 h-6 flex items-center justify-center"></i>
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
              <i className="ri-facebook-line w-6 h-6 flex items-center justify-center"></i>
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors cursor-pointer">
              <i className="ri-instagram-line w-6 h-6 flex items-center justify-center"></i>
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors cursor-pointer">
              <i className="ri-youtube-line w-6 h-6 flex items-center justify-center"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
