'use client'
import { Header, University } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'
import React from 'react'

const UniversityPage = () => {
    const [universityIdRef] = useScrollReveal()

    return (
        <main ref={universityIdRef}>
            <Header head='study in university of kentucky' />
            <University />
        </main>
    )
}

export default UniversityPage