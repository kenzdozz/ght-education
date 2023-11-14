'use client'
import { Patners, Steps } from '@/components/home'
import { Service } from '@/components/services'
import { Header } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'
import React from 'react'

const ServicePage = () => {
    const [serviceRef] = useScrollReveal()
    return (
        <main ref={serviceRef}>
            <Header head='Our Services' />
            <Steps />
            <Service />
            <Patners />
        </main>
    )
}

export default ServicePage