import React, { useCallback } from 'react'
import Image from 'next/image'
import { AnimateScrollReveal, Container, SVGIcon } from '../shared'
import { SVGIconName } from '@/types'
import { process } from '@/data'
import S from "@/styles/pages/home/home.module.scss";

const Header = () => {
    const renderProcess = useCallback(
        ({ icon, head, text }: { icon: SVGIconName, head: string, text: string }, i: number) => {
            return (
                <AnimateScrollReveal delay={i * 0.12} duration={i * 0.175} key={i} style={{ gridAutoRows: 'minmax(200px, 1fr)' }} className=' w-full flex flex-col px-2 py-8 md:px-5 justify-center items-center header-home glass cursor-pointer'>
                    <Container as='span' className=' text-blue-800'>
                        <SVGIcon name={icon} size='large' />
                    </Container>
                    <Container className=' uppercase text-sm lg:text-base font-semibold text-red-600 text-center'>{head}</Container>
                    <Container className=' text-center text-sm lg:text-base'>{text}</Container>
                </AnimateScrollReveal>
            )
        },
        [],
    )
    return (
        <Container className={`relative overflow-x-clip bg-transparent ${S.headPsuedo}`}>
            <Container className={`container relative ${S.headPsuedo}`}>
                <AnimateScrollReveal duration={1.75} animName="fadeInRight" as="h1" className=" text-slate-700 w-full lg:w-2/3 font-extrabold text-5xl md:text-7xl">
                    Travel To Your Dream Country Through <Container as='span' className="text-gradient">GlobalHT Education</Container>
                </AnimateScrollReveal>
            </Container>
            <Container className=' hidden lg:block rounded-[9rem] w-[24rem] h-[45rem] animate-fading-pulse bg-gradient-primary-bottom absolute -z-[1] -right-4 -top-10 -rotate-[40deg] overflow-clip'>
                <Container className='flex items-start justify-start translate-x-3 w-[98%] h-full relative -z-[1]'>
                    <Image
                        src={`/img/woman.webp`}
                        alt="Your Image"
                        className=" object-cover object-center w-auto h-auto"
                        layout='fill'
                        objectFit='cover'
                    />
                </Container>
            </Container>
            <Container className={`container mt-10 mb-10 ${S.headBottomPsuedo}`}>
                <AnimateScrollReveal>
                    <AnimateScrollReveal animName='fadeInLeft' duration={1.12} delay={0.12} as='p' className=' text-slate-800 mb-0 font-semibold text-xl md:text-3xl'>below are our processes</AnimateScrollReveal>
                </AnimateScrollReveal>
                <AnimateScrollReveal duration={1.5} allowOverflow className=' relative z-[2] grid grid-cols-2 md:grid-cols-4 gap-3 mt-5'>
                    {
                        process.map(renderProcess)
                    }
                </AnimateScrollReveal>
            </Container>
        </Container>
    )
}

export default Header