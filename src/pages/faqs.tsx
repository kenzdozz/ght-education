'use client'
import Faqs from '@/components/Faqs'
import Page from '@/components/Page'
import { Container } from '@/components/shared'
import { Header } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'
import React from 'react'

const FaqsPage = () => {
    const [faqRef] = useScrollReveal()

    return (
        <Page mainRef={faqRef}>
            <Header head='Frequent Asked Questions' text='In view to help our customers get clarity on our processes, we have compliled most of the frequently asked question from our past and present users, so as to guide you through your journey' />
            <Container className=' mt-16 mb-10 relative z-[2] container'>
                <Container className=' flex items-center justify-center'>
                    <Container className='textBorder font-bold text-xl md:text-3xl' as='h2'>
                        FAQS
                    </Container>
                </Container>
                <Faqs />
            </Container>
        </Page>
    )
}

export default FaqsPage
