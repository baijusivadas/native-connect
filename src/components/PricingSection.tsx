'use client';

import Link from 'next/link';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const plans = [
  { name: 'Private', description: 'For learners who want focused, personalized progress.', price: 'Add price', cadence: '/ lesson or package', featured: true, features: ['One-on-one tutoring', 'Goal-based lesson plan', 'Flexible scheduling', 'Progress tracking'] },
  { name: 'Small Group', description: 'For learners who enjoy practice and community.', price: 'Add price', cadence: '/ month or package', featured: false, features: ['Small group lessons', 'Conversation practice', 'Cultural learning', 'Progress guidance'] },
  { name: 'Kids', description: 'For parents looking for engaging language learning for children.', price: 'Add price', cadence: '/ lesson or package', featured: false, features: ['Age-appropriate lessons', 'Native-speaking tutor', 'Parent progress updates', 'Flexible scheduling'] },
];

export default function PricingSection() {
  const { t } = useLanguage();
  return (
    <section id="pricing" className="bg-[#0b192c] py-24 text-[#f7f4ef]">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow text-[#c19a68]">{t('Simple, transparent pricing')}</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{t('Choose the way you want to learn.')}</h2>
          <p className="mt-5 text-sm leading-7 text-[#f7f4ef]/60">{t('Showing pricing up front helps visitors understand whether Native Connects fits their needs before they contact you.')}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`relative rounded-[1.75rem] border p-7 ${plan.featured ? 'border-[#c19a68]/60 bg-[#c19a68]/10' : 'border-[#f7f4ef]/10 bg-[#f7f4ef]/5'}`}>
              {plan.featured && <span className="absolute right-6 top-6 rounded-full bg-[#9b1c31] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">{t('Most flexible')}</span>}
              <h3 className="text-2xl font-semibold">{t(plan.name)}</h3>
              <p className="mt-2 min-h-14 text-sm leading-6 text-[#f7f4ef]/55">{t(plan.description)}</p>
              <div className="mt-7 border-y border-[#f7f4ef]/10 py-5">
                <span className="text-3xl font-semibold text-[#c19a68]">{t(plan.price)}</span>
                <span className="ml-2 text-xs text-[#f7f4ef]/45">{t(plan.cadence)}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-[#f7f4ef]/75"><FaCheck className="mt-1 shrink-0 text-xs text-[#c19a68]" />{t(feature)}</li>)}
              </ul>
              <Link href="#contact" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f7f4ef] px-5 py-3 text-sm font-bold text-[#0b192c] transition hover:bg-white">{t('Get started')} <FaArrowRight className="text-[10px]" /></Link>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-[#f7f4ef]/35">{t('Launch note: replace “Add price” with the approved current prices before publishing.')}</p>
      </div>
    </section>
  );
}
