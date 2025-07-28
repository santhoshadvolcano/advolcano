
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdNetworkDiagram from '@/components/AdNetworkDiagram';
import WhyChooseSection from '@/components/WhyChooseSection';
import BuiltForAdvertisers from '@/components/BuiltForAdvertisers';
import AdFormatsSection from '@/components/AdFormatsSection';
import KeyFeaturesSection from '@/components/KeyFeaturesSection';
import TrafficChart from '@/components/TrafficChart';
import PaymentOptions from '@/components/PaymentOptions';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AdNetworkDiagram />
      <WhyChooseSection />
      <BuiltForAdvertisers />
      <AdFormatsSection />
      <KeyFeaturesSection />
      <TrafficChart />
      <PaymentOptions />
      <ContactSection />
      <Footer />
    </div>
  );
}
