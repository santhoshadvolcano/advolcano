
'use client';

import Link from 'next/link';

export default function HighPayoutCampaigns() {
  const campaigns = [
    {
      title: 'Insurance Leads',
      payout: '$85-150',
      category: 'Auto & Home Insurance',
      description: 'High-intent prospects seeking insurance quotes with immediate conversion potential.',
      requirements: 'Age 18+, Valid Driver License',
      duration: '2-5 minutes',
      conversion: '12-18%',
      badge: 'Hot',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Solar Installation',
      payout: '$200-350',
      category: 'Home Improvement',
      description: 'Homeowners interested in solar panel installation with qualified property requirements.',
      requirements: 'Homeowner, Credit Score 650+',
      duration: '5-8 minutes',
      conversion: '8-15%',
      badge: 'Premium',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Debt Consolidation',
      payout: '$120-220',
      category: 'Financial Services',
      description: 'Individuals seeking debt relief and consolidation services with verified income.',
      requirements: 'Min $10k Debt, Income Verification',
      duration: '3-6 minutes',
      conversion: '10-16%',
      badge: 'High Volume',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Medicare Advantage',
      payout: '$180-280',
      category: 'Healthcare',
      description: 'Medicare-eligible prospects seeking supplemental coverage and benefits.',
      requirements: 'Age 65+, Medicare Eligible',
      duration: '4-7 minutes',
      conversion: '14-20%',
      badge: 'Seasonal',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Legal Services',
      payout: '$300-500',
      category: 'Legal',
      description: 'High-value legal consultation leads for personal injury and litigation cases.',
      requirements: 'Recent Incident, No Attorney',
      duration: '6-10 minutes',
      conversion: '6-12%',
      badge: 'High Value',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Business Loans',
      payout: '$250-400',
      category: 'B2B Financial',
      description: 'Small business owners seeking funding and financing solutions.',
      requirements: 'Business Owner, 2+ Years Operation',
      duration: '5-8 minutes',
      conversion: '8-14%',
      badge: 'B2B',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="campaigns" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            High Payout PPC Campaigns
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Premium campaigns with industry-leading payouts and high conversion rates. 
            Start earning with our top-performing verticals today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {campaigns.map((campaign, index) => (
            <div key={index} className="group">
              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${campaign.color}`}>
                    {campaign.badge}
                  </span>
                </div>

                <div className="mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${campaign.color} rounded-xl flex items-center justify-center mb-4`}>
                    <i className="ri-phone-fill w-7 h-7 flex items-center justify-center text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{campaign.title}</h3>
                  <p className="text-sm font-medium text-slate-500 mb-4">{campaign.category}</p>
                  <div className="text-3xl font-bold text-green-600 mb-4">
                    {campaign.payout}
                    <span className="text-sm font-normal text-slate-500 ml-1">per call</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-slate-600 leading-relaxed">{campaign.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-slate-900">Duration:</span>
                      <p className="text-slate-600">{campaign.duration}</p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">Conversion:</span>
                      <p className="text-green-600 font-medium">{campaign.conversion}</p>
                    </div>
                  </div>

                  <div>
                    <span className="font-medium text-slate-900 text-sm">Requirements:</span>
                    <p className="text-slate-600 text-sm mt-1">{campaign.requirements}</p>
                  </div>
                </div>

                <Link href="/demo" className={`w-full bg-gradient-to-r ${campaign.color} text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform whitespace-nowrap cursor-pointer block text-center`}>
                  Start This Campaign
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Join our network and start earning with high-converting campaigns. Our team will help you 
              select the best campaigns for your traffic sources and maximize your revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Apply as Publisher
              </Link>
              <Link href="/advertiser" className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors whitespace-nowrap cursor-pointer">
                Advertise with Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
