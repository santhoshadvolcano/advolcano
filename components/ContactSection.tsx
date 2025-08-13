'use client';
import Link from 'next/link';
import { useState, ChangeEvent, FormEvent } from 'react';
import axiosInstance from './apiconfig/axios';
import { API_URLS } from './apiconfig/api_urls';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Import axiosInstance and API_URLS at the top of your file
      // import { axiosInstance } from 'your-axios-config-path';
      // import { API_URLS } from 'your-api-urls-path';
      
      const response = await axiosInstance.post(API_URLS.CONTACT.POST_CONTACT, {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message
      });

      if (response.status === 200 || response.status === 201) {
        setSubmitMessage('Message sent successfully! We\'ll get back to you soon.');
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
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
            
            {submitMessage && (
              <div className={`mb-4 p-3 rounded-lg ${submitMessage.includes('successfully') 
                ? 'bg-green-100 text-green-700 border border-green-300' 
                : 'bg-red-100 text-red-700 border border-red-300'
              }`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                    placeholder="John" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Doe" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                  placeholder="john@example.com" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Company</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                  placeholder="Your Company" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" 
                  placeholder="How can we help?" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                  placeholder="Tell us about your advertising needs..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold transition-colors shadow-lg ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed text-white' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg">
                  <i className="ri-mail-line w-6 h-6 flex items-center justify-center text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">Email</h4>
                  <p className="text-sm sm:text-base text-stone-600">support@advolcano.io</p>
                  <p className="text-sm sm:text-base text-stone-600">finance@advolcano.io</p>
                  <p className="text-sm sm:text-base text-stone-600">sales@advolcano.io</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full shadow-lg">
                  <i className="ri-phone-line w-6 h-6 flex items-center justify-center text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">Phone</h4>
                  <p className="text-sm sm:text-base text-stone-600">Mobile: +91 9035655632</p>
                  <p className="text-sm sm:text-base text-stone-600">Mobile: +91 9995609444</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg">
                  <i className="ri-map-pin-line w-6 h-6 flex items-center justify-center text-white"></i>
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
          <div className="flex justify-center flex-wrap gap-4" suppressHydrationWarning={true}>
            <a href="https://www.linkedin.com/company/advolcano"
              aria-label="AdVolcano LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all cursor-pointer shadow-lg">
              <i className="ri-linkedin-line w-6 h-6 flex items-center justify-center"></i>
            </a>
            <a href="https://www.instagram.com/advolcano.io" 
              aria-label="AdVolcano Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:from-pink-600 hover:to-rose-600 transition-all cursor-pointer shadow-lg">
              <i className="ri-instagram-line w-6 h-6 flex items-center justify-center"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
