
'use client';

export default function CallMetrics() {
  const metrics = [
    {
      value: '2.5M+',
      label: 'Monthly Calls',
      description: 'High-quality leads processed monthly',
      icon: 'ri-phone-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      value: '85%',
      label: 'Connect Rate',
      description: 'Industry-leading call connection success',
      icon: 'ri-link-line',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      value: '4.2min',
      label: 'Avg Call Duration',
      description: 'Optimal engagement time for conversions',
      icon: 'ri-time-line',
      color: 'from-purple-500 to-pink-500'
    },
    {
      value: '$280',
      label: 'Avg Payout',
      description: 'Mean payout across all verticals',
      icon: 'ri-money-dollar-circle-line',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const performance = [
    { vertical: 'Insurance', calls: '850K', conversion: '15.2%', avgPayout: '$125' },
    { vertical: 'Solar', calls: '420K', conversion: '11.8%', avgPayout: '$275' },
    { vertical: 'Legal', calls: '180K', conversion: '9.4%', avgPayout: '$400' },
    { vertical: 'Finance', calls: '650K', conversion: '13.6%', avgPayout: '$180' },
    { vertical: 'Healthcare', calls: '380K', conversion: '17.3%', avgPayout: '$230' },
    { vertical: 'Home Services', calls: '220K', conversion: '12.9%', avgPayout: '$160' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Platform Performance Metrics
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real data from our PayPerCall network demonstrating consistent high performance 
            and exceptional results for our partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center group hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <i className={`${metric.icon} w-8 h-8 flex items-center justify-center text-white text-2xl`}></i>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-slate-700 mb-2">{metric.label}</div>
              <p className="text-slate-600 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Performance by Vertical (Last 30 Days)
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Vertical</th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-900">Monthly Calls</th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-900">Conversion Rate</th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-900">Avg Payout</th>
                </tr>
              </thead>
              <tbody>
                {performance.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-semibold text-slate-900">{item.vertical}</div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="font-semibold text-blue-600">{item.calls}</div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="font-semibold text-emerald-600">{item.conversion}</div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="font-semibold text-green-600">{item.avgPayout}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Publishers</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Active Publishers</span>
                <span className="font-bold text-2xl">2,847</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Top Publisher Earnings</span>
                <span className="font-bold text-2xl">$45K/mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Average Monthly Revenue</span>
                <span className="font-bold text-2xl">$8,500</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Advertisers</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Active Advertisers</span>
                <span className="font-bold text-2xl">156</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Average ROAS</span>
                <span className="font-bold text-2xl">4.2x</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Customer LTV</span>
                <span className="font-bold text-2xl">$2,840</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
