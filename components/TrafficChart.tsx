
'use client';

export default function TrafficChart() {
  const trafficData = [
    { country: 'SG', flag: '', name: 'Singapore', mobileTraffic: '2.8M', webTraffic: '1.9M' },
    { country: 'TH', flag: '', name: 'Thailand', mobileTraffic: '8.5M', webTraffic: '6.2M' },
    { country: 'MY', flag: '', name: 'Malaysia', mobileTraffic: '5.2M', webTraffic: '3.8M' },
    { country: 'ID', flag: '', name: 'Indonesia', mobileTraffic: '18.7M', webTraffic: '12.4M' },
    { country: 'PH', flag: '', name: 'Philippines', mobileTraffic: '12.3M', webTraffic: '8.9M' },
    { country: 'VN', flag: '', name: 'Vietnam', mobileTraffic: '9.8M', webTraffic: '7.1M' },
    { country: 'MM', flag: '', name: 'Myanmar', mobileTraffic: '4.1M', webTraffic: '2.3M' },
    { country: 'KH', flag: '', name: 'Cambodia', mobileTraffic: '2.1M', webTraffic: '1.4M' },
    { country: 'LA', flag: '', name: 'Laos', mobileTraffic: '1.2M', webTraffic: '0.8M' },
    { country: 'BN', flag: '', name: 'Brunei', mobileTraffic: '0.6M', webTraffic: '0.4M' },
    { country: 'US', flag: '', name: 'United States', mobileTraffic: '89.5M', webTraffic: '67.8M' },
    { country: 'IN', flag: '', name: 'India', mobileTraffic: '156.2M', webTraffic: '78.4M' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Daily Traffic Overview
          </h2>
          <p className="text-xl text-gray-600">
            Real-time traffic data across Southeast Asia & USA markets
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Country</th>
                  <th className="px-6 py-4 text-center font-semibold">Mobile Traffic/Day</th>
                  <th className="px-6 py-4 text-center font-semibold">Web Traffic/Day</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {trafficData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{item.flag}</span>
                        <div>
                          <span className="font-semibold text-gray-900">{item.country}</span>
                          <span className="text-gray-600 ml-2">{item.name}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        <i className="ri-smartphone-line w-4 h-4 flex items-center justify-center mr-1"></i>
                        {item.mobileTraffic}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        <i className="ri-computer-line w-4 h-4 flex items-center justify-center mr-1"></i>
                        {item.webTraffic}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            * Traffic data updates every 5 minutes | Last updated: <span suppressHydrationWarning={true}>{new Date().toLocaleTimeString()}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
