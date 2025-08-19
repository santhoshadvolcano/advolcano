'use client';

import { useEffect, useState, ChangeEvent, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import axiosInstance from '@/components/apiconfig/axios';
import { API_URLS } from '@/components/apiconfig/api_urls';

interface FormData {
  name: string;
  email: string;
  // phone_number: string;
  amount: string;
}

interface Errors {
  name?: string;
  email?: string;
  // phone_number?: string;
  amount?: string;
}

interface PaymentMethod {
  icon: string;
  title: string;
  description: string;
  logo: string;
  hasModal?: boolean;
}

interface VerificationResponse {
  success: boolean;
  data?: any;
  error?: any;
}

// Add Razorpay specific interfaces
interface RazorpayError {
  code: string;
  description: string;
  source: string;
  step: string;
  reason: string;
  metadata: any;
}

interface RazorpayPaymentFailedResponse {
  error: RazorpayError;
}

interface RazorpayPaymentSuccessResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

// Extend Window interface for Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

// Create a separate component that uses useSearchParams
function PaymentsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    // phone_number: '',
    amount: ''
  });

  const [exchangeRate, setExchangeRate] = useState(87.65); // Default fallback rate
  const [isLoadingRate, setIsLoadingRate] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  // Current USD to INR exchange rate (you might want to fetch this from an API)
  const USD_TO_INR_RATE = 87.65;



  const SuccessAlert = () => (
    showSuccessAlert && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4">
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-check-line text-green-600 text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Payment Successful!</h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              {successMessage}
            </p>
            <button
              onClick={() => setShowSuccessAlert(false)}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    )
  );



  const paymentMethods: PaymentMethod[] = [
    {
      icon: 'ri-wallet-line',
      title: 'Capitalist',
      description: 'E-wallet payment solution',
      logo: 'https://readdy.ai/api/search-image?query=Capitalist%20logo%20fintech%20payment%20wallet%20brand%20identity%20modern%20clean%20design%20white%20background%20professional%20financial%20services&width=120&height=60&seq=capitalist-logo-001&orientation=landscape'
    },
    {
      icon: 'ri-bank-card-line',
      title: 'Credit/Debit Card',
      description: 'Visa, Mastercard, American Express',
      logo: 'https://readdy.ai/api/search-image?query=Credit%20card%20payment%20logos%20Visa%20Mastercard%20American%20Express%20brand%20identity%20white%20background%20modern%20clean%20design&width=120&height=60&seq=creditcard-logo-001&orientation=landscape',
      hasModal: true
    },
    {
      icon: 'ri-bank-line',
      title: 'Wire Transfer',
      description: 'Bank wire transfers and ACH',
      logo: 'https://readdy.ai/api/search-image?query=Bank%20wire%20transfer%20payment%20logo%20banking%20financial%20services%20modern%20clean%20design%20white%20background%20professional&width=120&height=60&seq=wiretransfer-logo-001&orientation=landscape'
    }
  ];


  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    fetchExchangeRate();

    // Check if modal should be opened based on URL parameters
    const method = searchParams.get('method');
    if (method === 'razorpay') {
      setIsModalOpen(true);
    }
  }, [searchParams]);

  // Function to fetch real-time exchange rate from Fixer API
  const fetchExchangeRate = async () => {
    setIsLoadingRate(true);

    // Try multiple APIs in sequence
    const apis = [
      {
        name: 'ExchangeRate-API',
        url: 'https://api.exchangerate-api.com/v4/latest/USD',
        parser: (data: any) => data.rates?.INR
      },
      {
        name: 'CurrencyAPI',
        url: 'https://api.currencyapi.com/v3/latest?apikey=cur_live_YOUR_KEY&currencies=INR&base_currency=USD',
        parser: (data: any) => data.data?.INR?.value
      },
      {
        name: 'Fixer (HTTPS)',
        url: 'https://api.fixer.io/latest?access_key=8478778667a153023b872ada0ae4d107&base=USD&symbols=INR',
        parser: (data: any) => data.success && data.rates ? data.rates.INR : null
      }
    ];

    for (const api of apis) {
      try {
        console.log(`Trying ${api.name}...`);

        const response = await fetch(api.url);

        if (!response.ok) {
          console.log(`${api.name} returned ${response.status}`);
          continue;
        }

        const data = await response.json();
        console.log(`${api.name} Response:`, data);

        const rate = api.parser(data);

        if (rate && typeof rate === 'number' && rate > 0) {
          setExchangeRate(rate);
          console.log(`Exchange rate updated from ${api.name}:`, rate);
          setIsLoadingRate(false);
          return; // Success, exit the function
        } else {
          console.log(`${api.name}: Invalid rate data`);
        }
      } catch (error) {
        console.error(`Error with ${api.name}:`, error);
      }
    }

    // If all APIs fail, use a reliable fallback
    console.log('All APIs failed, using fallback rate');
    setIsLoadingRate(false);
  };



  const fetchExchangeRateFallback = async () => {
    try {
      console.log('Trying fallback API...');

      // Using exchangerate-api.com (free tier, no API key required)
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      console.log('Fallback API Response:', data);

      if (data.rates && data.rates.INR) {
        setExchangeRate(data.rates.INR);
        console.log('Exchange rate updated from fallback:', data.rates.INR);
      } else {
        console.error('Fallback API: Invalid response structure');
        // Keep the default rate if both APIs fail
        console.log('Using default exchange rate:', exchangeRate);
      }
    } catch (error) {
      console.error('Error fetching from fallback API:', error);
      // Keep the default rate
      console.log('Using default exchange rate:', exchangeRate);
    }
  };
  console.log(exchangeRate);

  const handleCardClick = (method: PaymentMethod) => {
    if (method.hasModal) {
      setIsModalOpen(true);
      router.push('/payments?method=razorpay');
    }
  };

  const validateForm = () => {
    const newErrors: Errors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    // Amount validation
    if (!formData.amount) {
      newErrors.amount = 'Amount is required';
    } else {
      const amount = parseFloat(formData.amount);
      if (isNaN(amount) || amount <= 0) {
        newErrors.amount = 'Please enter a valid amount greater than 0';
      } else if (amount < 0) {
        newErrors.amount = 'Minimum amount is $100';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 6. Update handleInputChange (remove phone_number special handling)
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof Errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };



  // Calculate all the required values
  const amountUSD = formData.amount ? parseFloat(formData.amount) : 0;
  const amountINR = amountUSD * exchangeRate;
  const commission = amountUSD * 0.02; // 2% commission (changed from 0.03)
  const gst = commission * 0.18; // 18% GST on commission
  const totalAmount = amountUSD + commission + gst;
  const totalAmountINR = totalAmount * exchangeRate;

  // Function to verify payment with Razorpay
  const verifyPayment = async (razorpay_order_id: string, razorpay_payment_id: string, razorpay_signature: string): Promise<VerificationResponse> => {
    try {
      console.log('Verifying payment...', { razorpay_order_id, razorpay_payment_id, razorpay_signature });

      const verificationData = {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
      };

      const response = await axiosInstance.post(API_URLS.VERIFY_PAYMENT.POST_VERIFY_PAYMENT, verificationData);
      console.log('Payment verification successful:', response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Payment verification failed:', error);
      return { success: false, error };
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const paymentData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        amount_usd: amountUSD,
        amount_inr: parseFloat(amountINR.toFixed(2)),
        commission: parseFloat((commission * exchangeRate).toFixed(2)), // Convert to INR
        gst: parseFloat((gst * exchangeRate).toFixed(2)), // Convert to INR
        total_amount: parseFloat(totalAmountINR.toFixed(2)) // Save total in INR
      };

      // First create the order on your backend
      const response = await axiosInstance.post(API_URLS.PAYMENT.POST_PAYMENT, paymentData);
      console.log('Payment order created:', response.data);

      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        alert('Razorpay SDK failed to load. Please try again.');
        setIsLoading(false);
        return;
      }

      // Enhanced Razorpay options with UPI support

      const options = {
        key: 'rzp_live_R752FOAl7GV9vX', // Your Razorpay key ID
        amount: Math.round(totalAmountINR * 100), // Amount in paise
        currency: 'INR',
        name: 'AdVolcano',
        description: 'Payment for AdVolcano Services',
        order_id: response.data.order_id, // This should come from your backend

        handler: async function (response: RazorpayPaymentSuccessResponse) {
          console.log('Payment successful:', response);

          // Verify the payment
          const verificationResult = await verifyPayment(
            response.razorpay_order_id,
            response.razorpay_payment_id,
            response.razorpay_signature
          );

          if (verificationResult.success) {
            setSuccessMessage(`Payment verified successfully!`);
            setShowSuccessAlert(true);
            setIsModalOpen(false);
            setFormData({ name: '', email: '', amount: '' });
            setErrors({});
          } else {
            setSuccessMessage(`Payment successful but verification failed. Please contact support with Payment ID: ${response.razorpay_payment_id}`);
            setShowSuccessAlert(true);
            setIsLoading(false);
            console.error('Payment verification failed:', verificationResult.error);
          }
        },

        prefill: {
          name: formData.name,
          email: formData.email,
          contact: '' // Add phone if you have it
        },

        theme: {
          color: '#2563eb'
        },

        modal: {
          ondismiss: function () {
            console.log('Razorpay modal dismissed');
            setIsLoading(false);
          }
        }
      };

      // Create and open Razorpay
      const rzp = new window.Razorpay(options);

      // Add event listeners for better debugging
      rzp.on('payment.failed', function (response: RazorpayPaymentFailedResponse) {
        console.error('Payment failed:', response.error);
        alert(`Payment failed: ${response.error.description}. Error Code: ${response.error.code}`);
        setIsLoading(false);
      });

      // Open Razorpay checkout
      rzp.open();

    } catch (error) {
      console.error('Payment submission failed:', error);
      alert('Payment submission failed. Please try again.');
      setIsLoading(false);
    }
  };



  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', email: '', amount: '' });
    setErrors({});
    router.push('/payments');
  };


  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Secure Payment <span className="text-blue-600">Methods</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Multiple payment options for advertisers.
            Choose the method that works best for you with secure processing.
          </p>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Available Payment Methods</h2>
            <p className="text-xl text-slate-600">Flexible payment options tailored for your needs</p>
          </div>

          {/* For Advertisers */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">For Advertisers</h3>
              <p className="text-lg text-slate-600">Fund your campaigns with convenient payment options</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paymentMethods.slice(0, 3).map((method, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-8 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-shadow ${method.hasModal ? 'cursor-pointer hover:border-blue-300' : ''}`}
                  onClick={() => handleCardClick(method)}
                >
                  <div className="mb-6">
                    <img
                      src={method.logo}
                      alt={`${method.title} logo`}
                      className="w-24 h-12 mx-auto object-contain mb-4"
                    />
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className={`${method.icon} text-blue-600 text-2xl`}></i>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">{method.title}</h4>
                  <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Payment Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Payment Features</h2>
            <p className="text-xl text-slate-600">Why choose our payment system</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Secure Processing</h3>
              <p className="text-slate-600">256-bit SSL encryption and fraud protection for all transactions</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Fast Processing</h3>
              <p className="text-slate-600">Quick payment processing with real-time transaction updates</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-2-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">24/7 Support</h3>
              <p className="text-slate-600">Round-the-clock payment support for any issues or questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Payment Schedule & Terms</h2>
          </div>

          <div className="flex justify-center">
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200 max-w-md">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">For Advertisers</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span>Prepaid campaign model</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span>Real-time budget tracking</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span>Auto-reload available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of advertisers who trust AdVolcano for secure payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://ui.advolcano.io/registration" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-slate-50 font-semibold text-lg whitespace-nowrap cursor-pointer shadow-sm hover:shadow-md transition-all">
              Start Now
            </a>
            <a href="/demo" className="border border-blue-300 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg whitespace-nowrap cursor-pointer transition-all">
              Request Demo
            </a>
          </div>
        </div>
      </section>
      {/* Credit Card Payment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-4 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="ri-bank-card-line text-blue-600 text-lg"></i>
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900">Credit/Debit Card Payment</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <i className="ri-close-line text-slate-600 text-xl"></i>
                </button>
              </div>
            </div>

            <div className="p-5 space-y-3">
              {/* Combined Notice */}

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2.5">
                <p className="text-xs text-yellow-700">
                  <i className="ri-information-line mr-1"></i>
                  <strong>Important Notice :</strong>

                  To reflect the payment into your Advolcano.io account, kindly use email id and account name you have used while registering with Advolcano.io. The payment will be marked against your Advolcano account within 24 hrs to 48 hrs of successful payment.                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                    placeholder="Your AdVolcano account name"
                    required
                  />
                  {errors.name && <p className="mt-0.5 text-xs text-red-600">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                    placeholder="Your AdVolcano account email"
                    required
                  />
                  {errors.email && <p className="mt-0.5 text-xs text-red-600">{errors.email}</p>}
                </div>

                {/* Amount Field - Full Width */}
                <div className="md:col-span-2">
                  <label htmlFor="amount" className="block text-xs font-medium text-slate-700 mb-1">
                    Amount (USD) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 font-medium text-sm">$</span>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      min="100"
                      step="0.01"
                      className={`w-full pl-8 pr-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm ${errors.amount ? 'border-red-500 bg-red-50' : 'border-slate-300'
                        }`}
                      placeholder="Min 100 USD"
                      required
                    />
                  </div>
                  {errors.amount && <p className="mt-0.5 text-xs text-red-600">{errors.amount}</p>}
                </div>
              </div>

              {/* Exchange Rate Info - Compact */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-center">
                <span className="text-xs text-blue-800">USD to INR: </span>
                <span className="font-medium text-blue-900 text-sm">
                  {isLoadingRate ? (
                    <i className="ri-loader-4-line animate-spin"></i>
                  ) : (
                    `₹${exchangeRate.toFixed(2)}`
                  )}
                </span>
              </div>

              {/* Ultra Compact Summary Section */}
              <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                <div className="text-xs font-medium text-slate-700 mb-2">Payment Summary</div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Amount:</span>
                    <span className="font-medium">${amountUSD.toFixed(2)} / ₹{amountINR.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Platform Fee (2%):</span>
                    <span className="text-orange-600">${commission.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">GST (18%):</span>
                    <span className="text-red-600">${gst.toFixed(2)}</span>
                  </div>
                  <hr className="border-slate-300 my-1" />
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-900">Total:</span>
                    <span className="font-bold text-blue-700">₹{totalAmountINR.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Minimal Disclaimer */}
              <div className="text-xs text-gray-600 bg-gray-50 rounded p-2">
                <strong>Disclaimer:</strong> By proceeding, you agree to our terms. Secure & non-refundable.
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center text-sm"
                >
                  {isLoading ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Processing...
                    </>
                  ) : (
                    'Proceed to Payment'
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>
      )}
      {showSuccessAlert && <SuccessAlert />}
      <Footer />
    </div>
  );
}

// Loading component for Suspense fallback
function PaymentsLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading payment options...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Main component with Suspense boundary
export default function PaymentsPage() {
  return (
    <Suspense fallback={<PaymentsLoading />}>
      <PaymentsContent />
    </Suspense>
  );
}