import React from 'react';
import Image from 'next/image';
import { Container, AnimateScrollReveal } from '../shared';

const Vision = () => {
  return (
    <Container className=" bg-slate-50 py-3">
      <AnimateScrollReveal
        duration={1.2}
        className=" container mb-4 mt-3 grid grid-cols-1 items-center gap-4 md:grid-cols-2 lg:gap-20"
      >
        <Container>
          <AnimateScrollReveal
            duration={1.5}
            delay={0.1}
            animName="fadeInRight"
            className=" folded-paper flex flex-col items-center px-8 py-10"
          >
            <Container as="h4" className="text-gradient mb-4 text-center text-3xl font-semibold capitalize">
              Our Vision
            </Container>
            <Container as="p" className=" text-center font-medium text-slate-600">
              Pioneering global access to quality education and professional growth. Guiding individuals and entities
              toward prestigious educational opportunities worldwide.
            </Container>
            <Container className="relative mt-7 h-[15rem] w-full rounded-md">
              <Image
                src="/img/about/vision.webp"
                alt="Our vision"
                layout="fill"
                className=" rounded-md object-cover object-center"
              />
            </Container>
          </AnimateScrollReveal>
        </Container>
        <Container className=" pt-[6rem]">
          <AnimateScrollReveal
            duration={1.5}
            delay={0.1}
            animName="fadeInLeft"
            className=" folded-paper-mission flex flex-col items-center px-8 py-10"
          >
            <Container as="h4" className="text-gradient mb-4 text-center text-3xl font-semibold capitalize">
              Our Mission
            </Container>
            <Container as="p" className=" text-center font-medium text-slate-600">
              Empowering aspirations with tailored admission and visa support for global education. Extending expertise
              to ensure fair opportunities and successful journeys.
            </Container>
            <Container className="relative mt-7 h-[15rem] w-full rounded-md">
              <Image
                src="/img/about/mission.webp"
                alt="Our mission"
                fill
                className=" rounded-md"
                style={{ objectFit: 'cover' }}
              />
            </Container>
          </AnimateScrollReveal>
        </Container>
      </AnimateScrollReveal>
    </Container>
  );
};

export default Vision;
