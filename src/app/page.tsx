import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LanguagesSection from '@/components/LanguagesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import AboutSection from '@/components/AboutSection';
import WhatWeOfferSection from '@/components/WhatWeOfferSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 overflow-x-hidden">
      <Navbar />
      <Hero />
      <LanguagesSection />
      <WhyChooseSection />
      <AboutSection />
      <WhatWeOfferSection />
      <CTASection />
      <Footer />
    </main>
  );
}