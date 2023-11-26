'use client';
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import useScrollReveal from '@/utils/useScrollReveal';
import FeaturedCountries from './FeaturedCountries';
import Testimonies from './Testimonies';
import Patners from '../Patners';

const HomeIndex = () => {
  const [newhomeRef] = useScrollReveal();
  return (
    <main ref={newhomeRef} className="pb-10 pt-10 lg:pt-14">
      <Header />
      <HeroSection />
      <FeaturedCountries />
      <Testimonies />
      <Patners bgColor="bg-blue-default" />
    </main>
  );
};

export default HomeIndex;
