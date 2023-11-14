"use client";
import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import { Container } from "../shared";
import { testimonies } from "@/data";
import S from "@/styles/pages/home/home.module.scss";

const Testimonies = () => {
    const [index, setIndex] = React.useState(0);
    const renderImages = useCallback(
        (
            item: { img: string; name: string; message: string; id: number },
            itemIndex: number
        ) => {
            let position = "nextSlide";
            if (itemIndex === index) {
                position = "activeSlide";
            }
            if (
                itemIndex === index - 1 ||
                (index === 0 && itemIndex === testimonies.length - 1)
            ) {
                position = "lastSlide";
            }
            return (
                <Container
                    className={`homeHeadImage ${position} grid grid-cols-1 md:grid-cols-2 items-center gap-6`}
                    key={itemIndex}
                >
                    <Container className="relative w-full bg-red-100 h-[10rem] md:h-full">
                        {/* <Image
                            src={item.img}
                            alt="Your Image"
                            className=""
                            layout="fill"
                            objectFit="cover"
                            priority={true}
                        /> */}
                        <Container as='h4'>Img needed here</Container>
                    </Container>
                    <Container>
                        <Container as="p" className=" quote text-xl text-default-blue font-medium">{item.message}</Container>
                        {/* <Container as="p" className=" mt-5 text-center text-red-700 font-semibold">{item.name}</Container> */}
                        <Container as="p" className=" mt-5 text-center text-red-700 font-semibold">testiomies needed</Container>
                    </Container>
                </Container>
            );
        },
        [index]
    );
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                const result = (oldIndex + 1) % testimonies.length;
                return result;
            });
        }, 10000);
        return () => {
            clearInterval(slider);
        };
    }, []);

    return (
        <Container className={`relative overflow-hidden my-3 ${S.headPsuedo}`}>
            <Container className={`container overflow-visible md:overflow-hidden px-3 md:px-0 relative z-[2] h-[27rem] md:h-[22rem] my-3 `}>
                {testimonies.map(renderImages)}
            </Container>
        </Container>
    );
};

export default Testimonies;
