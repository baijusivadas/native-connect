import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AudienceSection from "@/components/AudienceSection";
import LanguagesSection from "@/components/LanguagesSection";
import TutorSection from "@/components/TutorSection";
import CurriculumSection from "@/components/CurriculumSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import NursePathSection from "@/components/NursePathSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f4ef] text-[#0b192c]">
      <Navbar />

      {/* 1. First impression */}
      <Hero />

      {/* 2. Who Native Connects is for */}
      <AudienceSection />

      {/* 3. What languages you teach */}
      <LanguagesSection />

      {/* 4. Specialised pathway first to match the strongest offer */}
      <NursePathSection />

      {/* 5. Why native tutors */}
      <TutorSection />

      {/* 6. What students actually learn */}
      <CurriculumSection />

      {/* 7. Main differentiators */}
      <WhyChooseSection />

      {/* 8. Social proof */}
      <TestimonialsSection />

      {/* 9. Learning plans */}
      <PricingSection />

      {/* 10. Brand story */}
      <AboutSection />

      {/* 11. Other learning services */}
      <WhatWeOfferSection />

      {/* 12. Trust / partnerships */}
      <PartnersSection />

      {/* 13. Remove objections */}
      <FAQSection />

      {/* 14. Action banner */}
      <CTASection />

      {/* 15. Lead capture */}
      <ContactSection />

      <ChatWidget />
      <Footer />
    </main>
  );
}
