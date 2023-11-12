import React from 'react'
import Image from 'next/image'
import { Container } from '../shared'
import { useRouter } from 'next/navigation'

const HeroSection = () => {
    const router = useRouter()
    const navigateToSchools = () => {
        router.push(`/studies/schools/`);
    };
    return (
        <Container className='relative h-[34rem] lg:h-[43rem]'>
            <Container className={`absolute top-0 left-0 z-[0] w-full h-full`}>
                <Image
                    src={`/img/hero1.webp`}
                    alt="Your Image"
                    layout="fill"
                    className=" object-cover object-left-top"
                />
            </Container>
            <Container className=' container-inner flex flex-col items-center md:items-end justify-center h-full'>
                <Container className=' glass w-full md:w-2/3 lg:w-1/2 py-20 px-8'>
                    <Container as='h3' className=' text-2xl font-bold text-default-blue capitalize'>
                        See Schools of your choice and choose
                    </Container>
                    <Container as='p' className=' text-lg font-semibold text-slate-700 capitalize'>
                        here you can see all schools you select from
                    </Container>
                    <Container className=' w-1/2 mt-2'>
                        <button onClick={() => navigateToSchools()} className='button button-primary'>See Schools</button>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default HeroSection