"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Container } from "../shared";
import { patners } from "@/data";

const Patners = () => {
    const renderPatners = useCallback((item: string, i: number) => {
        return (
            <SwiperSlide key={i} >
                <Container as='span' className=" relative flex items-center w-[150px] h-[110px]" >
                    <Image
                        src={item}
                        alt="logo patners"
                        width={140}
                        height={100}
                        className="transition-all duration-300 shrink-0 hover:-translate-y-1 cursor-pointer"
                    />
                </Container>
            </SwiperSlide>
        );
    }, []);

    return (
        <Container className=" container flex items-center gap-7 py-2 overflow-x-hidden">
            <Swiper
                slidesPerView={"auto"}
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
    );
};

export default Patners;
