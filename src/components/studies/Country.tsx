"use client";
import React, { RefObject, useCallback, useRef } from "react";
import Image from "next/image";
import { AnimateScrollReveal, Container } from "../shared";
import { studyCountries, studies } from "@/data/studies";
import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { useRouter, useParams } from "next/navigation";
import S from "@/styles/pages/studies/study.module.scss";
import Faqs from "../Faqs";
import { states } from "@/data";
// import S from '@/styles/pages/home/home.module.scss'

type SectionRef = RefObject<HTMLDivElement>;

const Country = ({ country }: { country: string }) => {
    const router = useRouter();
    const contactRef = useRef(null);
    const guideRef = useRef(null);
    const aboutRef = useRef(null);
    // const { id } = useParams();

    function scrollToSection(ref: SectionRef) {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const navigateToIdPage = (schoolId: string) => {
        router.push(`/studies/countries/${country}/university/${schoolId}`);
    };
    const renderSchools = useCallback(
        (item: { school: string }, i: number) => {
            return (
                <AnimateScrollReveal delay={i * 0.1} key={i} className={`rounded-md relative w-full h-[15rem] bg-slate-400 ${S.CountryImage}`}>
                    <Container onClick={() => navigateToIdPage(item.school)} className={`${S.imageHover} cursor-pointer flex flex-col items-center justify-center gap-6`}>
                        <Container as='h4' className=' capitalize text-white font-semibold text-lg'>Study in {item.school}</Container>

                        <button className=' border-2 border-white bg-transparent rounded-md w-28 h-12 text-white outline-none'>
                            Apply
                        </button>
                    </Container>
                    {/* <Image
                        src={`${img}`}
                        alt='name'
                        layout='fill'
                        objectFit='cover'
                    /> */}
                    <Container as='h5' className='text-white font-semibold text-2xl absolute left-0 top-1/2 z-[2]'>
                        {item.school}
                    </Container>
                </AnimateScrollReveal>
            )
        },
        [],
    )
    return (
        <>
            <Container className=" container grid grid-cols-1 lg:grid-cols-4 gap-10 my-16">
                <Container as="aside" className="col-span-1">
                    <Container
                        as="h4"
                        className="textBorder font-bold text-xl md:text-2xl capitalize"
                    >
                        user guide
                    </Container>
                    <Container className="bg-slate-100 rounded-md py-4 mt-10">
                        <Container as="ul">
                            <Container
                                as="li"
                                onClick={() => scrollToSection(aboutRef)}
                                className={`border-b-2 border-white w-full py-2 text-slate-800 ${S.guide}`}
                            >
                                About
                            </Container>
                            <Container
                                as="li"
                                onClick={() => scrollToSection(contactRef)}
                                className={`border-b-2 border-white w-full py-2 text-slate-800 ${S.guide}`}
                            >
                                Learn More
                            </Container>
                            <Container
                                as="li"
                                onClick={() => scrollToSection(guideRef)}
                                className={`border-b-2 border-white w-full py-2 text-slate-800 ${S.guide}`}
                            >
                                Why Study Here
                            </Container>
                        </Container>
                    </Container>
                </Container>
                <Container as="section" className=" col-span-1 lg:col-span-3">
                    <Container
                        as="h4"
                        className="textBorder font-bold text-xl md:text-3xl capitalize"
                    >
                        Explore Universities in {country}
                    </Container>
                    <Container className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        {studies[country].schools.map(renderSchools)}
                    </Container>
                </Container>
            </Container>
            <Container className=" container mb-8">
                <div ref={aboutRef} className=" rounded-md shadow-md py-9 px-2 lg:px-11 mb-8">
                    <Container
                        as="h5"
                        className=" textBorder font-bold text-lg md:text-3xl capitalize"
                    >
                        About Study in {country}
                    </Container>
                    <Container as="p" className=" my-4">
                        Drop a message for information on how to study in {country}
                    </Container>
                    <Container as="p">Our team will get back to you via an email with details on what to do next.</Container>
                    <Container as="p">
                        Once again we congratulate you for taking this specila journey with us
                    </Container>
                </div>
                <div ref={contactRef} className=" rounded-md shadow-md py-9 px-2 lg:px-11 mb-8">
                    <Container
                        as="h5"
                        className=" textBorder font-bold text-lg md:text-3xl capitalize"
                    >
                        Get In touch with us to start you application
                    </Container>
                    <Container className=" my-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium capitalize text-blue-600 "
                            >
                                First name
                            </Container>
                            <Container
                                as="span"
                                className="relative text-gray-400  block h-12"
                            >
                                <UserIcon className="pointer-events-none text-blue-600 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="first name"
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </Container>
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium capitalize text-blue-600 "
                            >
                                last name
                            </Container>
                            <Container
                                as="span"
                                className="relative text-gray-400  block h-12"
                            >
                                <UserIcon className="pointer-events-none text-blue-600 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="surname"
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </Container>
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium capitalize text-blue-600 "
                            >
                                email
                            </Container>
                            <Container
                                as="span"
                                className="relative text-gray-400  block h-12"
                            >
                                <EnvelopeIcon className="pointer-events-none text-blue-600 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="@gmail.com"
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </Container>
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium capitalize text-blue-600 "
                            >
                                phone number
                            </Container>
                            <Container
                                as="span"
                                className="relative text-gray-400  block h-12"
                            >
                                <PhoneIcon className="pointer-events-none text-blue-600 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
                                <input
                                    type="tel"
                                    name="phoneNumner"
                                    placeholder="0902345678"
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </Container>
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-blue-600"
                            >
                                Highest Level of Education
                            </Container>
                            <select
                                id="countries"
                                className="bg-gray-50 h-12 border border-gray-300 text-gray-400 text-sm rounded-lg focus:border-gray-700 block w-full p-2.5"
                            >
                                <option selected>Choose a education level</option>
                                <option value="bsc">Bachelors</option>
                                <option value="msc">Masters</option>
                                <option value="high-school">High School</option>
                                {/* <option value="DE">Germany</option> */}
                            </select>
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-blue-600"
                            >
                                Which state are you located
                            </Container>
                            <select
                                id="states"
                                className="bg-transparent h-12 border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                            >
                                <option selected>Choose a state</option>
                                {
                                    states.map((el) => (
                                        <option key={el.value} value={el.value}>{el.text}</option>
                                    ))
                                }

                            </select>
                        </Container>
                    </Container>
                    <Container className=" flex items-center justify-center mt-3">
                        <button className="bg-gradient-primary w-60 h-16 text-white text-base font-semibold rounded-md flex items-center transition-all duration-300 justify-center hover:-translate-y-1">
                            Contact me with more info
                        </button>
                    </Container>
                </div>
                <div ref={guideRef} className=" rounded-md shadow-md py-9 px-2 lg:px-11">
                    <Container
                        as="h5"
                        className=" textBorder font-bold text-lg md:text-3xl capitalize"
                    >
                        Guides and FAQ
                    </Container>
                    <Faqs />
                </div>
            </Container>
        </>
    );
};

export default Country;
