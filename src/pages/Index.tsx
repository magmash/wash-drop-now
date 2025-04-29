
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import HowItWorks from '@/components/home/HowItWorks';
import ServicesList from '@/components/home/ServicesList';
import LaundryPartners from '@/components/home/LaundryPartners';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <HowItWorks />
      <ServicesList />
      <LaundryPartners />
      <TestimonialsSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
