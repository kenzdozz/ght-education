'use client'
import { Header } from '@/components/studies'
import { Contact } from '@/components/contact'
import React from 'react'
import useScrollReveal from '@/utils/useScrollReveal'
import Page from '@/components/Page'

const ContactPage = () => {
    const [contactRef] = useScrollReveal()
    const text = `contact our office around the country`
    return (
        <Page mainRef={contactRef}>
            <Header head={text} img='/img/img2.webp' />
            <Contact />
        </Page>
    )
}

export default ContactPage
