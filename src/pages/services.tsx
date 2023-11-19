'use client'
import Page from '@/components/Page'
import { Patners, Steps } from '@/components/home'
import { Service } from '@/components/services'
import { Header } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'
import React from 'react'

const ServicePage = () => {
    const [serviceRef] = useScrollReveal()
    return (
        <Page mainRef={serviceRef}>
            <Header head='GlobalHT Education For Your Travels' text='Our Services ranges from helping you start you school application, completeing and securing admission, visa processing, travel arrangement, flight booking and accomodation on landing' />
            <Steps />
            <Service />
            <Patners />
        </Page>
    )
}

export default ServicePage
