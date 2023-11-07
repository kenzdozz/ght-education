'use client'
import { Header } from '@/components/studies'
import { Contact } from '@/components/contact'
import React from 'react'
import { ContactTab, Container } from '@/components/shared'
import useScrollReveal from '@/utils/useScrollReveal'

const ContactPage = () => {
    const [contactRef] = useScrollReveal()
    const text = `contact our office around the country`
    return (
        <main ref={contactRef}>
            <Header head={text} />
            <Contact />
            <Container className=' container mb-8'>
                <ContactTab />
            </Container>
        </main>
    )
}

export default ContactPage