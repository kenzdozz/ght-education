import React, { useCallback } from 'react';
import Image from 'next/image';
import { AnimateScrollReveal, Container, SVGIcon } from '../shared';
import { SVGIconName } from '@/types';
import { HOME_STEPS } from '@/data';
import S from '@/styles/pages/home/home.module.scss';

const Header = () => {
  const renderProcess = useCallback(
    ({ icon, head, text }: { icon: SVGIconName; head: string; text: string }, i: number) => {
      return (
        <AnimateScrollReveal
          key={i}
          delay={i * 0.12}
          duration={i * 0.175}
          style={{ gridAutoRows: 'minmax(200px, 1fr)' }}
          className={` header-home glass flex w-full cursor-pointer flex-col items-center justify-center px-2 py-8 md:px-5 ${S.bgWhite50t}`}
        >
          <Container as="span" className=" text-blue-800">
            <SVGIcon name={icon} size="large" />
          </Container>
          <Container className=" mb-2 text-center text-sm font-semibold uppercase text-red-600 lg:text-base">
            {head}
          </Container>
          <Container className=" text-center text-sm lg:text-sm">{text}</Container>
        </AnimateScrollReveal>
      );
    },
    [],
  );
  return (
    <Container className={`relative overflow-x-clip bg-transparent ${S.headPsuedo}`}>
      <Container className={`container relative ${S.headPsuedo}`}>
        <AnimateScrollReveal
          duration={1.75}
          animName="fadeInRight"
          as="h1"
          className=" w-full text-5xl font-extrabold text-slate-700 md:text-7xl lg:w-2/3"
        >
          Study In Your Dream Country Through{' '}
          <Container as="span" className="text-gradient">
            GlobalHT Education
          </Container>
        </AnimateScrollReveal>
      </Container>
      <Container className=" animate-fading-pulse bg-gradient-primary-bottom absolute -right-4 -top-10 -z-[1] hidden h-[45rem] w-[24rem] -rotate-[40deg] overflow-clip rounded-[9rem] lg:block">
        <Container className="relative -z-[1] flex h-full w-[98%] translate-x-3 items-start justify-start">
          <Image
            src={`/img/woman.webp`}
            alt="Your Image"
            className=" h-auto w-auto object-cover object-center"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Container>
      </Container>
      <Container className={`container mb-10 mt-10 ${S.headBottomPsuedo}`}>
        <AnimateScrollReveal>
          <AnimateScrollReveal
            animName="fadeInLeft"
            duration={1.12}
            delay={0.12}
            as="p"
            className=" mb-0 text-xl font-semibold text-slate-800 md:text-3xl"
          >
            Begin your journey with us
          </AnimateScrollReveal>
        </AnimateScrollReveal>
        <AnimateScrollReveal
          duration={1.5}
          allowOverflow
          className=" relative z-[2] mt-5 grid grid-cols-2 gap-3 md:grid-cols-4"
        >
          {HOME_STEPS.map(renderProcess)}
        </AnimateScrollReveal>
      </Container>
    </Container>
  );
};

export default Header;
