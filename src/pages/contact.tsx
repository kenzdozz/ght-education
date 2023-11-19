'use client'
import { Header } from '@/components/studies'
import { Contact } from '@/components/contact'
import React from 'react'
import useScrollReveal from '@/utils/useScrollReveal'
import Page from '@/components/Page'

const ContactPage = () => {
    const [contactRef] = useScrollReveal()
    const text = `Contact our office around the country`
    return (
        <Page mainRef={contactRef}>
            <Header head={text} />
            <Contact />
        </Page>
    )
}

export default ContactPage
