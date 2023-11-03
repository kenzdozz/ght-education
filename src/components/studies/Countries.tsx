import React, { useCallback } from 'react'
import Image from 'next/image'
import { Container, AnimateScrollReveal } from '../shared'
import { studyCountries } from '@/data/studies'
import { useRouter } from 'next/navigation'

const Countries = () => {
    const router = useRouter();

    const navigateToIdPage = (id: number) => {
        router.push(`/studies/countries/${id}`);
    };
    const renderCountries = useCallback(
        ({ img, name, url }: { img: string, name: string, url: string }, i: number) => {
            return (
                <AnimateScrollReveal delay={i * 0.12} key={i} onClick={() => navigateToIdPage(i + 1)} className={`rounded-md border-[1px]  relative w-full h-auto transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1`}>

                    <Container className=' w-full relative h-[12rem] rounded-t-md'>
                        <Image
                            src={`${img}`}
                            alt='name'
                            layout='fill'
                            objectFit='cover'
                        />
                    </Container>
                    <Container className=' mt-4 px-7 mb-4'>
                        <Container as='h5' className='text-slate-500 text-center font-semibold text-lg mb-2'>
                            {name}
                        </Container>
                        <Container as='p' className=" text-lg text-center">
                            We assist in rendering support to individuals seeking any form of
                            educational advancement overseas through personalized admission
                            assistance and visa counseling.
                        </Container>
                    </Container>
                </AnimateScrollReveal>
            )
        },
        [],
    )
    return (
        <Container className=' container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14'>
            {
                studyCountries.map(renderCountries)
            }
        </Container>
    )
}

export default Countries