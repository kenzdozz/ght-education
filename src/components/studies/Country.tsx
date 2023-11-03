'use client'
import React, { RefObject, useCallback, useRef } from "react";
import Image from "next/image";
import { AnimateScrollReveal, Container } from "../shared";
import { studyCountries } from "@/data/studies";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import S from "@/styles/pages/studies/study.module.scss";
import Faqs from "../Faqs";
type SectionRef = RefObject<HTMLDivElement>;

const Country = () => {
    const router = useRouter();
    const contactRef = useRef(null);
    const guideRef = useRef(null);
    const aboutRef = useRef(null);
    const { id } = useParams()


    function scrollToSection(ref: SectionRef) {
        console.log(ref, "refs");

        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const navigateToIdPage = (schoolId: number) => {
        router.push(`/studies/countries/${id}/university/${schoolId}`);
    };
    const renderCountries = useCallback(
        (
            { img, name, url }: { img: string; name: string; url: string },
            i: number
        ) => {
            return (
                <AnimateScrollReveal
                    onClick={() => navigateToIdPage(1)}
                    delay={i * 0.12}
                    key={i}
                    className={`rounded-md border-[1px]  relative w-full h-auto transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1`}
                >
                    <Container className=" w-full relative h-[12rem] rounded-t-md">
                        <Image src={`${img}`} alt="name" layout="fill" objectFit="cover" />
                    </Container>
                    <Container className=" mt-4 px-7 mb-4">
                        <Container
                            as="h5"
                            className="text-slate-500 text-center font-semibold text-lg mb-2"
                        >
                            {name}
                        </Container>
                        <Container as="p" className=" text-lg text-center">
                            We assist in rendering support to individuals seeking any form of
                            educational advancement overseas through personalized admission
                            assistance and visa counseling.
                        </Container>
                    </Container>
                </AnimateScrollReveal>
            );
        },
        []
    );
    return (
        <>
            <Container className=" container grid grid-cols-1 lg:grid-cols-4 gap-10 my-16">
                <Container as="aside" className="">
                    <Container
                        as="h4"
                        className="textBorder font-bold text-2xl capitalize"
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
                <Container as="section" className=" col-span-3 ">
                    <Container
                        as="h4"
                        className="textBorder font-bold text-3xl capitalize"
                    >
                        Explore Universities
                    </Container>
                    <Container className=" col-span-3 grid grid-cols-2 gap-4 mt-10">
                        {studyCountries.map(renderCountries)}
                    </Container>
                </Container>
            </Container>
            <Container className=" container mb-8">
                <div ref={aboutRef} className=" rounded-md shadow-md py-9 px-11 mb-8">
                    <Container
                        as="h5"
                        className=" textBorder font-bold text-3xl capitalize"
                    >
                        About Study in Uk
                    </Container>
                    <Container as="p" className=" my-4">
                        When people think of Australia, they see wide open spaces of outback
                        bush, kangaroos, koalas, and clean air and water.
                    </Container>
                    <Container as="p">Australia is so much more than that.</Container>
                    <Container as="p">
                        Many international students choose to study in Australia because of
                        its friendly, laid-back nature, excellent education system, and a
                        high standard of living.
                    </Container>
                </div>
                <div ref={contactRef} className=" rounded-md shadow-md py-9 px-11 mb-8">
                    <Container
                        as="h5"
                        className=" textBorder font-bold text-3xl capitalize"
                    >
                        Get In touch with us to start you application
                    </Container>
                    <Container className=" my-6 grid grid-cols-2 gap-5">
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-slate-800 "
                            >
                                First name
                            </Container>
                            <input
                                type="text"
                                className="bg-transparent border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                                placeholder="John"
                                required
                            />
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-slate-800 "
                            >
                                Last name
                            </Container>
                            <input
                                type="text"
                                className="bg-transparent border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                                placeholder="John"
                                required
                            />
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-slate-800 "
                            >
                                Email
                            </Container>
                            <input
                                type="email"
                                className="bg-transparent border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                                placeholder="John@gmail.com"
                                required
                            />
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-slate-800 "
                            >
                                Phone Number
                            </Container>
                            <input
                                type="tel"
                                className="bg-transparent border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                                placeholder="0904590894"
                                required
                            />
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-slate-800"
                            >
                                Highest Level of Education
                            </Container>
                            <select
                                id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:border-gray-700 block w-full p-2.5"
                            >
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-slate-800"
                            >
                                Which State Are You Located
                            </Container>
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:border-gray-700 block w-full p-2.5"
                            >
                                <option selected>Choose a state</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </Container>
                    </Container>
                    <Container className=" flex items-center justify-center mt-3">
                        <button className=" bg-blue-default w-60 h-16 text-white text-base font-semibold rounded-md flex items-center transition-all duration-300 justify-center hover:-translate-y-1">
                            Contact me with more info
                        </button>
                    </Container>
                </div>
                <div ref={guideRef} className=" rounded-md shadow-md py-9 px-11">
                    <Container
                        as="h5"
                        className=" textBorder font-bold text-3xl capitalize"
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
