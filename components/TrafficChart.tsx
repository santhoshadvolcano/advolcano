
'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function TrafficChart() {
  const data = [
    { name: 'Jan', value: 1200 },
    { name: 'Feb', value: 1900 },
    { name: 'Mar', value: 3000 },
    { name: 'Apr', value: 2800 },
    { name: 'May', value: 3900 },
    { name: 'Jun', value: 4300 },
    { name: 'Jul', value: 5100 },
    { name: 'Aug', value: 4800 },
    { name: 'Sep', value: 6200 },
    { name: 'Oct', value: 7100 },
    { name: 'Nov', value: 8300 },
    { name: 'Dec', value: 9500 }
  ];

  const stats = [
    {
      label: 'Monthly Impressions',
      value: '10.2B+',
      change: '+24%',
      icon: 'ri-eye-line'
    },
    {
      label: 'Active Campaigns',
      value: '12.5K+',
      change: '+18%',
      icon: 'ri-rocket-line'
    },
    {
      label: 'Publishers',
      value: '8.7K+',
      change: '+32%',
      icon: 'ri-user-line'
    },
    {
      label: 'Revenue Generated',
      value: '$24.8M+',
      change: '+41%',
      icon: 'ri-money-dollar-circle-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Platform Performance Metrics
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-time insights into our platform's growth and performance across all markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Traffic Growth Trend</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="name" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3B82F6" 
                      fill="url(#colorGradient)" 
                      strokeWidth={2}
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className={`${stat.icon} text-blue-600 text-xl`}></i>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  </div>
                  <div className="text-green-600 font-semibold text-sm">
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
