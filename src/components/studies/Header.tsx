import React from 'react'
import Image from 'next/image'
import { AnimateScrollReveal, Container } from '../shared'
import S from '@/styles/pages/studies/study.module.scss'

const Header = ({ img, head, text, isSearch = true }: { img?: string, head?: string, text?: string, isSearch?: boolean }) => {
    return (
        <Container className={` w-full relative h-[30rem] ${S.Header}`}>
            <Container className={`absolute top-0 left-0 z-[1] w-full h-full`}>
                <Image
                    src={`${img ? img : '/img/img3.webp'}`}
                    alt="Your Image"
                    className=""
                    layout="fill"
                    objectFit="cover"
                />
            </Container>
            <Container className=' container relative h-full overflow-hidden z-20 flex flex-col justify-center'>
                <AnimateScrollReveal duration={1.2} delay={0.12} as='h2' className=' capitalize text-white font-extrabold w-full md:w-2/3 lg:w-1/2 text-3xl md:text-5xl'>
                    {
                        head ? head : 'Study in Countries of your choice'
                    }
                </AnimateScrollReveal>
                {
                    text && (
                        <Container as='p' className=' mt-7 w-full md:w-2/3 lg:w-1/2  text-lg text-white'>this is a text</Container>
                    )
                }
            </Container>

        </Container>
    )
}

export default Header