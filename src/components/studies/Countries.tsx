import React, { useCallback } from 'react';
import Image from 'next/image';
import { Container, AnimateScrollReveal } from '../shared';
import { ICountry, STUDY_COUNTRIES } from '@/data/studies';
import { useRouter } from 'next/navigation';

const Countries = () => {
  const router = useRouter();

  const navigateToIdPage = (country: ICountry) => {
    router.push(`/study-abroad/${country.slug}`);
  };

  const renderCountries = useCallback((item: ICountry, i: number) => {
    return (
      <AnimateScrollReveal
        delay={i * 0.12}
        key={i}
        onClick={() => navigateToIdPage(item)}
        className={`relative h-auto  w-full cursor-pointer rounded-md border-[1px] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
      >
        <Container className=" relative h-[12rem] w-full rounded-t-md">
          <Image src={`${item.img}`} alt="name" fill style={{ objectFit: 'cover' }} />
        </Container>
        <Container className=" mb-4 mt-4 px-7">
          <Container as="h5" className="mb-2 text-center text-lg font-semibold uppercase text-blue-800">
            {item.name}
          </Container>
          <Container as="p" className=" text-center text-base">
            {item.description}
          </Container>
        </Container>
      </AnimateScrollReveal>
    );
  }, []);

  return (
    <Container className=" container my-14">
      <Container as="h4" className="textBorder text-xl font-bold capitalize md:text-3xl">
        Explore Universities Around the World
      </Container>
      <Container className=" mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {STUDY_COUNTRIES.map(renderCountries)}
      </Container>
    </Container>
  );
};

export default Countries;
