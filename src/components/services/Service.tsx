import React, { useCallback } from 'react';
import { Container, SVGIcon, AnimateScrollReveal } from '../shared';
import { ISubService, SUB_SERVICES } from '@/data';
import S from '@/styles/pages/services/service.module.scss';
import Link from 'next/link';

const Service = () => {
  const renderServices = useCallback(({ text, icon, id, description }: ISubService) => {
    return (
      <AnimateScrollReveal
        duration={1.2}
        delay={id * 0.1}
        allowOverflow
        key={id}
        className={`relative mb-1 flex w-full shrink-0 flex-col items-center justify-center rounded-md px-2 shadow-lg ${S.ServiceItem} hover:shadow-xl`}
      >
        <Container className=" absolute -top-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-300 bg-opacity-90 text-3xl text-white  md:-top-3">
          <SVGIcon name={icon} />
        </Container>
        <Container
          as="h6"
          className={`text-default-blue mb-0 pt-12 text-center text-xs font-semibold md:text-sm ${S.text}`}
        >
          {text}
        </Container>
        <Container as="p" className={`mt-0 text-center text-xs text-slate-600 ${S.description}`}>
          {description}
        </Container>
      </AnimateScrollReveal>
    );
  }, []);

  return (
    <Container className=" container my-10 rounded-md bg-slate-50 px-3 py-10">
      <Container className=" flex flex-col items-center justify-center">
        <Container as="h4" className=" textBorder text-center text-xl font-semibold md:text-2xl">
          Our Services Breakdown
        </Container>
        <Container as="p" className="mt-3 w-4/5 text-center">
          These services aim to provide comprehensive support to clients, ensuring a smooth process in admissions, visa
          applications, and settling in a new location. Each service is uniquely tailored to meet the individual needs
          of our clients.
        </Container>
      </Container>
      <Container className=" mt-10 grid h-auto grid-cols-2  gap-6 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {SUB_SERVICES.map(renderServices)}
      </Container>

      <AnimateScrollReveal
        duration={1.2}
        allowOverflow
        delay={SUB_SERVICES.length * 0.1}
        className="my-7 flex justify-center"
      >
        <Link href="/contact" className="button button-primary px-7 py-5 capitalize">{`Let's Get You Started`}</Link>
      </AnimateScrollReveal>
    </Container>
  );
};

export default Service;
