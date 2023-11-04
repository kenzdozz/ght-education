'use client'
import React from 'react'
import { Header, Country } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'
const CountryPage = () => {
    const [countryRef] = useScrollReveal()
    return (
        <main ref={countryRef}>
            <Header head='study in uk universities' />
            <Country />
        </main>
    )
}

export default CountryPage