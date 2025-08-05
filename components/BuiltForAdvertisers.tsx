
'use client';

import Link from 'next/link';

export default function BuiltForAdvertisers() {
  const platforms = [
    {
      title: 'DSP Platform',
      description: 'Advanced demand-side platform with AI-powered optimization and real-time bidding capabilities.',
      icon: 'ri-dashboard-3-line',
      color: 'from-blue-500 to-cyan-500',
      link: '/advertiser'
    },
    {
      title: 'SSP Platform', 
      description: 'Supply-side platform that maximizes publisher revenue through intelligent yield optimization.',
      icon: 'ri-stack-line',
      color: 'from-green-500 to-emerald-500',
      link: '/publisher'
    },
    {
      title: 'RTB Platform',
      description: 'Real-time bidding infrastructure that connects premium inventory with quality demand.',
      icon: 'ri-auction-line',
      color: 'from-purple-500 to-pink-500',
      link: '/rtb'
    },
    {
      title: 'PayPerCall Network',
      description: 'Performance-based call marketing platform that connects advertisers with high-intent phone leads.',
      icon: 'ri-phone-line',
      color: 'from-orange-500 to-red-500',
      link: '/paypercall'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Built for Modern Digital Advertising
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive platform suite delivers everything you need to succeed in programmatic advertising.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <div key={index} className="group">
              <Link href={platform.link}>
                <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <i className={`${platform.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{platform.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{platform.description}</p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    Learn More
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
