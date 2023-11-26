'use client';
import Page from '@/components/Page';
import Patners from '@/components/Patners';
import { Service, Steps } from '@/components/services';
import { Header } from '@/components/studies';
import useScrollReveal from '@/utils/useScrollReveal';
import React from 'react';

const ServicePage = () => {
  const [serviceRef] = useScrollReveal();
  return (
    <Page title="Our Services" mainRef={serviceRef}>
      <Header head="Our Comprehensive Offerings" text="Tailored Services for Your Educational Journey" />
      <Steps />
      <Service />
      <Patners />
    </Page>
  );
};

export default ServicePage;
