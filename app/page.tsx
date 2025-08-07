'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdFormatsSection from '@/components/AdFormatsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import KeyFeaturesSection from '@/components/KeyFeaturesSection';
import PaymentOptions from '@/components/PaymentOptions';
import TrafficChart from '@/components/TrafficChart';
import AdNetworkDiagram from '@/components/AdNetworkDiagram';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AdFormatsSection />
      <WhyChooseSection />
      <KeyFeaturesSection />
      <PaymentOptions />
      <TrafficChart />
      <AdNetworkDiagram />
      <Footer />
    </div>
  );
}