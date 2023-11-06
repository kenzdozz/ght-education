"use client";
import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import { Container, SearchInput } from "../shared";
import { homeImgaes } from "@/data";
import S from "@/styles/pages/home/home.module.scss";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter()
    const [index, setIndex] = React.useState(0);
    const navigateToCountries = () => {
        router.push(`/studies/countries/`);
    };

    const navigateToCountry = (id: number) => {
        router.push(`/studies/countries/${id}`);
    };
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
        <Container as="section" className={`${S.homeHead} w-full h-[40rem] overflow-x-hidden`}>
            {homeImgaes.map(renderImages)}
            <Container className=" container relative z-20 w-full h-full flex items-center ">
                <Container className=" flex flex-col gap-6 w-full lg:w-2/3">
                    <Container as="h1" className=" text-white font-extrabold text-3xl md:text-6xl">
                        Travel To Your Dream Country Through <Container as='p' className="text-gradient">GlobalHT</Container> Education
                    </Container>
                    <Container className="text-white flex items-center flex-wrap text-lg w-full md:w-2/3 lg:w-full">
                        We assist in rendering support to individuals seeking any form of
                        educational advancement overseas through personalized admission
                        assistance and visa counseling.
                    </Container>
                    <button onClick={() => navigateToCountries()} className=" rounded-md w-48 h-16 flex font-semibold text-lg items-center justify-center bg-blue-default text-white cursor-pointer border-0 outline-0 transition-all duration-300 hover:translate-y-2">
                        View Schools
                    </button>
                </Container>
            </Container>
        </Container>
    );
};

export default Header;
