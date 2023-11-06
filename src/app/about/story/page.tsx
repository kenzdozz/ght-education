'use client'
import { Header } from '@/components/studies'
import { Mission, Vision, WhoWeAre } from '@/components/about'
import React from 'react'
import useScrollReveal from '@/utils/useScrollReveal'
import { Patners } from '@/components/home'
import { ContactTab, Container } from '@/components/shared'

const StoryPage = () => {
    const [storyRef] = useScrollReveal()
    return (
        <main ref={storyRef}>
            <Header head='Our story' />
            <WhoWeAre />
            <Patners />
            <Mission />
            <Container className=' my-8 container'>
                <ContactTab />
            </Container>
            <Vision />
        </main>
    )
}

export default StoryPage