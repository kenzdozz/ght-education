'use client'
import { Header } from '@/components/studies'
import { Mission, Team, Vision, WhoWeAre } from '@/components/about'
import React from 'react'
import useScrollReveal from '@/utils/useScrollReveal'
import { Patners } from '@/components/home'
import Page from '@/components/Page'

const AboutPage = () => {
    const [storyRef] = useScrollReveal()
    return (
        <Page mainRef={storyRef}>
            <Header head='Our story' isSearch={false} />
            <WhoWeAre />
            <Patners />
            <Mission />
            <Vision />
            <Team />
        </Page>
    )
}

export default AboutPage
