'use client'
import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import useScrollReveal from '@/utils/useScrollReveal'
import FeaturedSchool from './FeaturedSchool'
import Testimonies from './Testimonies'
import Patners from './Patners'
import { ContactTab, Container } from '../shared'

const HomeIndex = () => {
    const [newhomeRef] = useScrollReveal()
    return (
        <main ref={newhomeRef} className='pt-10 lg:pt-14 pb-10'>
            <Header />
            <HeroSection />
            <FeaturedSchool />
            <Testimonies />
            <Patners />
            {/* <Container className=' container my-3'>
                <ContactTab />
            </Container> */}
        </main>
    )
}

export default HomeIndex