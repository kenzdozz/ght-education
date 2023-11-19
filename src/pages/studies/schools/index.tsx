'use client'
import Page from '@/components/Page'
import { Header, Universities } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'
import React from 'react'

const SchoolPage = () => {
    const [schoolsRef] = useScrollReveal()
    return (
        <Page mainRef={schoolsRef}>
            <Header head='best Universities around the world' text='Select from one of the best schools to begin your application' />
            <Universities />
        </Page>
    )
}

export default SchoolPage
