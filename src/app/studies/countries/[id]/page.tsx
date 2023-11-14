'use client'
import React from 'react'
import { Header, Country } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'
import { useParams } from 'next/navigation'
const CountryPage = () => {
    const [countryRef] = useScrollReveal()
    const { id } = useParams()
    const decodedText = (id as string).replace(/%20/g, ' ')
    const text = `study in ${decodedText} universities`
    return (
        <main ref={countryRef}>
            <Header head={text} />
            <Country country={decodedText as string} />
        </main>
    )
}

export default CountryPage