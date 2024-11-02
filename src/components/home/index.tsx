'use client';
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import useScrollReveal from '@/utils/useScrollReveal';
import FeaturedCountries from './FeaturedCountries';
import Testimonies from './Testimonies';
import Patners from '../Patners';
import ICEF from '../ICEF';

const HomeIndex = () => {
  const [newhomeRef] = useScrollReveal();
  return (
    <main ref={newhomeRef} className="pb-10 pt-10 lg:pt-14">
      <Header />
      <HeroSection />
      <FeaturedCountries />
      <Testimonies />
      <ICEF
        title="ICEF-Accredited"
        subtitles={['Your Assurance of', 'Quality in International Education']}
        bgColor="bg-blue-100"
        animTimeout={0}
      />
      <Patners bgColor="bg-blue-default" />
    </main>
  );
};

export default HomeIndex;
