'use client'
import React from 'react'
import { Header, Countries } from '@/components/studies'
import { Container } from '@/components/shared'
import useScrollReveal from '@/utils/useScrollReveal'

const CountriesPage = () => {
    const [countriesRef] = useScrollReveal()
    return (
        <main ref={countriesRef}>
            <Header />
            <Countries />
        </main>
    )
}

export default CountriesPage