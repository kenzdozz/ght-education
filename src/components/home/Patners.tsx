'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import { Container } from '../shared'

const Patners = () => {
    return (
        <Container className=' container flex items-center gap-7 py-2 overflow-x-hidden'>
            <Swiper
                slidesPerView={'auto'}
                speed={600}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    Array.from(Array(10)).map((_, i: number) => (
                        <SwiperSlide key={i}>

                            <Image
                                src='/img/img1.jpg'
                                alt='img-pop'
                                width={100}
                                height={50}
                                className='transition-all duration-300 shadow shrink-0 hover:-translate-y-1 cursor-pointer'
                            />
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </Container>
    )
}

export default Patners