'use client';
import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '../shared';
import { TESTIMONIALS } from '@/data';
import S from '@/styles/pages/home/home.module.scss';

const Testimonies = () => {
  const [index, setIndex] = React.useState(0);
  const renderImages = useCallback(
    (item: { img: string; name: string; message: string; id: number }, itemIndex: number) => {
      let position = 'nextSlide';
      if (itemIndex === index) {
        position = 'activeSlide';
      }
      if (itemIndex === index - 1 || (index === 0 && itemIndex === TESTIMONIALS.length - 1)) {
        position = 'lastSlide';
      }
      return (
        <Container
          className={`homeHeadImage ${position} grid grid-cols-1 items-center gap-6 md:grid-cols-2`}
          key={itemIndex}
        >
          <Container className="relative h-[10rem] w-full bg-red-100 md:h-full">
            <Image src={item.img} alt="Your Image" className="" fill style={{ objectFit: 'cover' }} priority={true} />
          </Container>
          <Container>
            <Container as="p" className=" quote text-l text-default-blue mx-5 font-medium">
              {item.message}
            </Container>
            <Container as="p" className=" mt-5 text-center text-2xl font-semibold text-red-700">
              {item.name}
            </Container>
          </Container>
        </Container>
      );
    },
    [index],
  );
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((oldIndex) => {
        const result = (oldIndex + 1) % TESTIMONIALS.length;
        return result;
      });
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, []);

  return (
    <Container className={`relative my-16 overflow-hidden ${S.headPsuedo}`}>
      <Container
        className={`container relative z-[2] my-3 h-[27rem] overflow-visible px-3 md:h-[22rem] md:overflow-hidden md:px-0 `}
      >
        {TESTIMONIALS.map(renderImages)}
      </Container>
    </Container>
  );
};

export default Testimonies;
