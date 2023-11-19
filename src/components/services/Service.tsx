import React, { useCallback } from "react";
import { Container, SVGIcon, AnimateScrollReveal } from "../shared";
import { ISubService, SUB_SERVICES } from "@/data";
import S from '@/styles/pages/services/service.module.scss'
import Link from "next/link";

const Service = () => {
    const renderServices = useCallback(
        ({ text, icon, id }: ISubService) => {
            return (
                <AnimateScrollReveal duration={1.2} delay={id * 0.1} allowOverflow key={id} className={`shrink-0 relative w-full h-32 px-2 flex flex-col justify-center items-center gap-2 rounded-md ${S.ServiceItem}`}>
                    <Container className=" w-12 h-12 absolute -top-5 md:-top-3 bg-slate-100 rounded-full text-blue-600 flex items-center justify-center  text-4xl font-bold">
                        <SVGIcon name={icon} />
                    </Container>
                    <Container className=" mt-8 text-sm text-center">{text}</Container>
                </AnimateScrollReveal>
            )
        },
        [],
    )

    return (
        <Container className=" container bg-slate-100 rounded-md py-10 px-3 my-10">
            <Container className=" flex flex-col items-center justify-center">
                <Container as="h4" className=" text-center font-semibold text-xl md:text-2xl textBorder">
                    Our Services Breakdown
                </Container>
                <Container as="p" className="text-center w-4/5 mt-3">
                    These services aim to provide comprehensive support to clients, ensuring a smooth process in admissions, visa applications, and settling in a new location. Each service is uniquely tailored to meet the individual needs of our clients.
                </Container>
            </Container>
            <Container className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 mt-10">
                {SUB_SERVICES.map(renderServices)}
            </Container>

            <AnimateScrollReveal duration={1.2} delay={SUB_SERVICES.length * 0.1} className='flex justify-center my-7'>
                <Link href="/contact" className='button button-primary capitalize px-7'>{`Let's Get You Started`}</Link>
            </AnimateScrollReveal>
        </Container>
    );
};

export default Service;
