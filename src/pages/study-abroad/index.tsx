'use client';
import React from 'react';
import { Header, Countries } from '@/components/studies';
import useScrollReveal from '@/utils/useScrollReveal';
import Page from '@/components/Page';

const CountriesPage = () => {
  const [countriesRef] = useScrollReveal();
  return (
    <Page title="Study Abroad, Pick a Country" mainRef={countriesRef}>
      <Header
        head="Global Study Destinations"
        text="Discover Diverse Study Abroad Opportunities Across Nations, Expanding Your Educational Horizons"
      />
      <Countries />
    </Page>
  );
};

export default CountriesPage;
