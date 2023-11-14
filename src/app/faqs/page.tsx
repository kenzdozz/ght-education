'use client'
import Faqs from '@/components/Faqs'
import { Container } from '@/components/shared'
import { Header } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'
import React from 'react'

const FaqsPage = () => {
    const [faqRef] = useScrollReveal()

    return (
        <main ref={faqRef}>
            <Header head='Frequent Questions' isSearch={false} />
            <Container className=' mt-16 mb-10 container'>
                <Container className=' flex items-center justify-center'>
                    <Container className='textBorder font-bold text-xl md:text-3xl' as='h2'>
                        FAQS
                    </Container>
                </Container>
                <Faqs />
            </Container>
        </main>
    )
}

export default FaqsPage