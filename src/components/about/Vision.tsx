import React from "react";
import Image from "next/image";
import { Container, AnimateScrollReveal } from "../shared";

const Vision = () => {
    return (
        <Container className=" bg-slate-50 py-3">
            <AnimateScrollReveal
                duration={1.2}
                className=" container grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-20 mt-3 mb-4 items-center"
            >
                <Container>
                    <AnimateScrollReveal
                        duration={1.5}
                        delay={0.1}
                        animName="fadeInRight"
                        className=" flex flex-col items-center px-8 py-10 folded-paper"
                    >
                        <Container
                            as="h4"
                            className="capitalize text-gradient font-semibold text-3xl text-center mb-4"
                        >
                            Our Vission
                        </Container>
                        <Container as="p" className=" text-center font-medium text-slate-600">
                            {" "}
                            We provide support to individuals, corporate organizations and
                            scholarship bodies, who desire quality academic and professional
                            development overseas. Our organization GlobalHT Education Limited,
                            have been in the business of recruiting students for overseas
                            schools since it was established in 2017, given the experience of
                            our staff who have worked in similar organizations with more than 5
                            years’ work experience before joining our organization;
                        </Container>
                        <Container className="w-full relative mt-7 h-[15rem] rounded-md">
                            <Image
                                src='/img/about/vision.jpg'
                                alt='waho-we-are'
                                layout="fill"
                                className=' rounded-md object-cover object-center'
                            />
                        </Container>
                    </AnimateScrollReveal>
                </Container>
                <Container className=" pt-[12rem]">
                    <AnimateScrollReveal
                        duration={1.5}
                        delay={0.1}
                        animName="fadeInLeft"
                        className=" flex flex-col items-center px-8 py-10 folded-paper-mission"
                    >
                        <Container
                            as="h4"
                            className="capitalize text-gradient font-semibold text-3xl text-center mb-4"
                        >
                            Our Mission
                        </Container>
                        <Container as="p" className=" text-center font-medium text-slate-600">
                            {" "}
                            We assist in rendering support to individuals seeking any form of educational advancement overseas through personalized admission assistance and visa counseling, which are the first steps towards meeting their life ambitions. Our services also extend further throughout the student study period, to family members and those seeking tourist visas.

                            We thoroughly go through the visa process, providing advice, making informed changes based on our array of experience while filling applications to minimize any prospect of rejection.
                        </Container>
                        <Container className="w-full relative mt-7 h-[15rem] rounded-md">
                            <Image
                                src='/img/about/mission.webp'
                                alt='waho-we-are'
                                fill
                                className=' rounded-md'
                                style={{ objectFit: "cover" }}
                            />
                        </Container>
                    </AnimateScrollReveal>
                </Container>
            </AnimateScrollReveal>
        </Container>
    );
};

export default Vision;
