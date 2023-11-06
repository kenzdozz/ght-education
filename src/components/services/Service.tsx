import React, { useCallback } from "react";
import { Container, SVGIcon, AnimateScrollReveal } from "../shared";
import { SVGIconName } from "@/types";
import { dataServices } from "@/data";
import S from '@/styles/pages/services/service.module.scss'

const Service = () => {
    const renderServices = useCallback(
        ({ text, icon, id }: { text: string, icon: SVGIconName, id: number }) => {
            return (
                <AnimateScrollReveal delay={id * 0.12} allowOverflow key={id} className={`shrink-0 relative w-full h-36 px-6 flex flex-col justify-center items-center gap-2 rounded-md ${S.ServiceItem}`}>
                    <Container className=" w-10 10 absolute -top-2 bg-slate-100 rounded-full">
                        <SVGIcon name={icon} />
                    </Container>

                    <Container className=" mt-8">{text}</Container>
                </AnimateScrollReveal>
            )
        },
        [],
    )

    return (
        <Container className=" container bg-slate-100 rounded-md py-10 px-3 my-10">
            <Container
                as="h4"
                className=" text-center font-semibold text-xl md:text-2xl"
            >
                Our Services
            </Container>
            <Container className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                {
                    dataServices.map(renderServices)
                }
            </Container>
        </Container>
    );
};

export default Service;
