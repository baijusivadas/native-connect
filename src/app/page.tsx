import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PartnersSection from '@/components/PartnersSection';
import LanguagesSection from '@/components/LanguagesSection';
import TutorSection from '@/components/TutorSection';
import CurriculumSection from '@/components/CurriculumSection';
import NursePathSection from '@/components/NursePathSection';
import AudienceSection from '@/components/AudienceSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import WhatWeOfferSection from '@/components/WhatWeOfferSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';
import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f4ef] text-[#0b192c]">
      <Navbar />
      <Hero />
      <AudienceSection />
      <NursePathSection />
      <LanguagesSection />
      <TutorSection />
      <CurriculumSection />
      <WhyChooseSection />
      <WhatWeOfferSection />
      <TestimonialsSection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <PartnersSection />
      <ChatWidget />
      <Footer />
    </main>
  );
}
