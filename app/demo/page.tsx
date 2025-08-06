
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    interest: '',
    fullName: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    if (formData.message.length > 500) {
      setSubmitStatus('Message must be 500 characters or less');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          interest: formData.interest,
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company,
          message: formData.message
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('Thank you! Your demo request has been submitted successfully.');
        setFormData({
          interest: '',
          fullName: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        setSubmitStatus('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('There was an error submitting your request. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Request a <span className="text-blue-600">Demo</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Experience the power of AdVolcano's next-generation advertising platform. 
              Let our experts show you how to achieve exceptional results for your campaigns.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-200">
            <form id="demo-request-form" onSubmit={handleSubmit} className="space-y-8">
              {/* Interest Selection */}
              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-slate-700 mb-3">
                  I'm interested in:
                </label>
                <div className="relative">
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900 pr-8"
                  >
                    <option value="">Select your interest</option>
                    <option value="Advertiser Solutions">Advertiser Solutions - Campaign management and optimization</option>
                    <option value="Publisher Monetization">Publisher Monetization - Revenue optimization and ad formats</option>
                    <option value="Enterprise Solutions">Enterprise Solutions - Custom integrations and white-label</option>
                    <option value="RTB Platform">RTB Platform - Real-time bidding capabilities</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-slate-400"></i>
                  </div>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-3">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your advertising goals, current challenges, or specific requirements..."
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 resize-none"
                />
                <p className="mt-2 text-sm text-slate-500">
                  {formData.message.length}/500 characters
                </p>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer shadow-sm hover:shadow-md"
                >
                  {isSubmitting ? 'Sending Request...' : 'Request Demo'}
                </button>
              </div>

              {/* Status Message */}
              {submitStatus && (
                <div className={`p-4 rounded-lg text-center ${submitStatus.includes('successfully') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  {submitStatus}
                </div>
              )}
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Quick Response</h3>
              <p className="text-slate-600">Our team responds within 2 hours to schedule your personalized demo session.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-star-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Expert Consultation</h3>
              <p className="text-slate-600">Get insights from our advertising specialists tailored to your specific needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-rocket-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Custom Solutions</h3>
              <p className="text-slate-600">Discover how AdVolcano can be customized to achieve your advertising goals.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
