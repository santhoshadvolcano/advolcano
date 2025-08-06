
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PayPerCallHero from './PayPerCallHero';
import CallTrackingFeatures from './CallTrackingFeatures';
import HighPayoutCampaigns from './HighPayoutCampaigns';
import TechnologyStack from './TechnologyStack';
import CallMetrics from './CallMetrics';
import PayPerCallCTA from './PayPerCallCTA';

export default function PayPerCallPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <PayPerCallHero />
      <CallTrackingFeatures />
      <HighPayoutCampaigns />
      <TechnologyStack />
      <CallMetrics />
      <PayPerCallCTA />
      
      <Footer />
    </div>
  );
}
