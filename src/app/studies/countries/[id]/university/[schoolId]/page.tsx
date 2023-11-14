import { studies } from '@/data/studies'
import React from 'react'
import UniversityP from './University'

export const generateStaticParams = () => {
    const data: { id: string; schoolId: string }[] = []
    Object.keys(studies).map(id => {
        studies[id].schools.forEach(s => {
            data.push({
                id,
                schoolId: s.school,
            })
        })
    })
    return data
}

const UniversityPage = ({ params }: { params: { schoolId: string } }) => {
    return (
        <UniversityP sid={params.schoolId}/>
    )
}

export default UniversityPage