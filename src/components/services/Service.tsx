import React, { useCallback } from "react";
import { Container, SVGIcon, AnimateScrollReveal, SVG } from "../shared";
import { SVGIconName } from "@/types";
import { dataServices } from "@/data";
import S from '@/styles/pages/services/service.module.scss'

const Service = () => {
    const renderServices = useCallback(
        ({ text, icon, id }: { text: string, icon: SVGIconName, id: number }) => {
            return (
                <AnimateScrollReveal duration={1.2} delay={id * 0.1} allowOverflow key={id} className={`shrink-0 relative w-full h-32 px-2 flex flex-col justify-center items-center gap-2 rounded-md ${S.ServiceItem}`}>
                    <Container className=" w-12 h-12 absolute -top-5 md:-top-3 bg-slate-100 rounded-full text-blue-600 flex items-center justify-center  text-4xl font-bold">
                        <SVGIcon name={icon} />
                    </Container>

                    <Container className=" mt-8 text-sm md:text-base text-center">{text}</Container>
                </AnimateScrollReveal>
            )
        },
        [],
    )

    return (
        <Container className=" container bg-slate-100 rounded-md py-10 px-3 my-10">
            <Container className=" flex items-center justify-center">
                <Container
                    as="h4"
                    className=" text-center font-semibold text-xl md:text-2xl textBorder"
                >
                    Our Services
                </Container>
            </Container>
            <Container className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-4 mt-10">
                {
                    dataServices.map(renderServices)
                }
            </Container>


        </Container>
    );
};

export default Service;
