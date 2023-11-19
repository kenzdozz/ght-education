import React from 'react'
import Image from 'next/image'
import { AnimateScrollReveal, Container } from '../shared'
import S from '@/styles/pages/studies/study.module.scss'

const Header = ({ head, text }: { head: string, text?: string }) => {
    console.log(head, 'head');

    return (
        <Container className={`PageHeader`}>
            <Container as='h2' className='text-gradient capitalize text-4xl font-bold'>{head}</Container>
            <AnimateScrollReveal duration={1.75} delay={0.12} as='p' className=' text-slate-500 text-lg w-full md:w-[40%] text-center mt-4 font-medium'>{text}</AnimateScrollReveal>
            <Container className={`__after`}>
            </Container>

        </Container>
    )
}

export default Header