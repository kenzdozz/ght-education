import React from 'react'
import { AnimateScrollReveal, Container } from '../shared'

const Header = ({ head, text }: { head: string, text?: string }) => {
    return (
        <Container className={`PageHeader`}>
            <AnimateScrollReveal duration={0.8} as='h2' className='text-gradient capitalize text-4xl font-bold'>{head}</AnimateScrollReveal>
            <AnimateScrollReveal duration={1.2} delay={0.12} as='p' className='notshow text-slate-500 text-lg w-full md:w-[80%] text-center mt-4 font-medium'>{text}</AnimateScrollReveal>
            <Container className={`__after`} />
        </Container>
    )
}

export default Header
