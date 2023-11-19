'use client'
import React from 'react'
import { Header, Countries } from '@/components/studies'
import { Container } from '@/components/shared'
import useScrollReveal from '@/utils/useScrollReveal'
import Page from '@/components/Page'

const CountriesPage = () => {
    const [countriesRef] = useScrollReveal()
    return (
        <Page mainRef={countriesRef}>
            <Header head='Study in countries of choice' text='Select from amazing countries to study in' />
            <Countries />
        </Page>
    )
}

export default CountriesPage
