import React from 'react'
import Image from 'next/image'
import { AnimateScrollReveal, Container } from '../shared'
import { useRouter } from 'next/navigation'

const HeroSection = () => {
    const router = useRouter()
    const navigateToSchools = () => {
        router.push(`/studies/schools/`);
    };
    return (
        <Container className='relative h-[34rem] lg:h-[49rem]'>
            <Container className={`absolute top-0 left-0 z-[0] w-full h-full`}>
                <Image
                    src={`/img/woman.webp`}
                    alt="Your Image"
                    fill
                    className=" object-cover object-center"
                />
            </Container>
            <Container className=' container flex flex-col items-center md:items-end justify-center h-full'>
                <AnimateScrollReveal duration={1.3} className=' glass w-full md:w-2/3 lg:w-1/2 py-20 px-8'>
                    <AnimateScrollReveal animName='fadeInRight' duration={1.75} delay={0.12} as='h3' className=' text-2xl font-bold text-default-blue capitalize'>
                        See Schools of your choice and choose
                    </AnimateScrollReveal>
                    <Container as='p' className=' text-lg font-semibold text-slate-700 capitalize'>
                        here you can see all schools you select from
                    </Container>
                    <AnimateScrollReveal allowOverflow duration={1.75} delay={0.12} className=' w-1/2 mt-2'>
                        <button onClick={() => navigateToSchools()} className='button button-primary'>See Schools</button>
                    </AnimateScrollReveal>
                </AnimateScrollReveal>
            </Container>
        </Container>
    )
}

export default HeroSection