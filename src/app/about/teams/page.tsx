'use client'
import { Header } from '@/components/studies'
import React from 'react'
import useScrollReveal from '@/utils/useScrollReveal'
import { Team } from '@/components/about'
import { ContactTab, Container } from '@/components/shared'

const TeamsPage = () => {
    const [teamRef] = useScrollReveal()
    return (
        <main ref={teamRef}>
            <Header head='Meet Our Team' isSearch={false} />
            <Team />
        </main>
    )
}

export default TeamsPage