'use client';
import React, { RefObject, useRef } from 'react';
import { AnimateScrollReveal, Container } from '../shared';
import { COUNTRY_PAGE_TEXT, ICountry } from '@/data/studies';
import S from '@/styles/pages/studies/study.module.scss';
import Faqs from '../Faqs';
import { ToastContainer } from 'react-toastify';
import ContactForm from '../contact/ContactForm';

type SectionRef = RefObject<HTMLDivElement>;

const Country = ({ country }: { country: ICountry }) => {
  const uniRef = useRef(null);
  const feeRef = useRef(null);
  const admissionRef = useRef(null);
  const beyondLifeRef = useRef(null);
  const faqRef = useRef(null);

  const PAGE_TEXT = COUNTRY_PAGE_TEXT[country.slug];

  function scrollToSection(ref: SectionRef) {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <ToastContainer />
      <Container className="container relative z-10 my-16 grid grid-cols-1 gap-10 lg:grid-cols-7">
        <Container as="aside" className="col-span-2">
          <AnimateScrollReveal
            animName="fadeInRight"
            as="h4"
            allowOverflow={true}
            className="textBorder text-xl font-semibold capitalize md:text-xl"
          >
            User Guide
          </AnimateScrollReveal>
          <AnimateScrollReveal animName="fadeInRight" className="mt-10 rounded-md bg-slate-100">
            <Container as="ul">
              <Container
                as="li"
                onClick={() => scrollToSection(uniRef)}
                className={`w-full border-b-2 border-white py-2 text-slate-800 ${S.guide}`}
              >
                Universities and Courses
              </Container>
              <Container
                as="li"
                onClick={() => scrollToSection(feeRef)}
                className={`w-full border-b-2 border-white py-2 text-slate-800 ${S.guide}`}
              >
                Fee, Scholarship, Cost of Living
              </Container>
              <Container
                as="li"
                onClick={() => scrollToSection(admissionRef)}
                className={`w-full border-b-2 border-white py-2 text-slate-800 ${S.guide}`}
              >
                Admission Process
              </Container>
              <Container
                as="li"
                onClick={() => scrollToSection(beyondLifeRef)}
                className={`w-full border-b-2 border-white py-2 text-slate-800 ${S.guide}`}
              >
                Study & Beyond
              </Container>
              <Container
                as="li"
                onClick={() => scrollToSection(faqRef)}
                className={`w-full border-b-2 border-white py-2 text-slate-800 ${S.guide}`}
              >
                FAQs
              </Container>
            </Container>
          </AnimateScrollReveal>

          <AnimateScrollReveal animName="fadeInRight" className="mb-8 mt-8 hidden rounded-md p-3 shadow-md md:block">
            <ContactForm
              isWide={false}
              message={`I would like to know about stuying in ${country.name}`}
              country={country.name}
            />
          </AnimateScrollReveal>
        </Container>
        <Container as="section" className=" col-span-1 lg:col-span-5">
          <AnimateScrollReveal animName="fadeInUp">
            <Container
              cRef={uniRef}
              as="h4"
              className="scrollTo textBorder mb-5 text-xl font-bold capitalize md:text-3xl"
            >
              Universities and Courses
            </Container>
            <Container>
              {PAGE_TEXT.universities.map((text, i) => (
                <Container key={`uni-text-${i}`} as="p" className=" mb-3">
                  {text}
                </Container>
              ))}
              <Container as="p" className=" mb-3">
                Below is a list of universities in the United States where we can easily facilitate admissions:
              </Container>
              <Container as="ul" className="mt-3 md:columns-2">
                {country.schools.map((item, i: number) => (
                  <Container key={i} as="li" className={` ${S.SchoolList} mb-3`}>
                    {item.name}
                  </Container>
                ))}
              </Container>
            </Container>
          </AnimateScrollReveal>

          <AnimateScrollReveal animName="fadeInUp">
            <Container
              cRef={feeRef}
              as="h4"
              className="scrollTo textBorder mb-5 mt-12 text-xl font-bold capitalize md:text-3xl"
            >
              Fee, Scholarship, Cost of Living
            </Container>
            <Container>
              {PAGE_TEXT.fees.map((text, i) => (
                <Container key={`fee-text-${i}`} as="p" className=" mb-3">
                  {text}
                </Container>
              ))}
            </Container>
          </AnimateScrollReveal>
          <AnimateScrollReveal animName="fadeInUp">
            <Container
              cRef={admissionRef}
              as="h4"
              className="scrollTo textBorder mb-5 mt-12 text-xl font-bold capitalize md:text-3xl"
            >
              Admission Process - How We Can Help
            </Container>
            <Container>
              {PAGE_TEXT.admission.map((text, i) => (
                <Container key={`adm-text-${i}`} as="p" className=" mb-3">
                  {text}
                </Container>
              ))}
            </Container>
          </AnimateScrollReveal>
          <AnimateScrollReveal animName="fadeInUp">
            <Container
              cRef={beyondLifeRef}
              as="h4"
              className="scrollTo textBorder mb-5 mt-12 text-xl font-bold capitalize md:text-3xl"
            >
              Study & Beyond - Life in the Country
            </Container>
            <Container>
              {PAGE_TEXT.life.map((text, i) => (
                <Container key={`life-text-${i}`} as="p" className=" mb-3">
                  {text}
                </Container>
              ))}
            </Container>
          </AnimateScrollReveal>

          {/* faq section  */}
          <AnimateScrollReveal animName="fadeInUp" cRef={faqRef} className="scrollTo rounded-md py-9">
            <Container as="h5" className=" textBorder text-lg font-bold capitalize md:text-3xl">
              FAQs
            </Container>
            <Faqs isSlice isRow />
          </AnimateScrollReveal>

          <AnimateScrollReveal animName="fadeInRight" className="mb-8 rounded-md md:hidden">
            <ContactForm
              isWide={false}
              message={`I would like to know about stuying in ${country.name}`}
              country={country.name}
            />
          </AnimateScrollReveal>
        </Container>
      </Container>
    </>
  );
};

export default Country;
