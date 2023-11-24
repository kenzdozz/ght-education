"use client";
import React, {
    RefObject,
    useRef,
} from "react";
import { Container } from "../shared";
import { COUNTRY_PAGE_TEXT, ICountry } from "@/data/studies";
import S from "@/styles/pages/studies/study.module.scss";
import Faqs from "../Faqs";
import { ToastContainer } from "react-toastify";
import ContactForm from "../contact/ContactForm";

type SectionRef = RefObject<HTMLDivElement>;

const Country = ({ country }: { country: ICountry }) => {
    const uniRef = useRef(null);
    const feeRef = useRef(null);
    const admissionRef = useRef(null);
    const beyondLifeRef = useRef(null);
    const faqRef = useRef(null);

    const PAGE_TEXT = COUNTRY_PAGE_TEXT[country.slug];

    function scrollToSection(ref: SectionRef) {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <ToastContainer />
            <Container className="z-10 relative container grid grid-cols-1 lg:grid-cols-7 gap-10 my-16">
                <Container as="aside" className="col-span-2">
                    <Container as="h4" className="textBorder font-semibold text-xl md:text-xl capitalize">
                        User Guide
                    </Container>
                    <Container className="bg-slate-100 rounded-md mt-10">
                        <Container as="ul">
                            <Container
                                as="li"
                                onClick={() => scrollToSection(uniRef)}
                                className={`border-b-2 border-white w-full py-2 text-slate-800 ${S.guide}`}
                            >
                                Universities and Courses
                            </Container>
                            <Container
                                as="li"
                                onClick={() => scrollToSection(feeRef)}
                                className={`border-b-2 border-white w-full py-2 text-slate-800 ${S.guide}`}
                            >
                                Fee, Scholarship, Cost of Living
                            </Container>
                            <Container
                                as="li"
                                onClick={() => scrollToSection(admissionRef)}
                                className={`border-b-2 border-white w-full py-2 text-slate-800 ${S.guide}`}
                            >
                                Admission Process
                            </Container>
                            <Container
                                as="li"
                                onClick={() => scrollToSection(beyondLifeRef)}
                                className={`border-b-2 border-white w-full py-2 text-slate-800 ${S.guide}`}
                            >
                                Study & Beyond
                            </Container>
                            <Container
                                as="li"
                                onClick={() => scrollToSection(faqRef)}
                                className={`border-b-2 border-white w-full py-2 text-slate-800 ${S.guide}`}
                            >
                                FAQs
                            </Container>
                        </Container>
                    </Container>

                    <Container className=" rounded-md shadow-md py-9 mt-8 px-2 lg:px-2 mb-8">
                        <ContactForm
                            isWide={false}
                            message={`I would like to know about stuying in ${country.name}`}
                            country={country.name}
                        />
                    </Container>
                </Container>
                <Container as="section" className=" col-span-1 lg:col-span-5">
                    <Container cRef={uniRef} as="h4" className="scrollTo textBorder font-bold text-xl md:text-3xl mb-5 capitalize">
                        Universities and Courses
                    </Container>
                    <Container>
                        {PAGE_TEXT.universities.map((text, i) => (
                            <Container key={`uni-text-${i}`} as="p" className=" mb-3">{text}</Container>
                        ))}
                        <Container as="p" className=" mb-3">
                            Below is a list of universities in the United States where we can easily facilitate admissions:
                        </Container>
                        <Container as="ul" className="md:columns-2 mt-3">
                            {country.schools.map((item, i: number) => (
                                <Container key={i} as="li" className={` ${S.SchoolList} mb-3`}>
                                    {item.name}
                                </Container>
                            ))}
                        </Container>
                    </Container>

                    <Container cRef={feeRef} as="h4" className="scrollTo textBorder font-bold text-xl md:text-3xl mt-12 mb-5 capitalize">
                        Fee, Scholarship, Cost of Living
                    </Container>
                    <Container>
                        {PAGE_TEXT.fees.map((text, i) => (
                            <Container key={`fee-text-${i}`} as="p" className=" mb-3">{text}</Container>
                        ))}
                    </Container>
                    <Container cRef={admissionRef} as="h4" className="scrollTo textBorder font-bold text-xl md:text-3xl mt-12 mb-5 capitalize">
                        Admission Process - How We Can Help
                    </Container>
                    <Container>
                        {PAGE_TEXT.admission.map((text, i) => (
                            <Container key={`adm-text-${i}`} as="p" className=" mb-3">{text}</Container>
                        ))}
                    </Container>
                    <Container cRef={beyondLifeRef} as="h4" className="scrollTo textBorder font-bold text-xl md:text-3xl mt-12 mb-5 capitalize">
                        Study & Beyond - Life in the Country
                    </Container>
                    <Container>
                        {PAGE_TEXT.life.map((text, i) => (
                            <Container key={`life-text-${i}`} as="p" className=" mb-3">{text}</Container>
                        ))}
                    </Container>

                    {/* faq section  */}
                    <div ref={faqRef} className=" rounded-md shadow-md py-9 px-2 lg:px-11">
                        <Container as="h5" className=" textBorder font-bold text-lg md:text-3xl capitalize">
                            Guides and FAQ
                        </Container>
                        <Faqs isSlice isRow />
                    </div>
                </Container>
            </Container >

        </>
    );
};

export default Country;
