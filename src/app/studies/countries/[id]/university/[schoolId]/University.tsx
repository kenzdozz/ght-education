'use client'
import { Header, University } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'
import React from 'react'

const UniversityP = ({ sid }: { sid: string }) => {
    const [universityIdRef] = useScrollReveal()
    const decodedText = (sid as string).replace(/%20/g, ' ')
    const text = `study in ${decodedText} universities`

    return (
        <main ref={universityIdRef}>
            <Header head={text} />
            <University school={decodedText as string} />
        </main>
    )
}

export default UniversityP
