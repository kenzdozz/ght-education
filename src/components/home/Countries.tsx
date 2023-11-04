import React, { useCallback } from 'react'
import Image from 'next/image'
import { Container, AnimateScrollReveal } from '../shared'
import { homeCountries } from '@/data'
import S from '@/styles/pages/home/home.module.scss'
import { useRouter } from 'next/navigation'

const Countries = () => {
    const router = useRouter()
    const navigateToCountry = (id: number) => {
        router.push(`/studies/countries/${id}`);
    };
    const renderCountries = useCallback(
        ({ img, name, url }: { img: string, name: string, url: string }, i: number) => {
            return (
                <AnimateScrollReveal delay={i * 0.12} key={i} className={`rounded-md relative w-full h-[15rem] ${S.CountryImage}`}>
                    <Container onClick={() => navigateToCountry(i + 1)} className={`${S.imageHover} bg-cyan-700 bg-opacity-70 cursor-pointer flex flex-col items-center justify-center gap-6`}>
                        {
                            i >= homeCountries.length - 1 ? <Container as='h4' className=' capitalize text-white font-semibold text-lg'>Study anywhere around the world</Container> : <Container as='h4' className=' capitalize text-white font-semibold text-lg'>Study in {name}</Container>
                        }
                        <button className=' border-2 border-white bg-transparent rounded-md w-28 h-12 text-white outline-none'>
                            Apply
                        </button>
                    </Container>
                    <Image
                        src={`${img}`}
                        alt='name'
                        layout='fill'
                        objectFit='cover'
                    />
                    <Container as='h5' className='text-white font-semibold text-lg absolute left-0 top-1/2 z-[2]'>
                        {name}
                    </Container>
                </AnimateScrollReveal>
            )
        },
        [],
    )

    return (
        <Container as='section' className=' mt-20 container mb-8'>
            <Container as='h2' className={`${S.TextHead}`}>
                Explore Countries
            </Container>

            <Container className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                {
                    homeCountries.map(renderCountries)
                }
            </Container>
        </Container>
    )
}

export default Countries