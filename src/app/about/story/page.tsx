'use client'
import { Header } from '@/components/studies'
import { Mission, Vision, WhoWeAre } from '@/components/about'
import React from 'react'
import useScrollReveal from '@/utils/useScrollReveal'
import { Patners } from '@/components/home'

const StoryPage = () => {
    const [storyRef] = useScrollReveal()
    return (
        <main ref={storyRef}>
            <Header head='Our story' isSearch={false} />
            <WhoWeAre />
            <Patners />
            <Mission />
            <Vision />
        </main>
    )
}

export default StoryPage