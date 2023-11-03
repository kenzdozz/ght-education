import React from 'react'
import Image from 'next/image'
import { Container } from '../shared'
import S from '@/styles/pages/studies/study.module.scss'

const Header = () => {
    return (
        <Container className={` w-full relative h-[30rem] ${S.Header}`}>
            <Container className={`absolute top-0 left-0 z-[1] w-full h-full`}>
                <Image
                    src='/img/img3.jpg'
                    alt="Your Image"
                    className=""
                    layout="fill"
                    objectFit="cover"
                />
            </Container>
            <Container className=' container relative h-full z-20 flex flex-col justify-center'>
                <Container as='h2' className=' capitalize text-white font-extrabold w-1/2 text-5xl'>
                    Study in Countries of your choice
                </Container>
            </Container>
        </Container>
    )
}

export default Header