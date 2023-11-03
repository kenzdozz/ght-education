'use client'
import React from 'react'
import { Header, Country } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'
const CountryPage = () => {
    const [countryRef] = useScrollReveal()
    return (
        <main ref={countryRef}>
            <Header />
            <Country />
        </main>
    )
}

export default CountryPage