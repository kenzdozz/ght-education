'use client';
import { Header } from '@/components/studies';
import { Locations } from '@/components/contact';
import React from 'react';
import useScrollReveal from '@/utils/useScrollReveal';
import Page from '@/components/Page';
import { ToastContainer } from 'react-toastify';
import ContactForm from '@/components/contact/ContactForm';
import { Container } from '@/components/shared';

const ContactPage = () => {
  const [contactRef] = useScrollReveal();

  return (
    <Page title="Contact Us" mainRef={contactRef}>
      <Header head="Get in Touch with Us" text="Reach Out for Tailored Support and Guidance" />
      <Locations />
      <Container className="container my-16">
        <ToastContainer />
        <ContactForm isWide={true} />
      </Container>
    </Page>
  );
};

export default ContactPage;
