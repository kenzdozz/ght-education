"use client";
import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import { Container } from "../shared";
import { homeImgaes } from "@/data";
import S from "@/styles/pages/home/home.module.scss";

const Header = () => {
    const [index, setIndex] = React.useState(0);
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                const result = (oldIndex + 1) % homeImgaes.length;
                return result;
            });
        }, 10000);
        return () => {
            clearInterval(slider);
        };
    }, []);

    const renderImages = useCallback(
        (item: { img: string }, itemIndex: number) => {
            let position = "nextSlide";
            if (itemIndex === index) {
                position = "activeSlide";
            }
            if (
                itemIndex === index - 1 ||
                (index === 0 && itemIndex === homeImgaes.length - 1)
            ) {
                position = "lastSlide";
            }
            return (
                <Container className={`homeHeadImage ${position}`} key={itemIndex}>
                    <Image
                        src={item.img}
                        alt="Your Image"
                        className=""
                        layout="fill"
                        objectFit="cover"
                    />
                </Container>
            );
        },
        [index]
    );
    return (
        <Container as="section" className={`${S.homeHead} w-full h-[40rem]`}>
            {homeImgaes.map(renderImages)}
            <Container className=" container relative z-20 w-full h-full flex items-center ">
                <Container className=" flex flex-col gap-6 w-2/3">
                    <Container as="h1" className=" text-white font-extrabold text-6xl">
                        Travel To Your Dream Country Through GlobalHT Education
                    </Container>
                    <Container className="text-white text-lg">
                        We assist in rendering support to individuals seeking any form of
                        educational advancement overseas through personalized admission
                        assistance and visa counseling.
                    </Container>
                    <button className=" rounded-md w-48 h-16 flex font-semibold text-lg items-center justify-center bg-blue-default text-white cursor-pointer border-0 outline-0 transition-all duration-300 hover:translate-y-2">
                        View Schools
                    </button>
                </Container>
            </Container>
            <Container className=" container absolute left-1/2 -translate-x-1/2 -bottom-7 h-12 border-2 border-blue-400 rounded-md bg-white z-10 flex items-center">
                <input
                    type="text"
                    className=" h-full w-11/12 shrink-0 border-0 pl-3 outline-none text-base text-black placeholder:text-slate-300 font-normal"
                    placeholder="search institutions"
                />
                <button className=" bg-orange-500 w-1/12 h-full flex items-center justify-center transition-all duration-300 text-white hover:bg-orange-600">
                    search
                </button>
            </Container>
        </Container>
    );
};

export default Header;
