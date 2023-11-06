'use client'
import { Header } from '@/components/studies'
import { WhoWeAre } from '@/components/about'
import React from 'react'
import useScrollReveal from '@/utils/useScrollReveal'
import { Service } from '@/components/services'

const StoryPage = () => {
    const [storyRef] = useScrollReveal()
    return (
        <main ref={storyRef}>
            <Header head='Our story' />
            <WhoWeAre />
        </main>
    )
}

export default StoryPage