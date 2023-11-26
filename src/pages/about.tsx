'use client';
import { Header } from '@/components/studies';
import { Team, Vision, WhoWeAre } from '@/components/about';
import React from 'react';
import useScrollReveal from '@/utils/useScrollReveal';
import Page from '@/components/Page';
import Patners from '@/components/Patners';

const AboutPage = () => {
  const [storyRef] = useScrollReveal();

  return (
    <Page title="About Us" mainRef={storyRef}>
      <Header
        head="Discover GlobalHT Education"
        text="Empowering educational aspirations, bridging pathways to global success"
      />
      <WhoWeAre />
      <Vision />
      <Team />
      <Patners />
    </Page>
  );
};

export default AboutPage;
