'use client'
import { Header, Universities } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'
import React from 'react'

const schoolPage = () => {
    const [schoolsRef] = useScrollReveal()
    return (
        <main ref={schoolsRef}>
            <Header />
            <Universities />
        </main>
    )
}

export default schoolPage