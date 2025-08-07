
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About AdVolcano.io
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Leading DSP company transforming digital advertising in India
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">About Us</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Welcome to <strong>AdVolcano.io</strong>, a leading DSP (Demand-Side Platform) company based in the heart of Bangalore, India. We are a team of passionate advertising and technology experts dedicated to helping businesses of all sizes achieve their marketing goals through powerful, data-driven programmatic advertising.
              </p>
              
              <p className="text-slate-700 leading-relaxed mb-8">
                In today's dynamic digital landscape, reaching the right audience at the right time is paramount. At AdVolcano.io, we believe that programmatic advertising is the key to unlocking this potential. Our cutting-edge platform provides advertisers with the tools and insights they need to execute highly effective and efficient campaigns across a wide range of channels, including display, video, and mobile.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-target-line text-white"></i>
                </span>
                Our Mission
              </h2>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                Our mission is simple: <strong>to make programmatic advertising accessible and effective for everyone</strong>. We strive to demystify the complexities of the ad tech world, providing a transparent, user-friendly, and powerful platform that delivers tangible results.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                We are committed to helping our clients maximize their return on ad spend and achieve their business objectives.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-settings-3-line text-white"></i>
                </span>
                What We Do
              </h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                <strong>AdVolcano.io is more than just a DSP; we are your strategic partner in the world of digital advertising.</strong> We offer:
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-crosshair-line text-blue-600 text-sm"></i>
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Advanced Targeting</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Our platform leverages sophisticated data analytics and machine learning to help you target your ideal audience with precision, ensuring your ads are seen by the people who matter most.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-auction-line text-purple-600 text-sm"></i>
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Real-Time Bidding</h3>
                    <p className="text-slate-700 leading-relaxed">
                      We provide a robust real-time bidding (RTB) engine that enables you to bid on ad impressions in real-time, optimizing your campaigns for maximum efficiency and reach.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-bar-chart-line text-orange-600 text-sm"></i>
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Comprehensive Analytics</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Our detailed reporting and analytics dashboards give you full visibility into your campaign performance, allowing you to make data-backed decisions and optimize your strategies on the fly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-customer-service-2-line text-green-600 text-sm"></i>
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Dedicated Support</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Our team of experts is always here to help. From campaign setup to ongoing optimization, we provide personalized support to ensure your success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-star-line text-white"></i>
                </span>
                Why Choose AdVolcano.io?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-lightbulb-line text-indigo-600 text-sm"></i>
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Innovation</h3>
                    <p className="text-slate-700 leading-relaxed">
                      We are constantly innovating and updating our platform to stay ahead of the curve in the fast-paced ad tech industry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-eye-line text-blue-600 text-sm"></i>
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Transparency</h3>
                    <p className="text-slate-700 leading-relaxed">
                      We believe in complete transparency. You'll always know where your ad dollars are going and how your campaigns are performing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-trophy-line text-green-600 text-sm"></i>
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Results-Oriented</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Our focus is on delivering measurable results that drive business growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-global-line text-purple-600 text-sm"></i>
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Local Expertise, Global Reach</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Based in Bangalore, we have a deep understanding of the local market while providing access to a global network of publishers and ad inventory.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-line text-blue-600"></i>
                </span>
                Our Location
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Based in <strong>Bangalore, India</strong> - the Silicon Valley of India, we're at the heart of the country's technology and innovation hub.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  <i className="ri-team-line text-blue-600"></i>
                </span>
                Our Team
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A team of passionate <strong>advertising and technology experts</strong> dedicated to delivering exceptional results.
              </p>
              
              <div className="mt-6">
                <h4 className="font-semibold text-slate-900 mb-3">Co-Founders</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-slate-700">Geethu Santhosh</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-slate-700">Regha Sebastian</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-slate-700">Santhosh Joseph</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
