'use client'
import { Header, Universities } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'
import React from 'react'

const schoolPage = () => {
    const [schoolsRef] = useScrollReveal()
    return (
        <main ref={schoolsRef}>
            <Header head='best Universities around the world' />
            <Universities />
        </main>
    )
}

export default schoolPage