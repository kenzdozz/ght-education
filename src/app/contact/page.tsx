'use client'
import { Header } from '@/components/studies'
import { Contact } from '@/components/contact'
import React from 'react'
import useScrollReveal from '@/utils/useScrollReveal'

const ContactPage = () => {
    const [contactRef] = useScrollReveal()
    const text = `contact our office around the country`
    return (
        <main ref={contactRef}>
            <Header head={text} img='/img/img2.webp' />
            <Contact />

        </main>
    )
}

export default ContactPage