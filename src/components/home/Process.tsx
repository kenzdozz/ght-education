'use client'
import React, { useCallback } from 'react'
import { Container, SVGIcon } from '../shared'
import { SVGIconName } from '@/types'
import { process } from '@/data'

const Process = () => {
    const renderProcess = useCallback(
        ({ icon, head, text }: { icon: SVGIconName, head: string, text: string }, i: number) => {
            return (
                <Container key={i} className=' w-[100%] md:w-[48%] lg:w-[23%] flex flex-col justify-center items-center'>
                    <Container as='span' className=''>
                        <SVGIcon name={icon} size='large' />
                    </Container>
                    <Container className=' uppercase font-semibold text-red-600 text-center'>{head}</Container>
                    <Container className=' text-center'>{text}</Container>
                </Container>
            )
        },
        [],
    )

    return (
        <Container className=' container flex items-center justify-between gap-3 lg:gap-0 my-20 flex-wrap'>
            {
                process.map(renderProcess)
            }
        </Container>
    )
}

export default Process