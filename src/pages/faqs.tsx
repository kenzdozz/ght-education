'use client';
import Faqs from '@/components/Faqs';
import Page from '@/components/Page';
import { AnimateScrollReveal, Container } from '@/components/shared';
import { Header } from '@/components/studies';
import useScrollReveal from '@/utils/useScrollReveal';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import ContactForm from '@/components/contact/ContactForm';

const FaqsPage = () => {
  const [faqRef] = useScrollReveal();

  return (
    <Page title="FAQs" mainRef={faqRef}>
      <ToastContainer />
      <Header head="Got Questions? We Have Answers." text="Explore Frequently Asked Questions" />
      <Container className=" container relative z-[2] mb-10 mt-16 grid grid-cols-1 gap-2 lg:grid-cols-7">
        <Container className=" col-span-1 lg:col-span-5">
          <Container className=" flex items-center justify-center">
            <AnimateScrollReveal animName="fadeInLeft" className="textBorder text-xl font-bold md:text-3xl" as="h2">
              FAQs
            </AnimateScrollReveal>
          </Container>
          <Container className="px-0 lg:px-16">
            <Faqs />
          </Container>
        </Container>

        <AnimateScrollReveal animName="fadeInLeft" as="aside" className="col-span-2">
          <ContactForm isWide={false} />
        </AnimateScrollReveal>
      </Container>
    </Page>
  );
};

export default FaqsPage;
