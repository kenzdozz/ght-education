import React from 'react'
import { studies } from '@/data/studies'
import CountryP from './country'

export const generateStaticParams = () => {
    return Object.keys(studies).map(id => ({ id }))
}

const CountryPage = ({ params }: { params: { id: string } }) => {
    return (
        <CountryP cid={params.id}/>
    )
}

export default CountryPage