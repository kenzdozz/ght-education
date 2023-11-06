'use client'
import { Header } from '@/components/studies'
import { Contact } from '@/components/contact'
import React from 'react'
import { ContactTab, Container } from '@/components/shared'

const ContactPage = () => {
    const text = `contact our office around the country`
    return (
        <main>
            <Header head={text} />
            <Contact />
            <Container className=' container mb-8'>
                <ContactTab />
            </Container>
        </main>
    )
}

export default ContactPage