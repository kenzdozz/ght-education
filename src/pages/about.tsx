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
            <Header head='GlobalHT Education In Details' text='We help you secure admission and travel visa to the best universities around the worl with ease and at your comfort' />
            <WhoWeAre />
            <Patners />
            {/* <Mission /> */}
            <Vision />
            <Team />
        </Page>
    )
}

export default AboutPage
