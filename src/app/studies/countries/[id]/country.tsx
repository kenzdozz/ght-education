'use client'
import React from 'react'
import { Header, Country } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'

const CountryP = ({ cid }: { cid: string }) => {
    const [countryRef] = useScrollReveal()
    const decodedText = (cid as string).replace(/%20/g, ' ')
    const text = `study in ${decodedText} universities`
    return (
        <main ref={countryRef}>
            <Header head={text} />
            <Country country={decodedText as string} />
        </main>
    )
}

export default CountryP
