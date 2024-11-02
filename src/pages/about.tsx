'use client';
import { Header } from '@/components/studies';
import { Team, Vision, WhoWeAre } from '@/components/about';
import React from 'react';
import useScrollReveal from '@/utils/useScrollReveal';
import Page from '@/components/Page';
import Patners from '@/components/Patners';
import ICEF from '@/components/ICEF';

const AboutPage = () => {
  const [storyRef] = useScrollReveal();

  return (
    <Page title="About Us" mainRef={storyRef}>
      <Header
        head="Discover GlobalHT Education"
        text="Empowering educational aspirations, bridging pathways to global success"
      />
      <WhoWeAre />
      <ICEF
        title="Achieving Excellence"
        subtitles={['Proudly ICEF-Accredited for Quality', 'and Trust in International Education']}
        bgColor="bg-[#6666bb1a]"
        animTimeout={1.5}
      />
      <Vision />
      <Team />
      <Patners />
    </Page>
  );
};

export default AboutPage;
