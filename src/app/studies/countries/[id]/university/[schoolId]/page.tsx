'use client'
import { Header, University } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'
import { useParams } from 'next/navigation'
import React from 'react'

const UniversityPage = () => {
    const [universityIdRef] = useScrollReveal()
    const { schoolId } = useParams()
    const decodedText = (schoolId as string).replace(/%20/g, ' ')
    const text = `study in ${decodedText} universities`

    return (
        <main ref={universityIdRef}>
            <Header head={text} />
            <University school={decodedText as string} />
        </main>
    )
}

export default UniversityPage