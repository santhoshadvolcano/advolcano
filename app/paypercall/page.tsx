
import PayPerCallHero from './PayPerCallHero';
import CallTrackingFeatures from './CallTrackingFeatures';
import HighPayoutCampaigns from './HighPayoutCampaigns';
import TechnologyStack from './TechnologyStack';
import CallMetrics from './CallMetrics';
import PayPerCallCTA from './PayPerCallCTA';

export default function PayPerCallPage() {
  return (
    <main className="min-h-screen">
      <PayPerCallHero />
      <CallTrackingFeatures />
      <HighPayoutCampaigns />
      <TechnologyStack />
      <CallMetrics />
      <PayPerCallCTA />
    </main>
  );
}
