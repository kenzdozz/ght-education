import React, { useCallback } from 'react';
import Image from 'next/image';
import { Container, AnimateScrollReveal } from '../shared';
import { IServiceStep, SERVICES_STEPS } from '@/data';
import { useRouter } from 'next/navigation';

const Steps = () => {
  const router = useRouter();
  const navigateToContact = () => {
    router.push(`/contact`);
  };
  const renderSteps = useCallback((item: IServiceStep) => {
    return (
      <AnimateScrollReveal
        id={`service${item.id}`}
        duration={1.3}
        key={item.id}
        className={`mb-24 mt-20 grid grid-cols-1 items-center gap-12 md:grid-cols-5 lg:gap-16`}
      >
        <AnimateScrollReveal
          duration={1.5}
          delay={0.123}
          id={`serice-img${item.id}`}
          animName="fadeInRight"
          className={`relative col-span-1 h-[20rem] w-full bg-red-100 md:col-span-2 ${
            (item.id + 1) % 2 !== 0 ? ' -order-1 ml-auto md:order-1' : ' '
          }`}
        >
          <Image
            src={item.img}
            alt="Your Image"
            className=" rounded-2xl"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority={true}
          />
        </AnimateScrollReveal>
        <AnimateScrollReveal
          id={`serice-txt${item.id}`}
          duration={1.34}
          delay={0.1}
          animName="fadeInLeft"
          className={` col-span-1 flex flex-col justify-between md:col-span-3 ${
            (item.id + 1) % 2 !== 0 ? ' -order-1' : ' '
          }`}
        >
          <Container>
            <Container as="h5" className=" mb-2 flex items-center text-lg font-semibold text-slate-500">
              <Container as="span" className="material-icons text-gradient-bottom mr-1">
                double_arrow
              </Container>
              <Container className=" ml-1 text-2xl font-semibold text-blue-600">0{item.id}.</Container> {item.head}
              <Container as="span" className="material-icons text-gradient-bottom ml-1">
                double_arrow
              </Container>
            </Container>
            <Container as="h4" className=" mb-3 text-lg font-bold text-slate-700 md:text-3xl">
              {item.title}
            </Container>
            <Container as="p">{item.description}</Container>
          </Container>
          <Container className=" mt-5 w-1/2">
            <button
              onClick={() => navigateToContact()}
              className=" border-blue-601 cursor-pointer rounded-md border-2 bg-transparent px-3 py-2 text-blue-600 outline-none"
            >
              {item.btnText}
            </button>
          </Container>
        </AnimateScrollReveal>
      </AnimateScrollReveal>
    );
  }, []);
  return <Container className="container">{SERVICES_STEPS.map(renderSteps)}</Container>;
};

export default Steps;
