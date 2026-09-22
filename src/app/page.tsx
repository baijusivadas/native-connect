import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LanguagesSection from '@/components/LanguagesSection';
import AudienceSection from '@/components/AudienceSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import WhatWeOfferSection from '@/components/WhatWeOfferSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f4ef] text-[#0b192c]">
      <Navbar />
      <Hero />
      <AudienceSection />
      <LanguagesSection />
      <WhyChooseSection />
      <WhatWeOfferSection />
      <TestimonialsSection />
      <PricingSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
