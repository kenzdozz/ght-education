'use client'
import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import useScrollReveal from '@/utils/useScrollReveal'
import FeaturedCountries from './FeaturedCountries'
import Testimonies from './Testimonies'
import Patners from './Patners'

const HomeIndex = () => {
    const [newhomeRef] = useScrollReveal()
    return (
        <main ref={newhomeRef} className='pt-10 lg:pt-14 pb-10'>
            <Header />
            <HeroSection />
            <FeaturedCountries />
            <Testimonies />
            <Patners />
        </main>
    )
}

export default HomeIndex