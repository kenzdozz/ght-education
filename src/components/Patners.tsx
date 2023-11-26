'use client';
import React, { useCallback } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Container } from './shared';
import { patners } from '@/data';

type PartnerProps = {
  bgColor?: string;
};

const Patners = (props: PartnerProps) => {
  const renderPatners = useCallback((item: string, i: number) => {
    return (
      <SwiperSlide key={i}>
        <Container as="span" className=" relative flex h-[110px] w-[150px] items-center">
          <Image
            src={item}
            alt="logo patners"
            width={140}
            height={100}
            className="shrink-0 cursor-pointer transition-all duration-300 hover:-translate-y-1"
          />
        </Container>
      </SwiperSlide>
    );
  }, []);

  return (
    <Container className={`py-5 ${props.bgColor}`}>
      <Container className=" container overflow-x-hidden">
        <Swiper
          slidesPerView={'auto'}
          speed={600}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {patners.map(renderPatners)}
        </Swiper>
      </Container>
    </Container>
  );
};

export default Patners;
